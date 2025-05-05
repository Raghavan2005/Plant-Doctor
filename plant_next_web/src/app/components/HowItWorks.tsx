// File: src/components/HowItWorks.tsx
import Image from 'next/image';

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-16 bg-green-50 dark:bg-green-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-green-800 dark:text-green-200 mb-12">
          How It Works
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div className="flex flex-col items-center text-center">
            <div className="bg-white dark:bg-gray-800 w-16 h-16 rounded-full flex items-center justify-center mb-4 shadow-md">
              <span className="text-2xl font-bold text-green-600">1</span>
            </div>
            <div className="relative w-48 h-48 mb-4">
              <Image
                src="/api/placeholder/200/200"
                alt="Take a photo"
                className="object-cover rounded-lg"
                fill
              />
            </div>
            <h3 className="text-xl font-semibold text-green-700 dark:text-green-300 mb-2">
              Take a Photo
            </h3>
            <p className="text-gray-700 dark:text-gray-300">
              Use your smartphone to capture a clear image of the plant leaf you want to analyze.
            </p>
          </div>
          
          <div className="flex flex-col items-center text-center">
            <div className="bg-white dark:bg-gray-800 w-16 h-16 rounded-full flex items-center justify-center mb-4 shadow-md">
              <span className="text-2xl font-bold text-green-600">2</span>
            </div>
            <div className="relative w-48 h-48 mb-4">
              <Image
                src="/api/placeholder/200/200"
                alt="AI Analysis"
                className="object-cover rounded-lg"
                fill
              />
            </div>
            <h3 className="text-xl font-semibold text-green-700 dark:text-green-300 mb-2">
              AI Analysis
            </h3>
            <p className="text-gray-700 dark:text-gray-300">
              Our deep learning model analyzes the image and identifies any disease patterns present.
            </p>
          </div>
          
          <div className="flex flex-col items-center text-center">
            <div className="bg-white dark:bg-gray-800 w-16 h-16 rounded-full flex items-center justify-center mb-4 shadow-md">
              <span className="text-2xl font-bold text-green-600">3</span>
            </div>
            <div className="relative w-48 h-48 mb-4">
              <Image
                src="/api/placeholder/200/200"
                alt="Get Results"
                className="object-cover rounded-lg"
                fill
              />
            </div>
            <h3 className="text-xl font-semibold text-green-700 dark:text-green-300 mb-2">
              Get Results
            </h3>
            <p className="text-gray-700 dark:text-gray-300">
              Receive instant diagnosis with treatment recommendations and severity assessment.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}