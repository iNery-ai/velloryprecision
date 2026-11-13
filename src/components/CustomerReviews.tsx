"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { customerReviews, carouselPhotos } from "@/data/product";
import BuyButton from "./BuyButton";
import styles from "./CustomerReviews.module.css";

export default function CustomerReviews() {
  // Controle de expansão de comentário no celular ("Ler mais")
  const [expandedIds, setExpandedIds] = useState<Record<number, boolean>>({});

  // Controle de ampliação de foto ao toque (Lightbox Modal)
  const [activePhoto, setActivePhoto] = useState<{ src: string; alt: string } | null>(null);

  const toggleExpand = (id: number) => {
    setExpandedIds((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const closeLightbox = useCallback(() => {
    setActivePhoto(null);
  }, []);

  // Fechamento via teclado (ESC) e trava de scroll no fundo
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        closeLightbox();
      }
    };

    if (activePhoto) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [activePhoto, closeLightbox]);

  return (
    <section id="avaliacoes" className={styles.section} aria-label="Avaliações de quem comprou">
      <div className="container">
        {/* ============================================================ */}
        {/*  1. CABEÇALHO DA SEÇÃO COM RESUMO DA NOTA                    */}
        {/* ============================================================ */}
        <div className="section-header">
          <h2 className="section-title">Avaliações de quem comprou</h2>

          {/* Resumo da Nota com Dados Confirmados do Produto */}
          <div className={styles.ratingSummary}>
            <div className={styles.ratingScoreRow}>
              <span className={styles.scoreNumber}>4,9</span>
              <div className={styles.starsGroup} aria-label="Classificação 4,9 de 5 estrelas">
                {"★★★★★"}
              </div>
            </div>
            <p className={styles.confirmedCountLabel}>
              Média 4,9 de 5 · Baseado em avaliações verificadas de compradores
            </p>
          </div>
        </div>

        {/* ============================================================ */}
        {/*  2. PRIMEIRO DEPOIMENTO LOGO ABAIXO DO RESUMO DA NOTA        */}
        {/* ============================================================ */}
        <div className={styles.reviewsGrid}>
          {customerReviews.map((rev) => {
            const isExpanded = !!expandedIds[rev.id];
            return (
              <article key={rev.id} className={styles.reviewCard}>
                {/* Cabeçalho do Card: Nome e Selo Discreto de Compra Verificada */}
                <div className={styles.cardHeader}>
                  <div className={styles.authorInfo}>
                    <div className={styles.avatarCircle} aria-hidden="true">
                      {rev.name.charAt(0)}
                    </div>
                    <div>
                      <h3 className={styles.authorName}>{rev.name}</h3>
                      <span className={styles.authorCity}>{rev.city}</span>
                    </div>
                  </div>

                  {rev.verified && (
                    <span className={styles.verifiedBadge} title="Pedido confirmado">
                      <svg
                        width="11"
                        height="11"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        aria-hidden="true"
                      >
                        <path d="M20 6L9 17l-5-5" />
                      </svg>
                      <span>Compra verificada</span>
                    </span>
                  )}
                </div>

                {/* Linha de Estrelas, Data e Variante */}
                <div className={styles.metaRow}>
                  <div className={styles.stars} aria-label={`${rev.rating} de 5 estrelas`}>
                    {"★".repeat(rev.rating)}
                  </div>
                  <span className={styles.reviewDate}>{rev.date}</span>
                  {rev.variantReceived && (
                    <span className={styles.variantTag}>{rev.variantReceived}</span>
                  )}
                </div>

                {/* Comentário Original com limite de 4 linhas no celular */}
                <div className={styles.commentWrapper}>
                  <p
                    className={`${styles.commentText} ${!isExpanded ? styles.commentClamped : ""}`}
                  >
                    {rev.comment}
                  </p>
                  <button
                    type="button"
                    onClick={() => toggleExpand(rev.id)}
                    className={styles.readMoreBtn}
                    aria-expanded={isExpanded}
                  >
                    {isExpanded ? "Ler menos" : "Ler mais"}
                  </button>
                </div>

                {/* Fotos Pertencentes a esta Avaliação Dentro do Próprio Card */}
                {rev.photos && rev.photos.length > 0 && (
                  <div className={styles.cardPhotosBlock}>
                    <span className={styles.cardPhotosLabel}>
                      Fotos de {rev.name.split(" ")[0]}:
                    </span>
                    <div className={styles.cardPhotosRow}>
                      {rev.photos.map((photo, pIdx) => (
                        <button
                          key={`${photo.src}-${pIdx}`}
                          type="button"
                          className={styles.cardPhotoThumb}
                          onClick={() => setActivePhoto(photo)}
                          aria-label={`Ampliar foto ${pIdx + 1} de ${rev.name}`}
                        >
                          <Image
                            src={photo.src}
                            alt={photo.alt}
                            width={72}
                            height={72}
                            className={styles.cardPhotoImg}
                          />
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </article>
            );
          })}
        </div>

        {/* ============================================================ */}
        {/*  3. GALERIA DE FOTOS REAIS DE COMPRADORES ABAIXO DOS RELATOS  */}
        {/* ============================================================ */}
        <div className={styles.gallerySection}>
          <div className={styles.galleryHeader}>
            <h3 className={styles.galleryTitle}>Fotos enviadas por compradores</h3>
            <p className={styles.gallerySubtitle}>
              Toque em qualquer miniatura para ampliar a foto inteira
            </p>
          </div>

          <div className={styles.galleryGrid}>
            {carouselPhotos.map((photo, idx) => (
              <button
                key={`${photo.src}-${idx}`}
                type="button"
                className={styles.galleryThumbBtn}
                onClick={() => setActivePhoto(photo)}
                aria-label={`Ampliar foto real ${idx + 1}`}
              >
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  width={180}
                  height={180}
                  className={styles.galleryThumbImg}
                  loading="lazy"
                />
              </button>
            ))}
          </div>
        </div>

        {/* ============================================================ */}
        {/*  4. CTA FINAL DA SEÇÃO                                       */}
        {/* ============================================================ */}
        <div className={styles.ctaWrapper}>
          <BuyButton ariaLabel="Compre agora a Caneta Depiladora" />
        </div>
      </div>

      {/* ============================================================ */}
      {/*  MODAL / LIGHTBOX DE AMPLIAÇÃO AO TOQUE                      */}
      {/* ============================================================ */}
      {activePhoto && (
        <div
          className={styles.lightboxOverlay}
          onClick={closeLightbox}
          role="dialog"
          aria-modal="true"
          aria-label="Visualização ampliada da foto"
        >
          <div
            className={styles.lightboxContent}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              className={styles.closeBtn}
              onClick={closeLightbox}
              aria-label="Fechar ampliação"
            >
              ✕
            </button>
            <div className={styles.lightboxImageContainer}>
              <Image
                src={activePhoto.src}
                alt={activePhoto.alt}
                width={800}
                height={800}
                className={styles.lightboxImage}
                priority
              />
            </div>
            <p className={styles.lightboxCaption}>{activePhoto.alt}</p>
          </div>
        </div>
      )}
    </section>
  );
}
