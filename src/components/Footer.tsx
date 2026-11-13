import Image from "next/image";
import { media, companyLinks, sellerInfo } from "@/data/product";
import BuyButton from "./BuyButton";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.topRow}>
          {/* BLOCO 1: INFORMAÇÕES DO PRODUTO */}
          <div className={styles.col}>
            <div className={styles.logoWrapper}>
              <Image
                src={media.logo.src}
                alt={media.logo.alt}
                width={180}
                height={45}
                className={styles.footerLogo}
              />
            </div>
            <h3 className={styles.colTitle}>Informações do Produto</h3>
            <ul className={styles.linkList}>
              <li>
                <a href="#como-funciona">Como usar</a>
              </li>
              <li>
                <a href="#kit">O que vem no kit</a>
              </li>
              <li>
                <a href="#faq">Perguntas frequentes</a>
              </li>
            </ul>
            <div className={styles.buyBtnWrapper}>
              <BuyButton fullWidth ariaLabel="Compre agora a Caneta Depiladora" />
            </div>
          </div>

          {/* BLOCO 2: ATENDIMENTO E ENTREGA */}
          <div className={styles.col}>
            <h3 className={styles.colTitle}>Atendimento e Entrega</h3>
            <div className={styles.infoGroup}>
              <span className={styles.infoSubtitle}>Atendimento ao cliente</span>
              <a href={`mailto:${sellerInfo.supportEmail}`} className={styles.emailLink}>
                {sellerInfo.supportEmail}
              </a>
              <span className={styles.infoHours}>{sellerInfo.supportHours}</span>
            </div>

            <p className={styles.logisticsNotice}>
              {sellerInfo.logisticsNotice}
            </p>

            <ul className={styles.linkList}>
              <li>
                <a href={companyLinks.returns}>Trocas e devoluções</a>
              </li>
              <li>
                <a href={companyLinks.privacy}>Política de Privacidade</a>
              </li>
            </ul>

            <div className={styles.paymentRow}>
              <span className={styles.paymentText}>Pix e cartão de crédito</span>
            </div>
          </div>

          {/* BLOCO 3: DADOS DO VENDEDOR */}
          <div className={styles.col}>
            <h3 className={styles.colTitle}>Dados do Vendedor</h3>
            <div className={styles.sellerInfoBox}>
              <p className={styles.sellerLine}>
                <span className={styles.sellerLabel}>Marca:</span>{" "}
                <span className={styles.sellerValue}>{sellerInfo.brand}</span>
              </p>
              <p className={styles.sellerLine}>
                <span className={styles.sellerLabel}>CNPJ:</span>{" "}
                <span className={styles.sellerValue}>{sellerInfo.cnpj}</span>
              </p>
              {sellerInfo.corporateName ? (
                <p className={styles.sellerLine}>
                  <span className={styles.sellerLabel}>Razão Social:</span>{" "}
                  <span className={styles.sellerValue}>{sellerInfo.corporateName}</span>
                </p>
              ) : null}
              {sellerInfo.address ? (
                <p className={styles.sellerLine}>
                  <span className={styles.sellerLabel}>Endereço:</span>{" "}
                  <span className={styles.sellerValue}>{sellerInfo.address}</span>
                </p>
              ) : null}
            </div>
          </div>
        </div>

        {/* Linha Final de Copyright */}
        <div className={styles.bottomBar}>
          <p>© 2026 Vellory Precision. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
