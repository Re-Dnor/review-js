import styles from "./index.module.css";

export default function HowItWorks() {
  return (
    <section className={styles.section} aria-labelledby="how-title">
      <div className={styles.container}>
        <h2 id="how-title" className={styles.title}>
          Этапы интервью
        </h2>

        <div className={`${styles.grid} ${styles.cols2}`}>
          {/* 1. Бесплатная вводная — акцент */}
          <div className={`${styles.card} ${styles.accent} ${styles.span2}`}>
            <h3 className={styles.cardTitle}>
              1. Бесплатная вводная консультация{" "}
            </h3>
            <p className={styles.cardText}>
              Бесплатно. Уточняем цель и уровень, подбираем формат подготовки и
              ближайшие шаги
            </p>
          </div>

          {/* 2. Техэтап */}
          <div className={styles.card}>
            <h3 className={styles.cardTitle}>
              2. Этап посвященный hard-скиллам
            </h3>
            <p className={styles.cardText}>
              Задачи по JS/TS и React, лайвкодинг. Всё как на реальном
              собеседовании — без подсказок и фидбека
            </p>
          </div>

          {/* 3. Финалка (софты) */}
          <div className={styles.card}>
            <h3 className={styles.cardTitle}>
              3. Этап посвященный soft-скиллам
            </h3>
            <p className={styles.cardText}>
              Продуктовые и поведенческие вопросы, системное мышление,
              коммуникация
            </p>
          </div>

          {/* 4. Разбор + план */}
          <div className={`${styles.card} ${styles.span2}`}>
            <h3 className={styles.cardTitle}>4. Разбор и план развития</h3>
            <p className={styles.cardText}>
              Сильные и слабые стороны, что подтянуть, конкретные ресурсы и
              персональный план подготовки
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
