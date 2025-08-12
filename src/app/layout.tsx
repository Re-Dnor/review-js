import type { ReactNode } from "react";
import "./globals.css";
import { scrollToId } from "./utils";

export const metadata = {
  title: "Мок-интервью для фронтенд-разработчиков",
  description:
    "Подготовка к техническим собеседованиям: JavaScript, TypeScript, React, лайвкодинг. Реалистичные интервью от действующих интервьюеров.",
  viewport: "width=device-width, initial-scale=1, viewport-fit=cover",
  icons: {
    icon: "/logo.png",
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="ru">
      <body>
        <header className="header">
          <div className="container nav">
            <div className="logo">
              <span className="logoMark" aria-hidden />
              <span style={{ userSelect: "none" }}>Review JS</span>
            </div>
            <nav aria-label="Главное меню">
              <a
                className="button ghost"
                href="#pricing"
                style={{ padding: "10px 14px" }}
              >
                Стоимость услуг
              </a>
            </nav>
          </div>
        </header>
        {children}
        <footer className="footer">
          <div className="container">
            <div>
              © {new Date().getFullYear()} Review JS. Не является офертой.
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
