"use client";

import Image from "next/image";
import { product, companyLinks, media, offerStack } from "@/data/product";
import { trackInitiateCheckout } from "@/lib/pixel";
import styles from "./FinalOfferSection.module.css";

function formatBRL(value: number) {
  return value.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
}

export default function FinalOfferSection() {
  const originalPrice = product.pricing.original;
  const pixPrice = product.pricing.pixPrice;
  const installmentCount = product.pricing.installments.count;
  const installmentValue = product.pricing.installments.value;
  const discountPercent = product.pricing.discountPercent;

  return (
    <section id="oferta" className={styles.section} aria-label="Oferta Especial de Fechamento">
      <div className="container">
        <div className="section-header">
          <span className="section-tagline">Condição Especial de Black Friday</span>
          <h2 className="section-title">
            Pronta para um contorno de sobrancelha impecável sem sofrer na pinça?
          </h2>
          <p className="section-subtitle">
            Garanta agora sua caneta depiladora facial elétrica com desconto exclusivo, frete grátis para todo o Brasil e risco zero com 7 dias de garantia.
          </p>
        </div>

        {/* Card Central de Fechamento de Alta Conversão */}
        <div className={styles.offerCard}>
          {/* Topo do Card com Badge de Campanha */}
          <div className={styles.cardHeader}>
            <div className={styles.badgeRow}>
              <span className={styles.bfTag}>⚡ BLACK FRIDAY</span>
              <span className={styles.discountTag}>{discountPercent}% OFF NO PIX</span>
            </div>
            <span className={styles.stockNotice}>
              🔥 Lote com 87% das unidades já reservadas hoje
            </span>
          </div>

          <div className={styles.cardBody}>
            {/* Coluna da Imagem */}
            <div className={styles.imageColumn}>
              <div className={styles.imageWrapper}>
                <Image
                  src={media.kitCompleto.src}
                  alt={media.kitCompleto.alt}
                  width={600}
                  height={600}
                  className={styles.productImg}
                  loading="lazy"
                />
                <div className={styles.imageBadge}>
                  <span>Kit Completo + Bônus</span>
                </div>
              </div>
            </div>

            {/* Coluna dos Detalhes da Oferta */}
            <div className={styles.detailsColumn}>
              <div className={styles.pricingBox}>
                <div className={styles.priceOld}>De {formatBRL(originalPrice)}</div>
                <div className={styles.priceMain}>
                  <span className={styles.pricePrefix}>Por apenas</span>
                  <span className={styles.priceValue}>{formatBRL(pixPrice)}</span>
                  <span className={styles.pixBadge}>no PIX</span>
                </div>
                <div className={styles.priceCard}>
                  💳 ou <strong>{installmentCount}x</strong> de <strong>{formatBRL(installmentValue)}</strong> no cartão de crédito
                </div>
              </div>

              {/* Pacote de Valor Incluso */}
              <div className={styles.packageList}>
                <span className={styles.packageTitle}>O que você recebe no seu pedido:</span>
                <ul className={styles.itemsList}>
                  {offerStack.map((item) => (
                    <li key={item.item} className={styles.itemRow}>
                      <span className={styles.check}>✓</span>
                      <span className={styles.itemName}>{item.item}</span>
                      <span className={item.isBonus ? styles.bonusTag : styles.itemVal}>
                        {item.isBonus ? "GRÁTIS" : item.originalValue}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Informação discreta sobre cores sortidas */}
              <p className={styles.colorNotice}>
                * {product.variant.note} (Todas as versões contam com as mesmas lâminas hipoalergênicas 360°, LED e bateria USB).
              </p>

              {/* CTA Principal de Fechamento */}
              <div className={styles.ctaBox}>
                <a
                  href={companyLinks.checkout}
                  onClick={() => trackInitiateCheckout()}
                  className={styles.checkoutBtn}
                >
                  <span>GARANTIR MEU KIT COM 13% OFF</span>
                  <span className={styles.checkoutSub}>Frete Grátis • Envio Imediato • 7 Dias de Garantia</span>
                </a>
              </div>

              {/* Selos de Segurança e Confiança */}
              <div className={styles.trustBadges}>
                <span className={styles.trustBadgeItem}>🔒 Pagamento 100% Seguro SSL</span>
                <span className={styles.trustBadgeItem}>🛡️ 7 Dias de Garantia</span>
                <span className={styles.trustBadgeItem}>🚚 Frete Grátis Brasil</span>
                <span className={styles.trustBadgeItem}>⚡ Pronto para Envio</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

