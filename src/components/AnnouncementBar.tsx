import styles from "./AnnouncementBar.module.css";

export default function AnnouncementBar() {
  return (
    <div className={styles.bar}>
      <div className={styles.container}>
        <span className={styles.badgeBf}>BLACK FRIDAY</span>
        <p className={styles.text}>
          🔥 Caneta Depiladora por <strong>R$ 89,90 no PIX</strong> — ÚLTIMAS UNIDADES COM <strong>FRETE GRÁTIS</strong>
        </p>
      </div>
    </div>
  );
}
