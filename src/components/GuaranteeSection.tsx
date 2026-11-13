"use client";

import BuyButton from "./BuyButton";
import styles from "./GuaranteeSection.module.css";

export default function GuaranteeSection() {
  return (
    <section className={styles.section} aria-label="Garantia e Devolução">
      <div className="container">
        <div className={styles.card}>
          <div className={styles.badgeColumn}>
            <div className={styles.guaranteeSeal}>
              <span className={styles.sealNumber}>7</span>
              <span className={styles.sealText}>DIAS</span>
              <span className={styles.sealSub}>GARANTIA</span>
            </div>
          </div>

          <div className={styles.textColumn}>
            <h2 className={styles.title}>
              7 dias para solicitar a devolução
            </h2>
            <p className={styles.desc}>
              Para devolver sua Caneta Depiladora, entre em contato com nossa equipe de atendimento por e-mail em até 7 dias após receber o produto.
            </p>

            <div className={styles.ctaWrapper}>
              <BuyButton
                fullWidth
                ariaLabel="Compre agora com garantia de devolução em 7 dias"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
