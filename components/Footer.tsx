import Link from "next/link";
import { Facebook, Phone, Mail, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-primary text-white pt-16 pb-8 mt-20">
      <div className="container mx-auto px-4 lg:px-8 grid grid-cols-1 md:grid-cols-4 gap-10">

        {/* About */}
        <div className="space-y-4">
          <h3 className="text-xl font-bold">Ansar Inter College</h3>
          <p className="text-gray-200 text-sm leading-relaxed">
            A prestigious UP Board Boys’ institution committed to academic excellence and discipline since 1937.
          </p>
        </div>

        {/* Quick Links */}
        <div className="space-y-4">
          <h4 className="text-lg font-semibold border-b border-white/20 pb-2">Quick Links</h4>
          <ul className="space-y-2 text-sm text-gray-200">
            <li><Link href="/about" className="hover:text-white">About Us</Link></li>
            <li><Link href="/academics" className="hover:text-white">Academics</Link></li>
            <li><Link href="/faculty" className="hover:text-white">Faculty</Link></li>
            <li><Link href="/contact" className="hover:text-white">Contact</Link></li>
          </ul>
        </div>

        {/* Contact */}
        <div className="space-y-4">
          <h4 className="text-lg font-semibold border-b border-white/20 pb-2">Contact</h4>

          <div className="space-y-3 text-sm text-gray-200">
            <div className="flex items-start gap-2">
              <MapPin className="w-4 h-4 mt-1" />
              <p>
                Indira Chowk, Prince Road Area,  
                Moradabad — 244001
              </p>
            </div>

            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4" />
              <p>+91 98765 43210</p>
            </div>

            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4" />
              <p>info@ansarcollege.edu.in</p>
            </div>
          </div>
        </div>

        {/* Social */}
        <div className="space-y-4">
          <h4 className="text-lg font-semibold border-b border-white/20 pb-2">Follow Us</h4>

          <a
            href="https://facebook.com"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 text-sm text-gray-200 hover:text-white"
          >
            <Facebook className="w-5 h-5" />
            Facebook Page
          </a>
        </div>

      </div>

      {/* Bottom */}
      <div className="container mx-auto px-4 lg:px-8 mt-12 pt-8 border-t border-white/20 text-center text-sm text-gray-300">
        <p>© {new Date().getFullYear()} Ansar Inter College, Moradabad. All Rights Reserved.</p>
        <p className="mt-1 text-xs text-gray-400">Designed for Excellence.</p>
      </div>
    </footer>
  );
          }
