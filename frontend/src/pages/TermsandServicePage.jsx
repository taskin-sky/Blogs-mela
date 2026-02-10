import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Shield,
  FileText,
  Lock,
  AlertCircle,
  CheckCircle,
  User,
  Globe,
  Mail,
  Calendar,
  ChevronRight,
  BookOpen,
  Heart,
  ExternalLink,
} from 'lucide-react';

const TermsAndServicePage = () => {
  const [activeSection, setActiveSection] = useState('introduction');

  const sections = [
    { id: 'introduction', title: 'Introduction' },
    { id: 'agreement', title: 'User Agreement' },
    { id: 'account', title: 'Account Terms' },
    { id: 'content', title: 'Content Guidelines' },
    { id: 'intellectual', title: 'Intellectual Property' },
    { id: 'privacy', title: 'Privacy & Data' },
    { id: 'conduct', title: 'User Conduct' },
    { id: 'termination', title: 'Termination' },
    { id: 'liability', title: 'Liability' },
    { id: 'changes', title: 'Changes to Terms' },
    { id: 'contact', title: 'Contact Us' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-blue-50">
      {/* Hero Header */}
      <div className="bg-gradient-to-r from-blue-900 via-indigo-800 to-purple-900 text-white py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="flex-1">
              <div className="inline-flex items-center gap-3 mb-6">
                <div className="p-3 bg-white/20 backdrop-blur-sm rounded-2xl">
                  <Shield size={32} />
                </div>
                <h1 className="text-4xl md:text-5xl font-bold">
                  Terms of Service
                </h1>
              </div>
              <p className="text-xl text-blue-100 mb-8 max-w-3xl">
                Welcome to Blogs Mela. Please read these Terms of Service
                carefully before using our platform. By accessing or using our
                services, you agree to be bound by these terms.
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-lg">
                  <Calendar size={18} />
                  <span>Last Updated: December 1, 2023</span>
                </div>
                <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-lg">
                  <User size={18} />
                  <span>Version: 2.1</span>
                </div>
              </div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <div className="text-center">
                <div className="text-4xl mb-2">📄</div>
                <h3 className="text-xl font-bold mb-2">Quick Summary</h3>
                <p className="text-blue-100 text-sm">
                  Read our simplified terms overview for key points
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
                <FileText size={20} />
                Table of Contents
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

              {/* Important Notice */}
              <div className="mt-8 p-4 bg-yellow-50 border border-yellow-200 rounded-xl">
                <div className="flex items-start gap-2">
                  <AlertCircle className="text-yellow-600 mt-0.5" size={18} />
                  <div>
                    <h4 className="font-semibold text-yellow-800 mb-1">
                      Important
                    </h4>
                    <p className="text-yellow-700 text-sm">
                      By using Blogs Mela, you agree to these terms. If you
                      disagree, please discontinue use.
                    </p>
                  </div>
                </div>
              </div>

              {/* Quick Actions */}
              <div className="mt-6 space-y-3">
                <a
                  href="#contact"
                  className="flex items-center justify-center gap-2 px-4 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-lg hover:shadow-lg transition-all"
                >
                  <Mail size={16} />
                  Contact Legal Team
                </a>
                <Link
                  to="/privacy"
                  className="flex items-center justify-center gap-2 px-4 py-3 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors"
                >
                  <Lock size={16} />
                  Privacy Policy
                </Link>
              </div>
            </div>
          </aside>

          {/* Main Content */}
          <main className="lg:col-span-3 space-y-8">
            {/* Quick Summary Cards */}
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-green-100 rounded-lg">
                    <CheckCircle className="text-green-600" size={20} />
                  </div>
                  <h3 className="font-bold text-gray-800">What You Can Do</h3>
                </div>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 mt-1.5 rounded-full bg-green-500"></div>
                    <span>Create and share blog posts</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 mt-1.5 rounded-full bg-green-500"></div>
                    <span>Engage with community content</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 mt-1.5 rounded-full bg-green-500"></div>
                    <span>Customize your reading experience</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-red-100 rounded-lg">
                    <AlertCircle className="text-red-600" size={20} />
                  </div>
                  <h3 className="font-bold text-gray-800">What You Can't Do</h3>
                </div>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 mt-1.5 rounded-full bg-red-500"></div>
                    <span>Post harmful or illegal content</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 mt-1.5 rounded-full bg-red-500"></div>
                    <span>Violate intellectual property rights</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 mt-1.5 rounded-full bg-red-500"></div>
                    <span>Harass other users</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-blue-100 rounded-lg">
                    <BookOpen className="text-blue-600" size={20} />
                  </div>
                  <h3 className="font-bold text-gray-800">Your Rights</h3>
                </div>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 mt-1.5 rounded-full bg-blue-500"></div>
                    <span>Ownership of your content</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 mt-1.5 rounded-full bg-blue-500"></div>
                    <span>Control over your data</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 mt-1.5 rounded-full bg-blue-500"></div>
                    <span>Right to delete your account</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Terms Content */}
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
                    Welcome to <strong>Blogs Mela</strong> ("Platform,"
                    "Service," "we," "us," or "our"). These Terms of Service
                    ("Terms") govern your access to and use of our website,
                    applications, and services. Please read them carefully.
                  </p>
                  <p className="text-gray-700 mb-4">
                    Blogs Mela is a platform designed for writers, readers, and
                    thinkers to share knowledge, stories, and ideas. Our mission
                    is to foster meaningful conversations and create a positive
                    community around quality content.
                  </p>
                  <div className="bg-blue-50 rounded-xl p-6 border border-blue-100">
                    <p className="text-blue-700 font-medium">
                      💡 <strong>Note:</strong> These terms constitute a legally
                      binding agreement between you and Blogs Mela. By accessing
                      or using our services, you acknowledge that you have read,
                      understood, and agree to be bound by these terms.
                    </p>
                  </div>
                </div>
              </section>

              {/* User Agreement */}
              <section id="agreement" className="scroll-mt-24">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-2 h-8 bg-gradient-to-b from-green-500 to-emerald-600 rounded-full"></div>
                  <h2 className="text-2xl font-bold text-gray-800">
                    2. User Agreement
                  </h2>
                </div>
                <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
                  <p className="text-gray-700 mb-6">
                    By creating an account or using our services, you agree to:
                  </p>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="p-1 bg-green-100 rounded mt-1">
                        <CheckCircle className="text-green-600" size={16} />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-800 mb-1">
                          Compliance with Terms
                        </h4>
                        <p className="text-gray-600 text-sm">
                          Follow all applicable laws and these Terms
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="p-1 bg-green-100 rounded mt-1">
                        <CheckCircle className="text-green-600" size={16} />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-800 mb-1">
                          Account Responsibility
                        </h4>
                        <p className="text-gray-600 text-sm">
                          Maintain security of your account credentials
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="p-1 bg-green-100 rounded mt-1">
                        <CheckCircle className="text-green-600" size={16} />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-800 mb-1">
                          Age Requirement
                        </h4>
                        <p className="text-gray-600 text-sm">
                          Be at least 13 years old to use our services
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* Account Terms */}
              <section id="account" className="scroll-mt-24">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-2 h-8 bg-gradient-to-b from-purple-500 to-pink-600 rounded-full"></div>
                  <h2 className="text-2xl font-bold text-gray-800">
                    3. Account Terms
                  </h2>
                </div>
                <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-lg font-semibold text-gray-800 mb-3">
                        Account Creation
                      </h3>
                      <p className="text-gray-700">
                        To access certain features, you must create an account.
                        You agree to provide accurate, current, and complete
                        information during registration.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold text-gray-800 mb-3">
                        Account Security
                      </h3>
                      <p className="text-gray-700 mb-4">
                        You are responsible for safeguarding your password and
                        for all activities that occur under your account.
                      </p>
                      <div className="bg-yellow-50 rounded-xl p-4 border border-yellow-200">
                        <p className="text-yellow-800 text-sm">
                          <strong>Security Tip:</strong> Use a strong, unique
                          password and enable two-factor authentication if
                          available.
                        </p>
                      </div>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold text-gray-800 mb-3">
                        Account Termination
                      </h3>
                      <p className="text-gray-700">
                        You may delete your account at any time through account
                        settings. We reserve the right to suspend or terminate
                        accounts that violate these Terms.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Content Guidelines */}
              <section id="content" className="scroll-mt-24">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-2 h-8 bg-gradient-to-b from-orange-500 to-red-600 rounded-full"></div>
                  <h2 className="text-2xl font-bold text-gray-800">
                    4. Content Guidelines
                  </h2>
                </div>
                <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
                  <p className="text-gray-700 mb-6">
                    Blogs Mela encourages diverse perspectives but requires all
                    content to meet community standards.
                  </p>

                  <div className="grid md:grid-cols-2 gap-6 mb-8">
                    <div className="bg-green-50 rounded-xl p-6 border border-green-200">
                      <h4 className="font-semibold text-green-800 mb-3">
                        Allowed Content
                      </h4>
                      <ul className="space-y-2 text-sm text-green-700">
                        <li className="flex items-start gap-2">
                          <Heart size={14} className="mt-0.5" />
                          <span>Original articles and stories</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Heart size={14} className="mt-0.5" />
                          <span>Educational and informative content</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Heart size={14} className="mt-0.5" />
                          <span>Constructive criticism and reviews</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Heart size={14} className="mt-0.5" />
                          <span>Creative writing and poetry</span>
                        </li>
                      </ul>
                    </div>

                    <div className="bg-red-50 rounded-xl p-6 border border-red-200">
                      <h4 className="font-semibold text-red-800 mb-3">
                        Prohibited Content
                      </h4>
                      <ul className="space-y-2 text-sm text-red-700">
                        <li className="flex items-start gap-2">
                          <AlertCircle size={14} className="mt-0.5" />
                          <span>Hate speech or discrimination</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <AlertCircle size={14} className="mt-0.5" />
                          <span>Harassment or bullying</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <AlertCircle size={14} className="mt-0.5" />
                          <span>Illegal activities or content</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <AlertCircle size={14} className="mt-0.5" />
                          <span>Misinformation or spam</span>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="bg-blue-50 rounded-xl p-6 border border-blue-200">
                    <h4 className="font-semibold text-blue-800 mb-3">
                      Content Moderation
                    </h4>
                    <p className="text-blue-700 text-sm">
                      We reserve the right to review, modify, or remove any
                      content that violates these guidelines without prior
                      notice. Repeated violations may result in account
                      suspension.
                    </p>
                  </div>
                </div>
              </section>

              {/* Intellectual Property */}
              <section id="intellectual" className="scroll-mt-24">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-2 h-8 bg-gradient-to-b from-indigo-500 to-blue-600 rounded-full"></div>
                  <h2 className="text-2xl font-bold text-gray-800">
                    5. Intellectual Property
                  </h2>
                </div>
                <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-lg font-semibold text-gray-800 mb-3">
                        Your Content
                      </h3>
                      <p className="text-gray-700">
                        You retain ownership of any intellectual property rights
                        in the content you create and share on Blogs Mela. By
                        posting content, you grant us a worldwide,
                        non-exclusive, royalty-free license to use, display, and
                        distribute your content on our platform.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold text-gray-800 mb-3">
                        Our Content
                      </h3>
                      <p className="text-gray-700">
                        All Blogs Mela trademarks, logos, software, and platform
                        features are owned by us or our licensors. You may not
                        use our intellectual property without prior written
                        permission.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold text-gray-800 mb-3">
                        Copyright Claims
                      </h3>
                      <p className="text-gray-700">
                        We respect intellectual property rights. If you believe
                        your work has been copied in a way that constitutes
                        copyright infringement, please contact us at{' '}
                        <a
                          href="mailto:copyright@blogsmela.com"
                          className="text-blue-600 hover:underline"
                        >
                          copyright@blogsmela.com
                        </a>
                        .
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Privacy & Data */}
              <section id="privacy" className="scroll-mt-24">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-2 h-8 bg-gradient-to-b from-cyan-500 to-blue-600 rounded-full"></div>
                  <h2 className="text-2xl font-bold text-gray-800">
                    6. Privacy & Data
                  </h2>
                </div>
                <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
                  <p className="text-gray-700 mb-6">
                    Your privacy is important to us. Our Privacy Policy explains
                    how we collect, use, and protect your personal information.
                  </p>

                  <div className="bg-gradient-to-r from-cyan-50 to-blue-50 rounded-xl p-6 border border-cyan-200">
                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-cyan-100 rounded-lg">
                        <Lock className="text-cyan-600" size={24} />
                      </div>
                      <div>
                        <h4 className="font-semibold text-cyan-800 mb-2">
                          Data Protection
                        </h4>
                        <p className="text-cyan-700">
                          We implement industry-standard security measures to
                          protect your data. However, no method of transmission
                          over the Internet is 100% secure.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6">
                    <Link
                      to="/privacy"
                      className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-cyan-600 to-blue-600 text-white rounded-lg hover:shadow-lg transition-all"
                    >
                      Read Full Privacy Policy
                      <ExternalLink size={16} />
                    </Link>
                  </div>
                </div>
              </section>

              {/* Quick Access to Other Sections */}
              <div className="grid md:grid-cols-2 gap-6">
                <button
                  onClick={() => {
                    setActiveSection('conduct');
                    document
                      .getElementById('conduct')
                      ?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="text-left bg-white rounded-2xl shadow-lg p-6 border border-gray-100 hover:shadow-xl transition-all hover:border-blue-200"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2 bg-purple-100 rounded-lg">
                      <User className="text-purple-600" size={20} />
                    </div>
                    <h3 className="font-bold text-gray-800">User Conduct</h3>
                  </div>
                  <p className="text-gray-600 text-sm">
                    Learn about expected behavior and community guidelines for
                    all users.
                  </p>
                </button>

                <button
                  onClick={() => {
                    setActiveSection('liability');
                    document
                      .getElementById('liability')
                      ?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="text-left bg-white rounded-2xl shadow-lg p-6 border border-gray-100 hover:shadow-xl transition-all hover:border-blue-200"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2 bg-red-100 rounded-lg">
                      <AlertCircle className="text-red-600" size={20} />
                    </div>
                    <h3 className="font-bold text-gray-800">
                      Limitation of Liability
                    </h3>
                  </div>
                  <p className="text-gray-600 text-sm">
                    Understand our responsibilities and limitations regarding
                    platform usage.
                  </p>
                </button>
              </div>

              {/* Contact Section */}
              <section id="contact" className="scroll-mt-24">
                <div className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-2xl p-8 text-white">
                  <div className="max-w-2xl mx-auto text-center">
                    <div className="inline-flex items-center gap-3 mb-6">
                      <div className="p-3 bg-white/20 backdrop-blur-sm rounded-2xl">
                        <Mail size={24} />
                      </div>
                      <h2 className="text-2xl font-bold">
                        Contact Our Legal Team
                      </h2>
                    </div>
                    <p className="text-blue-100 mb-8">
                      Have questions about these Terms? Need to report a
                      violation or discuss legal matters?
                    </p>
                    <div className="space-y-4 max-w-md mx-auto">
                      <a
                        href="mailto:legal@blogsmela.com"
                        className="block px-6 py-4 bg-white text-blue-900 font-semibold rounded-xl hover:bg-gray-100 transition-colors"
                      >
                        legal@blogsmela.com
                      </a>
                      <p className="text-blue-200 text-sm">
                        We typically respond within 1-2 business days.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Acceptance */}
              <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100 text-center">
                <div className="max-w-2xl mx-auto">
                  <div className="w-16 h-16 bg-gradient-to-r from-green-100 to-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle className="text-green-600" size={32} />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">
                    Agreement Acceptance
                  </h3>
                  <p className="text-gray-600 mb-6">
                    By continuing to use Blogs Mela, you acknowledge that you
                    have read, understood, and agree to be bound by these Terms
                    of Service.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <button className="px-8 py-3 bg-gradient-to-r from-green-500 to-emerald-600 text-white font-semibold rounded-xl hover:shadow-lg transition-all">
                      I Accept Terms
                    </button>
                    <Link
                      to="/"
                      className="px-8 py-3 bg-gray-100 text-gray-700 font-semibold rounded-xl hover:bg-gray-200 transition-colors"
                    >
                      Return to Home
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </main>
        </div>

        {/* Footer Note */}
        <div className="mt-12 text-center text-gray-500 text-sm">
          <p>
            These Terms of Service were last updated on December 1, 2023.
            Previous versions can be requested from our legal team.
          </p>
          <p className="mt-2">
            © {new Date().getFullYear()} Blogs Mela. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
};

export default TermsAndServicePage;
