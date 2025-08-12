"use client";
import { useState, useEffect, useRef } from "react";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

// простые хелперы
const clamp = (s: string, max: number) => s.slice(0, max);
const isValidName = (s: string) => s.length >= 2 && s.length <= 80;
const isValidTelegram = (s: string) => /^@?[A-Za-z0-9_]{3,32}$/.test(s);

export default function LeadForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "ok" | "error">(
    "idle"
  );
  const [errorMsg, setErrorMsg] = useState("");
  const sentRef = useRef(false); // антидубль на случай быстрых кликов

  useEffect(() => {
    if (status !== "loading") sentRef.current = false;
  }, [status]);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const form = e.currentTarget;
    const fd = new FormData(form);

    // honeypot (скрытое поле): если заполнено — игнорим
    if (String(fd.get("company") || "")) {
      setStatus("ok");
      form.reset();
      return;
    }

    let name = clamp(String(fd.get("name") || "").trim(), 80);
    let telegram = String(fd.get("telegram") || "").trim();

    // client-side валидация
    if (!isValidName(name)) {
      setErrorMsg("Имя должно быть от 2 до 80 символов.");
      setStatus("error");
      return;
    }
    if (!isValidTelegram(telegram)) {
      setErrorMsg("Ник в Telegram — 3–32 символа: буквы/цифры/_. Можно без @.");
      setStatus("error");
      return;
    }

    if (!telegram.startsWith("@")) telegram = "@" + telegram;

    setStatus("loading");
    setErrorMsg("");

    const { error } = await supabase
      .from("contacts")
      .insert([{ name, telegram }]);

    if (error) {
      if ((error as any).code === "23505") {
        setErrorMsg("Такой Telegram уже есть в списке.");
      } else {
        setErrorMsg(error.message || "Не удалось сохранить. Попробуйте позже.");
      }
      setStatus("error");
      return;
    }

    form.reset();
    setStatus("ok");
  }

  return (
    <section id="entry" className="section">
      <div className="container">
        <h2 style={{ margin: "0 0 8px" }}>Записаться на бесплатную вводную</h2>
        <p className="small">
          15–30 минут. Разберём ваш запрос и подберём формат подготовки.
        </p>

        <form
          onSubmit={onSubmit}
          className="grid"
          style={{ gap: 12, marginTop: 12 }}
        >
          {/* Honeypot (скрытое поле) */}
          <input
            type="text"
            name="company"
            tabIndex={-1}
            autoComplete="off"
            className="visuallyHidden"
            aria-hidden="true"
          />

          <div className="formRow cols-2">
            <div>
              <label htmlFor="name">Ваше имя</label>
              <input
                id="name"
                name="name"
                required
                placeholder="Иван"
                autoComplete="name"
              />
            </div>
            <div>
              <label htmlFor="telegram">Telegram</label>
              <input
                id="telegram"
                name="telegram"
                required
                placeholder="@nickname"
              />
            </div>
          </div>

          <div
            style={{
              display: "flex",
              gap: 10,
              alignItems: "center",
              flexWrap: "wrap",
            }}
          >
            <button
              disabled={status === "loading"}
              className="button primary"
              type="submit"
            >
              {status === "loading" ? "Отправляем…" : "Отправить заявку"}
            </button>
            {status === "ok" && (
              <span role="status" className="small">
                Спасибо! Заявка сохранена.
              </span>
            )}
            {status === "error" && (
              <span
                role="alert"
                className="small"
                style={{ color: "var(--danger)" }}
              >
                {errorMsg || "Не вышло отправить. Попробуйте ещё раз."}
              </span>
            )}
          </div>
        </form>

        <p className="small" style={{ marginTop: 8 }}>
          Отправляя данные, вы соглашаетесь на обработку персональных данных.
          Никакого спама.
        </p>
      </div>
    </section>
  );
}
