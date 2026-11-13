import styles from "./AnnouncementBar.module.css";

export default function AnnouncementBar() {
  return (
    <div className={styles.bar}>
      <div className={styles.container}>
        <span className={styles.badgeBf}>BLACK FRIDAY</span>
        <p className={styles.text}>
          <strong>FRETE GRÁTIS</strong> PARA TODO O BRASIL • DE R$ 103,39 POR <strong>R$ 89,90 NO PIX</strong> (13% OFF) OU <strong>12X DE R$ 9,33</strong> NO CARTÃO
        </p>
      </div>
    </div>
  );
}
