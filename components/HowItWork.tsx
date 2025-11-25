import { ClipboardList, Wrench, CheckCircle, Truck } from "lucide-react";
import React from "react";

const ProcessSection = () => {
  const steps = [
    {
      icon: ClipboardList,
      title: "1. Request Service",
      description: "Book online or call us. Describe the issue, and we'll provide an initial estimate or schedule a visit."
    },
    {
      icon: Truck,
      title: "2. Drop-off or On-site",
      description: "Bring your device to our Nyarugenge shop, or we dispatch a technician to your home/office."
    },
    {
      icon: Wrench,
      title: "3. Expert Repair",
      description: "We diagnose and fix the issue using genuine parts, keeping you updated throughout the process."
    },
    {
      icon: CheckCircle,
      title: "4. Quality Check",
      description: "Your device undergoes testing. You pay only after verifying everything works perfectly."
    }
  ];

  return (
    <section className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            How We Work
          </h2>
          <p className="text-slate-500">
            Simple, transparent, and hassle-free repair process.
          </p>
        </div>

        <div className="relative grid gap-8 md:grid-cols-4">
          {/* Connector Line (Desktop Only) */}
          <div className="hidden md:block absolute top-12 left-0 w-full h-0.5 bg-slate-200 -z-10"></div>

          {steps.map((step, index) => (
            <div key={index} className="relative flex flex-col items-center text-center group">
              {/* Step Number Badge */}
              <div className="w-24 h-24 bg-white rounded-full border-4 border-slate-100 flex items-center justify-center mb-6 group-hover:border-blue-500 transition-colors duration-300 shadow-sm">
                <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-all">
                  <step.icon size={32} />
                </div>
              </div>
              
              <h3 className="text-lg font-bold text-slate-900 mb-3">{step.title}</h3>
              <p className="text-sm text-slate-500 leading-relaxed px-2">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;