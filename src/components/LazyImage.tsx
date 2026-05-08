import { type ImgHTMLAttributes, useState } from 'react';
import { cn } from '../libs/utils'; 

interface LazyImageProps extends ImgHTMLAttributes<HTMLImageElement> {
  alt: string;
}

export function LazyImage({ src, alt, className, ...props }: LazyImageProps) {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div className={cn("relative overflow-hidden bg-slate-200 dark:bg-slate-800", className)}>
      <img
        src={src}
        alt={alt}
        loading="lazy"
        onLoad={() => setIsLoaded(true)}
        className={cn(
          "w-full h-full object-cover transition-opacity duration-500",
          isLoaded ? "opacity-100" : "opacity-0"
        )}
        {...props}
      />
    </div>
  );
}