'use client';

import { useState } from 'react';
import { config } from '@/content/config';

export default function Hero() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Integrate with email marketing service (e.g., Mailchimp, ConvertKit)
    console.log('Subscribing email:', email);
    setSubscribed(true);
    setTimeout(() => setSubscribed(false), 3000);
  };

  return (
    <section className="bg-charcoal text-white py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Profile Section */}
        <div className="flex items-center gap-4 mb-12">
          <div className="w-16 h-16 rounded-full bg-medium-gray flex items-center justify-center text-white text-2xl font-bold">
            KK
          </div>
          <div>
            <h2 className="text-xl font-bold">{config.hero.name}</h2>
            <p className="text-medium-gray text-sm">{config.hero.title}</p>
          </div>
        </div>

        {/* Main Headline */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 max-w-4xl">
          {config.hero.headline}
        </h1>

        {/* Sub-headline */}
        <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl">
          {config.hero.subheadline}
        </p>

        {/* Value Proposition with Highlight */}
        <p className="text-2xl md:text-3xl mb-12 max-w-3xl">
          <span className="highlight-orange">{config.hero.valueProposition}</span>
        </p>

        {/* Email Subscription Form */}
        <div className="max-w-md">
          <h3 className="text-xl font-semibold mb-4">Stay Updated</h3>
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
              className="flex-1 px-4 py-3 rounded-lg text-charcoal focus:outline-none focus:ring-2 focus:ring-orange"
            />
            <button
              type="submit"
              className="px-6 py-3 bg-lime text-charcoal font-semibold rounded-lg hover:bg-opacity-90 transition-all duration-200"
            >
              Subscribe
            </button>
          </form>
          {subscribed && (
            <p className="mt-3 text-lime text-sm">Thanks for subscribing!</p>
          )}
        </div>
      </div>
    </section>
  );
}
