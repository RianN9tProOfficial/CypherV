import { useEffect, useState, useRef, useMemo, useCallback } from 'react';
import { motion } from 'motion/react';
import type { HTMLMotionProps } from 'motion/react';

interface DecryptedTextProps extends HTMLMotionProps<'span'> {
  text: string;
  speed?: number;
  maxIterations?: number;
  sequential?: boolean;
  revealDirection?: 'start' | 'end' | 'center';
  useOriginalCharsOnly?: boolean;
  characters?: string;
  className?: string;
  encryptedClassName?: string;
  parentClassName?: string;
  animateOn?: 'view' | 'hover' | 'inViewHover' | 'click';
  clickMode?: 'once' | 'toggle';
}

type Direction = 'forward' | 'reverse';

export default function DecryptedText({
  text,
  speed = 50,
  maxIterations = 10,
  sequential = false,
  revealDirection = 'start',
  useOriginalCharsOnly = false,
  characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!@#$%^&*()_+',
  className = '',
  parentClassName = '',
  encryptedClassName = '',
  animateOn = 'hover',
  clickMode = 'once',
  ...props
}: DecryptedTextProps) {
  const [displayText, setDisplayText] = useState<string>(text);
  const [isAnimating, setIsAnimating] = useState<boolean>(false);
  const [revealedIndices, setRevealedIndices] = useState<Set<number>>(new Set());
  const [hasAnimated, setHasAnimated] = useState<boolean>(false);
  const [isDecrypted, setIsDecrypted] = useState<boolean>(animateOn !== 'click');
  const [direction, setDirection] = useState<Direction>('forward');

  const containerRef = useRef<HTMLSpanElement>(null);
  const orderRef = useRef<number[]>([]);
  const pointerRef = useRef<number>(0);

  const availableChars = useMemo(
    () => (useOriginalCharsOnly ? Array.from(new Set(text.split(''))).filter(char => char !== ' ') : characters.split('')),
    [useOriginalCharsOnly, text, characters]
  );

  const shuffleText = useCallback(
    (originalText: string, currentRevealed: Set<number>) =>
      originalText
        .split('')
        .map((char, i) => (char === ' ' ? ' ' : currentRevealed.has(i) ? originalText[i] : availableChars[Math.floor(Math.random() * availableChars.length)]))
        .join(''),
    [availableChars]
  );

  const computeOrder = useCallback(
    (len: number): number[] => {
      if (revealDirection === 'start') return Array.from({ length: len }, (_, i) => i);
      if (revealDirection === 'end') return Array.from({ length: len }, (_, i) => len - 1 - i);
      const order: number[] = [];
      const middle = Math.floor(len / 2);
      let offset = 0;
      while (order.length < len) {
        const idx = offset % 2 === 0 ? middle + offset / 2 : middle - Math.ceil(offset / 2);
        if (idx >= 0 && idx < len) order.push(idx);
        offset++;
      }
      return order;
    },
    [revealDirection]
  );

  const fillAllIndices = useCallback(() => new Set(Array.from({ length: text.length }, (_, i) => i)), [text.length]);
  const removeRandomIndices = useCallback((set: Set<number>, count: number) => {
    const arr = Array.from(set);
    for (let i = 0; i < count && arr.length > 0; i++) arr.splice(Math.floor(Math.random() * arr.length), 1);
    return new Set(arr);
  }, []);

  const encryptInstantly = useCallback(() => {
    const emptySet = new Set<number>();
    setRevealedIndices(emptySet);
    setDisplayText(shuffleText(text, emptySet));
    setIsDecrypted(false);
  }, [text, shuffleText]);

  const triggerDecrypt = useCallback(() => {
    orderRef.current = sequential ? computeOrder(text.length) : [];
    pointerRef.current = 0;
    setRevealedIndices(new Set());
    setDirection('forward');
    setIsAnimating(true);
  }, [sequential, computeOrder, text.length]);

  const triggerReverse = useCallback(() => {
    const all = fillAllIndices();
    orderRef.current = sequential ? computeOrder(text.length).reverse() : [];
    pointerRef.current = 0;
    setRevealedIndices(all);
    setDisplayText(shuffleText(text, all));
    setDirection('reverse');
    setIsAnimating(true);
  }, [sequential, computeOrder, fillAllIndices, shuffleText, text]);

  useEffect(() => {
    if (!isAnimating) return;
    let interval: ReturnType<typeof setInterval>;
    let currentIteration = 0;
    interval = setInterval(() => {
      setRevealedIndices(prev => {
        if (sequential) {
          if (direction === 'forward') {
            if (prev.size < text.length) {
              const next = new Set(prev);
              next.add(computeOrder(text.length)[prev.size]);
              setDisplayText(shuffleText(text, next));
              return next;
            }
            clearInterval(interval);
            setIsAnimating(false);
            setIsDecrypted(true);
            return prev;
          }
          if (pointerRef.current < orderRef.current.length) {
            const next = new Set(prev);
            next.delete(orderRef.current[pointerRef.current++]);
            setDisplayText(shuffleText(text, next));
            if (next.size === 0) {
              clearInterval(interval);
              setIsAnimating(false);
              setIsDecrypted(false);
            }
            return next;
          }
          clearInterval(interval);
          setIsAnimating(false);
          setIsDecrypted(false);
          return prev;
        }

        if (direction === 'forward') {
          setDisplayText(shuffleText(text, prev));
          if (++currentIteration >= maxIterations) {
            clearInterval(interval);
            setIsAnimating(false);
            setDisplayText(text);
            setIsDecrypted(true);
          }
          return prev;
        }
        const current = prev.size ? prev : fillAllIndices();
        const next = removeRandomIndices(current, Math.max(1, Math.ceil(text.length / Math.max(1, maxIterations))));
        setDisplayText(shuffleText(text, next));
        if (next.size === 0 || ++currentIteration >= maxIterations) {
          clearInterval(interval);
          setIsAnimating(false);
          setIsDecrypted(false);
          setDisplayText(shuffleText(text, new Set()));
          return new Set();
        }
        return next;
      });
    }, speed);
    return () => clearInterval(interval);
  }, [isAnimating, text, speed, maxIterations, sequential, shuffleText, direction, fillAllIndices, removeRandomIndices, computeOrder]);

  useEffect(() => {
    if (animateOn !== 'view' && animateOn !== 'inViewHover') return;
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && !hasAnimated) {
          triggerDecrypt();
          setHasAnimated(true);
        }
      });
    }, { threshold: 0.1 });
    const currentRef = containerRef.current;
    if (!currentRef) return;

    observer.observe(currentRef);
    return () => {
      observer.unobserve(currentRef);
      observer.disconnect();
    };
  }, [animateOn, hasAnimated, triggerDecrypt]);

  useEffect(() => {
    if (animateOn === 'click') encryptInstantly();
    else {
      setDisplayText(text);
      setIsDecrypted(true);
    }
    setRevealedIndices(new Set());
    setDirection('forward');
  }, [animateOn, text, encryptInstantly]);

  const animateProps =
    animateOn === 'hover' || animateOn === 'inViewHover'
      ? { onMouseEnter: () => !isAnimating && triggerDecrypt(), onMouseLeave: () => { setIsAnimating(false); setDisplayText(text); setIsDecrypted(true); } }
      : animateOn === 'click'
        ? { onClick: () => (clickMode === 'toggle' && isDecrypted ? triggerReverse() : !isDecrypted && triggerDecrypt()) }
        : {};

  return (
    <motion.span ref={containerRef} className={`inline-block whitespace-pre-wrap ${parentClassName}`} {...animateProps} {...props}>
      <span className="sr-only">{displayText}</span>
      <span aria-hidden="true">
        {displayText.split('').map((char, index) => {
          const isRevealedOrDone = revealedIndices.has(index) || (!isAnimating && isDecrypted);
          return (
            <span key={index} className={isRevealedOrDone ? className : encryptedClassName}>
              {char}
            </span>
          );
        })}
      </span>
    </motion.span>
  );
}
