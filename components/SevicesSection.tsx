import {
  ArrowUpRight,
  Smartphone,
  Cpu,
  Wifi,
  Monitor,
  Server,
  Camera,
} from "lucide-react";
import Link from "next/link";
import React from "react";

// Same sample data
const services = [
  {
    icon: Smartphone,
    title: "Mobile Repair",
    description: "Screens, batteries, & micro-soldering.",
  },
  {
    icon: Cpu,
    title: "PC Diagnostics",
    description: "Motherboard repair & chip replacement.",
  },
  {
    icon: Wifi,
    title: "Networking",
    description: "Enterprise Wi-Fi & router config.",
  },
  {
    icon: Camera,
    title: "CCTV Systems",
    description: "Security camera installation & setup.",
  },
  {
    icon: Monitor,
    title: "Upgrades",
    description: "SSD, RAM, and performance boosts.",
  },
  {
    icon: Server,
    title: "Data Recovery",
    description: "Retrieve lost files from any drive.",
  },
];

const ServicesBento = () => {
  return (
    <section className="py-10 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center mb-12 gap-6">
          <div>
            <h2 className="text-4xl font-extrabold text-slate-900 tracking-tight flex gap-3 mb-2">
              Expertise you can <br />
              <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-600 to-cyan-500">
                rely on.
              </span>
            </h2>
            <p className="text-slate-500 max-w-lg text-lg">
              We offer a complete range of repair and IT services tailored for
              individuals and businesses in Rwanda.
            </p>
          </div>
          <Link
            href="/services"
            className="hidden md:flex items-center gap-2 font-semibold text-slate-900 hover:text-blue-600 transition-colors"
          >
            See full catalog <ArrowUpRight size={18} />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {services.map((service, index) => (
            <div
              key={index}
              className="group p-6 rounded-2xl bg-slate-50 border border-slate-100 hover:bg-white hover:border-blue-100 hover:shadow-xl hover:shadow-blue-900/5 transition-all duration-300"
            >
              <div className="flex justify-between items-start mb-6">
                <div className="w-12 h-12 rounded-lg bg-white border border-slate-200 flex items-center justify-center text-slate-700 group-hover:bg-blue-600 group-hover:border-blue-600 group-hover:text-white transition-colors duration-300">
                  <service.icon size={24} />
                </div>
                <ArrowUpRight
                  className="text-slate-300 group-hover:text-blue-600 transition-colors"
                  size={20}
                />
              </div>

              <h3 className="text-lg font-bold text-slate-900 mb-2">
                {service.title}
              </h3>
              <p className="text-slate-500 text-sm leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        {/* Mobile Only Button */}
        <div className="mt-8 md:hidden">
          <Link
            href="/services"
            className="flex items-center justify-center w-full gap-2 px-6 py-3 font-semibold bg-slate-100 rounded-xl text-slate-900 hover:bg-slate-200 transition-colors"
          >
            View All Services <ArrowUpRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesBento;
