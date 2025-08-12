"use client";

import { scrollToId } from "@/app/utils";

export const Header = () => (
  <header className="header">
    <div className="container nav">
      <div className="logo">
        <span className="logoMark" aria-hidden />
        <span style={{ userSelect: "none" }}>Review JS</span>
      </div>
      <nav aria-label="Главное меню">
        <a
          className="button ghost"
          onClick={() => scrollToId("pricing")}
          style={{ padding: "10px 14px" }}
        >
          Стоимость услуг
        </a>
      </nav>
    </div>
  </header>
);
