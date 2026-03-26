import "dotenv/config";
import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import { Resend } from 'resend';

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // API Routes
  app.post("/api/contact", async (req, res) => {
    const { name, email, message } = req.body;

    // Initialize Resend with API Key from environment or fallback to the one provided by the user
    const apiKey = (process.env.RESEND_API_KEY && process.env.RESEND_API_KEY !== 're_...') 
      ? process.env.RESEND_API_KEY 
      : 're_gYhyVFwN_3pSKM7EnU4cpKuAsKuvycgP5';

    const resend = new Resend(apiKey);

    try {
      // Send notification to the owner (jeshgiri52@gmail.com)
      // Note: Using 'onboarding@resend.dev' as the 'from' address as it's required for trial accounts.
      const { data, error } = await resend.emails.send({
        from: 'onboarding@resend.dev',
        to: 'jeshgiri52@gmail.com',
        replyTo: email, // This allows you to reply directly to the sender
        subject: `Portfolio Message: ${name}`,
        html: `
          <div style="font-family: sans-serif; padding: 20px; color: #333; border: 1px solid #eee; border-radius: 8px;">
            <h2 style="color: #6366f1; margin-top: 0;">New Message from ${name}</h2>
            <p style="font-size: 16px; line-height: 1.5;">${message}</p>
            <hr style="border: none; border-top: 1px solid #eee; margin: 20px 0;" />
            <p style="font-size: 14px; color: #666;">
              <strong>Sender Email:</strong> ${email}<br />
              <em>Reply to this email to contact the sender directly.</em>
            </p>
          </div>
        `,
      });

      if (error) {
        console.error("Resend Error:", error);
        return res.status(500).json({ error: "Failed to send email notification" });
      }

      res.json({ success: true, data });
    } catch (err) {
      console.error("Server Error:", err);
      res.status(500).json({ error: "Internal server error" });
    }
  });

  // Vite middleware for development
  const isProd = process.env.NODE_ENV === "production";
  
  if (!isProd) {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
