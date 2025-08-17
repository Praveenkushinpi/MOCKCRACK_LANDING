// components/Footer.tsx
import Link from "next/link";
import { Facebook, Twitter, Instagram, Github } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12">
      <div className="max-w-7xl mx-auto px-6 md:flex md:justify-between">
        {/* Logo & Description */}
        <div className="mb-8 md:mb-0">
          <h2 className="text-2xl font-bold text-white mb-2">MockCrack</h2>
          <p className="text-gray-400 max-w-xs">
MockCrack  The ultimate AI-powered exam prep platform.
          </p>
        </div>

        {/* Links */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-8">
          <div>
            <h3 className="font-semibold text-white mb-2">Product</h3>
            <ul className="space-y-1">
              <li><Link href="/features" className="hover:text-white">Features</Link></li>
              <li><Link href="/pricing" className="hover:text-white">Pricing</Link></li>
              <li><Link href="/download" className="hover:text-white">Download</Link></li>
              <li><Link href="/updates" className="hover:text-white">Updates</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-white mb-2">Company</h3>
            <ul className="space-y-1">
              <li><Link href="/about" className="hover:text-white">About Us</Link></li>
              <li><Link href="/careers" className="hover:text-white">Careers</Link></li>
              <li><Link href="/blog" className="hover:text-white">Blog</Link></li>
              <li><Link href="/contact" className="hover:text-white">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-white mb-2">Resources</h3>
            <ul className="space-y-1">
              <li><Link href="/docs" className="hover:text-white">Documentation</Link></li>
              <li><Link href="/support" className="hover:text-white">Support</Link></li>
              <li><Link href="/faq" className="hover:text-white">FAQ</Link></li>
              <li><Link href="/community" className="hover:text-white">Community</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-white mb-2">Legal</h3>
            <ul className="space-y-1">
              <li><Link href="/privacy" className="hover:text-white">Privacy Policy</Link></li>
              <li><Link href="/terms" className="hover:text-white">Terms of Service</Link></li>
              <li><Link href="/cookies" className="hover:text-white">Cookie Policy</Link></li>
            </ul>
          </div>
        </div>
      </div>

      {/* Social & Copyright */}
      <div className="mt-10 border-t border-gray-800 pt-6 max-w-7xl mx-auto px-6 md:flex md:justify-between md:items-center">
        <p className="text-gray-500 text-sm">&copy; {new Date().getFullYear()} MockCrack. All rights reserved.</p>
        <div className="flex space-x-4 mt-4 md:mt-0 text-gray-400">
          <Link href="https://facebook.com" target="_blank" className="hover:text-white"><Facebook size={20} /></Link>
          <Link href="https://twitter.com" target="_blank" className="hover:text-white"><Twitter size={20} /></Link>
          <Link href="https://instagram.com" target="_blank" className="hover:text-white"><Instagram size={20} /></Link>
          <Link href="https://github.com" target="_blank" className="hover:text-white"><Github size={20} /></Link>
        </div>
      </div>
    </footer>
  );
}
