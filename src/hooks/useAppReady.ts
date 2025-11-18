import { useEffect, useState } from "react";

function preloadImage(url: string): Promise<void> {
  return new Promise((resolve) => {
    const img = new Image();
    img.onload = () => resolve();
    img.onerror = () => resolve(); // resolve on error to avoid blocking forever
    img.src = url;
  });
}

/**
 * Waits for fonts to be ready, a minimal delay, and preloads provided images
 * before reporting the app as ready. This helps ensure initial animations
 * mount without layout shifts or missing assets.
 */
export function useAppReady(imageUrls: readonly string[] = [], minDelayMs = 250) {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    let cancelled = false;
    let firstFrame = 0;
    let secondFrame = 0;
    let timeoutId: ReturnType<typeof setTimeout> | null = null;

    const fontsReady: Promise<void> =
      typeof document !== "undefined" && "fonts" in document && document.fonts
        ? document.fonts.ready.then(() => undefined)
        : Promise.resolve();

    const rafTwice = new Promise<void>((resolve) => {
      firstFrame = requestAnimationFrame(() => {
        secondFrame = requestAnimationFrame(() => resolve());
      });
    });

    const minDelay = new Promise<void>((resolve) => {
      timeoutId = setTimeout(() => resolve(), minDelayMs);
    });

    const urlsToPreload = [...imageUrls];
    const imagesReady = Promise.all(urlsToPreload.map(preloadImage)).then(() => undefined);

    Promise.all([fontsReady, imagesReady, rafTwice, minDelay]).then(() => {
      if (!cancelled) setReady(true);
    });

    return () => {
      cancelled = true;
      if (firstFrame) cancelAnimationFrame(firstFrame);
      if (secondFrame) cancelAnimationFrame(secondFrame);
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, [imageUrls, minDelayMs]);

  return ready;
}

export default useAppReady;
