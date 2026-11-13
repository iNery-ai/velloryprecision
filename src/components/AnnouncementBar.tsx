"use client";

import { companyLinks } from "@/data/product";
import { trackInitiateCheckout } from "@/lib/pixel";
import styles from "./AnnouncementBar.module.css";

export default function AnnouncementBar() {
  return (
    <aside className={styles.bar}>
      <a
        href={companyLinks.checkout}
        onClick={() => trackInitiateCheckout()}
        className={styles.container}
        aria-label="Aproveitar oferta especial de Black Friday"
      >
        <span className={styles.badgeBf}>BLACK FRIDAY</span>
        <p className={styles.text}>
          🔥 Caneta Depiladora por <strong>R$ 89,90 no PIX</strong> — ÚLTIMAS UNIDADES COM <strong>FRETE GRÁTIS</strong> →
        </p>
      </a>
    </aside>
  );
}
