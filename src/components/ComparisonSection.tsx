import { comparisonData } from "@/data/product";
import styles from "./ComparisonSection.module.css";

export default function ComparisonSection() {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className="section-header">
          <span className="section-tagline">Comparativo Exclusivo</span>
          <h2 className="section-title">
            Por que trocar a pinça e a cera pela Caneta Depiladora Facial?
          </h2>
          <p className="section-subtitle">
            Veja a diferença entre os métodos convencionais agressivos e a tecnologia de micro-lâminas que protege a sua pele.
          </p>
        </div>

        {/* ============================================================ */}
        {/*  VERSÃO DESKTOP: TABELA COMPLETA                             */}
        {/* ============================================================ */}
        <div className={styles.tableWrapper}>
          <table className={styles.table}>
            <thead>
              <tr>
                <th className={styles.thFeature}>Critério</th>
                <th className={styles.thThisProduct}>
                  <div className={styles.productHeader}>
                    <span className={styles.starIcon}>✦</span>
                    <strong>Caneta Depiladora</strong>
                    <span className={styles.badgeHighlight}>Recomendado</span>
                  </div>
                </th>
                <th className={styles.thOther}>Pinça Tradicional</th>
                <th className={styles.thOther}>Cera Quente</th>
                <th className={styles.thOther}>Lâmina Comum</th>
              </tr>
            </thead>
            <tbody>
              {comparisonData.map((row, i) => (
                <tr key={row.feature} className={i % 2 === 0 ? styles.trEven : ""}>
                  <td className={styles.tdFeature}>{row.feature}</td>
                  <td className={styles.tdThisProduct}>
                    <span className={styles.checkIcon}>✓</span>
                    <strong>{row.thisProduct}</strong>
                  </td>
                  <td className={styles.tdOther}>
                    <span className={styles.crossIcon}>✕</span>
                    {row.tweezers}
                  </td>
                  <td className={styles.tdOther}>
                    <span className={styles.crossIcon}>✕</span>
                    {row.wax}
                  </td>
                  <td className={styles.tdOther}>
                    <span className={styles.crossIcon}>✕</span>
                    {row.razor}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* ============================================================ */}
        {/*  VERSÃO MOBILE: CARDS SEM SCROLL TRAP HORIZONTAL (UI/UX)    */}
        {/* ============================================================ */}
        <div className={styles.mobileCardsList}>
          {comparisonData.map((row) => (
            <div key={row.feature} className={styles.mobileCard}>
              <h3 className={styles.mobileFeatureTitle}>{row.feature}</h3>

              {/* Destaque da Caneta Depiladora */}
              <div className={styles.mobileWinnerBox}>
                <div className={styles.winnerHeader}>
                  <span className={styles.checkIconMobile}>✓</span>
                  <strong>Caneta Depiladora</strong>
                  <span className={styles.winnerBadge}>Ideal</span>
                </div>
                <p className={styles.winnerResult}>{row.thisProduct}</p>
              </div>

              {/* Métodos Tradicionais em Linha */}
              <div className={styles.mobileOthersGrid}>
                <div className={styles.otherItem}>
                  <span className={styles.otherLabel}>Pinça</span>
                  <span className={styles.otherValue}>
                    <span className={styles.crossIconMobile}>✕</span>
                    {row.tweezers}
                  </span>
                </div>
                <div className={styles.otherItem}>
                  <span className={styles.otherLabel}>Cera</span>
                  <span className={styles.otherValue}>
                    <span className={styles.crossIconMobile}>✕</span>
                    {row.wax}
                  </span>
                </div>
                <div className={styles.otherItem}>
                  <span className={styles.otherLabel}>Lâmina</span>
                  <span className={styles.otherValue}>
                    <span className={styles.crossIconMobile}>✕</span>
                    {row.razor}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Banner de Economia Real Anual */}
        <div className={styles.savingsBanner}>
          <div className={styles.savingsIcon}>💡</div>
          <div className={styles.savingsContent}>
            <strong className={styles.savingsTitle}>
              O aparelho se paga logo nos primeiros 30 dias de uso:
            </strong>
            <p className={styles.savingsText}>
              Uma ida ao salão a cada 15 dias para buço e sobrancelha custa em média R$ 50 a R$ 80 por mês (mais de R$ 840 ao ano). Com um investimento único de apenas <strong>R$ 89,90 no PIX</strong> ou <strong>12x de R$ 9,33</strong>, você economiza dinheiro, ganha horas livres e cuida da sua pele sem dor e sem flacidez.
            </p>
          </div>
        </div>

        <div className={styles.ctaBottom}>
          <a href="#produto" className={styles.buttonAction}>
            Quero Minha Caneta Depiladora Sem Dor
          </a>
        </div>
      </div>
    </section>
  );
}
