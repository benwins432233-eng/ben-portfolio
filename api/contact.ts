import { Resend } from "resend";
import { buildContactEmail } from "../src/lib/email/contactTemplate";

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req: Request) {
    if (req.method !== "POST") {
        return new Response("Method Not Allowed", { status: 405 });
    }

    const data = await req.json();
    const email = buildContactEmail(data);

    await resend.emails.send({
        from: "Portfolio support@esam.jo3.org",
        to: ["benwins432233@gmail.com"],
        replyTo: data.email,
        subject: email.subject,
        html: email.html,
    });

    return new Response(JSON.stringify({ success: true }), { status: 200 });
}