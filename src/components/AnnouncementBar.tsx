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
        aria-label="Aproveitar Black Friday por R$ 89,90 no Pix com frete grátis"
      >
        <span className={styles.campaignTag}>BLACK FRIDAY</span>
        <span className={styles.separator}>·</span>
        <span className={styles.offerText}>R$ 89,90 no Pix + frete grátis</span>
      </a>
    </aside>
  );
}
