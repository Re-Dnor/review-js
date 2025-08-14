import type { ReactNode } from "react";
import Script from "next/script";
import "./globals.css";

const siteUrl = "https://reviewjs.ru";

export const metadata = {
  title: "Мок-интервью для фронтенд-разработчиков | Подготовка к собеседованию",
  description:
    "Подготовка к собеседованиям для фронтенд-разработчиков: JavaScript, TypeScript, React, лайвкодинг, софт-скиллы. Реалистичные интервью от действующих интервьюеров.",
  keywords:
    "мок интервью, фронтенд собеседование, подготовка к собеседованию, JavaScript, TypeScript, React, live coding, как стать фронтенд разработчиком, работа фронтенд разработчик, курсы фронтенд разработчика",
  viewport: "width=device-width, initial-scale=1, viewport-fit=cover",
  icons: {
    icon: "/logo.png",
  },
  openGraph: {
    title: "Мок-интервью для фронтенд-разработчиков | ReviewJS",
    description:
      "Реалистичная подготовка к собеседованию: JavaScript, TypeScript, React, лайвкодинг. Отработка технических и софт-скиллов с опытными интервьюерами.",
    url: siteUrl,
    siteName: "ReviewJS",
    locale: "ru_RU",
    type: "website",
  },
};

// JSON-LD для поисковиков
const orgJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "ReviewJS",
  url: siteUrl,
  logo: `${siteUrl}/logo.png`,
  // sameAs: [
  //   "https://t.me/reviewjs", // если есть соцсети, добавь сюда
  // ],
};

const webSiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  url: siteUrl,
  name: "ReviewJS — Мок-интервью для фронтенд-разработчиков",
  potentialAction: {
    "@type": "SearchAction",
    target: `${siteUrl}/?q={search_term_string}`,
    "query-input": "required name=search_term_string",
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="ru">
      <head>
        {/* JSON-LD разметка */}
        <Script
          id="ld-org"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }}
        />
        <Script
          id="ld-website"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(webSiteJsonLd) }}
        />
      </head>
      <body>
        {children}
        <footer className="footer">
          <div className="container footer__inner">
            <div className="footer__copy">
              © {new Date().getFullYear()} ReviewJS. Публичная оферта и политика
              конфиденциальности доступны на сайте.
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
