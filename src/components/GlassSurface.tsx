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
    background: 'linear-gradient(135deg, #4f46e5, #7c3aed)',
    border: '1px solid rgba(255,255,255,0.12)',
    boxShadow:
      'inset 0 1px 0 rgba(255,255,255,0.2), 0 10px 25px rgba(0,0,0,0.25)',
  };

  return (
    <div
      className={`relative flex items-center justify-center overflow-hidden ${className}`}
      style={surfaceStyle}
    >
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'linear-gradient(to bottom, rgba(255,255,255,0.16), rgba(255,255,255,0.02) 35%, transparent 60%)',
        }}
      />
      <div className="relative z-10 flex h-full w-full items-center justify-center px-3">{children}</div>
    </div>
  );
};

export default GlassSurface;
