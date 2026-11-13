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
    <aside className={styles.bar} aria-label="Barra de compra rápida">
      <div className={styles.inner}>
        {/* Bloco de Preço Otimizado e Limpo */}
        <div className={styles.priceColumn}>
          <div className={styles.mainPriceRow}>
            <span className={styles.priceValue}>
              {formatBRL(product.pricing.pixPrice)}
            </span>
            <span className={styles.pixBadge}>no PIX</span>
          </div>
          <div className={styles.subPriceRow}>
            <span>ou 12x {formatBRL(product.pricing.installments.value)}</span>
            <span className={styles.freeShippingBadge}>• Frete Grátis</span>
          </div>
        </div>

        {/* Botão de Compra com Máximo Destaque Visual */}
        <a
          href={companyLinks.checkout}
          onClick={() => trackInitiateCheckout()}
          className={styles.ctaButton}
          aria-label="Comprar Caneta Depiladora com Frete Grátis"
        >
          <span className={styles.ctaMainText}>COMPRAR AGORA</span>
          <span className={styles.ctaSubText}>Frete Grátis • 13% OFF</span>
        </a>
      </div>
    </aside>
  );
}
