"use client";

import { companyLinks } from "@/data/product";
import { trackInitiateCheckout } from "@/lib/pixel";
import styles from "./GuaranteeSection.module.css";

export default function GuaranteeSection() {
  return (
    <section className={styles.section}>
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
            <span className={styles.tag}>Garantia Incondicional</span>
            <h2 className={styles.title}>
              Não ficou satisfeito? Devolução total em até 7 dias após o recebimento.
            </h2>
            <p className={styles.desc}>
              Você tem 7 dias a partir da data de entrega para testar a sua caneta depiladora facial no dia a dia. Se não amar os resultados ou não se adaptar à praticidade do aparelho, devolvemos 100% do seu dinheiro.
            </p>
            <p className={styles.desc}>
              Basta enviar um e-mail para nossa equipe de atendimento. O risco é todo nosso!
            </p>

            <div className={styles.ctaWrapper}>
              <a
                href={companyLinks.checkout}
                onClick={() => trackInitiateCheckout()}
                className={styles.guaranteeButton}
              >
                EXPERIMENTAR POR 7 DIAS SEM RISCO
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
