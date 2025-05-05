// File: src/app/contact/page.tsx
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Contact() {
  return (
    <main className="min-h-screen flex flex-col">
      <Header />
      
      <section className="py-16 bg-white dark:bg-gray-900 flex-grow">
        <div className="container mx-auto px-4 max-w-4xl">
          <h1 className="text-3xl md:text-4xl font-bold text-green-800 dark:text-green-200 mb-8 text-center">
            Contact Us
          </h1>
          
          <div className="bg-gray-50 dark:bg-gray-800 p-8 rounded-lg shadow-md">
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:ring-green-500 focus:border-green-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:ring-green-500 focus:border-green-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                    required
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:ring-green-500 focus:border-green-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:ring-green-500 focus:border-green-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                  required
                ></textarea>
              </div>
              
              <div>
                <button
                  type="submit"
                  className="w-full md:w-auto px-6 py-3 bg-green-600 hover:bg-green-700 text-white font-medium rounded-md transition-colors"
                >
                  Send Message
                </button>
              </div>
            </form>
            
            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <h3 className="text-lg font-semibold text-green-700 dark:text-green-300 mb-2">Email Us</h3>
                <p className="text-gray-700 dark:text-gray-300">support@plantdetect.com</p>
              </div>
              
              <div className="text-center">
                <h3 className="text-lg font-semibold text-green-700 dark:text-green-300 mb-2">Call Us</h3>
                <p className="text-gray-700 dark:text-gray-300">+1 (555) 123-4567</p>
              </div>
              
              <div className="text-center">
                <h3 className="text-lg font-semibold text-green-700 dark:text-green-300 mb-2">Visit Us</h3>
                <p className="text-gray-700 dark:text-gray-300">Agricultural Tech Center<br />123 Farm Road</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </main>
  );
}