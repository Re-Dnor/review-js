import PayButton from "../pay-button";

export default function Pricing() {
  return (
    <section id="pricing" className="section">
      <div className="container">
        <h2 style={{ margin: "0 0 12px" }}>Формат и цены</h2>
        <div className="pricing">
          <div className="card priceCard accent">
            <div>
              <h3>Мок-интервью (полный пакет)</h3>
              <div className="price">20 000 ₽</div>
              <ul className="list ">
                <li>2 встречи по ~1.5 часа</li>
                <li>Технический этап: JS/TS, React, лайвкодинг</li>
                <li>Финальное интервью: роль в команде, софт-скиллы</li>
                <li>Итоговый фидбек + план подготовки</li>
              </ul>
              <PayButton />
            </div>
          </div>
          <div className="card priceCard">
            <div>
              <h3>Индивидуальные консультации</h3>
              <div className="grid">
                <div className="card" style={{ background: "#0c1219" }}>
                  <b>Frontend developer</b>
                  <div className="price" style={{ fontSize: 22 }}>
                    5 000 ₽ / час
                  </div>
                  <p className="small">
                    Разбор тем, подготовка к собеседованиям.
                  </p>
                </div>
                <div className="card" style={{ background: "#0c1219" }}>
                  <b>Tech Lead</b>
                  <div className="price" style={{ fontSize: 22 }}>
                    7 000 ₽ / час
                  </div>
                  <p className="small">
                    Архитектура, системный дизайн, рост до мидла/сеньора.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
