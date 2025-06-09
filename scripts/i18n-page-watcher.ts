import * as chokidar from 'chokidar';
import * as fs from 'fs';
import * as path from 'path';

const LANDING_PATH = path.join(process.cwd(), 'src/app/[locale]/(landing)');
const I18N_PATH = path.join(process.cwd(), 'src/i18n/messages');
const SUPPORTED_LOCALES = ['en', 'zh-TW', 'zh-CN'];

// 需要排除的路徑模式
const EXCLUDED_PATTERNS = [
    /\[landing\]/,          // 排除 [landing] 目錄
    /\/blog\/\[slug\]/,     // 排除 blog slug 頁面
    /\/\[slug\]/,           // 排除一般的 slug 頁面
    /\/\[id\]/             // 排除一般的 id 頁面
];

const createI18nTemplate = (pageName: string) => {
    // 根據頁面名稱生成合適的標題
    const titleCase = pageName.charAt(0).toUpperCase() + pageName.slice(1);
    const title = titleCase.replace(/-/g, ' ');

    return `const ${pageName} = {
    title: "${title}",
    description: ""
} as const;

export default ${pageName};
`;
};

const shouldProcessPath = (filePath: string): boolean => {
    // console.log('Checking path:', filePath);
    // console.log('LANDING_PATH:', LANDING_PATH);

    // 只處理頁面文件
    if (!filePath.includes('page.')) {
        // console.log('Not a page file');
        return false;
    }

    // 檢查是否在 landing 路徑下
    const normalizedPath = path.normalize(filePath);
    const normalizedLandingPath = path.normalize(LANDING_PATH);
    
    // console.log('Normalized path:', normalizedPath);
    // console.log('Normalized landing path:', normalizedLandingPath);

    if (!normalizedPath.startsWith(normalizedLandingPath)) {
        // console.log('Not in landing path');
        return false;
    }

    // 檢查是否匹配任何排除模式
    for (const pattern of EXCLUDED_PATTERNS) {
        if (pattern.test(normalizedPath)) {
            // console.log(`Excluded by pattern: ${pattern}`);
            return false;
        }
    }

    // console.log('Path accepted for processing');
    return true;
};

const handlePageRename = (oldPath: string, newPath: string) => {
    if (!shouldProcessPath(newPath)) {
        return;
    }

    const oldDirPath = path.dirname(oldPath);
    const newDirPath = path.dirname(newPath);
    const oldPageName = path.basename(oldDirPath);
    const newPageName = path.basename(newDirPath);

    // 如果新舊名稱相同，不需要處理
    if (oldPageName === newPageName) {
        return;
    }

    // console.log(`Renaming i18n files from ${oldPageName} to ${newPageName}`);

    // 為每個支援的語言重命名翻譯文件
    SUPPORTED_LOCALES.forEach(locale => {
        const i18nDirPath = path.join(I18N_PATH, locale);
        const oldI18nFilePath = path.join(i18nDirPath, `${oldPageName}.ts`);
        const newI18nFilePath = path.join(i18nDirPath, `${newPageName}.ts`);

        try {
            // 檢查舊文件是否存在
            if (fs.existsSync(oldI18nFilePath)) {
                // 讀取舊文件內容
                let content = fs.readFileSync(oldI18nFilePath, 'utf8');
                
                // 更新文件內容中的變量名和註釋
                content = content.replace(
                    new RegExp(`const ${oldPageName} =`, 'g'), 
                    `const ${newPageName} =`
                );
                content = content.replace(
                    new RegExp(`export default ${oldPageName}`, 'g'), 
                    `export default ${newPageName}`
                );
                content = content.replace(
                    new RegExp(`${oldPageName} page translations`, 'g'), 
                    `${newPageName} page translations`
                );

                // 寫入新文件
                fs.writeFileSync(newI18nFilePath, content);
                
                // 刪除舊文件
                fs.unlinkSync(oldI18nFilePath);
                
                // console.log(`Renamed i18n file for locale ${locale}: ${oldPageName} -> ${newPageName}`);
            }
        } catch (error) {
            // console.error(`Error renaming i18n file for locale ${locale}:`, error);
        }
    });
};

const handlePageCreation = (filePath: string) => {
    // console.log('Handling page creation for:', filePath);
    
    if (!shouldProcessPath(filePath)) {
        return;
    }

    // 獲取頁面所在的目錄名
    const dirPath = path.dirname(filePath);
    const pageName = path.basename(dirPath);

    // console.log('Directory path:', dirPath);
    // console.log('Page name:', pageName);

    // 檢查是否為有效的頁面名稱
    if (!pageName || pageName.includes('[') || pageName.includes(']') || pageName === '(landing)') {
        // console.log(`Skipping invalid page name: ${pageName}`);
        return;
    }

    // console.log(`Processing page: ${pageName}`);

    // 為每個支援的語言創建翻譯文件
    SUPPORTED_LOCALES.forEach(locale => {
        const i18nDirPath = path.join(I18N_PATH, locale);
        const i18nFilePath = path.join(i18nDirPath, `${pageName}.ts`);

        // console.log('Creating i18n file:', i18nFilePath);

        try {
            // 如果目錄不存在，創建目錄
            if (!fs.existsSync(i18nDirPath)) {
                fs.mkdirSync(i18nDirPath, { recursive: true });
                // console.log(`Created directory: ${i18nDirPath}`);
            }

            // 如果文件不存在，創建文件
            if (!fs.existsSync(i18nFilePath)) {
                fs.writeFileSync(i18nFilePath, createI18nTemplate(pageName));
                // console.log(`Created i18n file: ${i18nFilePath}`);
            }
        } catch (error) {
            // console.error(`Error processing ${pageName} for locale ${locale}:`, error);
        }
    });
};

// 監聽文件變化
// console.log('Starting watcher for:', LANDING_PATH);

const watcher = chokidar.watch(LANDING_PATH, {
    ignored: [
        /(^|[\/\\])\../,   // 忽略隱藏文件
        '**/node_modules/**', // 忽略 node_modules
        '**/[[]**[]]*/**'    // 忽略動態路由目錄
    ],
    persistent: true,
    ignoreInitial: false,
    awaitWriteFinish: {
        stabilityThreshold: 500,
        pollInterval: 100
    }
});

// 監聽所有相關事件
watcher
    .on('add', (path) => {
        // console.log(`File ${path} has been added`);
        handlePageCreation(path);
    })
    .on('unlink', (path) => {
        // console.log(`File ${path} has been removed`);
    })
    .on('change', (path) => {
        // console.log(`File ${path} has been changed`);
    })
    .on('unlinkDir', (path) => {
        // console.log(`Directory ${path} has been removed`);
    })
    .on('addDir', (path) => {
        // console.log(`Directory ${path} has been added`);
        // 檢查是否有對應的 page.tsx 文件
        const pageFile = path + '/page.tsx';
        if (fs.existsSync(pageFile)) {
            handlePageCreation(pageFile);
        }
    })
    .on('raw', (event: string, path: string, details: unknown) => {
        // console.log('Raw event:', event, path);
        // Windows 上特別處理重命名事件
        if (event === 'rename') {
            const oldPath = path;
            const newPath = (details as { newPath?: string })?.newPath;
            if (oldPath && newPath && oldPath.includes('/page.') && newPath.includes('/page.')) {
                handlePageRename(oldPath, newPath);
            }
        }
    })
    .on('ready', () => {
        // console.log('Initial scan complete. Watching for changes...');
    })
    .on('error', error => {
        // console.error('Watcher error:', error);
    }); 