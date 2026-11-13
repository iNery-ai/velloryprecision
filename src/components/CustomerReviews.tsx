"use client";

import Image from "next/image";
import { customerReviews, carouselPhotos, product, companyLinks } from "@/data/product";
import { trackInitiateCheckout } from "@/lib/pixel";
import styles from "./CustomerReviews.module.css";

export default function CustomerReviews() {
  // Duplicar a lista de fotos para criar o efeito contínuo infinito (loop contínuo)
  const duplicatedPhotos = [...carouselPhotos, ...carouselPhotos];

  return (
    <section id="avaliacoes" className={styles.section} aria-label="Avaliações de Clientes">
      <div className="container">
        {/* Cabeçalho da Seção com Métricas de Confiança */}
        <div className="section-header">
          <span className="section-tagline">100% Clientes Reais</span>
          <h2 className="section-title">Quem comprou, aprovou e recomenda</h2>
          
          <div className={styles.summaryBar}>
            <div className={styles.ratingBadge}>
              <span className={styles.ratingNumber}>{product.rating}</span>
              <div className={styles.starsRow} aria-label="5 de 5 estrelas">★★★★★</div>
            </div>
            
            <div className={styles.statsDivider} />

            <div className={styles.metricItem}>
              <strong>98.6%</strong>
              <span>Aprovação comprovada</span>
            </div>

            <div className={styles.statsDivider} />

            <div className={styles.metricItem}>
              <strong>{product.reviewsCount.toLocaleString("pt-BR")}</strong>
              <span>Pedidos entregues</span>
            </div>

            <div className={styles.statsDivider} />

            <div className={styles.metricItem}>
              <span className={styles.badgeHighlight}>Fotos Reais</span>
              <span>Enviadas por quem comprou</span>
            </div>
          </div>
        </div>
      </div>

      {/* ============================================================ */}
      {/*  BANNER DE FOTOS EM CARROSSEL AUTOMÁTICO (INFINITE MARQUEE)   */}
      {/* ============================================================ */}
      <div className={styles.carouselContainer} aria-hidden="true">
        <div className={styles.carouselTrack}>
          {duplicatedPhotos.map((photo, idx) => (
            <div key={`${photo.src}-${idx}`} className={styles.carouselSlide}>
              <Image
                src={photo.src}
                alt={photo.alt}
                width={220}
                height={220}
                className={styles.carouselImage}
                loading={idx < 6 ? "eager" : "lazy"}
              />
              <span className={styles.photoOverlayBadge}>✓ Cliente Real</span>
            </div>
          ))}
        </div>
      </div>

      <div className="container">
        {/* ============================================================ */}
        {/*  DEPOIMENTOS ESCRITOS ABAIXO DO CARROSSEL                   */}
        {/* ============================================================ */}
        <div className={styles.reviewsGrid}>
          {customerReviews.map((rev) => (
            <article key={rev.id} className={styles.reviewCard}>
              <div className={styles.cardHeader}>
                <div className={styles.authorMeta}>
                  <div className={styles.avatarCircle}>
                    {rev.name.charAt(0)}
                  </div>
                  <div>
                    <h3 className={styles.authorName}>{rev.name}</h3>
                    <span className={styles.authorLocation}>{rev.city}</span>
                  </div>
                </div>

                <div className={styles.verifiedBadge}>
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M20 6L9 17l-5-5" />
                  </svg>
                  <span>Compra Verificada</span>
                </div>
              </div>

              <div className={styles.ratingRow}>
                <div className={styles.stars}>{"★".repeat(rev.rating)}</div>
                <span className={styles.reviewDate}>{rev.date}</span>
                {rev.variantReceived && (
                  <span className={styles.variantBadge}>✦ {rev.variantReceived}</span>
                )}
              </div>

              <h4 className={styles.reviewTitle}>&ldquo;{rev.title}&rdquo;</h4>
              <p className={styles.reviewComment}>{rev.comment}</p>
            </article>
          ))}
        </div>

        {/* CTA Agressivo após as avaliações */}
        <div className={styles.ctaWrapper}>
          <div className={styles.ctaBox}>
            <p className={styles.ctaUrgency}>
              🔥 <strong>Black Friday em andamento:</strong> Aproveite o preço de <strong>R$ 89,90 no PIX</strong> com Frete Grátis antes que o lote acabe!
            </p>
            <a
              href={companyLinks.checkout}
              onClick={() => trackInitiateCheckout()}
              className={styles.reviewButton}
            >
              <span>QUERO MINHA CANETA COM 13% OFF</span>
              <span className={styles.buttonSub}>Envio Imediato • 7 Dias de Garantia</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
