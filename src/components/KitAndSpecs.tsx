import Image from "next/image";
import { media, kitItems, technicalSpecs } from "@/data/product";
import styles from "./KitAndSpecs.module.css";

export default function KitAndSpecs() {
  return (
    <section id="kit" className={styles.section}>
      <div className="container">
        <div className="section-header">
          <span className="section-tagline">Unboxing Completo</span>
          <h2 className="section-title">O que vem na sua caixa</h2>
          <p className="section-subtitle">
            Tudo o que você precisa para uma depilação facial precisa, segura e portátil está incluso no kit.
          </p>
        </div>

        <div className={styles.grid}>
          {/* Imagem do Kit Completo com proporção preservada */}
          <div className={styles.imageColumn}>
            <div className={styles.kitCard}>
              <Image
                src={media.kitCompleto.src}
                alt={media.kitCompleto.alt}
                width={media.kitCompleto.width}
                height={media.kitCompleto.height}
                className={styles.kitImg}
              />
              <div className={styles.kitTag}>
                <span>Kit Completo</span>
              </div>
            </div>
          </div>

          {/* Lista de Itens + Ficha Técnica */}
          <div className={styles.contentColumn}>
            {/* Lista dos itens inclusos */}
            <div className={styles.itemsBox}>
              <h3 className={styles.boxTitle}>Itens inclusos no pacote:</h3>
              <ul className={styles.itemsList}>
                {kitItems.map((item) => (
                  <li key={item.name} className={styles.itemRow}>
                    <span className={styles.checkIcon}>✓</span>
                    <div>
                      <strong className={styles.itemName}>{item.name}</strong>
                      <p className={styles.itemDesc}>{item.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            {/* Ficha técnica resumida */}
            <div className={styles.specsBox}>
              <h3 className={styles.boxTitle}>Ficha Técnica Detalhada:</h3>
              <dl className={styles.specsList}>
                {technicalSpecs.map((spec) => (
                  <div key={spec.label} className={styles.specRow}>
                    <dt className={styles.specLabel}>{spec.label}</dt>
                    <dd className={styles.specValue}>{spec.value}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
