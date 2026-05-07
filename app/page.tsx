export default function Home() {
  const checkoutUrl = process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#";

  return (
    <main className="max-w-3xl mx-auto px-6 py-20">
      {/* Hero */}
      <section className="text-center mb-20">
        <span className="inline-block bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-semibold px-3 py-1 rounded-full mb-6 uppercase tracking-widest">
          AI Cost Tracking
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
          Calculate Exact Costs<br />
          <span className="text-[#58a6ff]">Per AI Prompt</span>
        </h1>
        <p className="text-[#8b949e] text-lg max-w-xl mx-auto mb-8">
          Track token usage and calculate precise costs across OpenAI, Anthropic, and Google AI — with real-time rate limiting alerts before you overspend.
        </p>
        <a
          href={checkoutUrl}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-3 rounded-lg text-base transition-colors"
        >
          Start for $19/mo
        </a>
        <p className="text-[#8b949e] text-sm mt-3">Cancel anytime. No hidden fees.</p>

        <div className="mt-14 grid grid-cols-3 gap-6 text-center">
          {[
            ["3 Providers", "OpenAI, Anthropic, Google"],
            ["Real-time", "Live cost tracking"],
            ["Alerts", "Rate limit warnings"]
          ].map(([title, sub]) => (
            <div key={title} className="bg-[#161b22] border border-[#30363d] rounded-xl p-4">
              <div className="text-[#58a6ff] font-bold text-lg">{title}</div>
              <div className="text-[#8b949e] text-sm mt-1">{sub}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="mb-20">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Simple Pricing</h2>
        <div className="bg-[#161b22] border-2 border-[#58a6ff] rounded-2xl p-8 max-w-sm mx-auto text-center">
          <div className="text-[#58a6ff] font-semibold text-sm uppercase tracking-widest mb-2">Pro</div>
          <div className="text-5xl font-bold text-white mb-1">$19</div>
          <div className="text-[#8b949e] text-sm mb-6">per month</div>
          <ul className="text-left space-y-3 mb-8">
            {[
              "Unlimited prompt cost calculations",
              "OpenAI, Anthropic & Google pricing",
              "Real-time token usage dashboard",
              "Rate limiting alerts & notifications",
              "Usage analytics & cost history",
              "API key — integrate anywhere"
            ].map((f) => (
              <li key={f} className="flex items-start gap-2 text-sm text-[#c9d1d9]">
                <span className="text-[#58a6ff] mt-0.5">&#10003;</span>
                {f}
              </li>
            ))}
          </ul>
          <a
            href={checkoutUrl}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold py-3 rounded-lg transition-colors text-center"
          >
            Get Started
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold text-white text-center mb-8">FAQ</h2>
        <div className="space-y-4">
          {[
            [
              "Which AI providers are supported?",
              "We support OpenAI (GPT-4, GPT-3.5, etc.), Anthropic (Claude 3 family), and Google (Gemini Pro/Ultra). Pricing models are updated automatically when providers change rates."
            ],
            [
              "How does token counting work?",
              "You send your prompt and response text to our API. We count tokens using provider-specific tokenizers and multiply by the current per-token rate to give you an exact cost breakdown."
            ],
            [
              "Can I cancel anytime?",
              "Yes. Your subscription is managed through Lemon Squeezy. Cancel from your billing portal at any time — no questions asked, no lock-in."
            ]
          ].map(([q, a]) => (
            <div key={q} className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
              <div className="font-semibold text-white mb-2">{q}</div>
              <div className="text-[#8b949e] text-sm leading-relaxed">{a}</div>
            </div>
          ))}
        </div>
      </section>

      <footer className="text-center text-[#8b949e] text-xs border-t border-[#30363d] pt-8">
        &copy; {new Date().getFullYear()} Prompt Cost Calculator. All rights reserved.
      </footer>
    </main>
  );
}
