"use client";

import Illustration from "./illustration";

import { scrollToId } from "@/app/utils";

export default function Hero() {
  return (
    <section className="section hero">
      <div className="container">
        <div className="kv">
          <div className="kvInner">
            <div>
              <span className="badge">
                Реализм собеседования • Подробный фидбек
              </span>
              <h1>Проверка навыков в формате реального интервью</h1>
              <p>
                Мок-интервью для фронтенд-разработчиков: JavaScript, TypeScript,
                React, Livecoding. Два этапа — оценка технических знаний и
                навыков командного взаимодействия
              </p>
              <div className="cta">
                <a
                  onClick={() => scrollToId("entry")}
                  className="button primary"
                >
                  Записаться на вводную
                </a>
                <a className="button ghost" onClick={() => scrollToId("faq")}>
                  Частые вопросы
                </a>
              </div>
              <div className="kvStats">
                <div className="stat">
                  <b>100+ собеседований</b>
                  <span>реальных тех. интервью</span>
                </div>
                <div className="stat">
                  <b>2 интервьюера</b>
                  <span>разработчик + тех. лид</span>
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
