'use client';

import Link from 'next/link'

export default function About() {
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
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h2 className="text-5xl font-bold text-gray-900 mb-8">About Us</h2>
        
        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
          <p className="text-lg text-gray-700 mb-4">
            We&apos;re building scalable, modern web applications deployed on AWS. Our focus is on performance, security, and user experience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white rounded-lg shadow-md p-8">
            <h4 className="text-xl font-bold text-gray-900 mb-4">Technology</h4>
            <ul className="text-gray-700 space-y-2">
              <li>✓ Next.js 16</li>
              <li>✓ React 19</li>
              <li>✓ TypeScript</li>
              <li>✓ Tailwind CSS</li>
              <li>✓ AWS Deployment</li>
            </ul>
          </div>

          <div className="bg-white rounded-lg shadow-md p-8">
            <h4 className="text-xl font-bold text-gray-900 mb-4">Deployment</h4>
            <ul className="text-gray-700 space-y-2">
              <li>✓ Docker Containerized</li>
              <li>✓ AWS EC2 Ready</li>
              <li>✓ Elastic Beanstalk Compatible</li>
              <li>✓ ECS Support</li>
              <li>✓ CI/CD Pipeline Ready</li>
            </ul>
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
