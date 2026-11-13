"use client";

import { useState } from "react";
import { faqList, companyLinks } from "@/data/product";
import styles from "./FAQSection.module.css";

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0); // Abre o primeiro por padrão

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className={styles.section}>
      <div className="container">
        <div className="section-header">
          <span className="section-tagline">Tire Suas Dúvidas</span>
          <h2 className="section-title">Perguntas Frequentes</h2>
          <p className="section-subtitle">
            Tudo o que você precisa saber antes de adquirir sua caneta depiladora facial.
          </p>
        </div>

        <div className={styles.accordion}>
          {faqList.map((item, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div key={item.q} className={`${styles.item} ${isOpen ? styles.itemOpen : ""}`}>
                <button
                  type="button"
                  className={styles.questionButton}
                  onClick={() => toggle(idx)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${idx}`}
                >
                  <span className={styles.questionText}>{item.q}</span>
                  <span className={`${styles.chevron} ${isOpen ? styles.chevronOpen : ""}`}>
                    ▾
                  </span>
                </button>
                {isOpen && (
                  <div id={`faq-answer-${idx}`} className={styles.answerWrapper}>
                    <p className={styles.answerText}>{item.a}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <div className={styles.supportBox}>
          <p>
            Ainda tem dúvidas? Fale com nossa equipe de atendimento pelo e-mail{" "}
            <a href={`mailto:${companyLinks.email}`} className={styles.supportLink}>
              {companyLinks.email}
            </a>
            .
          </p>
        </div>
      </div>
    </section>
  );
}
