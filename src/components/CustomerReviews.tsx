"use client";

import Image from "next/image";
import { customerReviews, carouselPhotos, companyLinks } from "@/data/product";
import { trackInitiateCheckout } from "@/lib/pixel";
import styles from "./CustomerReviews.module.css";

export default function CustomerReviews() {
  const duplicatedPhotos = [...carouselPhotos, ...carouselPhotos];

  return (
    <section id="avaliacoes" className={styles.section} aria-label="Avaliações de Clientes">
      <div className="container">
        {/* Cabeçalho da Seção */}
        <div className="section-header">
          <h2 className="section-title">Avaliações de quem comprou</h2>
          
          {/* Bloco Simples de Nota e Estrelas */}
          <div className={styles.ratingBlock}>
            <div className={styles.ratingScoreRow}>
              <span className={styles.ratingScore}>4,9</span>
              <div className={styles.starsRow} aria-label="Classificação 4,9 de 5 estrelas">
                {"★★★★★"}
              </div>
            </div>
            <span className={styles.reviewsLabel}>
              Avaliações verificadas de clientes
            </span>
          </div>
        </div>
      </div>

      {/* Banner de Fotos Reais de Clientes em Carrossel Contínuo */}
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
            </div>
          ))}
        </div>
      </div>

      <div className="container">
        {/* Depoimentos Escritos de Compradores Reais */}
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

        {/* CTA Sóbrio para o Checkout */}
        <div className={styles.ctaWrapper}>
          <a
            href={companyLinks.checkout}
            onClick={() => trackInitiateCheckout()}
            className={styles.reviewButton}
            aria-label="Comprar Caneta Depiladora Agora"
          >
            COMPRAR AGORA · R$ 89,90
          </a>
        </div>
      </div>
    </section>
  );
}
