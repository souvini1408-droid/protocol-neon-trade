import { serve } from "https://deno.land/std@0.190.0/http/server.ts";

const RESEND_API_KEY = Deno.env.get("RESEND_API_KEY");

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

interface LeadEmailRequest {
  name: string;
  email: string;
}

async function sendEmail(to: string[], subject: string, html: string) {
  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${RESEND_API_KEY}`,
    },
    body: JSON.stringify({
      from: "Protocolo Mente <onboarding@resend.dev>",
      to,
      subject,
      html,
    }),
  });

  if (!response.ok) {
    const error = await response.text();
    throw new Error(`Resend API error: ${error}`);
  }

  return response.json();
}

const handler = async (req: Request): Promise<Response> => {
  console.log("Received request to send-lead-email");
  
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { name, email }: LeadEmailRequest = await req.json();
    console.log(`Processing lead: ${name} (${email})`);

    // Envia email para protocolomente@gmail.com notificando sobre o novo lead
    const notificationEmail = await sendEmail(
      ["protocolomente@gmail.com"],
      "Nova Solicitação de Capítulo Gratuito",
      `
        <h2>Novo Lead Capturado!</h2>
        <p><strong>Nome:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <hr>
        <p>Este lead solicitou o envio de um capítulo gratuito do ebook.</p>
      `
    );

    console.log("Notification email sent:", notificationEmail);

    // Envia email de confirmação para o lead
    const confirmationEmail = await sendEmail(
      [email],
      "Sua solicitação foi recebida!",
      `
        <h1>Olá, ${name}!</h1>
        <p>Recebemos sua solicitação de capítulo gratuito do nosso ebook <strong>Protocolo Mente</strong>.</p>
        <p>Em breve você receberá o material no seu email.</p>
        <br>
        <p>Enquanto isso, que tal conhecer a oferta completa?</p>
        <p><a href="https://protocolomente.com" style="background: #00ff88; color: #000; padding: 12px 24px; text-decoration: none; border-radius: 8px; display: inline-block; font-weight: bold;">VER OFERTA COMPLETA</a></p>
        <br>
        <p>Não enviamos spam. Seus dados estão seguros.</p>
        <hr>
        <p style="font-size: 12px; color: #666;">Protocolo Mente - Dominando a Mente do Mercado</p>
      `
    );

    console.log("Confirmation email sent:", confirmationEmail);

    return new Response(
      JSON.stringify({ 
        success: true,
        notification: notificationEmail,
        confirmation: confirmationEmail
      }), 
      {
        status: 200,
        headers: {
          "Content-Type": "application/json",
          ...corsHeaders,
        },
      }
    );
  } catch (error: any) {
    console.error("Error in send-lead-email function:", error);
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);
