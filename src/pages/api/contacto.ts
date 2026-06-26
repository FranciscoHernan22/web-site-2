import type { APIRoute } from "astro";
import nodemailer from "nodemailer";

export const prerender = false;

export const POST: APIRoute = async ({ request }) => {

  try {

    const { nombre, empresa, telefono, mensaje } = await request.json();

    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: import.meta.env.EMAIL_USER,
        pass: import.meta.env.EMAIL_PASS
      }
    });

    await transporter.sendMail({
      from: `"Vixion Consultores" <${import.meta.env.EMAIL_USER}>`,
      to: "eramirez@vixionconsultores.mx",
      subject: "Nueva solicitud de asesoría",
      html: `
        <h2>Nueva solicitud desde la web</h2>

        <p><strong>Nombre:</strong> ${nombre}</p>
        <p><strong>Empresa:</strong> ${empresa}</p>
        <p><strong>Teléfono:</strong> ${telefono}</p>

        <p><strong>Mensaje:</strong></p>
        <p>${mensaje}</p>
      `
    });

    return new Response(
      JSON.stringify({ success: true }),
      { status: 200 }
    );

  } catch (error) {

    console.error("ERROR API:", error);

    return new Response(
      JSON.stringify({ success: false }),
      { status: 500 }
    );

  }
};