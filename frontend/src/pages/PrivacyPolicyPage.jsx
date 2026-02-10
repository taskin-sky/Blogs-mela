import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Shield,
  Lock,
  Eye,
  EyeOff,
  Database,
  Cookie,
  User,
  Mail,
  Globe,
  Server,
  Key,
  Bell,
  Trash2,
  Download,
  AlertCircle,
  CheckCircle,
  ChevronRight,
  ExternalLink,
  ShieldCheck,
} from 'lucide-react';

const PrivacyPolicyPage = () => {
  const [activeSection, setActiveSection] = useState('introduction');
  const [showCookiePreferences, setShowCookiePreferences] = useState(false);
  const [cookiePreferences, setCookiePreferences] = useState({
    essential: true,
    analytics: true,
    marketing: false,
    social: false,
  });

  const sections = [
    { id: 'introduction', title: 'Introduction' },
    { id: 'data-collection', title: 'Data We Collect' },
    { id: 'data-use', title: 'How We Use Your Data' },
    { id: 'data-sharing', title: 'Data Sharing' },
    { id: 'data-protection', title: 'Data Protection' },
    { id: 'cookies', title: 'Cookies & Tracking' },
    { id: 'your-rights', title: 'Your Rights' },
    { id: 'children-privacy', title: "Children's Privacy" },
    { id: 'international', title: 'International Transfers' },
    { id: 'changes', title: 'Policy Changes' },
    { id: 'contact', title: 'Contact Us' },
  ];

  const handleCookieToggle = (cookieType) => {
    if (cookieType === 'essential') return; // Essential cookies cannot be disabled
    setCookiePreferences((prev) => ({
      ...prev,
      [cookieType]: !prev[cookieType],
    }));
  };

  const saveCookiePreferences = () => {
    // Save preferences to localStorage
    localStorage.setItem('blogsMelaCookies', JSON.stringify(cookiePreferences));
    setShowCookiePreferences(false);
    alert('Cookie preferences saved successfully!');
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-blue-50">
      {/* Cookie Preferences Banner */}
      {showCookiePreferences && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-6">
            <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
              <Cookie size={20} />
              Cookie Preferences
            </h3>
            <div className="space-y-4 mb-6">
              {Object.entries(cookiePreferences).map(([type, enabled]) => (
                <div key={type} className="flex items-center justify-between">
                  <div>
                    <div className="font-medium text-gray-700 capitalize">
                      {type} Cookies
                    </div>
                    <div className="text-sm text-gray-500">
                      {type === 'essential' &&
                        'Required for basic functionality'}
                      {type === 'analytics' && 'Help us improve the platform'}
                      {type === 'marketing' && 'Personalize ads and content'}
                      {type === 'social' && 'Enable social media features'}
                    </div>
                  </div>
                  <button
                    onClick={() => handleCookieToggle(type)}
                    disabled={type === 'essential'}
                    className={`relative inline-flex h-6 w-11 items-center rounded-full 
                      ${enabled ? 'bg-green-500' : 'bg-gray-300'} 
                      ${type === 'essential' ? 'opacity-50 cursor-not-allowed' : ''}`}
                  >
                    <span
                      className={`inline-block h-4 w-4 transform rounded-full bg-white transition 
                      ${enabled ? 'translate-x-6' : 'translate-x-1'}`}
                    />
                  </button>
                </div>
              ))}
            </div>
            <div className="flex gap-3">
              <button
                onClick={saveCookiePreferences}
                className="flex-1 px-4 py-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-lg hover:shadow-lg"
              >
                Save Preferences
              </button>
              <button
                onClick={() => setShowCookiePreferences(false)}
                className="flex-1 px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Hero Header */}
      <div className="bg-gradient-to-r from-blue-900 via-indigo-800 to-purple-900 text-white py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="flex-1">
              <div className="inline-flex items-center gap-3 mb-6">
                <div className="p-3 bg-white/20 backdrop-blur-sm rounded-2xl">
                  <ShieldCheck size={32} />
                </div>
                <h1 className="text-4xl md:text-5xl font-bold">
                  Privacy Policy
                </h1>
              </div>
              <p className="text-xl text-blue-100 mb-8 max-w-3xl">
                Your privacy is our priority. This policy explains how Blogs
                Mela collects, uses, and protects your personal information.
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-lg">
                  <Calendar size={18} />
                  <span>Last Updated: December 1, 2023</span>
                </div>
                <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-lg">
                  <Key size={18} />
                  <span>GDPR & CCPA Compliant</span>
                </div>
              </div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <div className="text-center">
                <div className="text-4xl mb-2">🔒</div>
                <h3 className="text-xl font-bold mb-2">Your Data Rights</h3>
                <p className="text-blue-100 text-sm">
                  You control your data. Learn about your rights below.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Table of Contents */}
          <aside className="lg:col-span-1">
            <div className="sticky top-8 bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
              <h3 className="text-lg font-bold text-gray-800 mb-4 flex items-center gap-2">
                <Lock size={20} />
                Quick Navigation
              </h3>
              <nav className="space-y-1">
                {sections.map((section) => (
                  <button
                    key={section.id}
                    onClick={() => {
                      setActiveSection(section.id);
                      document
                        .getElementById(section.id)
                        ?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className={`w-full text-left px-3 py-3 rounded-lg transition-all ${
                      activeSection === section.id
                        ? 'bg-gradient-to-r from-blue-50 to-indigo-50 text-blue-600 font-semibold border-l-4 border-blue-500'
                        : 'text-gray-700 hover:bg-gray-50'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span>{section.title}</span>
                      <ChevronRight
                        size={16}
                        className={
                          activeSection === section.id
                            ? 'text-blue-500'
                            : 'text-gray-400'
                        }
                      />
                    </div>
                  </button>
                ))}
              </nav>

              {/* Quick Actions */}
              <div className="mt-8 space-y-3">
                <button
                  onClick={() => setShowCookiePreferences(true)}
                  className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-lg hover:shadow-lg transition-all"
                >
                  <Cookie size={16} />
                  Cookie Settings
                </button>
                <a
                  href="mailto:privacy@blogsmela.com"
                  className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors"
                >
                  <Mail size={16} />
                  Contact DPO
                </a>
                <Link
                  to="/terms"
                  className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors"
                >
                  <FileText size={16} />
                  Terms of Service
                </Link>
              </div>

              {/* Privacy Score */}
              <div className="mt-8 p-4 bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl border border-green-200">
                <div className="flex items-center gap-3 mb-2">
                  <ShieldCheck className="text-green-600" size={20} />
                  <h4 className="font-semibold text-green-800">
                    Privacy Score
                  </h4>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-700 mb-1">
                    A+
                  </div>
                  <div className="text-green-600 text-sm">
                    Industry Best Practices
                  </div>
                </div>
              </div>
            </div>
          </aside>

          {/* Main Content */}
          <main className="lg:col-span-3 space-y-8">
            {/* Privacy Summary Cards */}
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-blue-100 rounded-lg">
                    <Database className="text-blue-600" size={20} />
                  </div>
                  <h3 className="font-bold text-gray-800">Data We Collect</h3>
                </div>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 mt-1.5 rounded-full bg-blue-500"></div>
                    <span>Account information (email, name)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 mt-1.5 rounded-full bg-blue-500"></div>
                    <span>Content you create and share</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 mt-1.5 rounded-full bg-blue-500"></div>
                    <span>Usage data and analytics</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 mt-1.5 rounded-full bg-blue-500"></div>
                    <span>Device and browser information</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-green-100 rounded-lg">
                    <Eye className="text-green-600" size={20} />
                  </div>
                  <h3 className="font-bold text-gray-800">Your Rights</h3>
                </div>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 mt-1.5 rounded-full bg-green-500"></div>
                    <span>Access your personal data</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 mt-1.5 rounded-full bg-green-500"></div>
                    <span>Correct inaccurate information</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 mt-1.5 rounded-full bg-green-500"></div>
                    <span>Delete your data</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 mt-1.5 rounded-full bg-green-500"></div>
                    <span>Opt-out of marketing</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Privacy Content */}
            <div className="space-y-12">
              {/* Introduction */}
              <section id="introduction" className="scroll-mt-24">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-2 h-8 bg-gradient-to-b from-blue-500 to-indigo-600 rounded-full"></div>
                  <h2 className="text-2xl font-bold text-gray-800">
                    1. Introduction
                  </h2>
                </div>
                <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
                  <p className="text-gray-700 mb-4">
                    At <strong>Blogs Mela</strong>, we are committed to
                    protecting your privacy and personal information. This
                    Privacy Policy explains how we collect, use, disclose, and
                    safeguard your information when you use our platform.
                  </p>
                  <p className="text-gray-700 mb-4">
                    We believe in transparency and want you to understand how
                    your data is handled. This policy applies to all services
                    offered by Blogs Mela.
                  </p>
                  <div className="bg-blue-50 rounded-xl p-6 border border-blue-100">
                    <div className="flex items-start gap-3">
                      <ShieldCheck className="text-blue-600 mt-1" size={20} />
                      <div>
                        <h4 className="font-semibold text-blue-800 mb-2">
                          Our Commitment
                        </h4>
                        <p className="text-blue-700">
                          We never sell your personal data to third parties. We
                          only collect data necessary to provide and improve our
                          services.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* Data Collection */}
              <section id="data-collection" className="scroll-mt-24">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-2 h-8 bg-gradient-to-b from-purple-500 to-pink-600 rounded-full"></div>
                  <h2 className="text-2xl font-bold text-gray-800">
                    2. Data We Collect
                  </h2>
                </div>
                <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
                  <div className="grid md:grid-cols-2 gap-6 mb-8">
                    <div className="space-y-4">
                      <h3 className="text-lg font-semibold text-gray-800 flex items-center gap-2">
                        <User size={18} />
                        Personal Information
                      </h3>
                      <ul className="space-y-2 text-gray-600">
                        <li className="flex items-center gap-2">
                          <CheckCircle className="text-green-500" size={16} />
                          <span>Name and email address</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle className="text-green-500" size={16} />
                          <span>Profile information</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle className="text-green-500" size={16} />
                          <span>Contact preferences</span>
                        </li>
                      </ul>
                    </div>
                    <div className="space-y-4">
                      <h3 className="text-lg font-semibold text-gray-800 flex items-center gap-2">
                        <Database size={18} />
                        Usage Data
                      </h3>
                      <ul className="space-y-2 text-gray-600">
                        <li className="flex items-center gap-2">
                          <CheckCircle className="text-green-500" size={16} />
                          <span>IP address and device info</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle className="text-green-500" size={16} />
                          <span>Browser type and settings</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle className="text-green-500" size={16} />
                          <span>Pages visited and interactions</span>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl p-6 border border-purple-200">
                    <div className="flex items-start gap-3">
                      <AlertCircle className="text-purple-600 mt-1" size={20} />
                      <div>
                        <h4 className="font-semibold text-purple-800 mb-2">
                          Content You Create
                        </h4>
                        <p className="text-purple-700">
                          All blog posts, comments, and content you create are
                          stored as part of our service. You retain ownership of
                          your content.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* Data Use */}
              <section id="data-use" className="scroll-mt-24">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-2 h-8 bg-gradient-to-b from-green-500 to-emerald-600 rounded-full"></div>
                  <h2 className="text-2xl font-bold text-gray-800">
                    3. How We Use Your Data
                  </h2>
                </div>
                <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <h3 className="text-lg font-semibold text-gray-800 mb-4">
                        Primary Purposes
                      </h3>
                      <div className="space-y-4">
                        <div className="flex items-start gap-3">
                          <div className="p-2 bg-green-100 rounded-lg">
                            <Bell className="text-green-600" size={16} />
                          </div>
                          <div>
                            <h4 className="font-medium text-gray-800">
                              Service Delivery
                            </h4>
                            <p className="text-gray-600 text-sm">
                              To provide and maintain our platform
                            </p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3">
                          <div className="p-2 bg-blue-100 rounded-lg">
                            <Server className="text-blue-600" size={16} />
                          </div>
                          <div>
                            <h4 className="font-medium text-gray-800">
                              Improvement
                            </h4>
                            <p className="text-gray-600 text-sm">
                              To enhance user experience and features
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-800 mb-4">
                        Secondary Purposes
                      </h3>
                      <div className="space-y-4">
                        <div className="flex items-start gap-3">
                          <div className="p-2 bg-purple-100 rounded-lg">
                            <Globe className="text-purple-600" size={16} />
                          </div>
                          <div>
                            <h4 className="font-medium text-gray-800">
                              Communication
                            </h4>
                            <p className="text-gray-600 text-sm">
                              To send updates and notifications
                            </p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3">
                          <div className="p-2 bg-cyan-100 rounded-lg">
                            <Shield className="text-cyan-600" size={16} />
                          </div>
                          <div>
                            <h4 className="font-medium text-gray-800">
                              Security
                            </h4>
                            <p className="text-gray-600 text-sm">
                              To protect against fraud and abuse
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* Data Sharing */}
              <section id="data-sharing" className="scroll-mt-24">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-2 h-8 bg-gradient-to-b from-orange-500 to-red-600 rounded-full"></div>
                  <h2 className="text-2xl font-bold text-gray-800">
                    4. Data Sharing & Disclosure
                  </h2>
                </div>
                <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
                  <p className="text-gray-700 mb-6">
                    We only share your information in the following limited
                    circumstances:
                  </p>

                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center">
                        <div className="text-red-600 font-bold">1</div>
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-800 mb-2">
                          Service Providers
                        </h3>
                        <p className="text-gray-600">
                          Trusted third parties who help us operate our platform
                          (hosting, analytics, email services). These providers
                          are contractually bound to protect your data.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-12 h-12 bg-yellow-100 rounded-xl flex items-center justify-center">
                        <div className="text-yellow-600 font-bold">2</div>
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-800 mb-2">
                          Legal Requirements
                        </h3>
                        <p className="text-gray-600">
                          When required by law, court order, or government
                          request. We'll notify you unless prohibited by law.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
                        <div className="text-green-600 font-bold">3</div>
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-800 mb-2">
                          Business Transfers
                        </h3>
                        <p className="text-gray-600">
                          In connection with a merger, acquisition, or sale of
                          assets. Users will be notified of any change in
                          control.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-8 bg-gradient-to-r from-red-50 to-orange-50 rounded-xl p-6 border border-red-200">
                    <div className="flex items-start gap-3">
                      <AlertCircle className="text-red-600 mt-1" size={20} />
                      <div>
                        <h4 className="font-semibold text-red-800 mb-2">
                          We Never Sell Your Data
                        </h4>
                        <p className="text-red-700">
                          Blogs Mela does not and will not sell your personal
                          information to third parties for advertising or
                          marketing purposes.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* Data Protection */}
              <section id="data-protection" className="scroll-mt-24">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-2 h-8 bg-gradient-to-b from-cyan-500 to-blue-600 rounded-full"></div>
                  <h2 className="text-2xl font-bold text-gray-800">
                    5. Data Protection & Security
                  </h2>
                </div>
                <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
                  <div className="grid md:grid-cols-3 gap-6 mb-8">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-cyan-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Lock className="text-cyan-600" size={24} />
                      </div>
                      <h4 className="font-semibold text-gray-800 mb-2">
                        Encryption
                      </h4>
                      <p className="text-gray-600 text-sm">
                        All data transmitted is encrypted using TLS/SSL
                      </p>
                    </div>
                    <div className="text-center">
                      <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Shield className="text-blue-600" size={24} />
                      </div>
                      <h4 className="font-semibold text-gray-800 mb-2">
                        Access Control
                      </h4>
                      <p className="text-gray-600 text-sm">
                        Strict access controls and authentication
                      </p>
                    </div>
                    <div className="text-center">
                      <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Server className="text-green-600" size={24} />
                      </div>
                      <h4 className="font-semibold text-gray-800 mb-2">
                        Regular Audits
                      </h4>
                      <p className="text-gray-600 text-sm">
                        Security assessments and penetration testing
                      </p>
                    </div>
                  </div>

                  <div className="bg-gradient-to-r from-cyan-50 to-blue-50 rounded-xl p-6 border border-cyan-200">
                    <div className="flex items-start gap-3">
                      <Key className="text-cyan-600 mt-1" size={20} />
                      <div>
                        <h4 className="font-semibold text-cyan-800 mb-2">
                          Data Retention
                        </h4>
                        <p className="text-cyan-700">
                          We retain your personal data only as long as necessary
                          to provide our services or as required by law. You can
                          request deletion of your data at any time.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* Cookies */}
              <section id="cookies" className="scroll-mt-24">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-2 h-8 bg-gradient-to-b from-yellow-500 to-amber-600 rounded-full"></div>
                  <h2 className="text-2xl font-bold text-gray-800">
                    6. Cookies & Tracking Technologies
                  </h2>
                </div>
                <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
                  <div className="flex items-center justify-between mb-6">
                    <p className="text-gray-700">
                      We use cookies and similar technologies to enhance your
                      experience.
                    </p>
                    <button
                      onClick={() => setShowCookiePreferences(true)}
                      className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-yellow-500 to-amber-600 text-white rounded-lg hover:shadow-lg"
                    >
                      <Cookie size={16} />
                      Manage Cookies
                    </button>
                  </div>

                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead>
                        <tr className="bg-gray-50">
                          <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">
                            Cookie Type
                          </th>
                          <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">
                            Purpose
                          </th>
                          <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">
                            Duration
                          </th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-200">
                        <tr>
                          <td className="px-4 py-3 text-sm text-gray-700">
                            Essential
                          </td>
                          <td className="px-4 py-3 text-sm text-gray-600">
                            Basic site functionality
                          </td>
                          <td className="px-4 py-3 text-sm text-gray-600">
                            Session
                          </td>
                        </tr>
                        <tr>
                          <td className="px-4 py-3 text-sm text-gray-700">
                            Analytics
                          </td>
                          <td className="px-4 py-3 text-sm text-gray-600">
                            Improve platform performance
                          </td>
                          <td className="px-4 py-3 text-sm text-gray-600">
                            2 years
                          </td>
                        </tr>
                        <tr>
                          <td className="px-4 py-3 text-sm text-gray-700">
                            Preferences
                          </td>
                          <td className="px-4 py-3 text-sm text-gray-600">
                            Remember your settings
                          </td>
                          <td className="px-4 py-3 text-sm text-gray-600">
                            1 year
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </section>

              {/* Your Rights */}
              <section id="your-rights" className="scroll-mt-24">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-2 h-8 bg-gradient-to-b from-green-500 to-emerald-600 rounded-full"></div>
                  <h2 className="text-2xl font-bold text-gray-800">
                    7. Your Privacy Rights
                  </h2>
                </div>
                <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <div className="flex items-start gap-3 p-4 bg-green-50 rounded-xl">
                        <Eye className="text-green-600 mt-1" size={18} />
                        <div>
                          <h4 className="font-semibold text-green-800">
                            Right to Access
                          </h4>
                          <p className="text-green-700 text-sm">
                            Request a copy of your personal data
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3 p-4 bg-blue-50 rounded-xl">
                        <Download className="text-blue-600 mt-1" size={18} />
                        <div>
                          <h4 className="font-semibold text-blue-800">
                            Right to Portability
                          </h4>
                          <p className="text-blue-700 text-sm">
                            Receive your data in machine-readable format
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="space-y-4">
                      <div className="flex items-start gap-3 p-4 bg-red-50 rounded-xl">
                        <Trash2 className="text-red-600 mt-1" size={18} />
                        <div>
                          <h4 className="font-semibold text-red-800">
                            Right to Deletion
                          </h4>
                          <p className="text-red-700 text-sm">
                            Request deletion of your personal data
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3 p-4 bg-purple-50 rounded-xl">
                        <Bell className="text-purple-600 mt-1" size={18} />
                        <div>
                          <h4 className="font-semibold text-purple-800">
                            Right to Opt-out
                          </h4>
                          <p className="text-purple-700 text-sm">
                            Opt-out of marketing communications
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="mt-8 text-center">
                    <p className="text-gray-600 mb-4">
                      To exercise your rights, contact our Data Protection
                      Officer:
                    </p>
                    <a
                      href="mailto:dpo@blogsmela.com"
                      className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-xl hover:shadow-lg"
                    >
                      <Mail size={16} />
                      dpo@blogsmela.com
                    </a>
                  </div>
                </div>
              </section>

              {/* Contact Section */}
              <section id="contact" className="scroll-mt-24">
                <div className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-2xl p-8 text-white">
                  <div className="max-w-2xl mx-auto text-center">
                    <div className="inline-flex items-center gap-3 mb-6">
                      <div className="p-3 bg-white/20 backdrop-blur-sm rounded-2xl">
                        <Mail size={24} />
                      </div>
                      <h2 className="text-2xl font-bold">
                        Contact Our Privacy Team
                      </h2>
                    </div>
                    <p className="text-blue-100 mb-8">
                      For privacy-related questions, concerns, or to exercise
                      your rights under GDPR, CCPA, or other privacy laws.
                    </p>
                    <div className="space-y-4 max-w-md mx-auto">
                      <div className="bg-white/10 rounded-xl p-4">
                        <div className="font-semibold mb-1">
                          Data Protection Officer
                        </div>
                        <a
                          href="mailto:dpo@blogsmela.com"
                          className="text-blue-200 hover:text-white"
                        >
                          dpo@blogsmela.com
                        </a>
                      </div>
                      <div className="bg-white/10 rounded-xl p-4">
                        <div className="font-semibold mb-1">
                          General Privacy Inquiries
                        </div>
                        <a
                          href="mailto:privacy@blogsmela.com"
                          className="text-blue-200 hover:text-white"
                        >
                          privacy@blogsmela.com
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* Policy Acceptance */}
              <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100 text-center">
                <div className="max-w-2xl mx-auto">
                  <div className="w-16 h-16 bg-gradient-to-r from-green-100 to-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle className="text-green-600" size={32} />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">
                    Policy Acknowledgment
                  </h3>
                  <p className="text-gray-600 mb-6">
                    By using Blogs Mela, you acknowledge that you have read and
                    understood this Privacy Policy. We may update this policy
                    periodically, and continued use constitutes acceptance of
                    changes.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <button className="px-8 py-3 bg-gradient-to-r from-green-500 to-emerald-600 text-white font-semibold rounded-xl hover:shadow-lg transition-all">
                      I Understand
                    </button>
                    <button className="px-8 py-3 bg-gray-100 text-gray-700 font-semibold rounded-xl hover:bg-gray-200 transition-colors">
                      Download PDF Version
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </main>
        </div>

        {/* Footer Note */}
        <div className="mt-12 text-center text-gray-500 text-sm">
          <p>
            This Privacy Policy is effective as of December 1, 2023. We
            recommend reviewing it periodically for updates.
          </p>
          <p className="mt-2">
            © {new Date().getFullYear()} Blogs Mela. All rights reserved. Data
            Protection Reg. No: DP-2023-001
          </p>
        </div>
      </div>
    </div>
  );
};

// Add missing imports
import { Calendar, FileText } from 'lucide-react';

export default PrivacyPolicyPage;
