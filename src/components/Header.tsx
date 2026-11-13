"use client";

import Image from "next/image";
import { media } from "@/data/product";
import BuyButton from "./BuyButton";
import styles from "./Header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={`container ${styles.inner}`}>
        <a href="/" className={styles.brand} aria-label="Vellory Precision Página Inicial">
          <Image
            src={media.logo.src}
            alt={media.logo.alt}
            width={210}
            height={52}
            priority
            className={styles.logoImage}
          />
        </a>

        <nav className={styles.nav} aria-label="Navegação Principal">
          <a href="#como-funciona" className={styles.navLink}>
            Como funciona
          </a>
          <a href="#beneficios" className={styles.navLink}>
            Diferenciais
          </a>
          <a href="#kit" className={styles.navLink}>
            O que vem no kit
          </a>
          <a href="#avaliacoes" className={styles.navLink}>
            Avaliações
          </a>
          <a href="#faq" className={styles.navLink}>
            Dúvidas
          </a>
        </nav>

        <div className={styles.actions}>
          <BuyButton compact ariaLabel="Compre agora a Caneta Depiladora" />
        </div>
      </div>
    </header>
  );
}
