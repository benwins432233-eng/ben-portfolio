import { Resend } from "resend";
import { buildContactEmail } from "../src/lib/email/contactTemplate.js";

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req: any, res: any) {
    if (req.method !== "POST") {
        return res.status(405).json({ error: "Method Not Allowed" });
    }

    try {
        const data = req.body;

        const email = buildContactEmail(data);

        await resend.emails.send({
            from: "Portfolio Support <support@esam.jo3.org>",
            to: "benwins432233@gmail.com",
            replyTo: data.email,
            subject: email.subject,
            html: email.html,
        });

        return res.status(200).json({ success: true });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: "Server error" });
    }
}