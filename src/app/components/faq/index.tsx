export default function FAQ() {
  const data = [
    {
      q: "Я совсем джун. Подойдёт ли формат?",
      a: "Да. Лучше, если знакомы с базовым JS/HTML/CSS. Мы подстроим уровень вопросов и дадим план, как закрыть пробелы.",
    },
    {
      q: "Можно пройти только технический этап?",
      a: "Можно, но финалка даёт ценную обратную связь по софт-скиллам и коммуникации, поэтому рекомендуем два этапа.",
    },
    {
      q: "Гарантируете оффер?",
      a: "Нет гарантий оффера — это зависит от множества факторов. Мы гарантируем реалистичную практику и честный разбор сильных/слабых сторон.",
    },
  ];
  return (
    <section id="faq" className="section">
      <div className="container grid">
        <h2 style={{ margin: "0 0 12px" }}>FAQ</h2>
        <div className="grid">
          {data.map((item, i) => (
            <div key={i} className="faqItem">
              <p className="faqQ">{item.q}</p>
              <p className="faqA">{item.a}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
