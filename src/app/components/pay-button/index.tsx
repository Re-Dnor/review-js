"use client";
import { useState } from "react";

import styles from "./index.module.css";
import { track } from "@vercel/analytics";

export default function PayButton() {
  const [loading, setLoading] = useState(false);

  async function onPay() {
    if (loading) return;

    setLoading(true);
    track("Клик на кнопку оплаты");
    try {
      const res = await fetch("/api/payments", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          description: "Мок-интервью (2 этапа)",
          metadata: { product: "mock_interview_2_steps" },
        }),
      });

      const data = await res.json();
      if (!res.ok || !data.confirmationUrl)
        throw new Error("create payment failed");

      // Редиректим пользователя на страницу оплаты ЮKassa
      window.location.href = data.confirmationUrl;
    } catch (e) {
      console.error(e);
      alert("Не удалось начать оплату. Попробуйте позже.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className={styles.pay}>
      <button className="button primary pay" type="button" onClick={onPay}>
        Оплатить
      </button>

      <p className={styles.note}>
        Нажимая «Оплатить», вы принимаете условия{" "}
        <a href="/oferta" target="_blank" rel="noopener noreferrer">
          Публичной оферты
        </a>
        .
      </p>
    </div>
  );
}
