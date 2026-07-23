declare global {
  interface Window {
    fbq: any;
  }
}

export const trackEvent = (event: string, data?: any) => {
  if (typeof window !== "undefined" && window.fbq) {
    window.fbq("track", event, data);
  }
};