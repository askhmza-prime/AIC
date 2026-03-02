import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="bg-gray-50 py-20 md:py-32 border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center gap-12">
        
        {/* LEFT TEXT */}
        <div className="md:w-1/2 space-y-6">
          <span className="bg-primary/10 text-primary px-4 py-1 rounded-full text-sm font-semibold">
            Since 1937
          </span>

          <h1 className="text-5xl md:text-6xl font-bold text-primary leading-tight">
            Ansar Inter College
          </h1>

          <p className="text-xl text-gray-600 font-medium">
            UP Board Boys’ School — Moradabad
          </p>

          <p className="text-gray-500 leading-relaxed max-w-md">
            Nurturing future leaders through discipline, knowledge, and excellence.
            A legacy of over 85 years in academic achievement.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap gap-4 pt-4">
            <Link href="/admissions" className="btn-primary flex items-center gap-2">
              Admissions 2026-27 <ArrowRight className="w-4 h-4" />
            </Link>

            <Link href="/contact" className="btn-outline">
              Contact Office
            </Link>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="md:w-1/2">
          <div className="w-full h-80 md:h-96 bg-gray-200 rounded-2xl flex items-center justify-center text-gray-500">
            [School Building Image Here]
          </div>
        </div>
      </div>
    </section>
  );
}
