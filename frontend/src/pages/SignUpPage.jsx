import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
  Mail,
  Lock,
  User,
  Eye,
  EyeOff,
  Calendar,
  Smartphone,
  Globe,
  CheckCircle,
  XCircle,
  Loader2,
  Sparkles,
  ArrowRight,
} from 'lucide-react';

const SignUpPage = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [step, setStep] = useState(1); // Multi-step form
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    username: '',
    password: '',
    confirmPassword: '',
    birthDate: '',
    country: '',
    agreeTerms: false,
    newsletter: true,
  });

  // Password strength checker
  const [passwordStrength, setPasswordStrength] = useState({
    length: false,
    uppercase: false,
    lowercase: false,
    number: false,
    special: false,
  });

  const countries = [
    'United States',
    'United Kingdom',
    'Canada',
    'Australia',
    'India',
    'Germany',
    'France',
    'Japan',
    'Brazil',
    'Singapore',
    'Other',
  ];

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));

    // Check password strength
    if (name === 'password') {
      setPasswordStrength({
        length: value.length >= 8,
        uppercase: /[A-Z]/.test(value),
        lowercase: /[a-z]/.test(value),
        number: /[0-9]/.test(value),
        special: /[!@#$%^&*(),.?":{}|<>]/.test(value),
      });
    }
  };

  const handleNextStep = () => {
    // Basic validation for step 1
    if (step === 1) {
      if (!formData.firstName || !formData.lastName || !formData.email) {
        alert('Please fill in all required fields');
        return;
      }
      if (!/\S+@\S+\.\S+/.test(formData.email)) {
        alert('Please enter a valid email address');
        return;
      }
    }

    // Validation for step 2
    if (step === 2) {
      if (!formData.password || !formData.confirmPassword) {
        alert('Please fill in password fields');
        return;
      }
      if (formData.password !== formData.confirmPassword) {
        alert('Passwords do not match');
        return;
      }
      if (!formData.agreeTerms) {
        alert('Please agree to the Terms & Conditions');
        return;
      }
    }

    if (step < 3) {
      setStep(step + 1);
    } else {
      handleSubmit();
    }
  };

  const handlePrevStep = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  const handleSubmit = async (e) => {
    if (e) e.preventDefault();
    setLoading(true);

    // Simulate API call
    setTimeout(() => {
      console.log('Registration data:', formData);
      setLoading(false);
      navigate('/'); // Redirect to home after successful registration
    }, 2000);
  };

  const calculatePasswordStrength = () => {
    const checks = Object.values(passwordStrength);
    const passed = checks.filter(Boolean).length;
    return (passed / checks.length) * 100;
  };

  const strengthPercentage = calculatePasswordStrength();
  let strengthColor = 'bg-red-500';
  let strengthText = 'Weak';

  if (strengthPercentage >= 60) {
    strengthColor = 'bg-yellow-500';
    strengthText = 'Medium';
  }
  if (strengthPercentage >= 80) {
    strengthColor = 'bg-green-500';
    strengthText = 'Strong';
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50 flex items-center justify-center p-4">
      <div className="max-w-5xl w-full grid lg:grid-cols-2 gap-8 items-center">
        {/* Left Side - Welcome Section */}
        <div className="hidden lg:block">
          <div className="bg-gradient-to-br from-indigo-600 to-purple-700 rounded-3xl shadow-2xl p-12 text-white">
            {/* Logo/Header */}
            <div className="mb-8">
              <div className="inline-flex items-center gap-3 mb-4">
                <div className="p-3 bg-white/20 rounded-2xl backdrop-blur-sm">
                  <Sparkles size={32} />
                </div>
                <h1 className="text-4xl font-bold">Join Blogs Mela</h1>
              </div>
              <p className="text-indigo-100 text-lg">
                Create your account to start sharing your stories, connect with
                readers, and join our growing community of writers.
              </p>
            </div>

            {/* Features List */}
            <div className="space-y-6 mb-12">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center">
                  <div className="text-xl">✍️</div>
                </div>
                <div>
                  <h3 className="font-semibold text-xl">Write & Publish</h3>
                  <p className="text-indigo-100">
                    Share your thoughts with the world
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center">
                  <div className="text-xl">👥</div>
                </div>
                <div>
                  <h3 className="font-semibold text-xl">Connect</h3>
                  <p className="text-indigo-100">
                    Engage with fellow writers and readers
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center">
                  <div className="text-xl">🚀</div>
                </div>
                <div>
                  <h3 className="font-semibold text-xl">Grow</h3>
                  <p className="text-indigo-100">
                    Build your audience and influence
                  </p>
                </div>
              </div>
            </div>

            {/* Stats */}
            <div className="bg-white/10 rounded-2xl p-6 backdrop-blur-sm">
              <div className="grid grid-cols-3 gap-4 text-center">
                <div>
                  <div className="text-2xl font-bold">10K+</div>
                  <div className="text-indigo-200 text-sm">Active Writers</div>
                </div>
                <div>
                  <div className="text-2xl font-bold">50K+</div>
                  <div className="text-indigo-200 text-sm">Articles</div>
                </div>
                <div>
                  <div className="text-2xl font-bold">1M+</div>
                  <div className="text-indigo-200 text-sm">Readers</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side - SignUp Form */}
        <div className="bg-white rounded-3xl shadow-2xl p-8 lg:p-12">
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-3 mb-4">
              <div className="p-3 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl">
                <Sparkles className="text-white" size={28} />
              </div>
              <h1 className="text-3xl lg:text-4xl font-bold text-gray-800">
                Create Account
              </h1>
            </div>
            <p className="text-gray-600">
              Already have an account?{' '}
              <Link
                to="/login"
                className="text-indigo-600 hover:text-indigo-800 font-semibold hover:underline"
              >
                Sign in here
              </Link>
            </p>
          </div>

          {/* Progress Steps */}
          <div className="mb-8">
            <div className="flex items-center justify-between mb-4">
              {[1, 2, 3].map((stepNumber) => (
                <div key={stepNumber} className="flex flex-col items-center">
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center 
                    ${
                      step >= stepNumber
                        ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white'
                        : 'bg-gray-200 text-gray-400'
                    } font-bold`}
                  >
                    {stepNumber}
                  </div>
                  <span className="text-sm text-gray-600 mt-2">
                    {stepNumber === 1
                      ? 'Personal'
                      : stepNumber === 2
                        ? 'Security'
                        : 'Complete'}
                  </span>
                </div>
              ))}
            </div>
            <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full transition-all duration-500"
                style={{ width: `${((step - 1) / 2) * 100}%` }}
              ></div>
            </div>
          </div>

          <form onSubmit={handleSubmit}>
            {/* Step 1: Personal Information */}
            {step === 1 && (
              <div className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="group">
                    <label className="block mb-2 font-semibold text-gray-700 flex items-center gap-2">
                      <User size={16} />
                      First Name *
                    </label>
                    <input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      required
                      className="w-full p-4 border-2 border-gray-200 rounded-xl 
                               focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 
                               transition-all duration-300
                               placeholder-gray-400
                               hover:border-gray-300"
                      placeholder="John"
                    />
                  </div>

                  <div className="group">
                    <label className="block mb-2 font-semibold text-gray-700">
                      Last Name *
                    </label>
                    <input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      required
                      className="w-full p-4 border-2 border-gray-200 rounded-xl 
                               focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 
                               transition-all duration-300
                               placeholder-gray-400
                               hover:border-gray-300"
                      placeholder="Doe"
                    />
                  </div>
                </div>

                <div className="group">
                  <label className="block mb-2 font-semibold text-gray-700 flex items-center gap-2">
                    <Mail size={16} />
                    Email Address *
                  </label>
                  <div className="relative">
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full p-4 pl-12 border-2 border-gray-200 rounded-xl 
                               focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 
                               transition-all duration-300
                               placeholder-gray-400
                               hover:border-gray-300"
                      placeholder="john@example.com"
                    />
                    <Mail
                      className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400"
                      size={20}
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="group">
                    <label className="block mb-2 font-semibold text-gray-700 flex items-center gap-2">
                      <Smartphone size={16} />
                      Phone Number
                    </label>
                    <div className="relative">
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full p-4 pl-12 border-2 border-gray-200 rounded-xl 
                                 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 
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

                  <div className="group">
                    <label className="block mb-2 font-semibold text-gray-700">
                      Username *
                    </label>
                    <input
                      type="text"
                      name="username"
                      value={formData.username}
                      onChange={handleInputChange}
                      required
                      className="w-full p-4 border-2 border-gray-200 rounded-xl 
                               focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 
                               transition-all duration-300
                               placeholder-gray-400
                               hover:border-gray-300"
                      placeholder="@johndoe"
                    />
                  </div>
                </div>
              </div>
            )}

            {/* Step 2: Security Information */}
            {step === 2 && (
              <div className="space-y-6">
                <div className="group">
                  <label className="block mb-2 font-semibold text-gray-700 flex items-center gap-2">
                    <Lock size={16} />
                    Password *
                  </label>
                  <div className="relative">
                    <input
                      type={showPassword ? 'text' : 'password'}
                      name="password"
                      value={formData.password}
                      onChange={handleInputChange}
                      required
                      className="w-full p-4 pl-12 pr-12 border-2 border-gray-200 rounded-xl 
                               focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 
                               transition-all duration-300
                               placeholder-gray-400
                               hover:border-gray-300"
                      placeholder="Create a strong password"
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

                  {/* Password Strength Indicator */}
                  <div className="mt-4">
                    <div className="flex justify-between text-sm text-gray-600 mb-2">
                      <span>Password Strength</span>
                      <span
                        className={`font-semibold ${
                          strengthText === 'Weak'
                            ? 'text-red-600'
                            : strengthText === 'Medium'
                              ? 'text-yellow-600'
                              : 'text-green-600'
                        }`}
                      >
                        {strengthText}
                      </span>
                    </div>
                    <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                      <div
                        className={`h-full ${strengthColor} rounded-full transition-all duration-500`}
                        style={{ width: `${strengthPercentage}%` }}
                      ></div>
                    </div>

                    {/* Password Requirements */}
                    <div className="mt-4 space-y-2">
                      <div
                        className={`flex items-center gap-2 text-sm ${passwordStrength.length ? 'text-green-600' : 'text-gray-500'}`}
                      >
                        {passwordStrength.length ? (
                          <CheckCircle size={16} />
                        ) : (
                          <XCircle size={16} />
                        )}
                        At least 8 characters
                      </div>
                      <div
                        className={`flex items-center gap-2 text-sm ${passwordStrength.uppercase ? 'text-green-600' : 'text-gray-500'}`}
                      >
                        {passwordStrength.uppercase ? (
                          <CheckCircle size={16} />
                        ) : (
                          <XCircle size={16} />
                        )}
                        One uppercase letter
                      </div>
                      <div
                        className={`flex items-center gap-2 text-sm ${passwordStrength.lowercase ? 'text-green-600' : 'text-gray-500'}`}
                      >
                        {passwordStrength.lowercase ? (
                          <CheckCircle size={16} />
                        ) : (
                          <XCircle size={16} />
                        )}
                        One lowercase letter
                      </div>
                      <div
                        className={`flex items-center gap-2 text-sm ${passwordStrength.number ? 'text-green-600' : 'text-gray-500'}`}
                      >
                        {passwordStrength.number ? (
                          <CheckCircle size={16} />
                        ) : (
                          <XCircle size={16} />
                        )}
                        One number
                      </div>
                    </div>
                  </div>
                </div>

                <div className="group">
                  <label className="block mb-2 font-semibold text-gray-700">
                    Confirm Password *
                  </label>
                  <div className="relative">
                    <input
                      type={showConfirmPassword ? 'text' : 'password'}
                      name="confirmPassword"
                      value={formData.confirmPassword}
                      onChange={handleInputChange}
                      required
                      className="w-full p-4 pl-12 pr-12 border-2 border-gray-200 rounded-xl 
                               focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 
                               transition-all duration-300
                               placeholder-gray-400
                               hover:border-gray-300"
                      placeholder="Confirm your password"
                    />
                    <Lock
                      className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400"
                      size={20}
                    />
                    <button
                      type="button"
                      onClick={() =>
                        setShowConfirmPassword(!showConfirmPassword)
                      }
                      className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                    >
                      {showConfirmPassword ? (
                        <EyeOff size={20} />
                      ) : (
                        <Eye size={20} />
                      )}
                    </button>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="group">
                    <label className="block mb-2 font-semibold text-gray-700 flex items-center gap-2">
                      <Calendar size={16} />
                      Date of Birth
                    </label>
                    <div className="relative">
                      <input
                        type="date"
                        name="birthDate"
                        value={formData.birthDate}
                        onChange={handleInputChange}
                        className="w-full p-4 border-2 border-gray-200 rounded-xl 
                                 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 
                                 transition-all duration-300
                                 hover:border-gray-300"
                      />
                    </div>
                  </div>

                  <div className="group">
                    <label className="block mb-2 font-semibold text-gray-700 flex items-center gap-2">
                      <Globe size={16} />
                      Country
                    </label>
                    <div className="relative">
                      <select
                        name="country"
                        value={formData.country}
                        onChange={handleInputChange}
                        className="w-full p-4 border-2 border-gray-200 rounded-xl 
                                 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 
                                 transition-all duration-300 appearance-none
                                 bg-white hover:border-gray-300"
                      >
                        <option value="">Select your country</option>
                        {countries.map((country) => (
                          <option key={country} value={country}>
                            {country}
                          </option>
                        ))}
                      </select>
                      <div className="absolute right-4 top-1/2 transform -translate-y-1/2 pointer-events-none">
                        <div className="w-2 h-2 border-b-2 border-r-2 border-gray-400 rotate-45"></div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <label className="flex items-start gap-3 cursor-pointer">
                    <input
                      type="checkbox"
                      name="agreeTerms"
                      checked={formData.agreeTerms}
                      onChange={handleInputChange}
                      required
                      className="w-5 h-5 mt-1 text-indigo-600 rounded focus:ring-indigo-500"
                    />
                    <div>
                      <span className="text-gray-700">I agree to the </span>
                      <Link
                        to="/terms"
                        className="text-indigo-600 hover:text-indigo-800 font-medium"
                      >
                        Terms & Conditions
                      </Link>
                      <span className="text-gray-700"> and </span>
                      <Link
                        to="/privacy"
                        className="text-indigo-600 hover:text-indigo-800 font-medium"
                      >
                        Privacy Policy
                      </Link>
                    </div>
                  </label>

                  <label className="flex items-start gap-3 cursor-pointer">
                    <input
                      type="checkbox"
                      name="newsletter"
                      checked={formData.newsletter}
                      onChange={handleInputChange}
                      className="w-5 h-5 mt-1 text-indigo-600 rounded focus:ring-indigo-500"
                    />
                    <span className="text-gray-700">
                      Subscribe to our newsletter for updates, new features, and
                      writing tips
                    </span>
                  </label>
                </div>
              </div>
            )}

            {/* Step 3: Confirmation */}
            {step === 3 && (
              <div className="text-center py-8">
                <div className="w-20 h-20 bg-gradient-to-r from-green-100 to-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle className="text-green-600" size={40} />
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">
                  Ready to Join!
                </h3>
                <p className="text-gray-600 mb-8 max-w-md mx-auto">
                  Your account is ready to be created. Click the button below to
                  complete your registration and start your journey with Blogs
                  Mela.
                </p>

                <div className="bg-gray-50 rounded-xl p-6 mb-8">
                  <h4 className="font-semibold text-gray-700 mb-4">
                    Account Details
                  </h4>
                  <div className="space-y-2 text-left">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Name:</span>
                      <span className="font-medium">
                        {formData.firstName} {formData.lastName}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Email:</span>
                      <span className="font-medium">{formData.email}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Username:</span>
                      <span className="font-medium">{formData.username}</span>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Navigation Buttons */}
            <div className="flex gap-4 pt-8">
              {step > 1 && (
                <button
                  type="button"
                  onClick={handlePrevStep}
                  className="flex-1 px-6 py-4 bg-gray-100 text-gray-700 font-semibold rounded-xl hover:bg-gray-200 transition-colors"
                >
                  Back
                </button>
              )}

              <button
                type="button"
                onClick={handleNextStep}
                disabled={loading}
                className="group flex-1 inline-flex items-center justify-center gap-3 px-6 py-4 
                         rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 
                         text-white font-semibold text-lg
                         shadow-lg hover:shadow-2xl
                         hover:from-indigo-700 hover:to-purple-700
                         active:scale-95 transition-all duration-300
                         disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? (
                  <>
                    <Loader2 className="animate-spin" size={20} />
                    Creating Account...
                  </>
                ) : step === 3 ? (
                  <>
                    Complete Registration
                    <ArrowRight
                      className="group-hover:translate-x-1 transition-transform"
                      size={20}
                    />
                  </>
                ) : (
                  <>
                    Continue
                    <ArrowRight
                      className="group-hover:translate-x-1 transition-transform"
                      size={20}
                    />
                  </>
                )}
              </button>
            </div>
          </form>

          {/* Divider */}
          <div className="my-8 flex items-center">
            <div className="flex-1 border-t border-gray-200"></div>
            <span className="px-4 text-gray-500">or</span>
            <div className="flex-1 border-t border-gray-200"></div>
          </div>

          {/* Social Sign Up */}
          <div className="text-center">
            <p className="text-gray-600 mb-4">Sign up with</p>
            <div className="grid grid-cols-2 gap-3">
              <button className="flex items-center justify-center gap-2 px-4 py-3 border-2 border-gray-300 rounded-xl text-gray-700 font-medium hover:border-gray-400 hover:bg-gray-50 transition-colors">
                <div className="w-6 h-6 bg-blue-500 rounded-full"></div>
                Google
              </button>
              <button className="flex items-center justify-center gap-2 px-4 py-3 border-2 border-gray-300 rounded-xl text-gray-700 font-medium hover:border-gray-400 hover:bg-gray-50 transition-colors">
                <div className="w-6 h-6 bg-gray-800 rounded-full"></div>
                GitHub
              </button>
            </div>
          </div>

          {/* Terms Footer */}
          <p className="text-center text-gray-500 text-sm mt-8">
            By creating an account, you agree to our{' '}
            <Link to="/terms" className="text-indigo-600 hover:underline">
              Terms
            </Link>{' '}
            and acknowledge our{' '}
            <Link to="/privacy" className="text-indigo-600 hover:underline">
              Privacy Policy
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;
