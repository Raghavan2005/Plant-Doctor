'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white dark:bg-gray-900 shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <div className="w-10 h-10 rouneded-[50px] relative mr-2">
                <Image
                  src="/logo.png"
                  alt="Plant Detector Logo"
                  fill
                  className="object-contain"
                />
              </div>
              <span className="font-bold text-xl text-green-700 dark:text-green-400">PlantDetect</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-gray-700 hover:text-green-600 dark:text-gray-200 dark:hover:text-green-400">
              Home
            </Link>
            <Link href="#features" className="text-gray-700 hover:text-green-600 dark:text-gray-200 dark:hover:text-green-400">
              Features
            </Link>
            <Link href="#technology" className="text-gray-700 hover:text-green-600 dark:text-gray-200 dark:hover:text-green-400">
              Technology
            </Link>
            <Link href="#download" className="text-gray-700 hover:text-green-600 dark:text-gray-200 dark:hover:text-green-400">
              Download
            </Link>
            <Link 
              href="/contact" 
              className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg transition-colors"
            >
              Contact Us
            </Link>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-gray-700 dark:text-gray-200 hover:text-green-600 dark:hover:text-green-400 focus:outline-none"
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 bg-white dark:bg-gray-800 shadow-md">
            <Link 
              href="/" 
              className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-green-600 hover:bg-gray-50 dark:text-gray-200 dark:hover:text-green-400 dark:hover:bg-gray-700 rounded-md"
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              href="#features" 
              className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-green-600 hover:bg-gray-50 dark:text-gray-200 dark:hover:text-green-400 dark:hover:bg-gray-700 rounded-md"
              onClick={() => setMobileMenuOpen(false)}
            >
              Features
            </Link>
            <Link 
              href="#technology" 
              className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-green-600 hover:bg-gray-50 dark:text-gray-200 dark:hover:text-green-400 dark:hover:bg-gray-700 rounded-md"
              onClick={() => setMobileMenuOpen(false)}
            >
              Technology
            </Link>
            <Link 
              href="#download" 
              className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-green-600 hover:bg-gray-50 dark:text-gray-200 dark:hover:text-green-400 dark:hover:bg-gray-700 rounded-md"
              onClick={() => setMobileMenuOpen(false)}
            >
              Download
            </Link>
            <Link 
              href="/contact"
              className="block px-3 py-2 text-base font-medium bg-green-600 text-white hover:bg-green-700 rounded-md"
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact Us
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}