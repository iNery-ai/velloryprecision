/**
 * Utilitário para eventos do Meta Pixel (Facebook Ads)
 * O ID pode ser configurado via variável de ambiente NEXT_PUBLIC_FACEBOOK_PIXEL_ID na Vercel.
 */

declare global {
  interface Window {
    fbq?: (...args: any[]) => void;
  }
}

export const META_PIXEL_ID =
  process.env.NEXT_PUBLIC_FACEBOOK_PIXEL_ID || "1160826213302373";

export function trackEvent(name: string, params?: Record<string, any>) {
  if (typeof window !== "undefined" && typeof window.fbq === "function") {
    if (params) {
      window.fbq("track", name, params);
    } else {
      window.fbq("track", name);
    }
  }
}

export function trackCustomEvent(name: string, params?: Record<string, any>) {
  if (typeof window !== "undefined" && typeof window.fbq === "function") {
    if (params) {
      window.fbq("trackCustom", name, params);
    } else {
      window.fbq("trackCustom", name);
    }
  }
}

/**
 * InitiateCheckout para uso opcional se o checkout externo não tiver pixel integrado.
 * Não chama Purchase.
 */
export function trackInitiateCheckout(value = 89.9, currency = "BRL") {
  trackEvent("InitiateCheckout", {
    value,
    currency,
    content_name: "Caneta Depiladora",
    content_category: "Depilação Facial",
    num_items: 1,
  });
}
