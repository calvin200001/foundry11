import React, { useState } from 'react';
import { CheckCircle, Globe, Users, TrendingUp, Award, ArrowRight } from 'lucide-react';

export default function FoundryElevenLanding() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    country: '',
    students: '',
    message: '',
    agreedToTerms: false
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for your interest! Our team will contact you within 24 hours.');
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  return (
    <div className="min-h-screen bg-white font-sans">
      {/* Hero Section */}
      <section className="relative min-h-[700px] overflow-hidden bg-gradient-to-br from-blue-600 via-blue-700 to-blue-900">
        {/* Geometric Pattern Overlay */}
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <circle cx="20" cy="20" r="1" fill="white" />
                <line x1="0" y1="20" x2="40" y2="20" stroke="white" strokeWidth="0.5" />
                <line x1="20" y1="0" x2="20" y2="40" stroke="white" strokeWidth="0.5" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>

        <div className="container mx-auto px-6 lg:px-24 py-16 lg:py-20 relative z-10">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            {/* Left Column - Text Content */}
            <div className="lg:col-span-7">
              <h1 className="text-white text-4xl lg:text-5xl font-bold leading-tight mb-6">
                Expand Your Agency — Partner With a U.S. Company You Can Trust
              </h1>
              <p className="text-blue-100 text-lg lg:text-xl mb-4 leading-relaxed">
                Foundry Eleven connects international students with creative and community colleges across the U.S.
              </p>
              <p className="text-blue-200 text-base italic mb-8">
                No setup fees. No risk. Earn commissions for every successful enrollment.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <button 
                  onClick={() => document.getElementById('form-section').scrollIntoView({ behavior: 'smooth' })}
                  className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-50 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 flex items-center justify-center gap-2"
                >
                  Join the Network
                  <ArrowRight size={20} />
                </button>
                <button 
                  onClick={() => document.getElementById('why-partner').scrollIntoView({ behavior: 'smooth' })}
                  className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-blue-600 transition-all duration-300"
                >
                  Learn More
                </button>
              </div>
            </div>

            {/* Right Column - Image */}
            <div className="lg:col-span-5">
              <div className="relative">
                <img 
                  src="/hero.png"
                  alt="Business partnership handshake"
                  className="rounded-2xl shadow-2xl w-full transform hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-xl shadow-xl hidden lg:block">
                  <div className="text-3xl font-bold text-blue-600">50%</div>
                  <div className="text-sm text-gray-600">Revenue Share</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Intro Paragraph */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6 lg:px-24">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-gray-800 text-lg lg:text-xl leading-relaxed">
              We collaborate with experienced agents and education advisors who want to expand their U.S. study portfolio. Foundry Eleven handles admissions, documentation, and compliance so you can focus on building relationships and increasing placements.
            </p>
          </div>
        </div>
      </section>

      {/* Why Partner With Us */}
      <section id="why-partner" className="py-20 bg-gray-50 relative overflow-hidden">
        {/* Background Decoration */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-100 rounded-full filter blur-3xl opacity-30 -mr-48 -mt-48"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-50 rounded-full filter blur-3xl opacity-30 -ml-48 -mb-48"></div>

        <div className="container mx-auto px-6 lg:px-24 relative z-10">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 text-center mb-4">
            Why Partner With Us
          </h2>
          <p className="text-gray-600 text-center mb-16 max-w-2xl mx-auto">
            Join a network of successful agents growing their business with U.S. education opportunities
          </p>

          {/* Cards Grid */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {[
              {
                icon: <Globe className="text-blue-600" size={32} />,
                title: "U.S.-Based Partner You Can Trust",
                description: "Work directly with a registered U.S. company with proven partnerships with accredited institutions including NYFA, Ohlone College, and Glendale Community College."
              },
              {
                icon: <Users className="text-blue-600" size={32} />,
                title: "Full-Service Support",
                description: "We handle all admissions processing, visa documentation, compliance, and student communications. You focus on recruitment and relationships."
              },
              {
                icon: <TrendingUp className="text-blue-600" size={32} />,
                title: "Dedicated Partner Portal",
                description: "Track leads in real-time, monitor application progress, and access commission reports through our secure online portal available 24/7."
              },
              {
                icon: <Award className="text-blue-600" size={32} />,
                title: "High Commissions",
                description: "Earn industry-leading 50% revenue share on every confirmed student enrollment. No hidden fees or conditions — straightforward, transparent compensation."
              },
              {
                icon: <CheckCircle className="text-blue-600" size={32} />,
                title: "Long-Term Collaboration",
                description: "Build a sustainable partnership with ongoing support, marketing materials, and regular training sessions to maximize your success."
              },
              {
                icon: <Users className="text-blue-600" size={32} />,
                title: "Dedicated U.S. Support Team",
                description: "Access to experienced admissions coordinators and visa specialists who understand international education and can support your students throughout their journey."
              }
            ].map((card, idx) => (
              <div 
                key={idx}
                className="bg-blue-50/20 p-8 rounded-xl border border-gray-200 hover:border-blue-300 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="mb-4">{card.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {card.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {card.description}
                </p>
              </div>
            ))}
          </div>

          {/* Key Benefits Bar */}
          <div className="bg-white rounded-xl shadow-lg p-8 border-t-4 border-blue-600">
            <div className="grid md:grid-cols-3 gap-8">
              <div className="flex items-start gap-4">
                <CheckCircle className="text-blue-600 flex-shrink-0 mt-1" size={24} />
                <div>
                  <p className="text-gray-800 font-medium">
                    50% revenue share on every confirmed student enrollment
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <CheckCircle className="text-blue-600 flex-shrink-0 mt-1" size={24} />
                <div>
                  <p className="text-gray-800 font-medium">
                    Live lead and application tracking via partner portal
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <CheckCircle className="text-blue-600 flex-shrink-0 mt-1" size={24} />
                <div>
                  <p className="text-gray-800 font-medium">
                    Dedicated U.S. support team for admissions and visa coordination
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section id="form-section" className="py-20 bg-gradient-to-br from-blue-600 to-blue-800 relative overflow-hidden">
        {/* Wave Divider */}
        <div className="absolute top-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" className="w-full" xmlns="http://www.w3.org/2000/svg">
            <path fill="#ffffff" d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"></path>
          </svg>
        </div>

        {/* Glow Effect */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-400 rounded-full filter blur-3xl opacity-20"></div>
        </div>

        <div className="container mx-auto px-6 lg:px-24 relative z-10">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                Apply to Become a Partner Agent
              </h2>
              <p className="text-blue-100 text-lg">
                Complete this short form and our team will contact you within 24 hours to begin your onboarding.
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-2xl p-8 lg:p-12">
              <div className="space-y-6">
                <div>
                  <label className="block text-gray-700 font-medium mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100 transition-all"
                    placeholder="John Smith"
                  />
                </div>

                <div>
                  <label className="block text-gray-700 font-medium mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100 transition-all"
                    placeholder="john@company.com"
                  />
                </div>

                <div>
                  <label className="block text-gray-700 font-medium mb-2">
                    Company Name *
                  </label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100 transition-all"
                    placeholder="Your Agency Name"
                  />
                </div>

                <div>
                  <label className="block text-gray-700 font-medium mb-2">
                    Country *
                  </label>
                  <select
                    name="country"
                    value={formData.country}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100 transition-all"
                  >
                    <option value="">Select your country</option>
                    <option value="India">India</option>
                    <option value="China">China</option>
                    <option value="Vietnam">Vietnam</option>
                    <option value="Nepal">Nepal</option>
                    <option value="Bangladesh">Bangladesh</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-gray-700 font-medium mb-2">
                    Number of Students Sent Annually *
                  </label>
                  <select
                    name="students"
                    value={formData.students}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100 transition-all"
                  >
                    <option value="">Select range</option>
                    <option value="1-10">1-10 students</option>
                    <option value="11-50">11-50 students</option>
                    <option value="51-100">51-100 students</option>
                    <option value="100+">100+ students</option>
                  </select>
                </div>

                <div>
                  <label className="block text-gray-700 font-medium mb-2">
                    Message / Comments
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="4"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100 transition-all resize-none"
                    placeholder="Tell us about your agency and experience..."
                  ></textarea>
                </div>

                <div className="flex items-start gap-3">
                  <input
                    type="checkbox"
                    name="agreedToTerms"
                    id="terms"
                    checked={formData.agreedToTerms}
                    onChange={handleChange}
                    className="mt-1 w-5 h-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                  />
                  <label htmlFor="terms" className="text-gray-700 text-sm">
                    I agree to Foundry Eleven's terms and privacy policy and consent to being contacted about partnership opportunities.
                  </label>
                </div>

                <button
                  onClick={handleSubmit}
                  className="w-full bg-blue-600 text-white py-4 rounded-lg font-semibold text-lg hover:bg-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                >
                  Join the Network
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer / Trust Section */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="container mx-auto px-6 lg:px-24">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-8">
              <h3 className="text-2xl font-bold mb-4">Foundry Eleven</h3>
            </div>
            
            <p className="text-gray-400 text-sm leading-relaxed mb-8">
              Foundry Eleven is a U.S.-based company helping creative and community colleges reach qualified international students. Partner institutions include NYFA, Ohlone College, and Glendale Community College.
            </p>

            {/* Trust Logos Placeholder */}
            <div className="flex justify-center items-center gap-12 mb-8 opacity-60">
              <div className="text-xs text-gray-500">NYFA</div>
              <div className="text-xs text-gray-500">Ohlone College</div>
              <div className="text-xs text-gray-500">Glendale CC</div>
            </div>

            <p className="text-gray-500 text-xs">
              © 2025 Foundry Eleven. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}