import nodemailer from "nodemailer";
import path from "node:path";

type ContactPayload = {
  name: string;
  email: string;
  phone?: string;
  message: string;
};

const requiredEnvVars = [
  "SMTP_HOST",
  "SMTP_PORT",
  "SMTP_USER",
  "SMTP_PASS",
] as const;

const BRAND = {
  name: "Zahabu Solutions",
  primary: "#19144b",
  accent: "#fabe0a",
  background: "#F7F7F7",
  muted: "#6b7280",
  siteUrl:
    process.env.NEXT_PUBLIC_SITE_URL?.trim() || "https://zahabusolutions.rw",
};

const LOGO_CID = "zahabu-logo";
const LOGO_PATH = path.join(process.cwd(), "public", "logo.jpeg");

function getMissingEnvVars() {
  return requiredEnvVars.filter((key) => !process.env[key]);
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function buildMailto(email: string) {
  const subject = encodeURIComponent(`Re: Your enquiry to ${BRAND.name}`);
  return `mailto:${encodeURIComponent(email)}?subject=${subject}`;
}

function cleanHeaderValue(value: string) {
  return value.replace(/[\r\n]/g, " ").trim();
}

export function buildHtml({ name, email, phone, message }: ContactPayload) {
  const timestamp = new Date().toLocaleString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });

  const initials = name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .toUpperCase()
    .slice(0, 2);

  const siteUrl = BRAND.siteUrl.startsWith("http")
    ? BRAND.siteUrl
    : `https://${BRAND.siteUrl}`;
  const safeName = escapeHtml(name);
  const safeEmail = escapeHtml(email);
  const safePhone = phone ? escapeHtml(phone) : "";
  const safeTimestamp = escapeHtml(timestamp);
  const safeMessage = escapeHtml(message).replace(/\n/g, "<br />");
  const safeInitials = escapeHtml(initials);
  const safeSiteUrl = escapeHtml(siteUrl);
  const replyHref = escapeHtml(buildMailto(email));
  const currentYear = new Date().getFullYear();

  return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>New Enquiry for ${BRAND.name}</title>
</head>
<body style="margin:0;padding:0;background:${BRAND.background};font-family:Chillax,'Segoe UI',Arial,sans-serif;color:${BRAND.primary};">
  <table width="100%" cellpadding="0" cellspacing="0" role="presentation" style="background:${BRAND.background};padding:32px 16px;">
    <tr>
      <td align="center">
        <table width="560" cellpadding="0" cellspacing="0" role="presentation" style="max-width:560px;width:100%;">
          <tr>
            <td style="padding:0 0 28px;">
              <table cellpadding="0" cellspacing="0" role="presentation">
                <tr>
                  <td style="width:34px;vertical-align:middle;">
                    <img src="cid:${LOGO_CID}" width="34" height="34" alt="${BRAND.name}" style="display:block;width:34px;height:34px;border-radius:7px;object-fit:cover;border:1px solid #dedee6;" />
                  </td>
                  <td style="padding-left:8px;vertical-align:middle;">
                    <p style="margin:0;color:${BRAND.primary};font-size:16px;font-weight:800;letter-spacing:0.02em;text-transform:uppercase;">${BRAND.name}</p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <tr>
            <td style="padding:0 0 20px;">
              <h1 style="margin:0;color:${BRAND.primary};font-size:32px;line-height:1.2;font-weight:800;letter-spacing:0;">New website enquiry</h1>
            </td>
          </tr>

          <tr>
            <td style="background:#eeeeef;border-radius:8px;padding:24px 28px;">
              <table width="100%" cellpadding="0" cellspacing="0" role="presentation">
                <tr>
                  <td style="padding-bottom:8px;">
                    <p style="margin:0;color:${BRAND.primary};font-size:13px;line-height:1.7;font-weight:700;">Date : ${safeTimestamp}</p>
                    <p style="margin:0;color:${BRAND.primary};font-size:13px;line-height:1.7;font-weight:700;">Written by : ${safeName}</p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <tr>
            <td style="padding:28px 0 0;">
              <p style="margin:0 0 18px;color:${BRAND.primary};font-size:13px;line-height:1.7;">Dear ${BRAND.name} team,</p>
              <p style="margin:0 0 18px;color:${BRAND.primary};font-size:13px;line-height:1.7;">${safeMessage}</p>
              <p style="margin:0;color:${BRAND.primary};font-size:13px;line-height:1.7;">Regards,<br />${safeName}</p>
            </td>
          </tr>

          <tr>
            <td style="padding:34px 0 16px;">
              <table width="100%" cellpadding="0" cellspacing="0" role="presentation" style="background:#ffffff;border:1px solid #dedee6;border-radius:8px;">
                <tr>
                  <td style="padding:20px 22px;width:48px;vertical-align:middle;">
                    <div style="width:42px;height:42px;border-radius:50%;background:#fff1b8;border:1px solid #f7d95d;text-align:center;line-height:42px;color:${BRAND.primary};font-weight:800;font-size:14px;">${safeInitials}</div>
                  </td>
                  <td style="padding:20px 10px 20px 0;vertical-align:middle;">
                    <p style="margin:0;color:${BRAND.primary};font-size:15px;font-weight:800;line-height:1.3;">${safeName}</p>
                    <p style="margin:2px 0 0;color:${BRAND.muted};font-size:12px;line-height:1.5;">
                      <a href="mailto:${safeEmail}" style="color:${BRAND.muted};text-decoration:none;">${safeEmail}</a>${safePhone ? ` &nbsp;|&nbsp; ${safePhone}` : " &nbsp;|&nbsp; Phone not provided"}
                    </p>
                  </td>
                  <td align="right" style="padding:20px 22px 20px 8px;vertical-align:middle;">
                    <a href="${replyHref}" style="display:inline-block;border:1px solid ${BRAND.primary};border-radius:6px;padding:10px 14px;color:${BRAND.primary};font-size:12px;font-weight:800;text-decoration:none;">Reply</a>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <tr>
            <td style="padding-top:8px;">
              <table cellpadding="0" cellspacing="0" role="presentation">
                <tr>
                  <td style="width:20px;vertical-align:middle;color:#111827;font-size:22px;line-height:1;">&#8599;</td>
                  <td style="padding-left:8px;vertical-align:middle;">
                    <a href="${safeSiteUrl}" style="color:#111827;font-size:20px;font-weight:800;text-decoration:none;">Visit site</a>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <tr>
            <td style="padding:16px 0 0;text-align:center;">
              <p style="margin:2px 0 0;color:#b7bac4;font-size:10px;line-height:1.6;">Copyright ${currentYear} ${BRAND.name}. All rights reserved.</p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>
  `.trim();
}

export async function POST(request: Request) {
  const missingEnvVars = getMissingEnvVars();

  if (missingEnvVars.length > 0) {
    return Response.json(
      {
        error: `Missing email configuration: ${missingEnvVars.join(", ")}`,
      },
      { status: 500 },
    );
  }

  let payload: ContactPayload;

  try {
    payload = (await request.json()) as ContactPayload;
  } catch {
    return Response.json({ error: "Invalid request body." }, { status: 400 });
  }

  const name = payload.name?.trim();
  const email = payload.email?.trim();
  const phone = payload.phone?.trim();
  const message = payload.message?.trim();

  if (!name || !email || !message) {
    return Response.json(
      { error: "Name, email, and message are required." },
      { status: 400 },
    );
  }

  const smtpPort = Number(process.env.SMTP_PORT);

  if (Number.isNaN(smtpPort)) {
    return Response.json(
      { error: "SMTP_PORT must be a valid number." },
      { status: 500 },
    );
  }

  const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: smtpPort,
  secure: smtpPort === 465,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

  const recipient = process.env.CONTACT_TO_EMAIL || process.env.SMTP_USER;
  const fromAddress =
    process.env.CONTACT_FROM_EMAIL || process.env.SMTP_USER || "";
  const fromName = cleanHeaderValue(
    process.env.MAIL_FROM_NAME || "ZAHABU-SOLUTION",
  );

  try {
    await transporter.sendMail({
      to: recipient,
      from: {
        name: fromName,
        address: fromAddress,
      },
      replyTo: email,
      subject: `Website Enquiry from ${name}`,
      text: [
        "Hello Zahabu Solutions,",
        "",
        `Name: ${name}`,
        `Email: ${email}`,
        `Phone: ${phone || "Not provided"}`,
        "",
        "Message:",
        message,
      ].join("\n"),
      html: buildHtml({ name, email, phone, message }),
      attachments: [
        {
          filename: "logo.jpeg",
          path: LOGO_PATH,
          cid: LOGO_CID,
        },
      ],
    });
  } catch (error) {
    console.error("Failed to send contact email:", error);

    return Response.json(
      { error: "Failed to send email. Please try again later." },
      { status: 500 },
    );
  }

  return Response.json({ ok: true });
}
