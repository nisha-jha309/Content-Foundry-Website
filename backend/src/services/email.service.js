import nodemailer from "nodemailer";

const escapeHtml = (value = "") =>
    String(value).replace(/[&<>"']/g, (char) => {
        const entities = {
            "&": "&amp;",
            "<": "&lt;",
            ">": "&gt;",
            '"': "&quot;",
            "'": "&#39;",
        };

        return entities[char];
    });

const getTransporter = () => {
    const {
        SMTP_HOST,
        SMTP_PORT,
        SMTP_SECURE,
        SMTP_USER,
        SMTP_PASS,
    } = process.env;

    if (!SMTP_HOST || !SMTP_PORT || !SMTP_USER || !SMTP_PASS) {
        throw new Error("Email SMTP configuration is incomplete.");
    }

    return nodemailer.createTransport({
        host: SMTP_HOST,
        port: Number(SMTP_PORT),
        secure: SMTP_SECURE === "true",
        auth: {
            user: SMTP_USER,
            pass: SMTP_PASS,
        },
        connectionTimeout: 10000,
        greetingTimeout: 10000,
        socketTimeout: 15000,
    });
};


// ======================================================
// PROJECT ENQUIRY EMAIL
// ======================================================

export const sendProjectEnquiryNotification = async (enquiry) => {
    const { ADMIN_EMAIL, SMTP_USER } = process.env;

    if (!ADMIN_EMAIL) {
        throw new Error(
            "ADMIN_EMAIL is missing from environment variables."
        );
    }

    const transporter = getTransporter();

    const name = escapeHtml(enquiry.name);
    const company = escapeHtml(enquiry.company);
    const email = escapeHtml(enquiry.email);
    const phone = escapeHtml(enquiry.phone);
    const service = escapeHtml(enquiry.service);
    const message = escapeHtml(
        enquiry.message || "No message provided"
    );

    await transporter.sendMail({
        from: `"Content Foundry Website" <${SMTP_USER}>`,
        to: ADMIN_EMAIL,
        replyTo: enquiry.email,
        subject: `New Project Enquiry — ${enquiry.name}`,

        text: [
            "New project enquiry received",
            "",
            `Name: ${enquiry.name}`,
            `Company: ${enquiry.company}`,
            `Email: ${enquiry.email}`,
            `Phone: ${enquiry.phone}`,
            `Service: ${enquiry.service}`,
            `Message: ${enquiry.message || "No message provided"}`,
        ].join("\n"),

        html: `
            <div style="font-family:Arial,sans-serif;max-width:600px;margin:auto;color:#222">

                <h2 style="background:#222;color:#fff;padding:20px">
                    New Project Enquiry
                </h2>

                <p>
                    A new enquiry was submitted through
                    the Content Foundry website.
                </p>

                <table style="width:100%;border-collapse:collapse">

                    <tr>
                        <td style="padding:10px;border-bottom:1px solid #ddd">
                            <b>Name</b>
                        </td>

                        <td style="padding:10px;border-bottom:1px solid #ddd">
                            ${name}
                        </td>
                    </tr>

                    <tr>
                        <td style="padding:10px;border-bottom:1px solid #ddd">
                            <b>Company</b>
                        </td>

                        <td style="padding:10px;border-bottom:1px solid #ddd">
                            ${company}
                        </td>
                    </tr>

                    <tr>
                        <td style="padding:10px;border-bottom:1px solid #ddd">
                            <b>Email</b>
                        </td>

                        <td style="padding:10px;border-bottom:1px solid #ddd">
                            ${email}
                        </td>
                    </tr>

                    <tr>
                        <td style="padding:10px;border-bottom:1px solid #ddd">
                            <b>Phone</b>
                        </td>

                        <td style="padding:10px;border-bottom:1px solid #ddd">
                            ${phone}
                        </td>
                    </tr>

                    <tr>
                        <td style="padding:10px;border-bottom:1px solid #ddd">
                            <b>Service</b>
                        </td>

                        <td style="padding:10px;border-bottom:1px solid #ddd">
                            ${service}
                        </td>
                    </tr>

                    <tr>
                        <td style="padding:10px;border-bottom:1px solid #ddd">
                            <b>Message</b>
                        </td>

                        <td style="padding:10px;border-bottom:1px solid #ddd;white-space:pre-wrap">
                            ${message}
                        </td>
                    </tr>

                </table>

            </div>
        `,
    });
};


// ======================================================
// WHITE PAPER — ADMIN EMAIL
// ======================================================

export const sendWhitePaperAdminNotification = async (lead) => {
    const { ADMIN_EMAIL, SMTP_USER } = process.env;

    if (!ADMIN_EMAIL) {
        throw new Error(
            "ADMIN_EMAIL is missing from environment variables."
        );
    }

    const transporter = getTransporter();

    const name = escapeHtml(lead.name);
    const company = escapeHtml(lead.company);
    const email = escapeHtml(lead.email);
    const phone = escapeHtml(
        lead.phone || "Not provided"
    );

    const marketingConsent =
        lead.emailPermission ? "Yes" : "No";

    const source = escapeHtml(
        lead.source || "Website—Hero White Paper"
    );

    await transporter.sendMail({
        from: `"Content Foundry Website" <${SMTP_USER}>`,

        to: ADMIN_EMAIL,

        replyTo: lead.email,

        subject:
            `New White Paper Request — ${lead.name}`,

        text: [
            "New White Paper Request",
            "",
            `Name: ${lead.name}`,
            `Company: ${lead.company}`,
            `Email: ${lead.email}`,
            `Phone: ${lead.phone || "Not provided"}`,
            `Marketing consent: ${marketingConsent}`,
            `Source: ${lead.source || "Website—Hero White Paper"}`,
        ].join("\n"),

        html: `
            <div style="font-family:Arial,sans-serif;max-width:600px;margin:auto;color:#222">

                <h2 style="background:#222;color:#fff;padding:20px">
                    New White Paper Request
                </h2>

                <table style="width:100%;border-collapse:collapse">

                    <tr>
                        <td style="padding:10px;border-bottom:1px solid #ddd">
                            <b>Name</b>
                        </td>

                        <td style="padding:10px;border-bottom:1px solid #ddd">
                            ${name}
                        </td>
                    </tr>

                    <tr>
                        <td style="padding:10px;border-bottom:1px solid #ddd">
                            <b>Company</b>
                        </td>

                        <td style="padding:10px;border-bottom:1px solid #ddd">
                            ${company}
                        </td>
                    </tr>

                    <tr>
                        <td style="padding:10px;border-bottom:1px solid #ddd">
                            <b>Email</b>
                        </td>

                        <td style="padding:10px;border-bottom:1px solid #ddd">
                            ${email}
                        </td>
                    </tr>

                    <tr>
                        <td style="padding:10px;border-bottom:1px solid #ddd">
                            <b>Phone</b>
                        </td>

                        <td style="padding:10px;border-bottom:1px solid #ddd">
                            ${phone}
                        </td>
                    </tr>

                    <tr>
                        <td style="padding:10px;border-bottom:1px solid #ddd">
                            <b>Marketing consent</b>
                        </td>

                        <td style="padding:10px;border-bottom:1px solid #ddd">
                            ${marketingConsent}
                        </td>
                    </tr>

                    <tr>
                        <td style="padding:10px;border-bottom:1px solid #ddd">
                            <b>Source</b>
                        </td>

                        <td style="padding:10px;border-bottom:1px solid #ddd">
                            ${source}
                        </td>
                    </tr>

                </table>

            </div>
        `,
    });
};


// ======================================================
// WHITE PAPER — USER EMAIL
// ======================================================

export const sendWhitePaperUserEmail = async ({
    lead,
    downloadUrl,
}) => {
    const { SMTP_USER } = process.env;

    if (!SMTP_USER) {
        throw new Error(
            "SMTP_USER is missing from environment variables."
        );
    }

    const transporter = getTransporter();

    const name = escapeHtml(lead.name);

    await transporter.sendMail({
        from: `"Content Foundry" <${SMTP_USER}>`,

        to: lead.email,

        subject: "Your Content Foundry White Paper is ready",

        text: [
            `Hi ${lead.name},`,
            "",
            "Your Content Foundry white paper is ready.",
            "",
            "Download it here:",
            downloadUrl,
            "",
            "The download link is valid for 7 days.",
            "",
            "If you'd like to discuss how this could apply to your brand,",
            "you can book a Brand Story Session with our team.",
            "",
            "Content Foundry",
        ].join("\n"),

        html: `
            <div
                style="
                    font-family:Arial,sans-serif;
                    max-width:600px;
                    margin:auto;
                    color:#222;
                    line-height:1.6;
                "
            >

                <h2
                    style="
                        background:#222;
                        color:#fff;
                        padding:20px;
                        margin:0;
                    "
                >
                    Your white paper is ready.
                </h2>

                <div style="padding:25px">

                    <p>
                        Hi ${name},
                    </p>

                    <p>
                        Thanks for your interest in Content Foundry.
                        Your white paper is ready to download.
                    </p>

                    <p style="margin:30px 0">

                        <a
                            href="${downloadUrl}"
                            style="
                                display:inline-block;
                                background:#111;
                                color:#fff;
                                text-decoration:none;
                                padding:14px 22px;
                                border-radius:8px;
                                font-weight:bold;
                            "
                        >
                            Download PDF ↗
                        </a>

                    </p>

                    <p style="font-size:13px;color:#777">
                        This download link is valid for 7 days.
                    </p>

                    <p>
                        Want to explore how branded micro-dramas
                        could work for your brand?
                    </p>

                    <p>
                        You can book a Brand Story Session with
                        Content Foundry through our website.
                    </p>

                    <p>
                        Regards,<br />
                        <strong>Content Foundry</strong>
                    </p>

                </div>

            </div>
        `,
    });
};