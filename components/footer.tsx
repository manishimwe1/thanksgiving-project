import Link from "next/link";
import { Phone, Mail, MapPin, Clock, ArrowRight } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-slate-50 border-t border-slate-200">
      {/* Decorative Top Bar */}
      <div className="w-full h-1 bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-600"></div>
      
      <div className="container mx-auto px-4 py-16">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-12">
          
          {/* Brand Column (Spans 4 cols) */}
          <div className="lg:col-span-4">
            <div className="flex items-center gap-2 mb-6">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-slate-900 text-white font-bold text-xl">
                A
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-xl text-slate-900 leading-none">AUGU</span>
                <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Electronic Service</span>
              </div>
            </div>
            <p className="text-slate-600 text-sm mb-6 max-w-sm leading-relaxed">
              We provide professional technology solutions for businesses and individuals across Rwanda. Quality repairs, guaranteed.
            </p>
            <div className="flex items-center gap-2 text-sm font-bold text-slate-900 bg-white px-4 py-2 rounded-lg border border-slate-200 w-fit shadow-sm">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
              Technicians Available Now
            </div>
          </div>

          {/* Quick Links (Spans 2 cols) */}
          <div className="lg:col-span-2">
            <h3 className="font-bold text-slate-900 mb-6">Company</h3>
            <ul className="space-y-3 text-sm">
              {['Home', 'About Us', 'Services', 'Contact', 'Get a Quote'].map((item) => (
                <li key={item}>
                  <Link href={`/${item.toLowerCase().replace(/ /g, '-')}`} className="text-slate-500 hover:text-blue-600 transition-colors block">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact (Spans 3 cols) */}
          <div className="lg:col-span-3">
            <h3 className="font-bold text-slate-900 mb-6">Get in Touch</h3>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-blue-600 shrink-0 mt-0.5" />
                <span className="text-slate-600">
                  Norvege (Karama Kigali),<br /> Nyarugenge District
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="h-5 w-5 text-blue-600 shrink-0 mt-0.5" />
                <div className="text-slate-600 font-medium">
                  <div>+250 783 432 438</div>
                  <div>0725 900 732</div>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="h-5 w-5 text-blue-600 shrink-0 mt-0.5" />
                <a href="mailto:augstinech2015@gmail.com" className="text-slate-600 hover:text-blue-600 transition-colors break-all">
                  augstinech2015@gmail.com
                </a>
              </li>
            </ul>
          </div>

          {/* Hours (Spans 3 cols) */}
          <div className="lg:col-span-3">
            <h3 className="font-bold text-slate-900 mb-6">Business Hours</h3>
            <ul className="space-y-2 text-sm">
              <li className="flex justify-between text-slate-600">
                <span>Monday - Friday</span>
                <span className="font-semibold text-slate-900">8:00 AM - 6:00 PM</span>
              </li>
              <li className="flex justify-between text-slate-600 border-t border-slate-100 pt-2">
                <span>Saturday</span>
                <span className="font-semibold text-slate-900">9:00 AM - 4:00 PM</span>
              </li>
              <li className="flex justify-between text-slate-600 border-t border-slate-100 pt-2">
                <span>Sunday</span>
                <span className="font-semibold text-red-500">Closed</span>
              </li>
            </ul>
          </div>

        </div>

        <div className="mt-10 text-center pt-8 border-t border-slate-200 flex flex-col md:flex-row justify-center items-center gap-4 text-sm text-slate-500">
          <p>&copy; {new Date().getFullYear()} AUGU Smart Electronic Service Ltd.</p>
        </div>
      </div>
    </footer>
  );
}