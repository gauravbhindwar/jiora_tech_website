"use client";
import { useState } from "react";
import { BackgroundBeams } from "@/components/ui/aceternity/background-beams";

const fields: { name: string; label: string; type: "input" | "textarea"; required?: boolean; span2?: boolean }[] = [
  { name: "name", label: "Name", type: "input", required: true },
  { name: "email", label: "Email", type: "input", required: true },
  { name: "company", label: "Company", type: "input" },
  { name: "project", label: "What are you looking to build?", type: "input", span2: true },
  { name: "message", label: "Message", type: "textarea", span2: true },
];

export default function Contact() {
  const [form, setForm] = useState<Record<string, string>>({});
  const update = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`New enquiry${form.name ? ` from ${form.name}` : ""}`);
    const body = encodeURIComponent(
      [`Name: ${form.name || "-"}`, `Email: ${form.email || "-"}`, `Company: ${form.company || "-"}`, ``, `What are you looking to build?\n${form.project || "-"}`, ``, `Message:\n${form.message || "-"}`].join("\n")
    );
    window.location.href = `mailto:info@jioratech.com?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="relative flex w-full flex-col items-center justify-center overflow-hidden bg-black py-16 antialiased">
      <BackgroundBeams className="opacity-40" />
      <div className="relative z-10 mx-auto w-full max-w-6xl px-6">
        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <p className="text-xs tracking-[0.2em] text-neutral-500">CONTACT</p>
            <h2 className="mt-3 bg-gradient-to-br from-white to-neutral-500 bg-clip-text text-3xl font-bold tracking-tight text-transparent sm:text-4xl">
              Let&apos;s build something.
            </h2>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-neutral-400">
              Have a software idea, business problem, automation opportunity, or AI use case? You don&apos;t need a perfect spec — tell us
              what you&apos;re trying to achieve.
            </p>
            <div className="mt-8 space-y-3 text-sm">
              <div>
                <div className="font-mono text-xs tracking-[0.15em] text-neutral-500">EMAIL</div>
                <a href="mailto:info@jioratech.com" className="font-medium text-white hover:text-neutral-300">
                  info@jioratech.com
                </a>
              </div>
              <div>
                <div className="font-mono text-xs tracking-[0.15em] text-neutral-500">BASED IN</div>
                <div className="text-white">Jaipur, Rajasthan, India</div>
              </div>
            </div>
          </div>

          <form onSubmit={onSubmit} className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur">
            <div className="grid gap-4 sm:grid-cols-2">
              {fields.map((f) =>
                f.type === "textarea" ? (
                  <div key={f.name} className={f.span2 ? "sm:col-span-2" : ""}>
                    <label className="mb-1 block font-mono text-xs tracking-[0.14em] text-neutral-500">{f.label}</label>
                    <textarea
                      name={f.name}
                      value={form[f.name] || ""}
                      onChange={update}
                      rows={4}
                      placeholder="Tell us a little about what you need…"
                      className="w-full resize-none rounded-lg border border-white/10 bg-black/50 px-3 py-2.5 text-sm text-white placeholder:text-neutral-600 focus:border-white/20 focus:outline-none"
                    />
                  </div>
                ) : (
                  <div key={f.name} className={f.span2 ? "sm:col-span-2" : ""}>
                    <label className="mb-1 block font-mono text-xs tracking-[0.14em] text-neutral-500">{f.label}</label>
                    <input
                      name={f.name}
                      value={form[f.name] || ""}
                      onChange={update}
                      required={f.required}
                      placeholder={f.label}
                      className="w-full rounded-lg border border-white/10 bg-black/50 px-3 py-2.5 text-sm text-white placeholder:text-neutral-600 focus:border-white/20 focus:outline-none"
                    />
                  </div>
                )
              )}
            </div>
            <button type="submit" className="mt-6 w-full rounded-full bg-white py-3 text-sm font-semibold text-black transition hover:bg-neutral-200 sm:w-auto sm:px-8">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
