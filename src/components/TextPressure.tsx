import { useEffect, useRef, useState, useMemo, useCallback } from 'react';

interface TextPressureProps {
  text?: string;
  fontFamily?: string;
  fontUrl?: string;
  width?: boolean;
  weight?: boolean;
  italic?: boolean;
  alpha?: boolean;
  flex?: boolean;
  stroke?: boolean;
  scale?: boolean;
  textColor?: string;
  strokeColor?: string;
  strokeWidth?: number;
  className?: string;
  minFontSize?: number;
}

const dist = (a: { x: number; y: number }, b: { x: number; y: number }) => Math.hypot(b.x - a.x, b.y - a.y);
const getAttr = (distance: number, maxDist: number, minVal: number, maxVal: number) => Math.max(minVal, maxVal - Math.abs((maxVal * distance) / maxDist) + minVal);
const debounce = (func: (...args: any[]) => void, delay: number) => {
  let timeoutId: ReturnType<typeof setTimeout>;
  return (...args: any[]) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => func(...args), delay);
  };
};

const TextPressure: React.FC<TextPressureProps> = ({
  text = 'Compressa',
  fontFamily = 'Compressa VF',
  fontUrl = 'https://res.cloudinary.com/dr6lvwubh/raw/upload/v1529908256/CompressaPRO-GX.woff2',
  width = true,
  weight = true,
  italic = true,
  alpha = false,
  flex = true,
  stroke = false,
  scale = false,
  textColor = '#FFFFFF',
  strokeColor = '#FF0000',
  strokeWidth = 2,
  className = '',
  minFontSize = 24,
}) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const titleRef = useRef<HTMLHeadingElement | null>(null);
  const spansRef = useRef<(HTMLSpanElement | null)[]>([]);
  const mouseRef = useRef({ x: 0, y: 0 });
  const cursorRef = useRef({ x: 0, y: 0 });
  const [fontSize, setFontSize] = useState(minFontSize);
  const [scaleY, setScaleY] = useState(1);
  const [lineHeight, setLineHeight] = useState(1);
  const chars = text.split('');

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      cursorRef.current.x = e.clientX;
      cursorRef.current.y = e.clientY;
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const setSize = useCallback(() => {
    if (!containerRef.current || !titleRef.current) return;
    const { width: containerW, height: containerH } = containerRef.current.getBoundingClientRect();
    let newFontSize = Math.max(containerW / (chars.length / 2), minFontSize);
    setFontSize(newFontSize);
    setScaleY(1);
    setLineHeight(1);
    requestAnimationFrame(() => {
      if (!titleRef.current) return;
      const textRect = titleRef.current.getBoundingClientRect();
      if (scale && textRect.height > 0) {
        const yRatio = containerH / textRect.height;
        setScaleY(yRatio);
        setLineHeight(yRatio);
      }
    });
  }, [chars.length, minFontSize, scale]);

  useEffect(() => {
    const debounced = debounce(setSize, 100);
    debounced();
    window.addEventListener('resize', debounced);
    return () => window.removeEventListener('resize', debounced);
  }, [setSize]);

  useEffect(() => {
    let rafId: number;
    const animate = () => {
      mouseRef.current.x += (cursorRef.current.x - mouseRef.current.x) / 15;
      mouseRef.current.y += (cursorRef.current.y - mouseRef.current.y) / 15;
      if (titleRef.current) {
        const titleRect = titleRef.current.getBoundingClientRect();
        const maxDist = titleRect.width / 2;
        spansRef.current.forEach(span => {
          if (!span) return;
          const rect = span.getBoundingClientRect();
          const d = dist(mouseRef.current, { x: rect.x + rect.width / 2, y: rect.y + rect.height / 2 });
          const wdth = width ? Math.floor(getAttr(d, maxDist, 5, 200)) : 100;
          const wght = weight ? Math.floor(getAttr(d, maxDist, 100, 900)) : 400;
          const italVal = italic ? getAttr(d, maxDist, 0, 1).toFixed(2) : '0';
          span.style.fontVariationSettings = `'wght' ${wght}, 'wdth' ${wdth}, 'ital' ${italVal}`;
          if (alpha) span.style.opacity = getAttr(d, maxDist, 0, 1).toFixed(2);
        });
      }
      rafId = requestAnimationFrame(animate);
    };
    animate();
    return () => cancelAnimationFrame(rafId);
  }, [width, weight, italic, alpha]);

  const styleElement = useMemo(
    () => (
      <style>{`
        @font-face { font-family: '${fontFamily}'; src: url('${fontUrl}'); font-style: normal; }
        .stroke span::after { content: attr(data-char); position: absolute; left: 0; top: 0; color: transparent; z-index: -1; -webkit-text-stroke-width: ${strokeWidth}px; -webkit-text-stroke-color: ${strokeColor}; }
      `}</style>
    ),
    [fontFamily, fontUrl, strokeWidth, strokeColor]
  );

  return (
    <div ref={containerRef} className="relative h-full w-full overflow-hidden bg-transparent">
      {styleElement}
      <h1
        ref={titleRef}
        className={`${className} ${flex ? 'flex justify-between' : ''} ${stroke ? 'stroke' : ''} text-center uppercase`}
        style={{ fontFamily, fontSize, lineHeight, transform: `scale(1, ${scaleY})`, transformOrigin: 'center top', margin: 0, fontWeight: 100, color: stroke ? undefined : textColor }}
      >
        {chars.map((char, i) => (
          <span
            key={i}
            ref={el => {
              spansRef.current[i] = el;
            }}
            data-char={char}
            className="inline-block"
          >
            {char}
          </span>
        ))}
      </h1>
    </div>
  );
};

export default TextPressure;
