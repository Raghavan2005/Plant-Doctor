// File: src/components/Footer.tsx
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">PlantDetect</h3>
            <p className="text-gray-400">
              AI-powered plant disease detection for smarter agriculture and better crop yields.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-400 hover:text-green-400 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="#features" className="text-gray-400 hover:text-green-400 transition-colors">
                  Features
                </Link>
              </li>
              <li>
                <Link href="#download" className="text-gray-400 hover:text-green-400 transition-colors">
                  Download
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-green-400 transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/blog" className="text-gray-400 hover:text-green-400 transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-gray-400 hover:text-green-400 transition-colors">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/support" className="text-gray-400 hover:text-green-400 transition-colors">
                  Support
                </Link>
              </li>
              <li>
                <Link href="/research" className="text-gray-400 hover:text-green-400 transition-colors">
                  Research Paper
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-2 text-gray-400">
              <li>Email: info@plantdetect.com</li>
              <li>Phone: +1 (555) 123-4567</li>
              <li>Location: Agricultural Tech Center</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} PlantDetect. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="/privacy" className="text-gray-400 hover:text-green-400 text-sm">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-gray-400 hover:text-green-400 text-sm">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
    