import Link from "next/link";
import PageHeading from "@/components/PageHeading";
import { ArrowRight, BookOpen, Users, Award } from "lucide-react";

export default function Home() {
  return (
    <>

      {/* Hero Section */}
      <section className="relative bg-gray-50 overflow-hidden">
        <div className="container-custom py-20 md:py-32 flex flex-col md:flex-row items-center">
          {/* LEFT */}
          <div className="md:w-1/2 space-y-6 z-10">
            <div className="inline-block bg-primary/10 text-primary px-4 py-1 rounded-full text-sm font-semibold">
              Since 1937
            </div>

            <h1 className="text-5xl md:text-6xl font-bold text-primary leading-tight">
              Ansar Inter College
            </h1>

            <p className="text-xl text-gray-600 font-medium">
              UP Board Boys’ School — Moradabad
            </p>

            <p className="text-gray-500 leading-relaxed max-w-lg">
              Nurturing future leaders through discipline, knowledge, and excellence.
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <Link href="/admissions" className="btn-primary flex items-center gap-2">
                Admissions 2026–27 <ArrowRight className="w-4 h-4" />
              </Link>

              <Link href="/contact" className="btn-outline">
                Contact Office
              </Link>
            </div>
          </div>

          {/* RIGHT */}
          <div className="md:w-1/2 mt-10 md:mt-0 relative">
            <div className="w-full h-80 md:h-96 bg-gray-200 rounded-2xl flex items-center justify-center text-gray-400">
              [School Building Image]
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-white">
        <div className="container-custom grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <BookOpen className="mx-auto text-primary h-10 w-10 mb-2" />
            <h3 className="text-3xl font-bold text-primary">85+</h3>
            <p className="text-gray-600 text-sm">Years of Legacy</p>
          </div>

          <div>
            <Users className="mx-auto text-primary h-10 w-10 mb-2" />
            <h3 className="text-3xl font-bold text-primary">1200+</h3>
            <p className="text-gray-600 text-sm">Students</p>
          </div>

          <div>
            <Award className="mx-auto text-primary h-10 w-10 mb-2" />
            <h3 className="text-3xl font-bold text-primary">50+</h3>
            <p className="text-gray-600 text-sm">Qualified Staff</p>
          </div>

          <div>
            <BookOpen className="mx-auto text-primary h-10 w-10 mb-2" />
            <h3 className="text-3xl font-bold text-primary">100%</h3>
            <p className="text-gray-600 text-sm">UP Board Affiliated</p>
          </div>
        </div>
      </section>

    </>
  );
    }
