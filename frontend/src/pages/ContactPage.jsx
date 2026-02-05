import React, { useState } from 'react';
import {
  Mail,
  Phone,
  MapPin,
  Send,
  CheckCircle,
  Clock,
  MessageSquare,
  Linkedin,
  Github,
  Twitter,
  Calendar,
} from 'lucide-react';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [formStatus, setFormStatus] = useState({
    submitted: false,
    error: false,
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Client-side validation
    if (!formData.name || !formData.email || !formData.message) {
      setFormStatus({
        submitted: false,
        error: true,
        message: 'Please fill in all required fields',
      });
      return;
    }

    if (!/\S+@\S+\.\S+/.test(formData.email)) {
      setFormStatus({
        submitted: false,
        error: true,
        message: 'Please enter a valid email address',
      });
      return;
    }

    // Simulate form submission (no backend)
    console.log('Form submitted:', formData);

    // Show success message
    setFormStatus({
      submitted: true,
      error: false,
      message: "Message sent successfully! I'll get back to you soon.",
    });

    // Reset form after 2 seconds
    setTimeout(() => {
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
      });
    }, 2000);
  };

  const contactInfo = {
    name: 'Taskin',
    role: 'Tech Blogger & Developer',
    email: 'taskin@example.com',
    phone: '+1 (555) 123-4567',
    location: 'San Francisco, CA',
    workingHours: 'Mon-Fri, 9:00 AM - 6:00 PM PST',
    bio: 'Passionate about demystifying technology through clear, engaging content. Always open to discussing tech trends, collaboration opportunities, or your latest project ideas.',
  };

  const socialLinks = [
    {
      platform: 'LinkedIn',
      icon: <Linkedin className="w-5 h-5" />,
      url: '#',
      color: 'hover:text-blue-700',
    },
    {
      platform: 'GitHub',
      icon: <Github className="w-5 h-5" />,
      url: '#',
      color: 'hover:text-gray-800',
    },
    {
      platform: 'Twitter',
      icon: <Twitter className="w-5 h-5" />,
      url: '#',
      color: 'hover:text-blue-400',
    },
  ];

  const quickTopics = [
    'Tech Consultation',
    'Guest Posting',
    'Speaking Engagement',
    'Content Collaboration',
    'Technical Review',
    'Other Inquiry',
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-indigo-600 to-purple-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Let's Connect
            </h1>
            <p className="text-xl text-indigo-100 max-w-3xl mx-auto">
              Have questions, ideas, or just want to chat about technology? I'd
              love to hear from you.
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Left Column - Contact Info */}
          <div className="lg:col-span-1">
            {/* Profile Card */}
            <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
              <div className="text-center mb-6">
                <div className="w-32 h-32 mx-auto mb-4 bg-gradient-to-br from-indigo-100 to-purple-100 rounded-full flex items-center justify-center">
                  <div className="text-4xl font-bold text-indigo-600">T</div>
                </div>
                <h2 className="text-2xl font-bold text-gray-900">
                  {contactInfo.name}
                </h2>
                <p className="text-indigo-600 font-medium">
                  {contactInfo.role}
                </p>
                <p className="text-gray-600 mt-4">{contactInfo.bio}</p>
              </div>

              {/* Contact Details */}
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-indigo-100 p-2 rounded-lg">
                    <Mail className="w-5 h-5 text-indigo-600" />
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-700">Email</h3>
                    <a
                      href={`mailto:${contactInfo.email}`}
                      className="text-indigo-600 hover:text-indigo-800"
                    >
                      {contactInfo.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-indigo-100 p-2 rounded-lg">
                    <Phone className="w-5 h-5 text-indigo-600" />
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-700">Phone</h3>
                    <a
                      href={`tel:${contactInfo.phone}`}
                      className="text-indigo-600 hover:text-indigo-800"
                    >
                      {contactInfo.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-indigo-100 p-2 rounded-lg">
                    <MapPin className="w-5 h-5 text-indigo-600" />
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-700">Location</h3>
                    <p className="text-gray-600">{contactInfo.location}</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-indigo-100 p-2 rounded-lg">
                    <Clock className="w-5 h-5 text-indigo-600" />
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-700">Working Hours</h3>
                    <p className="text-gray-600">{contactInfo.workingHours}</p>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="mt-8 pt-8 border-t border-gray-200">
                <h3 className="font-medium text-gray-700 mb-4">
                  Connect With Me
                </h3>
                <div className="flex space-x-4">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.url}
                      className={`bg-gray-100 p-3 rounded-lg text-gray-600 ${social.color} transition-colors`}
                      aria-label={social.platform}
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Quick Topics */}
            <div className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-2xl p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                <MessageSquare className="w-5 h-5 mr-2" />
                Common Topics
              </h3>
              <div className="space-y-2">
                {quickTopics.map((topic, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-lg px-4 py-3 text-sm text-gray-700 hover:shadow-md transition-shadow cursor-pointer"
                    onClick={() =>
                      setFormData((prev) => ({ ...prev, subject: topic }))
                    }
                  >
                    {topic}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-2">
                  Send a Message
                </h2>
                <p className="text-gray-600">
                  Fill out the form below and I'll get back to you as soon as
                  possible. I typically respond within 24-48 hours.
                </p>
              </div>

              {/* Status Message */}
              {formStatus.message && (
                <div
                  className={`mb-6 p-4 rounded-lg ${
                    formStatus.error
                      ? 'bg-red-50 text-red-800 border border-red-200'
                      : 'bg-green-50 text-green-800 border border-green-200'
                  }`}
                >
                  <div className="flex items-center">
                    {formStatus.submitted ? (
                      <CheckCircle className="w-5 h-5 mr-2" />
                    ) : null}
                    {formStatus.message}
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors"
                      placeholder="Your name"
                      required
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors"
                      placeholder="you@example.com"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="subject"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors"
                    placeholder="What would you like to discuss?"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors resize-none"
                    placeholder="Tell me about your project, question, or idea..."
                    required
                  />
                </div>

                <div className="flex items-center justify-between pt-4">
                  <div className="text-sm text-gray-500">* Required fields</div>
                  <button
                    type="submit"
                    disabled={formStatus.submitted}
                    className={`flex items-center px-8 py-3 rounded-lg font-medium transition-colors ${
                      formStatus.submitted
                        ? 'bg-green-600 text-white'
                        : 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white hover:from-indigo-700 hover:to-purple-700'
                    }`}
                  >
                    {formStatus.submitted ? (
                      <>
                        <CheckCircle className="w-5 h-5 mr-2" />
                        Sent!
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5 mr-2" />
                        Send Message
                      </>
                    )}
                  </button>
                </div>
              </form>

              {/* Additional Info */}
              <div className="mt-12 pt-8 border-t border-gray-200">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  What happens next?
                </h3>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="bg-indigo-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Mail className="w-6 h-6 text-indigo-600" />
                    </div>
                    <h4 className="font-medium text-gray-900 mb-2">
                      1. You'll get an email
                    </h4>
                    <p className="text-sm text-gray-600">
                      Immediate auto-reply confirmation
                    </p>
                  </div>

                  <div className="text-center">
                    <div className="bg-indigo-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Clock className="w-6 h-6 text-indigo-600" />
                    </div>
                    <h4 className="font-medium text-gray-900 mb-2">
                      2. I'll review your message
                    </h4>
                    <p className="text-sm text-gray-600">
                      Typically within 24 hours
                    </p>
                  </div>

                  <div className="text-center">
                    <div className="bg-indigo-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Calendar className="w-6 h-6 text-indigo-600" />
                    </div>
                    <h4 className="font-medium text-gray-900 mb-2">
                      3. We'll schedule a chat
                    </h4>
                    <p className="text-sm text-gray-600">
                      If needed, we'll find a time
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Alternative Contact Methods */}
            <div className="mt-8 bg-gradient-to-r from-gray-900 to-black rounded-2xl p-8 text-white">
              <h3 className="text-xl font-bold mb-4">Prefer Another Method?</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-medium mb-2">Schedule a Call</h4>
                  <p className="text-gray-300 mb-4 text-sm">
                    For more complex discussions, schedule a 30-minute call
                    directly.
                  </p>
                  <button className="bg-white text-gray-900 px-6 py-2 rounded-lg font-medium hover:bg-gray-100 transition-colors">
                    Book a Call
                  </button>
                </div>
                <div>
                  <h4 className="font-medium mb-2">Newsletter</h4>
                  <p className="text-gray-300 mb-4 text-sm">
                    Subscribe to my newsletter for regular tech insights and
                    updates.
                  </p>
                  <button className="bg-transparent border border-white text-white px-6 py-2 rounded-lg font-medium hover:bg-white hover:text-gray-900 transition-colors">
                    Subscribe
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
