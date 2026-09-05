declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
    dataLayer?: any[];
  }
}

const ANALYTICS_ID = import.meta.env.VITE_ANALYTICS_ID;

export function initAnalytics() {
  if (!ANALYTICS_ID) return;

  // Load Google Analytics script
  const script = document.createElement('script');
  script.src = `https://www.googletagmanager.com/gtag/js?id=${ANALYTICS_ID}`;
  script.async = true;
  document.head.appendChild(script);

  // Initialize gtag
  window.dataLayer = window.dataLayer || [];
  window.gtag = function() {
    window.dataLayer?.push(arguments);
  };
  window.gtag('js', new Date());
  window.gtag('config', ANALYTICS_ID);
}

export function trackEvent(
  eventName: string,
  eventParams?: Record<string, any>
) {
  if (!ANALYTICS_ID) return;
  if (typeof window.gtag === 'function') {
    window.gtag('event', eventName, eventParams);
  }
}

export function trackPageView(url: string) {
  if (!ANALYTICS_ID) return;
  if (typeof window.gtag === 'function') {
    window.gtag('config', ANALYTICS_ID, {
      page_path: url,
    });
  }
}
