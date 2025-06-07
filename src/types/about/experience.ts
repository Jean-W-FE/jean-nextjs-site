/**
 * 工作經驗項目接口
 */
export interface ExperienceItem {
  /** 公司名稱（國際化 key） */
  company: string;
  /** 工作時間段 */
  period: string;
  /** 職位名稱（國際化 key） */
  role: string;
  /** 工作描述（國際化 key） */
  description: string;
  /** 工作成就列表（國際化 key 數組） */
  achievements: string[];
  /** 公司 logo 路徑 */
  logo: string;
  /** 使用的技術棧 */
  tech: string[];
  /** logo 背景顏色 */
  logoColor?: string;
}

export type ProjectItem = {
  name: string;
  description: string;
  role: string;
  tech: string[];
  highlights: string[];
  image: string;
}
export interface SkillTechnicalItem {
  name: string;
  level: number;
}
export interface SkillCategoryItem {
  category: string;
  icon: string;
  items: SkillTechnicalItem[];
}

export interface SkillSoftItem {
  name: string;
  description: string;
  icon: string;
}

/**
 * 經驗類型常量
 */
export const EXPERIENCE_TYPES = {
  CHEETAH: "experience.cheetah",
  ALIBABA: "experience.alibaba",
  FENG_TENG: "experience.fengteng",
  ELEPHANT: "experience.elephant",
} as const; 