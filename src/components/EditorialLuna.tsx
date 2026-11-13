import Image from "next/image";
import { media } from "@/data/product";
import styles from "./EditorialLuna.module.css";

export default function EditorialLuna() {
  const hasVideo = Boolean(media.videoLuna.src);

  return (
    <section className={styles.section}>
      <div className={`container ${styles.grid}`}>
        <div className={styles.contentColumn}>
          <span className="section-tagline">Demonstração & Editorial</span>
          <h2 className={styles.title}>
            &ldquo;O segredo para um contorno de sobrancelhas impecável sem sofrer na pinça.&rdquo;
          </h2>
          <p className={styles.quoteAuthor}>— Destaque Editorial de Beleza</p>

          <p className={styles.text}>
            Esta <strong>caneta depiladora facial elétrica</strong> foi pensada para simplificar a sua rotina diária de cuidados. Chega de esperar dias para agendar salão ou suportar a dor de arrancar fios sensíveis um a um na pinça.
          </p>

          <p className={styles.text}>
            Com a iluminação de LED frontal e o formato anatômico de alta precisão, você remove até a penugem mais fina em segundos — sem vermelhidão, sem inchaço e sem medo de errar o desenho natural da sobrancelha.
          </p>

          <div className={styles.statsRow}>
            <div className={styles.statBox}>
              <span className={styles.statNum}>100%</span>
              <span className={styles.statLabel}>Indolor comprovado</span>
            </div>
            <div className={styles.statBox}>
              <span className={styles.statNum}>2 min</span>
              <span className={styles.statLabel}>Para retocar o buço e sobrancelha</span>
            </div>
            <div className={styles.statBox}>
              <span className={styles.statNum}>0 pilhas</span>
              <span className={styles.statLabel}>100% Recarregável USB</span>
            </div>
          </div>

          <div className={styles.ctaWrapper}>
            <a href="#produto" className={styles.buyButton}>
              Garantir com Frete Grátis
            </a>
          </div>
        </div>

        <div className={styles.mediaColumn}>
          <div className={styles.imageCard}>
            {hasVideo ? (
              <video
                src={media.videoLuna.src}
                poster={media.videoLuna.poster}
                controls
                playsInline
                className={styles.videoPlayer}
                aria-label={media.videoLuna.alt}
              />
            ) : (
              <div className={styles.imageWrapper}>
                <Image
                  src={media.olhosLuna.src}
                  alt={media.olhosLuna.alt}
                  width={media.olhosLuna.width}
                  height={media.olhosLuna.height}
                  className={styles.editorialImg}
                />
                <div className={styles.badgeEditorial}>
                  <span>Acabamento de Alta Precisão</span>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
