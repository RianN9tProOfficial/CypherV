import React from 'react';

export interface GlassSurfaceProps {
  children?: React.ReactNode;
  width?: number | string;
  height?: number | string;
  borderRadius?: number;
  className?: string;
  style?: React.CSSProperties;
}

const GlassSurface: React.FC<GlassSurfaceProps> = ({
  children,
  width = '100%',
  height = 64,
  borderRadius = 9999,
  className = '',
  style = {},
}) => {
  const surfaceStyle: React.CSSProperties = {
    ...style,
    width: typeof width === 'number' ? `${width}px` : width,
    height: typeof height === 'number' ? `${height}px` : height,
    borderRadius: `${borderRadius}px`,
    background: 'rgba(20, 24, 38, 0.5)',
    backdropFilter: 'blur(10px) saturate(120%)',
    WebkitBackdropFilter: 'blur(10px) saturate(120%)',
    boxShadow:
      'inset 0 1px 0 rgba(255,255,255,0.25), 0 10px 30px rgba(0,0,0,0.35)',
    border: '1px solid rgba(255,255,255,0.14)',
  };

  return (
    <div
      className={`navbar relative flex items-center justify-center overflow-hidden ${className}`}
      style={surfaceStyle}
    >
      <div className="relative z-10 flex h-full w-full items-center justify-center px-3">{children}</div>
    </div>
  );
};

export default GlassSurface;
