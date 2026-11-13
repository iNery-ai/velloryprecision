"use client";

import Image from "next/image";
import { benefitsList, media } from "@/data/product";
import BuyButton from "./BuyButton";
import styles from "./BenefitsFeatures.module.css";

export default function BenefitsFeatures() {
  return (
    <section id="beneficios" className={styles.section}>
      <div className="container">
        <div className="section-header">
          <span className="section-tagline">Tecnologia & Acabamento</span>
          <h2 className="section-title">
            Quatro inovações pensadas para a delicadeza do seu rosto
          </h2>
          <p className="section-subtitle">
            Cada detalhe desta caneta depiladora une engenharia de precisão com a suavidade que sua pele necessita.
          </p>
        </div>

        {/* Colagem de Closes com Moldura Editorial */}
        <div className={styles.collageBanner}>
          <Image
            src={media.colagemCloses.src}
            alt={media.colagemCloses.alt}
            width={media.colagemCloses.width}
            height={media.colagemCloses.height}
            className={styles.collageImg}
          />
        </div>

        {/* Grade de 4 Benefícios */}
        <div className={styles.grid}>
          {benefitsList.map((item, idx) => (
            <div key={item.id} className={styles.card}>
              <div className={styles.cardHeader}>
                <span className={styles.badge}>{item.tag}</span>
                <span className={styles.number}>0{idx + 1}</span>
              </div>
              <h3 className={styles.cardTitle}>{item.title}</h3>
              <p className={styles.cardDesc}>{item.description}</p>
            </div>
          ))}
        </div>

        {/* Botão de Compra Direto ao Checkout */}
        <div className={styles.ctaWrapper}>
          <BuyButton ariaLabel="Compre agora a Caneta Depiladora" />
        </div>
      </div>
    </section>
  );
}
