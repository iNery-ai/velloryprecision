"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { customerReviews, product, type CustomerReview, type ReviewPhoto } from "@/data/product";
import styles from "./CustomerReviews.module.css";

interface ActiveModalState {
  reviewIndex: number;
  photoIndex: number;
}

export default function CustomerReviews() {
  const [activeModal, setActiveModal] = useState<ActiveModalState | null>(null);

  const openPhotoModal = (reviewIndex: number, photoIndex: number) => {
    setActiveModal({ reviewIndex, photoIndex });
  };

  const closeModal = useCallback(() => {
    setActiveModal(null);
  }, []);

  const nextPhoto = useCallback(() => {
    if (!activeModal) return;
    const currentReview = customerReviews[activeModal.reviewIndex];
    if (activeModal.photoIndex < currentReview.photos.length - 1) {
      setActiveModal({
        ...activeModal,
        photoIndex: activeModal.photoIndex + 1,
      });
    } else if (activeModal.reviewIndex < customerReviews.length - 1) {
      setActiveModal({
        reviewIndex: activeModal.reviewIndex + 1,
        photoIndex: 0,
      });
    } else {
      setActiveModal({ reviewIndex: 0, photoIndex: 0 });
    }
  }, [activeModal]);

  const prevPhoto = useCallback(() => {
    if (!activeModal) return;
    if (activeModal.photoIndex > 0) {
      setActiveModal({
        ...activeModal,
        photoIndex: activeModal.photoIndex - 1,
      });
    } else if (activeModal.reviewIndex > 0) {
      const prevReview = customerReviews[activeModal.reviewIndex - 1];
      setActiveModal({
        reviewIndex: activeModal.reviewIndex - 1,
        photoIndex: prevReview.photos.length - 1,
      });
    } else {
      const lastReview = customerReviews[customerReviews.length - 1];
      setActiveModal({
        reviewIndex: customerReviews.length - 1,
        photoIndex: lastReview.photos.length - 1,
      });
    }
  }, [activeModal]);

  // Keyboard navigation for lightbox
  useEffect(() => {
    if (!activeModal) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeModal();
      if (e.key === "ArrowRight") nextPhoto();
      if (e.key === "ArrowLeft") prevPhoto();
    };

    window.addEventListener("keydown", handleKeyDown);
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = originalOverflow;
    };
  }, [activeModal, closeModal, nextPhoto, prevPhoto]);

  const currentModalReview = activeModal ? customerReviews[activeModal.reviewIndex] : null;
  const currentModalPhoto =
    activeModal && currentModalReview ? currentModalReview.photos[activeModal.photoIndex] : null;

  return (
    <section id="avaliacoes" className={styles.section} aria-label="Avaliações de Clientes">
      <div className="container">
        {/* Cabeçalho da Seção com Métricas de Confiança */}
        <div className="section-header">
          <span className="section-tagline">Fotos & Avaliações Reais</span>
          <h2 className="section-title">O que dizem quem já comprou e testou</h2>
          
          <div className={styles.summaryBar}>
            <div className={styles.ratingBadge}>
              <span className={styles.ratingNumber}>{product.rating}</span>
              <div className={styles.starsRow} aria-label="5 de 5 estrelas">★★★★★</div>
            </div>
            
            <div className={styles.statsDivider} />

            <div className={styles.metricItem}>
              <strong>98.6%</strong>
              <span>Recomendam o produto</span>
            </div>

            <div className={styles.statsDivider} />

            <div className={styles.metricItem}>
              <strong>{product.reviewsCount.toLocaleString("pt-BR")}</strong>
              <span>Avaliações verificadas</span>
            </div>

            <div className={styles.statsDivider} />

            <div className={styles.metricItem}>
              <span className={styles.badgeHighlight}>100% Fotos Reais</span>
              <span>Clientes de todo o Brasil</span>
            </div>
          </div>
        </div>

        {/* Grid de Depoimentos com Fotos Reais */}
        <div className={styles.reviewsGrid}>
          {customerReviews.map((rev, revIdx) => (
            <article key={rev.id} className={styles.reviewCard}>
              {/* Topo do Card: Nota, Data e Tag de Compra */}
              <div className={styles.cardTop}>
                <div className={styles.starsGroup}>
                  <div className={styles.stars}>{"★".repeat(rev.rating)}</div>
                  <span className={styles.verifiedTag}>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M20 6L9 17l-5-5" />
                    </svg>
                    Compra Verificada
                  </span>
                </div>
                <span className={styles.date}>{rev.date}</span>
              </div>

              {/* Informação sobre a cor/variante recebida pela cliente */}
              {rev.variantReceived && (
                <div className={styles.variantBadge}>
                  <span className={styles.variantIcon}>✦</span>
                  <span>{rev.variantReceived}</span>
                </div>
              )}

              {/* Título e Texto da Avaliação */}
              <h3 className={styles.reviewTitle}>&ldquo;{rev.title}&rdquo;</h3>
              <p className={styles.reviewText}>{rev.comment}</p>

              {/* Galeria de Fotos Reais enviadas pela Cliente */}
              {rev.photos && rev.photos.length > 0 && (
                <div className={styles.photosWrapper}>
                  <span className={styles.photosLabel}>
                    Fotos reais enviadas pela cliente ({rev.photos.length}):
                  </span>
                  <div className={styles.photoThumbnails}>
                    {rev.photos.map((photo, photoIdx) => (
                      <button
                        key={photo.src}
                        type="button"
                        onClick={() => openPhotoModal(revIdx, photoIdx)}
                        className={styles.thumbButton}
                        aria-label={`Ver foto ampliada de ${rev.name} (${photoIdx + 1} de ${rev.photos.length})`}
                      >
                        <Image
                          src={photo.src}
                          alt={photo.alt}
                          width={140}
                          height={140}
                          className={styles.thumbImage}
                          loading="lazy"
                        />
                        <span className={styles.zoomHint} aria-hidden="true">
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <circle cx="11" cy="11" r="8" />
                            <line x1="21" y1="21" x2="16.65" y2="16.65" />
                            <line x1="11" y1="8" x2="11" y2="14" />
                            <line x1="8" y1="11" x2="14" y2="11" />
                          </svg>
                        </span>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Rodapé do Card: Autora e Localidade */}
              <div className={styles.authorRow}>
                <div className={styles.avatarCircle} aria-hidden="true">
                  {rev.name.charAt(0)}
                </div>
                <div className={styles.authorInfo}>
                  <strong className={styles.authorName}>{rev.name}</strong>
                  <span className={styles.authorLocation}>{rev.city}</span>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* CTA para o Checkout / Início da Compra */}
        <div className={styles.actionCta}>
          <a href="#oferta" className={styles.reviewButton}>
            Garantir Minha Caneta Depiladora com 13% OFF
          </a>
        </div>
      </div>

      {/* Modal / Lightbox para Visualização das Fotos Reais */}
      {activeModal && currentModalReview && currentModalPhoto && (
        <div
          className={styles.modalBackdrop}
          onClick={closeModal}
          role="dialog"
          aria-modal="true"
          aria-label={`Foto de avaliação por ${currentModalReview.name}`}
        >
          <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
            {/* Botão de Fechar */}
            <button
              type="button"
              className={styles.closeButton}
              onClick={closeModal}
              aria-label="Fechar visualização de foto"
            >
              ✕
            </button>

            {/* Imagem Principal */}
            <div className={styles.modalImageContainer}>
              <Image
                src={currentModalPhoto.src}
                alt={currentModalPhoto.alt}
                width={800}
                height={1000}
                className={styles.modalMainImage}
                priority
              />

              {/* Controles de Navegação Anterior / Próximo */}
              <button
                type="button"
                className={`${styles.navButton} ${styles.navPrev}`}
                onClick={prevPhoto}
                aria-label="Foto anterior"
              >
                ‹
              </button>
              <button
                type="button"
                className={`${styles.navButton} ${styles.navNext}`}
                onClick={nextPhoto}
                aria-label="Próxima foto"
              >
                ›
              </button>
            </div>

            {/* Detalhes do depoimento no rodapé do modal */}
            <div className={styles.modalFooter}>
              <div className={styles.modalAuthorMeta}>
                <div className={styles.modalAvatar}>{currentModalReview.name.charAt(0)}</div>
                <div>
                  <div className={styles.modalAuthorName}>
                    {currentModalReview.name}
                    <span className={styles.modalVerified}>✓ Compra Verificada</span>
                  </div>
                  <div className={styles.modalLocation}>
                    {currentModalReview.city} • {currentModalReview.variantReceived}
                  </div>
                </div>
              </div>
              <p className={styles.modalCaption}>{currentModalPhoto.alt}</p>
              <div className={styles.modalCounter}>
                Foto {activeModal.photoIndex + 1} de {currentModalReview.photos.length}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
