import type { ReactNode } from "react";
import "./globals.css";

export const metadata = {
  title: "Мок-интервью для фронтенд-разработчиков",
  description:
    "Подготовка к техническим собеседованиям: JavaScript, TypeScript, React, лайвкодинг. Реалистичные интервью от действующих интервьюеров.",
  viewport: "width=device-width, initial-scale=1, viewport-fit=cover",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="ru">
      <body>
        <header className="header">
          <div className="container nav">
            <div className="logo">
              <span className="logoMark" aria-hidden />
              <span>MockFront</span>
            </div>
            <nav aria-label="Главное меню">
              <a
                href="#pricing"
                className="button ghost"
                style={{ padding: "10px 14px" }}
              >
                Цены
              </a>
            </nav>
          </div>
        </header>
        {children}
        <footer className="footer">
          <div className="container">
            <div>
              © {new Date().getFullYear()} MockFront. Не является офертой.
            </div>
            <div className="small">
              По запросу предоставим портфолио кейсов и подтверждения опыта.
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
