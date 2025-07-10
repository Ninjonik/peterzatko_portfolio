"use server";
import nodemailer from "nodemailer";

export default async function sendContactEmail(prevState: any, formData: FormData) {
	const firstname = formData.get("firstname") as string;
	const lastname = formData.get("lastname") as string;
	const email = formData.get("email") as string;
	const subject = formData.get("subject") as string;
	const message = formData.get("message") as string;

	console.log("yo", firstname, lastname, email, subject, message);

	if (!firstname || !lastname || !email || !subject || !message) {
		return { status: "error", message: "Missing required fields" };
	}

	const transporter = nodemailer.createTransport({
		host: "mail.igportals.eu",
		port: 587,
		secure: false,
		auth: {
			user: "auto@igportals.eu",
			pass: "POAopasdkpaoOPASaopsdk4189",
		},
		tls: {},
	});
	try {
		await transporter.sendMail({
			from: "noreply@igportals.eu",
			to: "zatkopeter301@gmail.com",
			subject: `[Portfolio Contact] ${subject}`,
			text: `From: ${firstname} ${lastname} <${email}>\n\n${message}`,
			replyTo: email,
		});
		return { status: "success", message: "Message sent successfully!" };
	} catch (error: any) {
		return { status: "error", message: error.message || "Failed to send message." };
	}
}
