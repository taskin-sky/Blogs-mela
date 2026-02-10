import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
  Eye,
  EyeOff,
  Mail,
  Lock,
  User,
  Smartphone,
  Facebook,
  Twitter,
  Github,
  Chrome,
  Sparkles,
  Key,
  LogIn,
  UserPlus,
} from 'lucide-react';

const LoginPage = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [loginMethod, setLoginMethod] = useState('email'); // 'email', 'phone', 'social'
  const [formData, setFormData] = useState({
    email: '',
    phone: '',
    password: '',
    rememberMe: false,
  });
  const [loading, setLoading] = useState(false);

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    // Simulate API call
    setTimeout(() => {
      console.log('Login attempt:', formData);
      setLoading(false);
      // Navigate to home page on successful login
      navigate('/');
    }, 1500);
  };

  const handleSocialLogin = (provider) => {
    console.log(`Login with ${provider}`);
    // Handle social login
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 flex items-center justify-center p-4">
      <div className="max-w-6xl w-full grid lg:grid-cols-2 gap-8 items-center">
        {/* Left Side - Welcome Section */}
        <div className="hidden lg:block">
          <div className="bg-gradient-to-br from-blue-600 to-indigo-700 rounded-3xl shadow-2xl p-12 text-white">
            <div className="mb-8">
              <div className="inline-flex items-center gap-3 mb-4">
                <div className="p-3 bg-white/20 rounded-2xl backdrop-blur-sm">
                  <Sparkles size={32} />
                </div>
                <h1 className="text-4xl font-bold">Welcome Back!</h1>
              </div>
              <p className="text-blue-100 text-lg">
                Sign in to continue your journey with Blogs-Mela. Share your
                stories, discover amazing content, and connect with fellow
                writers.
              </p>
            </div>

            {/* Features List */}
            <div className="space-y-6 mb-12">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center">
                  <User className="text-white" size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-xl">Personalized Feed</h3>
                  <p className="text-blue-100">Content tailored just for you</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center">
                  <Key className="text-white" size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-xl">Secure Access</h3>
                  <p className="text-blue-100">
                    Your data is protected with us
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center">
                  <LogIn className="text-white" size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-xl">One Click Access</h3>
                  <p className="text-blue-100">
                    Multiple login options available
                  </p>
                </div>
              </div>
            </div>

            {/* Testimonial */}
            <div className="bg-white/10 rounded-2xl p-6 backdrop-blur-sm">
              <p className="italic text-blue-100 mb-4">
                "Blogs-Mela has transformed how I share my thoughts. The
                community is incredible!"
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-r from-cyan-400 to-blue-400"></div>
                <div>
                  <div className="font-semibold">Sarah Johnson</div>
                  <div className="text-blue-200 text-sm">
                    Writer & Content Creator
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side - Login Form */}
        <div className="bg-white rounded-3xl shadow-2xl p-8 lg:p-12">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-3 mb-4">
              <div className="p-3 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl">
                <Sparkles className="text-white" size={28} />
              </div>
              <h1 className="text-3xl lg:text-4xl font-bold text-gray-800">
                Sign In to{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
                  Blogs-Mela
                </span>
              </h1>
            </div>
            <p className="text-gray-600">
              Don't have an account?{' '}
              <Link
                to="/register"
                className="text-blue-600 hover:text-blue-800 font-semibold hover:underline"
              >
                Create one now
              </Link>
            </p>
          </div>

          {/* Login Method Tabs */}
          <div className="flex mb-8 bg-gray-100 rounded-2xl p-1">
            <button
              onClick={() => setLoginMethod('email')}
              className={`flex-1 py-3 px-4 rounded-xl font-semibold transition-all duration-300 ${
                loginMethod === 'email'
                  ? 'bg-white text-blue-600 shadow-md'
                  : 'text-gray-600 hover:text-gray-800'
              }`}
            >
              <div className="flex items-center justify-center gap-2">
                <Mail size={18} />
                Email
              </div>
            </button>
            <button
              onClick={() => setLoginMethod('phone')}
              className={`flex-1 py-3 px-4 rounded-xl font-semibold transition-all duration-300 ${
                loginMethod === 'phone'
                  ? 'bg-white text-blue-600 shadow-md'
                  : 'text-gray-600 hover:text-gray-800'
              }`}
            >
              <div className="flex items-center justify-center gap-2">
                <Smartphone size={18} />
                Phone
              </div>
            </button>
            <button
              onClick={() => setLoginMethod('social')}
              className={`flex-1 py-3 px-4 rounded-xl font-semibold transition-all duration-300 ${
                loginMethod === 'social'
                  ? 'bg-white text-blue-600 shadow-md'
                  : 'text-gray-600 hover:text-gray-800'
              }`}
            >
              <div className="flex items-center justify-center gap-2">
                <User size={18} />
                Social
              </div>
            </button>
          </div>

          {/* Email/Phone Login Form */}
          {(loginMethod === 'email' || loginMethod === 'phone') && (
            <form onSubmit={handleSubmit} className="space-y-6">
              {loginMethod === 'email' ? (
                <div className="group">
                  <label className="block mb-2 font-semibold text-gray-700 flex items-center gap-2">
                    <Mail size={18} />
                    Email Address
                  </label>
                  <div className="relative">
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full p-4 pl-12 border-2 border-gray-200 rounded-xl 
                               focus:border-blue-500 focus:ring-2 focus:ring-blue-200 
                               transition-all duration-300
                               placeholder-gray-400
                               hover:border-gray-300"
                      placeholder="you@example.com"
                    />
                    <Mail
                      className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400"
                      size={20}
                    />
                  </div>
                </div>
              ) : (
                <div className="group">
                  <label className="block mb-2 font-semibold text-gray-700 flex items-center gap-2">
                    <Smartphone size={18} />
                    Phone Number
                  </label>
                  <div className="relative">
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                      className="w-full p-4 pl-12 border-2 border-gray-200 rounded-xl 
                               focus:border-blue-500 focus:ring-2 focus:ring-blue-200 
                               transition-all duration-300
                               placeholder-gray-400
                               hover:border-gray-300"
                      placeholder="+1 (555) 123-4567"
                    />
                    <Smartphone
                      className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400"
                      size={20}
                    />
                  </div>
                </div>
              )}

              <div className="group">
                <label className="block mb-2 font-semibold text-gray-700 flex items-center gap-2">
                  <Lock size={18} />
                  Password
                </label>
                <div className="relative">
                  <input
                    type={showPassword ? 'text' : 'password'}
                    name="password"
                    value={formData.password}
                    onChange={handleInputChange}
                    required
                    className="w-full p-4 pl-12 pr-12 border-2 border-gray-200 rounded-xl 
                             focus:border-blue-500 focus:ring-2 focus:ring-blue-200 
                             transition-all duration-300
                             placeholder-gray-400
                             hover:border-gray-300"
                    placeholder="Enter your password"
                  />
                  <Lock
                    className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400"
                    size={20}
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                  >
                    {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                  </button>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    name="rememberMe"
                    checked={formData.rememberMe}
                    onChange={handleInputChange}
                    className="w-5 h-5 text-blue-600 rounded focus:ring-blue-500"
                  />
                  <span className="text-gray-700">Remember me</span>
                </label>
                <Link
                  to="/register"
                  className="text-blue-600 hover:text-blue-800 font-medium hover:underline"
                >
                  Forgot password?
                </Link>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="group w-full inline-flex items-center justify-center gap-3 px-8 py-4 
                         rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 
                         text-white font-semibold text-lg
                         shadow-lg hover:shadow-2xl
                         hover:from-blue-700 hover:to-indigo-700
                         active:scale-95 transition-all duration-300
                         disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    Signing in...
                  </>
                ) : (
                  <>
                    <LogIn size={20} />
                    Sign In
                    <span className="group-hover:translate-x-1 transition-transform">
                      →
                    </span>
                  </>
                )}
              </button>
            </form>
          )}

          {/* Social Login */}
          {loginMethod === 'social' && (
            <div className="space-y-6">
              <p className="text-center text-gray-600 mb-6">
                Choose your preferred social login method
              </p>

              <div className="grid grid-cols-2 gap-4">
                <button
                  onClick={() => handleSocialLogin('google')}
                  className="group p-4 border-2 border-gray-200 rounded-xl hover:border-red-500 hover:bg-red-50 transition-all duration-300"
                >
                  <div className="flex flex-col items-center gap-2">
                    <div className="p-3 rounded-full bg-red-500 text-white group-hover:scale-110 transition-transform">
                      <Chrome size={24} />
                    </div>
                    <span className="font-semibold text-gray-700">Google</span>
                  </div>
                </button>

                <button
                  onClick={() => handleSocialLogin('github')}
                  className="group p-4 border-2 border-gray-200 rounded-xl hover:border-gray-800 hover:bg-gray-50 transition-all duration-300"
                >
                  <div className="flex flex-col items-center gap-2">
                    <div className="p-3 rounded-full bg-gray-800 text-white group-hover:scale-110 transition-transform">
                      <Github size={24} />
                    </div>
                    <span className="font-semibold text-gray-700">GitHub</span>
                  </div>
                </button>

                <button
                  onClick={() => handleSocialLogin('facebook')}
                  className="group p-4 border-2 border-gray-200 rounded-xl hover:border-blue-600 hover:bg-blue-50 transition-all duration-300"
                >
                  <div className="flex flex-col items-center gap-2">
                    <div className="p-3 rounded-full bg-blue-600 text-white group-hover:scale-110 transition-transform">
                      <Facebook size={24} />
                    </div>
                    <span className="font-semibold text-gray-700">
                      Facebook
                    </span>
                  </div>
                </button>

                <button
                  onClick={() => handleSocialLogin('twitter')}
                  className="group p-4 border-2 border-gray-200 rounded-xl hover:border-sky-500 hover:bg-sky-50 transition-all duration-300"
                >
                  <div className="flex flex-col items-center gap-2">
                    <div className="p-3 rounded-full bg-sky-500 text-white group-hover:scale-110 transition-transform">
                      <Twitter size={24} />
                    </div>
                    <span className="font-semibold text-gray-700">Twitter</span>
                  </div>
                </button>
              </div>

              <div className="text-center mt-8">
                <p className="text-gray-600 mb-4">Or continue with email</p>
                <button
                  onClick={() => setLoginMethod('email')}
                  className="inline-flex items-center gap-2 px-6 py-3 border-2 border-gray-300 rounded-xl text-gray-700 font-semibold hover:border-blue-500 hover:text-blue-600 transition-colors"
                >
                  <Mail size={18} />
                  Use Email Instead
                </button>
              </div>
            </div>
          )}

          {/* Divider */}
          <div className="my-8 flex items-center">
            <div className="flex-1 border-t border-gray-200"></div>
            <span className="px-4 text-gray-500">or</span>
            <div className="flex-1 border-t border-gray-200"></div>
          </div>

          {/* Quick Sign Up */}
          <div className="text-center">
            <p className="text-gray-600 mb-4">New to Blogs-Mela?</p>
            <Link
              to="/register"
              className="group inline-flex items-center justify-center gap-2 px-8 py-3 
                       rounded-xl bg-gradient-to-r from-green-500 to-emerald-600 
                       text-white font-semibold
                       shadow-lg hover:shadow-xl
                       hover:from-green-600 hover:to-emerald-700
                       active:scale-95 transition-all duration-300"
            >
              <UserPlus size={20} />
              Create Free Account
              <span className="group-hover:translate-x-1 transition-transform">
                →
              </span>
            </Link>
          </div>

          {/* Terms */}
          <p className="text-center text-gray-500 text-sm mt-8">
            By signing in, you agree to our{' '}
            <Link to="/terms" className="text-blue-600 hover:underline">
              Terms of Service
            </Link>{' '}
            and{' '}
            <Link to="/privacy" className="text-blue-600 hover:underline">
              Privacy Policy
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
