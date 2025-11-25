import { Star, Quote } from "lucide-react";
import React from "react";

const TestimonialsSection = () => {
  const reviews = [
    {
      name: "Jean Claude M.",
      role: "Business Owner",
      text: "Fixed my office network in less than 2 hours. Professional team and very fair pricing. Highly recommended!",
      stars: 5,
    },
    {
      name: "Sarah U.",
      role: "Student",
      text: "I thought my laptop was dead after water damage. AUGU saved all my school files and fixed the motherboard.",
      stars: 5,
    },
    {
      name: "Eric K.",
      role: "IT Manager",
      text: "We use AUGU for all our CCTV maintenance. They are reliable and always available when we have emergencies.",
      stars: 5,
    },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Trusted by Kigali
          </h2>
          <p className="text-slate-500">
            Join hundreds of satisfied clients who trust us with their technology.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <div key={index} className="bg-slate-50 p-8 rounded-2xl relative hover:shadow-lg transition-shadow">
              <Quote className="absolute top-6 right-6 text-blue-100 w-10 h-10" />
              
              <div className="flex gap-1 mb-6">
                {[...Array(review.stars)].map((_, i) => (
                  <Star key={i} size={18} className="fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              <p className="text-slate-700 mb-6 italic leading-relaxed">
                "{review.text}"
              </p>

              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold text-sm">
                  {review.name.charAt(0)}
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-sm">{review.name}</h4>
                  <p className="text-xs text-slate-500">{review.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;