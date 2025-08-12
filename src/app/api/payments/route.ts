import { NextResponse } from "next/server";

const PRICE = 2000000; // 20 000 ₽

export async function POST(req: Request) {
  try {
    const { description = "Оплата услуги", metadata = {} } = await req.json();

    // >>> ВАЖНО: игнорируем любые amount из клиента <<<
    const amountKopeks = PRICE;

    const shopId = process.env.YOOKASSA_SHOP_ID!;
    const secret = process.env.YOOKASSA_SECRET_KEY!;
    const returnUrl = `${process.env.BASE_URL}/payment`;

    const idemKey = crypto.randomUUID();

    const res = await fetch("https://api.yookassa.ru/v3/payments", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Idempotence-Key": idemKey,
        Authorization:
          "Basic " +
          Buffer.from(`${shopId}:${secret}`, "utf8").toString("base64"),
      },
      body: JSON.stringify({
        amount: { value: (amountKopeks / 100).toFixed(2), currency: "RUB" },
        capture: true,
        description,
        confirmation: { type: "redirect", return_url: returnUrl },
        metadata,
      }),
    });

    const data = await res.json();

    if (!res.ok) {
      return NextResponse.json(
        { ok: false, error: data },
        { status: res.status }
      );
    }

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
