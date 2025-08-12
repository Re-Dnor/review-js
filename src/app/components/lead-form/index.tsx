"use client";
import { useState } from "react";
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseAnon = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;
const supabase = createClient(supabaseUrl, supabaseAnon);

export default function LeadForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "ok" | "error">(
    "idle"
  );

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget; // <— фикс: сохраняем форму сразу
    const fd = new FormData(form);
    const name = String(fd.get("name") || "").trim();
    let telegram = String(fd.get("telegram") || "").trim();
    if (!name || !telegram) return;

    if (!telegram.startsWith("@") && !telegram.startsWith("http")) {
      telegram = "@" + telegram;
    }

    setStatus("loading");

    const { error } = await supabase
      .from("contacts")
      .insert([{ name, telegram }]); // можно добавить .select() если нужно вернуть запись

    if (error) {
      console.error(error);
      setStatus("error");
      return;
    }

    form.reset(); // безопасно — form сохранена до await
    setStatus("ok");
  }

  return (
    <section id="lead" className="section">
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
                Не вышло отправить. Напишите нам в Telegram.
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
