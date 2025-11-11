import { useState } from 'react';
import { CheckCircle, Globe, Users, TrendingUp, Award, ArrowRight, Sparkles } from 'lucide-react';

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

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert('Thank you for your interest! Our team will contact you within 24 hours.');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    const checked = (e.target as HTMLInputElement).checked;

    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  return (
    <div className="min-h-screen bg-slate-900 font-opensans antialiased">
      {/* Hero Section */}
      <section className="relative min-h-screen overflow-hidden bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900">
        {/* Animated Grid Background */}
        <div className="absolute inset-0 opacity-20">
          <img src="/hero.png" alt="Background handshake" className="absolute inset-0 w-full h-full object-cover opacity-30" />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent"></div>
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse">
                <circle cx="30" cy="30" r="1.5" fill="#60a5fa" opacity="0.5" />
                <line x1="0" y1="30" x2="60" y2="30" stroke="#60a5fa" strokeWidth="0.5" opacity="0.3" />
                <line x1="30" y1="0" x2="30" y2="60" stroke="#60a5fa" strokeWidth="0.5" opacity="0.3" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>

        {/* Glow Orbs */}
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-blue-500/20 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-violet-500/10 rounded-full filter blur-3xl"></div>

        <div className="container mx-auto px-6 lg:px-24 py-24 lg:py-32 relative z-10">
          <div className="grid lg:grid-cols-12 gap-16 items-center">
            {/* Left Column */}
            <div className="lg:col-span-7 space-y-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full text-blue-300 text-sm font-medium backdrop-blur-sm">
                <Sparkles size={16} />
                <span>Trusted by 500+ Education Agencies Worldwide</span>
              </div>
              
              <h1 className="text-white text-5xl lg:text-7xl font-montserrat font-bold leading-tight tracking-tight">
                Expand Your Agency —
                <span className="bg-gradient-to-r from-blue-400 via-violet-400 to-blue-400 bg-clip-text text-transparent"> Partner With Trust</span>
              </h1>
              
              <p className="text-slate-300 text-xl lg:text-2xl leading-relaxed font-light">
                Connect international students with premier creative and community colleges across the U.S.
              </p>
              
              <div className="flex items-center gap-6 text-slate-400">
                <div className="flex items-center gap-2">
                  <CheckCircle size={20} className="text-emerald-400" />
                  <span>No Setup Fees</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle size={20} className="text-emerald-400" />
                  <span>50% Revenue Share</span>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <button 
                  onClick={() => {
                    const element = document.getElementById('form-section');
                    if (element) element.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="group bg-gradient-to-r from-blue-600 to-violet-600 text-white px-10 py-5 rounded-xl font-semibold text-lg hover:from-blue-500 hover:to-violet-500 transition-all duration-300 shadow-2xl shadow-blue-500/25 hover:shadow-blue-500/40 transform hover:-translate-y-1 flex items-center justify-center gap-3"
                >
                  Join the Network
                  <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </button>
                <button 
                  onClick={() => {
                    const element = document.getElementById('why-partner');
                    if (element) element.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="border-2 border-slate-700 text-slate-200 px-10 py-5 rounded-xl font-semibold text-lg hover:bg-slate-800 hover:border-slate-600 transition-all duration-300 backdrop-blur-sm"
                >
                  Learn More
                </button>
              </div>
            </div>

            {/* Right Column */}
            <div className="lg:col-span-5">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/20 to-violet-600/20 rounded-3xl blur-2xl"></div>
                <img 
                  src="/hero.png"
                  alt="Business partnership"
                  className="relative rounded-3xl shadow-2xl w-full transform hover:scale-105 transition-transform duration-700 border border-slate-800"
                />
                <div className="absolute -bottom-8 -right-8 bg-gradient-to-br from-slate-800 to-slate-900 p-8 rounded-2xl shadow-2xl border border-slate-700 backdrop-blur-xl hidden lg:block">
                  <div className="text-5xl font-bold bg-gradient-to-r from-blue-400 to-violet-400 bg-clip-text text-transparent">50%</div>
                  <div className="text-sm text-slate-400 font-medium mt-1">Revenue Share</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Wave */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" className="w-full" xmlns="http://www.w3.org/2000/svg">
            <path fill="#020617" d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"></path>
          </svg>
        </div>
      </section>

      {/* Intro Paragraph */}
      <section className="py-24 bg-slate-900 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-slate-950 to-slate-950"></div>
        <div className="container mx-auto px-6 lg:px-24 relative z-10">
          <div className="max-w-5xl mx-auto text-center">
            <p className="text-slate-300 text-xl lg:text-2xl leading-relaxed font-light">
              We collaborate with experienced agents and education advisors who want to expand their U.S. study portfolio. <span className="text-white font-medium">Foundry Eleven handles admissions, documentation, and compliance</span> so you can focus on building relationships and increasing placements.
            </p>
          </div>
        </div>
      </section>

      {/* Why Partner With Us */}
      <section id="why-partner" className="py-32 bg-slate-900 relative overflow-hidden">
        {/* Background Effects */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-violet-500/10 rounded-full filter blur-3xl"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/50 via-transparent to-slate-900/50"></div>

        <div className="container mx-auto px-6 lg:px-24 relative z-10">
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full text-blue-300 text-sm font-medium mb-6">
              <Award size={16} />
              <span>Partnership Benefits</span>
            </div>
            <h2 className="text-5xl lg:text-6xl font-montserrat font-bold text-white mb-6 tracking-tight">
              Why Partner With Us
            </h2>
            <p className="text-slate-400 text-xl max-w-3xl mx-auto font-light">
              Join a network of successful agents growing their business with U.S. education opportunities
            </p>
          </div>

          {/* Cards Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
            {[
              {
                icon: <Globe className="text-blue-400" size={28} />,
                title: "U.S.-Based Partner You Can Trust",
                description: "Work directly with a registered U.S. company with proven partnerships with accredited institutions including NYFA, Ohlone College, and Glendale Community College."
              },
              {
                icon: <Users className="text-violet-400" size={28} />,
                title: "Full-Service Support",
                description: "We handle all admissions processing, visa documentation, compliance, and student communications. You focus on recruitment and relationships."
              },
              {
                icon: <TrendingUp className="text-emerald-400" size={28} />,
                title: "Dedicated Partner Portal",
                description: "Track leads in real-time, monitor application progress, and access commission reports through our secure online portal available 24/7."
              },
              {
                icon: <Award className="text-amber-400" size={28} />,
                title: "High Commissions",
                description: "Earn industry-leading 50% revenue share on every confirmed student enrollment. No hidden fees or conditions — straightforward, transparent compensation."
              },
              {
                icon: <CheckCircle className="text-cyan-400" size={28} />,
                title: "Long-Term Collaboration",
                description: "Build a sustainable partnership with ongoing support, marketing materials, and regular training sessions to maximize your success."
              },
              {
                icon: <Users className="text-pink-400" size={28} />,
                title: "Dedicated U.S. Support Team",
                description: "Access to experienced admissions coordinators and visa specialists who understand international education and can support your students throughout their journey."
              }
            ].map((card, idx) => (
              <div 
                key={idx}
                className="group bg-gradient-to-br from-slate-800/50 to-slate-900/50 p-8 rounded-2xl border border-slate-700/50 hover:border-blue-500/50 backdrop-blur-sm transition-all duration-500 transform hover:-translate-y-2 hover:shadow-2xl hover:shadow-blue-500/10"
              >
                <div className="mb-6 transform group-hover:scale-110 transition-transform duration-500">{card.icon}</div>
                <h3 className="text-xl font-montserrat font-bold text-white mb-4 leading-tight">
                  {card.title}
                </h3>
                <p className="text-slate-400 leading-relaxed font-light">
                  {card.description}
                </p>
              </div>
            ))}
          </div>

          {/* Key Benefits Bar */}
          <div className="bg-gradient-to-r from-slate-800 to-slate-900 rounded-2xl shadow-2xl p-10 border border-slate-700 backdrop-blur-xl">
            <div className="grid md:grid-cols-3 gap-8">
              <div className="flex items-start gap-4">
                <CheckCircle className="text-emerald-400 flex-shrink-0 mt-1" size={24} />
                <div>
                  <p className="text-white font-semibold text-lg">
                    50% revenue share on every confirmed student enrollment
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <CheckCircle className="text-emerald-400 flex-shrink-0 mt-1" size={24} />
                <div>
                  <p className="text-white font-semibold text-lg">
                    Live lead and application tracking via partner portal
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <CheckCircle className="text-emerald-400 flex-shrink-0 mt-1" size={24} />
                <div>
                  <p className="text-white font-semibold text-lg">
                    Dedicated U.S. support team for admissions and visa coordination
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section id="form-section" className="py-32 bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 relative overflow-hidden">
        {/* Glow Effects */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-500/20 rounded-full filter blur-3xl"></div>
          <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-violet-500/20 rounded-full filter blur-3xl"></div>
        </div>

        <div className="container mx-auto px-6 lg:px-24 relative z-10">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full text-blue-300 text-sm font-medium mb-6">
                <Sparkles size={16} />
                <span>Get Started Today</span>
              </div>
              <h2 className="text-5xl lg:text-6xl font-montserrat font-bold text-white mb-6 tracking-tight">
                Apply to Become a Partner Agent
              </h2>
              <p className="text-slate-300 text-xl font-light">
                Complete this short form and our team will contact you within 24 hours to begin your onboarding.
              </p>
            </div>

            <div className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 rounded-3xl shadow-2xl p-10 lg:p-14 border border-slate-700 backdrop-blur-xl">
              <form onSubmit={handleSubmit} className="space-y-7">
                <div>
                  <label className="block text-slate-200 font-semibold mb-3 text-sm uppercase tracking-wider">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-5 py-4 bg-slate-900/50 border border-slate-700 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all"
                    placeholder="John Smith"
                  />
                </div>

                <div>
                  <label className="block text-slate-200 font-semibold mb-3 text-sm uppercase tracking-wider">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-5 py-4 bg-slate-900/50 border border-slate-700 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all"
                    placeholder="john@company.com"
                  />
                </div>

                <div>
                  <label className="block text-slate-200 font-semibold mb-3 text-sm uppercase tracking-wider">
                    Company Name *
                  </label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-5 py-4 bg-slate-900/50 border border-slate-700 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all"
                    placeholder="Your Agency Name"
                  />
                </div>

                <div>
                  <label className="block text-slate-200 font-semibold mb-3 text-sm uppercase tracking-wider">
                    Country *
                  </label>
                  <select
                    name="country"
                    value={formData.country}
                    onChange={handleChange}
                    className="w-full px-5 py-4 bg-slate-900/50 border border-slate-700 rounded-xl text-white focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all"
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
                  <label className="block text-slate-200 font-semibold mb-3 text-sm uppercase tracking-wider">
                    Number of Students Sent Annually *
                  </label>
                  <select
                    name="students"
                    value={formData.students}
                    onChange={handleChange}
                    className="w-full px-5 py-4 bg-slate-900/50 border border-slate-700 rounded-xl text-white focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all"
                  >
                    <option value="">Select range</option>
                    <option value="1-10">1-10 students</option>
                    <option value="11-50">11-50 students</option>
                    <option value="51-100">51-100 students</option>
                    <option value="100+">100+ students</option>
                  </select>
                </div>

                <div>
                  <label className="block text-slate-200 font-semibold mb-3 text-sm uppercase tracking-wider">
                    Message / Comments
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-5 py-4 bg-slate-900/50 border border-slate-700 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all resize-none"
                    placeholder="Tell us about your agency and experience..."
                  ></textarea>
                </div>

                <div className="flex items-start gap-4 p-5 bg-slate-900/30 rounded-xl border border-slate-700/50">
                  <input
                    type="checkbox"
                    name="agreedToTerms"
                    id="terms"
                    checked={formData.agreedToTerms}
                    onChange={handleChange}
                    className="mt-1 w-5 h-5 text-blue-500 bg-slate-800 border-slate-600 rounded focus:ring-blue-500 focus:ring-offset-slate-900"
                  />
                  <label htmlFor="terms" className="text-slate-300 text-sm leading-relaxed">
                    I agree to Foundry Eleven's terms and privacy policy and consent to being contacted about partnership opportunities.
                  </label>
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-600 to-violet-600 text-white py-5 rounded-xl font-bold text-lg hover:from-blue-500 hover:to-violet-500 transition-all duration-300 shadow-2xl shadow-blue-500/25 hover:shadow-blue-500/40 transform hover:-translate-y-1 mt-8"
                >
                  Join the Network
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 border-t border-slate-800 py-20">
        <div className="container mx-auto px-6 lg:px-24">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h3 className="text-3xl font-montserrat font-bold text-white mb-4 tracking-tight">Foundry Eleven</h3>
              <p className="text-slate-400 text-lg leading-relaxed max-w-3xl mx-auto font-light">
                Foundry Eleven is a U.S.-based company helping creative and community colleges reach qualified international students. Partner institutions include NYFA, Ohlone College, and Glendale Community College.
              </p>
            </div>

            {/* Trust Logos */}
            <div className="flex flex-wrap justify-center items-center gap-12 mb-12 pb-12 border-b border-slate-800">
              <div className="text-sm font-semibold text-slate-600 tracking-wider">NYFA</div>
              <div className="text-sm font-semibold text-slate-600 tracking-wider">OHLONE COLLEGE</div>
              <div className="text-sm font-semibold text-slate-600 tracking-wider">GLENDALE CC</div>
            </div>

            <p className="text-slate-600 text-sm text-center">
              © 2025 Foundry Eleven. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}