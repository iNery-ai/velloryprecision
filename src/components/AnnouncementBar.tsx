import { companyLinks } from "@/data/product";
import styles from "./AnnouncementBar.module.css";

export default function AnnouncementBar() {
  return (
    <aside className={styles.bar}>
      <a
        href={companyLinks.checkout}
        className={styles.container}
        aria-label="BLACK FRIDAY · R$ 89,90 no Pix + frete grátis"
      >
        <span className={styles.campaignTag}>BLACK FRIDAY</span>
        <span className={styles.separator}>·</span>
        <span className={styles.offerText}>R$ 89,90 no Pix + frete grátis</span>
      </a>
    </aside>
  );
}
