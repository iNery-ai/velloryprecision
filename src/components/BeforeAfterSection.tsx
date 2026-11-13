"use client";

import Image from "next/image";
import { media } from "@/data/product";
import BuyButton from "./BuyButton";
import styles from "./BeforeAfterSection.module.css";

export default function BeforeAfterSection() {
  return (
    <section id="antes-e-depois" className={styles.section} aria-label="Comparativo de antes e depois">
      <div className="container">
        {/* Cabeçalho da Seção */}
        <div className="section-header">
          <h2 className="section-title">Veja o antes e depois de um retoque</h2>
          <p className="section-subtitle">
            A Caneta Depiladora apara os fios na superfície, sem puxá-los pela raiz como a pinça.
          </p>
        </div>

        {/* Grade de Comparativos: 2 colunas lado a lado no desktop, empilhadas no celular */}
        <div className={styles.comparisonsGrid}>
          {/* 1. Contorno da sobrancelha (Primeiro na ordem) */}
          <article className={styles.comparisonCard}>
            <h3 className={styles.cardTitle}>Contorno da sobrancelha</h3>
            <div className={styles.imageWrapper}>
              <Image
                src={media.comparacaoSobrancelhas.src}
                alt={media.comparacaoSobrancelhas.alt}
                width={1024}
                height={1024}
                className={styles.comparisonImage}
                priority
              />
            </div>
          </article>

          {/* 2. Buço */}
          <article className={styles.comparisonCard}>
            <h3 className={styles.cardTitle}>Buço</h3>
            <div className={styles.imageWrapper}>
              <Image
                src={media.comparacaoBuco.src}
                alt={media.comparacaoBuco.alt}
                width={1024}
                height={1024}
                className={styles.comparisonImage}
              />
            </div>
          </article>
        </div>

        {/* Botão de Compra CTA Laranja Padronizado */}
        <div className={styles.ctaWrapper}>
          <BuyButton ariaLabel="Compre agora a Caneta Depiladora" />
        </div>
      </div>
    </section>
  );
}
