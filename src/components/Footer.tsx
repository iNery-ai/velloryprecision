import Image from "next/image";
import { media, companyLinks } from "@/data/product";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.topRow}>
          <div className={styles.brandCol}>
            <div className={styles.logoWrapper}>
              <Image
                src={media.logo.src}
                alt={media.logo.alt}
                width={180}
                height={45}
                className={styles.footerLogo}
              />
            </div>
            <p className={styles.brandBio}>
              Especialistas em produtos de precisão e beleza. Levamos conforto, praticidade e tecnologia indolor para o autocuidado diário de mulheres em todo o Brasil.
            </p>
          </div>

          <div className={styles.linksCol}>
            <h3 className={styles.colTitle}>Navegação Rápida</h3>
            <ul className={styles.linkList}>
              <li>
                <a
                  href={companyLinks.checkout}
                  className={styles.buyLinkHighlight}
                >
                  ⚡ Comprar Caneta Depiladora (Checkout)
                </a>
              </li>
              <li><a href="#como-funciona">Como Usar</a></li>
              <li><a href="#antes-e-depois">Antes e Depois</a></li>
              <li><a href="#kit">O que vem no kit</a></li>
              <li><a href="#avaliacoes">Depoimentos Reais</a></li>
              <li><a href="#faq">Perguntas Frequentes</a></li>
            </ul>
          </div>

          <div className={styles.linksCol}>
            <h3 className={styles.colTitle}>Atendimento ao Cliente</h3>
            <ul className={styles.linkList}>
              <li>
                <a href={`mailto:${companyLinks.email}`}>
                  {companyLinks.email}
                </a>
              </li>
              <li>Horário: Segunda a Sexta, das 09h às 18h</li>
              <li>Envios com código de rastreio para todo o Brasil</li>
              <li>Garantia incondicional de 7 dias após o recebimento</li>
            </ul>
          </div>
        </div>

        {/* Formas de Pagamento (Apenas PIX ou Cartão de Crédito) e Selos de Segurança */}
        <div className={styles.badgesRow}>
          <div className={styles.paymentMethods}>
            <span className={styles.paymentTitle}>Formas de Pagamento Aceitas:</span>
            <div className={styles.cardBadges}>
              <span className={styles.cardBadge}>PIX (13% OFF)</span>
              <span className={styles.cardBadge}>Cartão de Crédito em até 12x</span>
            </div>
          </div>

          <div className={styles.securityGuarantees}>
            <span className={styles.securityItem}>🔒 Pagamento 100% Seguro SSL</span>
            <span className={styles.securityItem}>🛡️ 7 Dias de Garantia</span>
            <span className={styles.securityItem}>📦 Entrega em todo o Brasil</span>
          </div>
        </div>

        {/* Linha Final de Copyright */}
        <div className={styles.bottomBar}>
          <p>© {new Date().getFullYear()} Vellory Precision. Todos os direitos reservados.</p>
          <p className={styles.disclaimer}>
            As informações contidas neste site são de propriedade da Vellory Precision.
          </p>
        </div>
      </div>
    </footer>
  );
}
