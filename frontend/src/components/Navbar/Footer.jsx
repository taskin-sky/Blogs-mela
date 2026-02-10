import React from 'react';
import { Link } from 'react-router-dom';
import {
  Github,
  Twitter,
  Linkedin,
  Mail,
  ArrowRight,
  ExternalLink,
  ChevronRight,
} from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-slate-300">
      {/* Top Section: Newsletter / CTA */}
      <div className="border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
          <div className="bg-linear-to-r from-indigo-600 to-purple-700 rounded-3xl p-8 md:p-12 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="text-center md:text-left">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
                Stay ahead of the curve
              </h2>
              <p className="text-indigo-100 text-lg">
                Get the latest tech insights delivered straight to your inbox.
              </p>
            </div>
            <form
              className="flex w-full max-w-md gap-2"
              onSubmit={(e) => e.preventDefault()}
            >
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-5 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder:text-indigo-200 focus:outline-none focus:ring-2 focus:ring-white/50 transition-all"
              />
              <button className="bg-white text-indigo-600 px-6 py-3 rounded-xl font-bold hover:bg-indigo-50 transition-colors flex items-center shrink-0">
                Join <ArrowRight className="ml-2 w-4 h-4" />
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 pt-16 pb-8 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Column 1: Brand & About */}
          <div className="space-y-6">
            <Link
              to="/"
              className="text-2xl font-black tracking-tighter inline-block"
            >
              <span className="bg-linear-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
                Blogs
              </span>
              <span className="text-white">-Mela</span>
            </Link>
            <p className="text-slate-400 leading-relaxed">
              Demystifying technology through deep-dive tutorials, industry
              trends, and honest reviews. Your source for everything tech.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-indigo-600 hover:text-white transition-all duration-300"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-indigo-600 hover:text-white transition-all duration-300"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-indigo-600 hover:text-white transition-all duration-300"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-white font-bold mb-6 text-lg">Explore</h3>
            <ul className="space-y-4">
              {['Home', 'About Me', 'Archive', 'Portfolio', 'Contact'].map(
                (item) => (
                  <li key={item}>
                    <Link
                      to={
                        item === 'Home'
                          ? '/'
                          : `/${item.toLowerCase().replace(' ', '-')}`
                      }
                      className="flex items-center hover:text-indigo-400 transition-colors group"
                    >
                      <ChevronRight className="w-4 h-4 mr-2 text-indigo-500 opacity-0 group-hover:opacity-100 transition-all -ml-6 group-hover:ml-0" />
                      {item}
                    </Link>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Column 3: Categories */}
          <div>
            <h3 className="text-white font-bold mb-6 text-lg">Categories</h3>
            <ul className="space-y-4">
              {[
                'Web Development',
                'AI & Machine Learning',
                'UI/UX Design',
                'Cloud Computing',
                'Cybersecurity',
              ].map((item) => (
                <li key={item}>
                  <Link
                    to="#"
                    className="flex items-center hover:text-purple-400 transition-colors"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-purple-500 mr-3"></span>
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact Info */}
          <div>
            <h3 className="text-white font-bold mb-6 text-lg">Contact</h3>
            <div className="space-y-4 text-slate-400">
              <div className="flex items-start space-x-3">
                <Mail className="w-5 h-5 text-indigo-500 mt-1" />
                <span>blog-mela@gmail.com</span>
              </div>
              <div className="flex items-start space-x-3 text-sm">
                <p>
                  Based in Rajshahi, Bangladesh.
                  <br />
                  Available for collaborations worldwide.
                </p>
              </div>
              <button className="mt-4 px-5 py-2 rounded-lg border border-slate-700 hover:border-indigo-500 hover:text-indigo-400 transition-all flex items-center gap-2">
                Hire Me <ExternalLink className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright */}
        <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
          <p>© {currentYear} Blogs-Mela. All rights reserved.</p>
          <div className="flex space-x-6">
            <Link to="/privacy" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms" className="hover:text-white transition-colors">
              Terms of Service
            </Link>
            <Link to="/cookies" className="hover:text-white transition-colors">
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
