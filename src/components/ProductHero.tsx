"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import Image from "next/image";
import { galleryImages, product, companyLinks, offerStack, objectionBusters } from "@/data/product";
import { trackInitiateCheckout } from "@/lib/pixel";
import styles from "./ProductHero.module.css";

function formatBRL(value: number) {
  return value.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
}

export default function ProductHero() {
  const [selectedIdx, setSelectedIdx] = useState(0);
  const [cep, setCep] = useState("");
  const [cepCalculated, setCepCalculated] = useState(false);

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

  // Preços exatos solicitados
  const originalPrice = product.pricing.original; // R$ 103,39
  const pixPrice = product.pricing.pixPrice; // R$ 89,90
  const installmentCount = product.pricing.installments.count; // 12
  const installmentValue = product.pricing.installments.value; // R$ 9,33
  const discountPercent = product.pricing.discountPercent; // 13% OFF

  const handleCepSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (cep.replace(/\D/g, "").length >= 8) {
      setCepCalculated(true);
    }
  };

  return (
    <section id="produto" className={styles.section}>
      <div className={`container ${styles.grid}`}>
        {/* ============================================================ */}
        {/*  COLUNA 1: GALERIA DE FOTOS (ESQUERDA NO DESKTOP)            */}
        {/* ============================================================ */}
        <div className={styles.galleryColumn}>
          {/* Foto Principal Desktop (Proporção 1:1 reservada contra CLS) */}
          <div className={styles.mainImageContainer}>
            <Image
              src={currentImg.src}
              alt={currentImg.alt}
              width={currentImg.width}
              height={currentImg.height}
              priority={selectedIdx === 0}
              className={styles.mainImage}
            />
            <div className={styles.zoomHint}>
              <span>Passe o mouse para ampliar</span>
            </div>
            <div className={styles.badgeBlackFriday}>
              <span className={styles.bfFire}>🔥</span>
              <span>BLACK FRIDAY • {discountPercent}% OFF</span>
            </div>
          </div>

          {/* Carrossel Deslizável Mobile (Swipe touch nativo) */}
          <div
            ref={mobileScrollRef}
            className={styles.mobileStrip}
            onScroll={handleMobileScroll}
            role="region"
            aria-label="Carrossel de fotos da caneta depiladora"
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
        {/*  COLUNA 2: PAINEL DE COMPRA & CONVERSÃO (DIREITA NO DESKTOP)  */}
        {/* ============================================================ */}
        <div className={styles.buyPanel}>
          {/* Tag de Campanha Black Friday */}
          <div className={styles.campaignTagRow}>
            <span className={styles.bfTag}>⚡ BLACK FRIDAY</span>
            <span className={styles.bfTagSubtitle}>Oferta por tempo limitado</span>
          </div>

          {/* Avaliações em Estrelas */}
          <div className={styles.ratingBar}>
            <div className={styles.stars} aria-label="Classificação 4.9 de 5 estrelas">
              {"★".repeat(5)}
            </div>
            <span className={styles.ratingScore}>{product.rating}</span>
            <span className={styles.ratingCount}>
              ({product.reviewsCount} avaliações verificadas)
            </span>
            <span className={styles.verifiedBadge}>✓ Compradores Reais</span>
          </div>

          {/* Título Principal H1 */}
          <h1 className={styles.title}>{product.headline}</h1>

          {/* Subtítulo / Descrição */}
          <p className={styles.description}>{product.subheadline}</p>

          {/* Tags de Destaques Rápidos */}
          <div className={styles.highlightsContainer}>
            {product.highlights.map((h) => (
              <span key={h} className={styles.highlightBadge}>
                {h}
              </span>
            ))}
          </div>

          {/* Barra de Urgência & Escassez Black Friday */}
          <div className={styles.urgencyContainer}>
            <div className={styles.urgencyHeader}>
              <span className={styles.urgencyFlame}>🔥</span>
              <span className={styles.urgencyTitle}>
                <strong>Lote de Black Friday:</strong> {product.urgency.batchReservedPercent}% reservado hoje
              </span>
              <span className={styles.urgencyCountdown}>Restam poucas unidades</span>
            </div>
            <div className={styles.urgencyTrack}>
              <div
                className={styles.urgencyFill}
                style={{ width: `${product.urgency.batchReservedPercent}%` }}
              />
            </div>
          </div>

          {/* Bloco de Preço: De 103,39 por 89,90 no PIX ou 12x de 9,33 */}
          <div className={styles.priceContainer}>
            <div className={styles.priceHeader}>
              <span className={styles.originalPrice}>De {formatBRL(originalPrice)}</span>
              <span className={styles.discountBadgeTag}>{discountPercent}% OFF NO PIX</span>
            </div>

            <div className={styles.mainPriceRow}>
              <span className={styles.pixLabel}>Por apenas</span>
              <span className={styles.currentPrice}>{formatBRL(pixPrice)}</span>
              <span className={styles.pixHighlight}>no PIX</span>
            </div>

            <div className={styles.cardInstallmentRow}>
              <span className={styles.cardIcon}>💳</span>
              <span className={styles.installmentText}>
                ou <strong>{installmentCount}x</strong> de <strong>{formatBRL(installmentValue)}</strong> no cartão
              </span>
            </div>

            <div className={styles.paymentMethodsNotice}>
              <span>Pagamento exclusivo via <strong>PIX</strong> (aprovação imediata) ou <strong>Cartão de Crédito</strong></span>
            </div>
          </div>

          {/* Pacote de Valor Incluso (Value Stacking) */}
          <div className={styles.valueStackCard}>
            <div className={styles.valueStackHeader}>
              <span className={styles.valueStackBadge}>🎁 PACOTE COMPLETO INCLUSO HOJE</span>
              <span className={styles.valueStackTotal}>Valor acumulado: R$ 179,40</span>
            </div>
            <ul className={styles.valueStackList}>
              {offerStack.map((item) => (
                <li key={item.item} className={styles.valueStackItem}>
                  <span className={styles.stackCheck}>✓</span>
                  <span className={styles.stackName}>{item.item}</span>
                  <span className={item.isBonus ? styles.bonusTag : styles.stackVal}>
                    {item.isBonus ? "GRÁTIS HOJE" : item.originalValue}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Pequena informação discreta de cores sortidas (sem destaque) */}
          <p className={styles.discreetColorNotice}>
            * {product.variant.note} (Todas as opções possuem a mesma tecnologia de corte 360°, LED e bateria USB).
          </p>

          {/* Alerta de Estoque: "Em estoque, pronto para envio!" */}
          <div className={styles.stockAlert}>
            <span className={styles.stockPulse} />
            <span className={styles.stockText}>
              <strong>{product.stock.statusText}</strong> Restam poucas unidades no valor promocional de Black Friday.
            </span>
          </div>

          {/* Botão de Compra CTA Principal */}
          <div className={styles.ctaWrapper}>
            <a
              id="cta-hero"
              href={companyLinks.checkout}
              onClick={() => trackInitiateCheckout()}
              className={styles.buyButton}
            >
              <span>GARANTIR MINHA CANETA COM 13% OFF</span>
              <span className={styles.subCta}>Frete Grátis • Envio Imediato • 7 Dias de Garantia</span>
            </a>
          </div>

          {/* Pílulas de Quebra de Objeções Imediatas */}
          <div className={styles.objectionPills}>
            {objectionBusters.map((b) => (
              <span key={b.title} className={styles.objectionPill}>
                <span className={styles.pillIcon}>{b.icon}</span>
                <span className={styles.pillTitle}>{b.title}</span>
              </span>
            ))}
          </div>

          {/* 3 Blocos de Informações Oficiais Padronizadas */}
          <div className={styles.officialTrustGrid}>
            <div className={styles.officialTrustItem}>
              <div className={styles.trustIconHeader}>
                <span className={styles.iconSymbol}>🔒</span>
                <strong>{product.trustInfo.payment.title}</strong>
              </div>
              <p className={styles.trustDesc}>{product.trustInfo.payment.desc}</p>
            </div>

            <div className={styles.officialTrustItem}>
              <div className={styles.trustIconHeader}>
                <span className={styles.iconSymbol}>🛡️</span>
                <strong>{product.trustInfo.guarantee.title}</strong>
              </div>
              <p className={styles.trustDesc}>{product.trustInfo.guarantee.desc}</p>
            </div>

            <div className={styles.officialTrustItem}>
              <div className={styles.trustIconHeader}>
                <span className={styles.iconSymbol}>📦</span>
                <strong>{product.trustInfo.delivery.title}</strong>
              </div>
              <p className={styles.trustDesc}>{product.trustInfo.delivery.desc}</p>
            </div>
          </div>

          {/* Seção de Frete com "Em estoque, pronto para envio!" e consulta de CEP */}
          <div className={styles.shippingBox}>
            <div className={styles.shippingTitle}>
              <span className={styles.shippingBadgeIcon}>🚚</span>
              <strong>{product.stock.statusText}</strong>
            </div>
            <p className={styles.shippingHelperText}>
              Informe o CEP para ver o prazo da sua região.
            </p>
            <form onSubmit={handleCepSubmit} className={styles.shippingForm}>
              <input
                type="text"
                placeholder="Insira seu CEP (ex: 01310-100)"
                maxLength={9}
                value={cep}
                onChange={(e) => setCep(e.target.value)}
                className={styles.cepInput}
                aria-label="CEP para consulta de prazo"
              />
              <button type="submit" className={styles.cepButton}>
                Consultar
              </button>
            </form>
            {cepCalculated && (
              <div className={styles.shippingResult}>
                <span className={styles.checkIcon}>✓</span>
                <div>
                  <p className={styles.shippingHighlight}>
                    <strong>Frete Grátis</strong> garantido para a sua localidade!
                  </p>
                  <p className={styles.shippingTime}>
                    Prazo estimado: <strong>5 a 10 dias úteis</strong> com código de rastreamento.
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
