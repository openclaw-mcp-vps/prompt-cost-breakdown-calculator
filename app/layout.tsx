import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Prompt Cost Breakdown Calculator — Calculate Exact AI Costs",
  description: "Track token usage and calculate precise costs for OpenAI, Anthropic, and Google AI models. Get rate limiting alerts and usage analytics."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="769cd1b7-9d5a-4af8-9cfd-433f50b772c3"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] min-h-screen">
        {children}
      </body>
    </html>
  );
}
