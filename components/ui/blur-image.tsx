"use client";

import { useState } from 'react';
import Image, { ImageProps } from 'next/image';
import { cn } from '@/lib/utils';

interface BlurImageProps extends Omit<ImageProps, 'onLoad'> {
  containerClassName?: string;
}

/**
 * Performance-optimized image component with blur-up loading effect
 * Demonstrates attention to detail and user experience optimization
 */
export const BlurImage = ({
  src,
  alt,
  className,
  containerClassName,
  ...props
}: BlurImageProps) => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className={cn("overflow-hidden", containerClassName)}>
      <Image
        src={src}
        alt={alt}
        className={cn(
          "transition-all duration-700 ease-out",
          isLoading ? "scale-105 blur-md" : "scale-100 blur-0",
          className
        )}
        onLoad={() => setIsLoading(false)}
        {...props}
      />
    </div>
  );
};
