import styles from "./index.module.css";

export default function PaymentReturnPage() {
  return (
    <section className="section page">
      <div className="container">
        <h1>Спасибо! Если оплата прошла успешно — мы свяжемся с вами.</h1>
        <p className="small">
          Если платёж не завершился — попробуйте ещё раз из личного кабинета
          банка или свяжитесь с нами в Telegram.
        </p>
      </div>
    </section>
  );
}
