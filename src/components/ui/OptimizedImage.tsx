import { useState, useRef, useEffect } from 'react';

interface OptimizedImageProps {
  src: string;
  alt: string;
  className?: string;
  width?: number;
  height?: number;
  priority?: boolean;
  style?: React.CSSProperties;
  webpSrc?: string;
  srcSet?: string;
  webpSrcSet?: string;
  sizes?: string;
}

export const OptimizedImage = ({
  src,
  alt,
  className = '',
  width,
  height,
  priority = false,
  style,
  webpSrc,
  srcSet,
  webpSrcSet,
  sizes,
}: OptimizedImageProps) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(priority);
  const containerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (priority) {
      setIsInView(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      {
        rootMargin: '50px',
        threshold: 0.01,
      }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, [priority]);

  const hasWebpSupport = webpSrc || webpSrcSet;

  // Use picture element for WebP with fallback
  if (hasWebpSupport) {
    return (
      <picture ref={containerRef as React.RefObject<HTMLPictureElement>}>
        {webpSrcSet && isInView && (
          <source 
            srcSet={webpSrcSet}
            sizes={sizes}
            type="image/webp"
          />
        )}
        {webpSrc && !webpSrcSet && isInView && (
          <source 
            srcSet={webpSrc}
            type="image/webp"
          />
        )}
        {srcSet && isInView && (
          <source 
            srcSet={srcSet}
            sizes={sizes}
            type="image/jpeg"
          />
        )}
        <img
          src={isInView ? src : undefined}
          data-src={src}
          alt={alt}
          width={width}
          height={height}
          loading={priority ? 'eager' : 'lazy'}
          decoding={priority ? 'sync' : 'async'}
          className={`${className} ${isLoaded ? 'opacity-100' : 'opacity-0'} transition-opacity duration-300`}
          style={style}
          onLoad={() => setIsLoaded(true)}
        />
      </picture>
    );
  }

  // Standard img element
  return (
    <img
      ref={containerRef as React.RefObject<HTMLImageElement>}
      src={isInView ? src : undefined}
      data-src={src}
      srcSet={isInView && srcSet ? srcSet : undefined}
      sizes={sizes}
      alt={alt}
      width={width}
      height={height}
      loading={priority ? 'eager' : 'lazy'}
      decoding={priority ? 'sync' : 'async'}
      className={`${className} ${isLoaded ? 'opacity-100' : 'opacity-0'} transition-opacity duration-300`}
      style={style}
      onLoad={() => setIsLoaded(true)}
    />
  );
};
