"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import Image from "next/image";
import { galleryImages, product, companyLinks } from "@/data/product";
import { trackInitiateCheckout } from "@/lib/pixel";
import styles from "./ProductHero.module.css";

export default function ProductHero() {
  const [selectedIdx, setSelectedIdx] = useState(0);
  const mobileScrollRef = useRef<HTMLDivElement>(null);

  // Sincronização do swipe mobile com o índice selecionado
  const handleMobileScroll = useCallback(() => {
    const el = mobileScrollRef.current;
    if (!el) return;
    const index = Math.round(el.scrollLeft / el.clientWidth);
    if (index >= 0 && index < galleryImages.length && index !== selectedIdx) {
      setSelectedIdx(index);
    }
  }, [selectedIdx]);

  // Navegação por teclado nas miniaturas
  const handleKeyDownThumb = (e: React.KeyboardEvent, index: number) => {
    if (e.key === "ArrowRight" || e.key === "ArrowDown") {
      e.preventDefault();
      setSelectedIdx((index + 1) % galleryImages.length);
    } else if (e.key === "ArrowLeft" || e.key === "ArrowUp") {
      e.preventDefault();
      setSelectedIdx((index - 1 + galleryImages.length) % galleryImages.length);
    }
  };

  // Rolar carrossel mobile quando miniatura for clicada
  useEffect(() => {
    const el = mobileScrollRef.current;
    if (!el) return;
    const targetLeft = el.clientWidth * selectedIdx;
    if (Math.abs(el.scrollLeft - targetLeft) > 5) {
      el.scrollTo({ left: targetLeft, behavior: "smooth" });
    }
  }, [selectedIdx]);

  const currentImg = galleryImages[selectedIdx];

  return (
    <section id="produto" className={styles.section}>
      <div className={`container ${styles.grid}`}>
        {/* ============================================================ */}
        {/*  COLUNA 1: GALERIA DE FOTOS (ESQUERDA NO DESKTOP)            */}
        {/* ============================================================ */}
        <div className={styles.galleryColumn}>
          {/* Foto Principal Desktop */}
          <div className={styles.mainImageContainer}>
            <Image
              src={currentImg.src}
              alt={currentImg.alt}
              width={currentImg.width}
              height={currentImg.height}
              priority={selectedIdx === 0}
              className={styles.mainImage}
            />
            <div className={styles.badgeBlackFriday}>
              <span>BLACK FRIDAY · 13% OFF</span>
            </div>
          </div>

          {/* Carrossel Deslizável Mobile (Swipe touch nativo 1:1) */}
          <div
            ref={mobileScrollRef}
            className={styles.mobileStrip}
            onScroll={handleMobileScroll}
            role="region"
            aria-label="Fotos da Caneta Depiladora Facial"
          >
            {galleryImages.map((img, idx) => (
              <div key={img.src} className={styles.mobileSlide}>
                <Image
                  src={img.src}
                  alt={img.alt}
                  width={img.width}
                  height={img.height}
                  priority={idx === 0}
                  className={styles.mainImage}
                />
              </div>
            ))}
          </div>

          {/* Miniaturas Clicáveis Desktop */}
          <div className={styles.thumbnailList} role="tablist" aria-label="Miniaturas da galeria">
            {galleryImages.map((img, idx) => {
              const isSelected = idx === selectedIdx;
              return (
                <button
                  key={img.src}
                  type="button"
                  role="tab"
                  aria-selected={isSelected}
                  aria-label={`Visualizar imagem ${idx + 1}: ${img.alt}`}
                  tabIndex={isSelected ? 0 : -1}
                  onClick={() => setSelectedIdx(idx)}
                  onKeyDown={(e) => handleKeyDownThumb(e, idx)}
                  className={`${styles.thumbnailBtn} ${isSelected ? styles.thumbnailActive : ""}`}
                >
                  <Image
                    src={img.src}
                    alt=""
                    width={84}
                    height={84}
                    className={styles.thumbnailImg}
                  />
                </button>
              );
            })}
          </div>

          {/* Indicadores de Posição Mobile (Dots) */}
          <div className={styles.mobileDots} role="tablist" aria-label="Indicador de foto">
            {galleryImages.map((_, idx) => (
              <button
                key={idx}
                type="button"
                role="tab"
                aria-selected={idx === selectedIdx}
                aria-label={`Ir para a imagem ${idx + 1}`}
                tabIndex={idx === selectedIdx ? 0 : -1}
                onClick={() => setSelectedIdx(idx)}
                className={`${styles.dot} ${idx === selectedIdx ? styles.dotActive : ""}`}
              />
            ))}
          </div>
        </div>

        {/* ============================================================ */}
        {/*  COLUNA 2: PAINEL DE COMPRA & OFERTA (DIREITA NO DESKTOP)    */}
        {/* ============================================================ */}
        <div className={styles.buyPanel}>
          {/* Linha de Topo: Selo Black Friday + Prova Social em linha única */}
          <div className={styles.topMetaRow}>
            <span className={styles.bfMiniTag}>BLACK FRIDAY</span>
            <span className={styles.socialProofLine}>★ 4,9 · 1.482 avaliações verificadas</span>
          </div>

          {/* Título Principal */}
          <h1 className={styles.title}>Caneta Depiladora Facial Vellory Precision</h1>

          {/* Subtítulo / Descrição */}
          <p className={styles.description}>
            Retoque os fios ao redor da sobrancelha com uma ponta compacta e LED integrado para enxergar melhor onde passar.
          </p>

          {/* Três Destaques Concisos */}
          <p className={styles.featuresLine}>
            Ponta compacta · LED integrado · Recarga via USB
          </p>

          {/* Bloco de Preço: Primeiro Ponto de Atenção */}
          <div className={styles.priceContainer}>
            <div className={styles.priceHeader}>
              <span className={styles.originalPrice}>De R$ 103,39</span>
              <span className={styles.discountBadgeTag}>13% OFF no Pix</span>
            </div>

            <div className={styles.mainPriceRow}>
              <span className={styles.currentPrice}>R$ 89,90</span>
              <span className={styles.pixHighlight}>no Pix</span>
            </div>

            <div className={styles.cardInstallmentRow}>
              <span>ou <strong>12x de R$ 9,33</strong> no cartão · <strong>R$ 111,96 no total</strong></span>
            </div>
          </div>

          {/* Urgência Limpa e Direta */}
          <div className={styles.stockNotice}>
            <span className={styles.stockPulse} />
            <span className={styles.stockText}>Últimas unidades com Frete Grátis</span>
          </div>

          {/* Botão de Compra CTA Principal */}
          <div className={styles.ctaWrapper}>
            <a
              id="cta-hero"
              href={companyLinks.checkout}
              onClick={() => trackInitiateCheckout()}
              className={styles.buyButton}
              aria-label="Comprar Caneta Depiladora Facial Agora"
            >
              COMPRAR AGORA
            </a>
          </div>

          {/* Informação Discreta de Cores Sortidas */}
          <p className={styles.discreetColorNotice}>
            * {product.variant.note}
          </p>
        </div>
      </div>
    </section>
  );
}
