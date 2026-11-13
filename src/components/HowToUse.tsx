"use client";

import { howToUseSteps, companyLinks } from "@/data/product";
import { trackInitiateCheckout } from "@/lib/pixel";
import styles from "./HowToUse.module.css";

export default function HowToUse() {
  return (
    <section id="como-funciona" className={styles.section}>
      <div className="container">
        <div className="section-header">
          <span className="section-tagline">Simples & Rápido</span>
          <h2 className="section-title">Como usar em 4 passos descomplicados</h2>
          <p className="section-subtitle">
            Em menos de 2 minutos você conquista um contorno de sobrancelhas e buço limpo, suave e sem dor.
          </p>
        </div>

        <div className={styles.stepsGrid}>
          {howToUseSteps.map((s) => (
            <div key={s.step} className={styles.stepCard}>
              <div className={styles.stepCircle}>{s.step}</div>
              <div className={styles.stepContent}>
                <h3 className={styles.stepTitle}>{s.title}</h3>
                <p className={styles.stepDesc}>{s.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className={styles.proTip}>
          <div className={styles.proTipIcon}>💡</div>
          <div className={styles.proTipContent}>
            <strong>Dica de Especialista:</strong> Para um acabamento profissional no contorno da sobrancelha, estique levemente a pele com dois dedos e passe a ponta com toques circulares pequenos e constantes.
          </div>
        </div>

        <div className={styles.ctaWrapper}>
          <a
            href={companyLinks.checkout}
            onClick={() => trackInitiateCheckout()}
            className={styles.howToUseButton}
          >
            COMPRAR AGORA · R$ 89,90
          </a>
        </div>
      </div>
    </section>
  );
}
