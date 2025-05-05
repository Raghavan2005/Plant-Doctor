// File: src/app/page.tsx
import Image from 'next/image';
import Link from 'next/link';
import Header from './components/Header';
import Footer from './components/Footer';
import FeatureCard from './components/FeatureCard';
import HowItWorks from './components/HowItWorks';
import CTASection from './components/CTASection';

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900 dark:to-green-800">
        <div className="container mx-auto px-4 py-16 md:py-24 flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h1 className="text-4xl md:text-5xl font-bold text-green-800 dark:text-green-100 mb-4">
              Smart Crop Disease Detection
            </h1>
            <p className="text-lg md:text-xl text-gray-700 dark:text-gray-200 mb-6">
              Detect potato crop diseases instantly using AI-powered image recognition. 
              Protect your harvest with real-time analysis and treatment recommendations.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link 
                href="/upload" 
                className="bg-green-600 hover:bg-green-700 text-white font-medium py-3 px-6 rounded-lg transition-colors"
              >
                Upload Here
              </Link>
              <Link 
                href="#learn-more" 
                className="bg-white hover:bg-gray-100 text-green-700 font-medium py-3 px-6 rounded-lg border border-green-600 transition-colors dark:bg-green-800 dark:text-white dark:border-green-600 dark:hover:bg-green-700"
              >
                Learn More
              </Link>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <div className="relative w-64 h-96 md:w-72 md:h-128">
              <div className="absolute inset-0 bg-black rounded-3xl overflow-hidden shadow-2xl border-8 border-black">
                <div className="relative h-full w-full bg-white">
                  <Image
                    src="/logo.png"
                    alt="App demonstration on smartphone"
                    className="object-cover"
                    fill
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-16 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-green-800 dark:text-green-200 mb-12">
            Key Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FeatureCard 
              icon="camera" 
              title="Instant Detection"
              description="Take a photo of crop leaves and get instant disease diagnosis powered by AI."
            />
            <FeatureCard 
              icon="flask" 
              title="Treatment Recommendations"
              description="Receive actionable advice on how to treat detected diseases and prevent spread."
            />
            <FeatureCard 
              icon="chart" 
              title="Disease Tracking"
              description="Monitor disease prevalence and track treatment effectiveness over time."
            />
          </div>
        </div>
      </section>

      {/* How It Works */}
      <HowItWorks />

      {/* Technology Section */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-green-800 dark:text-green-200 mb-8">
            Powered by Advanced Technology
          </h2>
          <p className="text-lg text-center text-gray-700 dark:text-gray-300 max-w-3xl mx-auto mb-12">
            Our solution combines deep learning models with mobile technology to create an accessible tool for smart agriculture
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-green-700 dark:text-green-300 mb-4">
                Convolutional Neural Network
              </h3>
              <p className="text-gray-700 dark:text-gray-300">
                Trained on the Plant Village dataset, our CNN accurately detects Early Blight, Late Blight, and healthy potato plants with high precision.
              </p>
            </div>
            
            <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-green-700 dark:text-green-300 mb-4">
                FastAPI Backend
              </h3>
              <p className="text-gray-700 dark:text-gray-300">
                Our robust backend ensures low latency and reliable predictions, making it ideal for real-time field use.
              </p>
            </div>
            
            <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-green-700 dark:text-green-300 mb-4">
                React Native Mobile App
              </h3>
              <p className="text-gray-700 dark:text-gray-300">
                User-friendly interface designed for farmers and agronomists to easily capture images and review results in the field.
              </p>
            </div>
            
            <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-green-700 dark:text-green-300 mb-4">
                Offline Capabilities
              </h3>
              <p className="text-gray-700 dark:text-gray-300">
                Works even in areas with limited connectivity, ensuring farmers can use it anywhere on their fields.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Disease Info */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-green-800 dark:text-green-200 mb-12">
            Potato Diseases We Detect
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="rounded-lg overflow-hidden shadow-md">
              <div className="relative h-48">
                <Image 
                  src="/logo.png" 
                  alt="Early Blight" 
                  className="object-cover"
                  fill
                />
              </div>
              <div className="p-6 bg-white dark:bg-gray-700">
                <h3 className="text-xl font-semibold text-green-700 dark:text-green-300 mb-2">Early Blight</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Caused by the fungus Alternaria solani, characterized by brown lesions with concentric rings. Can reduce yields by up to 30%.
                </p>
              </div>
            </div>
            
            <div className="rounded-lg overflow-hidden shadow-md">
              <div className="relative h-48">
                <Image 
                  src="/logo.png" 
                  alt="Late Blight" 
                  className="object-cover"
                  fill
                />
              </div>
              <div className="p-6 bg-white dark:bg-gray-700">
                <h3 className="text-xl font-semibold text-green-700 dark:text-green-300 mb-2">Late Blight</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Caused by Phytophthora infestans, showing dark, water-soaked lesions. Historically responsible for the Irish Potato Famine.
                </p>
              </div>
            </div>
            
            <div className="rounded-lg overflow-hidden shadow-md">
              <div className="relative h-48">
                <Image 
                  src="/logo.png" 
                  alt="Healthy Potato Plant" 
                  className="object-cover"
                  fill
                />
              </div>
              <div className="p-6 bg-white dark:bg-gray-700">
                <h3 className="text-xl font-semibold text-green-700 dark:text-green-300 mb-2">Healthy Plants</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Our system also confirms healthy plants, helping farmers monitor overall crop health and focus resources where needed.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection />

      <Footer />
    </main>
  );
}