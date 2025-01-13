import { NextResponse } from "next/server";
import Nodemailer from "nodemailer";
import { MailtrapTransport } from "mailtrap";
import { emailTemplate } from "../../../../email/template";

const TOKEN = process.env.MAILTRAP_API!;

const transport = Nodemailer.createTransport(
  MailtrapTransport({
    token: TOKEN,
  })
);

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { organization, name, email, phone, business } = body;

    if (!organization || !name || !email || !phone) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    const sender = {
      address: "hello@visyntro.com",
      name: "Registration Form",
    };
    const recipients = ["alexdrive790@gmail.com", email];

    const emailContent = {
      from: sender,
      to: recipients,
      subject: "New Registration Form Submission",
      html: emailTemplate
        .replace("{name}", name)
        .replace("{organization}", organization)
        .replace("{email}", email)
        .replace("{phone}", phone)
        .replace("{business}", business || "N/A")
        .replace("{name}", name),
      category: "Registration",
    };

    await transport.sendMail(emailContent);

    return NextResponse.json(
      { message: "Email sent successfully!" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      { error: "Failed to send email. Please try again later." },
      { status: 500 }
    );
  }
}
