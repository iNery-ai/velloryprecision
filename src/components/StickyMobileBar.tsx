"use client";

import { useState, useEffect } from "react";
import { product, companyLinks } from "@/data/product";
import { trackInitiateCheckout } from "@/lib/pixel";
import styles from "./StickyMobileBar.module.css";

function formatBRL(value: number) {
  return value.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
}

export default function StickyMobileBar() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (!product.checkout.isReady) return;

    const heroCta = document.getElementById("cta-hero");
    if (!heroCta) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(!entry.isIntersecting);
      },
      { threshold: 0 }
    );

    observer.observe(heroCta);
    return () => observer.disconnect();
  }, []);

  if (!product.checkout.isReady || !isVisible) {
    return null;
  }

  return (
    <div className={styles.bar}>
      <div className={styles.inner}>
        <div className={styles.productInfo}>
          <div className={styles.topMeta}>
            <span className={styles.bfMiniBadge}>⚡ 13% OFF</span>
            <span className={styles.productName}>{product.shortName}</span>
          </div>
          <div className={styles.priceRow}>
            <span className={styles.currentPrice}>
              {formatBRL(product.pricing.pixPrice)}
            </span>
            <span className={styles.pixTag}>no PIX</span>
            <span className={styles.freeShipping}>• Frete Grátis</span>
          </div>
        </div>

        <a
          href={companyLinks.checkout}
          onClick={() => trackInitiateCheckout()}
          className={styles.ctaButton}
        >
          COMPRAR AGORA
        </a>
      </div>
    </div>
  );
}
