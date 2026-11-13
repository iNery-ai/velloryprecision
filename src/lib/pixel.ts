/**
 * Utilitário para eventos do Meta Pixel (Facebook Ads)
 * Pixel ID: 1160826213302373
 */

declare global {
  interface Window {
    fbq?: (...args: any[]) => void;
  }
}

export const META_PIXEL_ID = "1160826213302373";

export function trackEvent(name: string, params?: Record<string, any>) {
  if (typeof window !== "undefined" && typeof window.fbq === "function") {
    if (params) {
      window.fbq("track", name, params);
    } else {
      window.fbq("track", name);
    }
  }
}

export function trackInitiateCheckout(value = 89.9, currency = "BRL") {
  trackEvent("InitiateCheckout", {
    value,
    currency,
    content_name: "Caneta Depiladora Facial Elétrica Recarregável USB Bivolt",
    content_category: "Depilação Facial",
    num_items: 1,
  });
}

