declare global {
  interface Window {
    fbq: (...args: [string, string, Record<string, unknown>?]) => void;
  }
}

type PixelEventData = Record<string, string | number | string[] | undefined>;

export const trackEvent = (event: string, data?: PixelEventData) => {
  if (typeof window !== "undefined" && window.fbq) {
    window.fbq("track", event, data);
  }
};