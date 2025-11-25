import { Plus } from "lucide-react";
import React from "react";

const FAQSection = () => {
  const faqs = [
    {
      q: "Do you charge for diagnostics?",
      a: "We offer free basic diagnostics. If the repair requires advanced disassembly, a small fee applies which is waived if you proceed with the repair."
    },
    {
      q: "How long does a typical repair take?",
      a: "Most phone and laptop screens are fixed within 2-4 hours. Motherboard repairs and data recovery usually take 24-48 hours."
    },
    {
      q: "Do you offer a warranty?",
      a: "Yes! All our repairs come with a standard 30-day to 90-day warranty depending on the service provided."
    },
    {
      q: "Can you come to my office?",
      a: "Absolutely. We offer on-site support for businesses in Kigali for networking, printer issues, and CCTV installation."
    },
  ];

  return (
    <section className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          
          <div>
            <div className="inline-block px-3 py-1 mb-4 text-xs font-semibold text-blue-600 uppercase bg-blue-100 rounded-full">
              Common Questions
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
              Got questions? <br /> We have answers.
            </h2>
            <p className="text-slate-500 text-lg mb-8">
              Can't find what you're looking for? Call our support team directly at <span className="text-slate-900 font-semibold">+250 783 432 438</span>.
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <details key={index} className="group bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
                <summary className="flex items-center justify-between p-6 cursor-pointer list-none">
                  <span className="font-bold text-slate-900">{faq.q}</span>
                  <span className="bg-slate-100 p-1 rounded-full group-open:rotate-45 transition-transform duration-300">
                    <Plus size={18} className="text-slate-600" />
                  </span>
                </summary>
                <div className="px-6 pb-6 text-slate-600 leading-relaxed border-t border-slate-100 pt-4">
                  {faq.a}
                </div>
              </details>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default FAQSection;