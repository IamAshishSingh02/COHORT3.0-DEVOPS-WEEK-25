'use client';

import Link from 'next/link';

export default function Home() {
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

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          <h2 className="text-5xl font-bold text-gray-900 mb-6">Welcome to MyApp</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            A modern, production-ready Next.js application deployed on AWS. Fast, scalable, and ready for growth.
          </p>
          <div className="flex gap-4 justify-center">
            <button className="bg-indigo-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-indigo-700 transition">
              Get Started
            </button>
            <button className="border-2 border-indigo-600 text-indigo-600 px-8 py-3 rounded-lg font-semibold hover:bg-indigo-50 transition">
              Learn More
            </button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-3xl font-bold text-center mb-12">Features</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 border rounded-lg hover:shadow-lg transition">
              <div className="text-4xl mb-4">⚡</div>
              <h4 className="text-xl font-semibold mb-2">Fast Performance</h4>
              <p className="text-gray-600">Optimized for speed with Next.js and deployed on AWS.</p>
            </div>
            <div className="p-6 border rounded-lg hover:shadow-lg transition">
              <div className="text-4xl mb-4">🔒</div>
              <h4 className="text-xl font-semibold mb-2">Secure</h4>
              <p className="text-gray-600">Enterprise-grade security with AWS infrastructure.</p>
            </div>
            <div className="p-6 border rounded-lg hover:shadow-lg transition">
              <div className="text-4xl mb-4">📈</div>
              <h4 className="text-xl font-semibold mb-2">Scalable</h4>
              <p className="text-gray-600">Automatically scales with demand on AWS.</p>
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
