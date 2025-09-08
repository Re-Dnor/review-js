"use client";

import Illustration from "./illustration";

import { scrollToId } from "@/app/utils";
import cn from "classnames";

import styles from "./index.module.css";

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
              <h1>Подготовка, которая имитирует реальное собеседование</h1>
              <p>
                Сначала — технический этап: основы JS/TS, рабочие кейсы с React,
                лайвкодинг. Затем — финальное интервью с проверкой коммуникации
                и софт-скиллов. В завершение — разбор сильных и слабых сторон и
                персональный план развития.
              </p>
              <div className="cta">
                <a
                  onClick={() => scrollToId("entry")}
                  className={cn("button", "primary", styles.width)}
                >
                  Записаться
                </a>
                <a
                  className={cn("button", "ghost", styles.width)}
                  onClick={() => scrollToId("faq")}
                >
                  FAQ
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
