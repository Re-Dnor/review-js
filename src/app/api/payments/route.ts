import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const {
      amount,
      description = "Оплата услуги",
      metadata = {},
    } = await req.json();

    if (!amount || typeof amount !== "number")
      return NextResponse.json(
        { ok: false, error: "Bad amount" },
        { status: 400 }
      );

    const shopId = process.env.YOOKASSA_SHOP_ID!;
    const secret = process.env.YOOKASSA_SECRET_KEY!;
    const returnUrl = `${process.env.BASE_URL}/payment`;

    // ЮKassa требует уникальный Idempotence-Key на каждый платеж
    const idemKey = crypto.randomUUID();

    const res = await fetch("https://api.yookassa.ru/v3/payments", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Idempotence-Key": idemKey,
        // HTTP Basic: shopId:secret
        Authorization:
          "Basic " +
          Buffer.from(`${shopId}:${secret}`, "utf8").toString("base64"),
      },
      body: JSON.stringify({
        amount: { value: (amount / 100).toFixed(2), currency: "RUB" }, // копейки → рубли
        capture: true, // авто-списание после успешной оплаты
        description,
        confirmation: {
          type: "redirect",
          return_url: returnUrl,
        },
        metadata, // сюда можешь передать userId, тариф и т.п.
      }),
    });

    const data = await res.json();

    if (!res.ok) {
      return NextResponse.json(
        { ok: false, error: data },
        { status: res.status }
      );
    }

    // Вернём URL, на который надо отправить пользователя
    return NextResponse.json({
      ok: true,
      confirmationUrl: data.confirmation?.confirmation_url,
      paymentId: data.id,
      status: data.status,
    });
  } catch (e: any) {
    return NextResponse.json({ ok: false, error: String(e) }, { status: 500 });
  }
}
