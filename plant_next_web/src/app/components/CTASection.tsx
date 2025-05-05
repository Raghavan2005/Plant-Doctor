// File: src/components/CTASection.tsx
import Link from 'next/link';
import Image from 'next/image';

export default function CTASection() {
  return (
    <section id="download" className="py-16 bg-green-600 dark:bg-green-800">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Download PlantDetect Today
            </h2>
            <p className="text-white text-lg mb-8">
              Join thousands of farmers already using our technology to protect their crops and improve yields. Available for iOS and Android devices.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="https://apps.apple.com" className="inline-block">
                <Image
                  src="/api/placeholder/200/60"
                  alt="Download on App Store"
                  width={200}
                  height={60}
                  className="rounded-lg"
                />
              </Link>
              <Link href="https://play.google.com" className="inline-block">
                <Image
                  src="/api/placeholder/200/60"
                  alt="Get it on Google Play"
                  width={200}
                  height={60}
                  className="rounded-lg"
                />
              </Link>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <div className="relative w-64 h-64 md:w-96 md:h-96">
              <Image
                src="/api/placeholder/400/400"
                alt="Phone showing PlantDetect app"
                className="object-contain"
                fill
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
