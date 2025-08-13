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
        {children}
        <footer className="footer">
          <div className="container footer__inner">
            <div className="footer__copy">
              © {new Date().getFullYear()} Review JS. Публичная оферта и
              политика конфиденциальности доступны на сайте.
            </div>
            <div className="footer__links">
              <a href="/oferta" target="_blank" rel="noopener noreferrer">
                Публичная оферта
              </a>
              <span className="footer__divider">|</span>
              <a href="/privacy" target="_blank" rel="noopener noreferrer">
                Политика конфиденциальности
              </a>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
