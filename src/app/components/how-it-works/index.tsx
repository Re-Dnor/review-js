export default function HowItWorks() {
  return (
    <section className="section">
      <div className="container">
        <h2 style={{ margin: "0 0 12px" }}>Как это проходит</h2>
        <div className="grid cols-2">
          <div className="card">
            <h3>1. Вводная (15–30 мин)</h3>
            <p>Бесплатно. Узнаём цель и уровень, собираем ожидания.</p>
          </div>
          <div className="card">
            <h3>2. Технический этап (≈1.5 ч)</h3>
            <p>
              JS/TS, React, лайвкодинг на задачах уровня LeetCode. Без фидбека —
              как в реальности.
            </p>
          </div>
          <div className="card">
            <h3>3. Финальный этап (≈1.5 ч)</h3>
            <p>
              Поведенческие и продуктовые вопросы, системное мышление,
              коммуникация.
            </p>
          </div>
          <div className="card">
            <h3>4. Развёрнутый фидбек</h3>
            <p>
              Что ок, что подтянуть, конкретные ресурсы и план подготовки на 2–4
              недели.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
