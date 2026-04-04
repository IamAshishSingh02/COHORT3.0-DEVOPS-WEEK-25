'use client';

import Link from 'next/link';

export default function Contact() {
  return (
    <div className="min-h-screen bg-linear-to-br from-blue-50 to-indigo-100">
      {/* Navigation */}
      <nav className="bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-indigo-600">MyApp</h1>
          <ul className="flex gap-6 text-gray-700">
            <li><Link href="/" className="hover:text-indigo-600 font-medium">Home</Link></li>
            <li><Link href="/about" className="hover:text-indigo-600 font-medium">About</Link></li>
            <li><Link href="/contact" className="hover:text-indigo-600 font-medium">Contact</Link></li>
          </ul>
        </div>
      </nav>

      {/* Content */}
      <section className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h2 className="text-5xl font-bold text-gray-900 mb-8">Contact Us</h2>
        
        <div className="bg-white rounded-lg shadow-md p-8">
          <form className="space-y-6">
            <div>
              <label className="block text-lg font-semibold text-gray-900 mb-2">Name</label>
              <input 
                type="text" 
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600"
                placeholder="Your name"
              />
            </div>

            <div>
              <label className="block text-lg font-semibold text-gray-900 mb-2">Email</label>
              <input 
                type="email" 
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600"
                placeholder="your@email.com"
              />
            </div>

            <div>
              <label className="block text-lg font-semibold text-gray-900 mb-2">Message</label>
              <textarea 
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600 h-32"
                placeholder="Your message here..."
              />
            </div>

            <button 
              type="submit"
              className="w-full bg-indigo-600 text-white py-3 rounded-lg font-semibold hover:bg-indigo-700 transition"
            >
              Send Message
            </button>
          </form>

          <div className="mt-12 pt-8 border-t">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Other Ways to Reach Us</h3>
            <div className="space-y-3 text-gray-700">
              <p>📧 Email: contact@myapp.com</p>
              <p>🔗 Twitter: @MyApp</p>
              <p>📍 AWS Deployed Application</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p>&copy; 2026 MyApp. All rights reserved. Deployed on AWS.</p>
        </div>
      </footer>
    </div>
  );
}
