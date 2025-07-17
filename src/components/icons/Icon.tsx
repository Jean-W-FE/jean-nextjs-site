'use client';

import Image from 'next/image';
import { useMemo } from 'react';
import SvgIcon from './SvgIcon';
import { IconSource } from '@/types';
// export type IconSource extends IconSource
export interface IconProps {
  name: string;
  source?: IconSource;
  className?: string;
  viewBox?: string;
  useImage?: boolean;
  width?: number;
  height?: number;
  alt?: string;
}

export default function Icon({
  name,
  source = 'svgs',
  className,
  viewBox,
  useImage = false,
  width,
  height,
  alt = 'icon'
}: IconProps) {
  const iconPath = useMemo(() => {
    // 如果名稱已經包含完整路徑，直接使用
    if (name.startsWith('/')) {
      return name;
    }

    // 根據不同的來源目錄構建路徑
    const basePath = {
      svgs: '/svgs',
      icons: '/icons',
      images: '/images',
      tech: '/images/tech'
    }[source];

    // 如果使用 Image 組件，需要完整的文件路徑
    if (useImage) {
      // 檢查是否已經包含文件擴展名
      if (name.includes('.')) {
        return `${basePath}/${name}`;
      }
      // 如果沒有擴展名，預設使用 .svg
      return `${basePath}/${name}.svg`;
    }

    // 對於 SVG 圖標，返回不帶擴展名的路徑
    return name;
  }, [name, source, useImage]);

  if (useImage) {
    return (
      <Image
        src={iconPath}
        width={width || 24}
        height={height || 24}
        className={className}
        alt={alt}
      />
    );
  }

  return (
    <SvgIcon
      name={iconPath}
      className={className}
      viewBox={viewBox}
    />
  );
} 