import Illustration from "./illustration";

export default function Hero() {
  return (
    <section className="section hero">
      <div className="container">
        <div className="kv">
          <div className="kvInner">
            <div>
              <span className="badge">
                Реализм собеседования • Честный фидбек
              </span>
              <h1>
                Пройдите техническое собеседование… до того, как пройдёте его на
                самом деле
              </h1>
              <p>
                Мок-интервью для фронтенд-разработчиков: JavaScript, TypeScript,
                React, лайвкодинг. Два этапа, как в реальных компаниях.
              </p>
              <div className="cta">
                <a className="button primary" href="#lead">
                  Записаться на вводную
                </a>
                <a className="button ghost" href="#pricing">
                  Посмотреть цены
                </a>
              </div>
              <div className="kvStats">
                <div className="stat">
                  <b>70+ собеседований</b>
                  <span>реальных тех. интервью</span>
                </div>
                <div className="stat">
                  <b>2 интервьюера</b>
                  <span>инженер + техлид</span>
                </div>
                <div className="stat">
                  <b>3 часа практики</b>
                  <span>за 2 встречи</span>
                </div>
              </div>
            </div>
            <Illustration />
          </div>
        </div>
      </div>
    </section>
  );
}
