'use client';

import { RefCallback, useEffect, useRef } from 'react';

interface IOptions extends IntersectionObserverInit {
  enabled?: boolean;
}

export const useIntersectionObserver = <T extends HTMLElement = HTMLDivElement>(
  callback: (entry: IntersectionObserverEntry) => void,
  options: IOptions
): RefCallback<T> => {
  const elementRef = useRef<T | null>(null);
  const observerRef = useRef<IntersectionObserver | null>(null);
  const callbackRef = useRef(callback);
  const optionsRef = useRef(options);

  useEffect(() => {
    callbackRef.current = callback;
  }, [callback]);

  useEffect(() => {
    optionsRef.current = options;
  }, [options]);

  const createObserver = (element: T) => {
    if (observerRef.current) {
      observerRef.current.disconnect();
    }

    const {
      enabled = true,
      root = null,
      rootMargin = '0px',
      threshold = 0
    } = optionsRef.current;

    if (!enabled) {
      return;
    }

    const observer = new IntersectionObserver(
      entries => {
        const entry = entries[0];
        if (entry) {
          callbackRef.current(entry);
        }
      },
      { root, rootMargin, threshold }
    );

    observerRef.current = observer;
    observer.observe(element);
  };

  useEffect(() => {
    if (elementRef.current) {
      createObserver(elementRef.current);
    }

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
        observerRef.current = null;
      }
    };
  }, [options]);

  const setRef: RefCallback<T> = element => {
    elementRef.current = element;
    if (element) {
      createObserver(element);
    } else if (observerRef.current) {
      observerRef.current.disconnect();
      observerRef.current = null;
    }
  };

  return setRef;
};
