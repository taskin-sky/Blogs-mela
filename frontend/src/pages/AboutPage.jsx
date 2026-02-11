import React from 'react';
import {
  Users,
  Target,
  Award,
  Globe,
  Heart,
  TrendingUp,
  Mail,
  Linkedin,
  Twitter,
  Github,
  Calendar,
  MapPin,
} from 'lucide-react';

const AboutPage = () => {
  const teamMembers = [
    {
      id: 1,
      name: 'Taskin M. Mubassir',
      role: 'Founder & CEO',
      bio: 'Former Tech Lead at Google, passionate about making tech accessible.',
      image: '../../public/taskin.png',
      social: { linkedin: '#', twitter: '#' },
    },
    {
      id: 2,
      name: 'Mishbah Khan',
      role: 'Founder & CEO',
      bio: 'Former Tech Lead at Google, passionate about making tech accessible.',
      image: '../../public/mishba 2.png',
      social: { linkedin: '#', twitter: '#' },
    },
    
    {
      id: 3,
      name: 'Mobin',
      role: 'Tech Editor',
      bio: 'Specializes in AI and emerging technologies.',
      image: '../../public/Mishba.png',
      social: { linkedin: '#', twitter: '#' },
    },
    {
      id: 4,
      name: 'Mubassir',
      role: 'Community Manager',
      bio: 'Connecting readers and building our tech community.',
      image: '../../public/taskin 2.jpg',
      social: { linkedin: '#', twitter: '#' },
    },
  ];

  const stats = [
    {
      icon: <Users className="w-6 h-6" />,
      value: '500K+',
      label: 'Monthly Readers',
    },
    {
      icon: <Globe className="w-6 h-6" />,
      value: '150+',
      label: 'Countries Reached',
    },
    {
      icon: <Award className="w-6 h-6" />,
      value: '25+',
      label: 'Industry Awards',
    },
    {
      icon: <Heart className="w-6 h-6" />,
      value: '98%',
      label: 'Reader Satisfaction',
    },
  ];

  const values = [
    {
      icon: <Target className="w-8 h-8" />,
      title: 'Accuracy First',
      description:
        'We fact-check every piece of information and cite credible sources.',
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: 'Accessibility',
      description: 'Making complex tech concepts understandable for everyone.',
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: 'Innovation',
      description: 'Always exploring the cutting edge of technology.',
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: 'Global Perspective',
      description: 'Covering tech trends from around the world.',
    },
  ];

  return (
    <div className="min-h-screen bg-linear-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-linear-to-r from-blue-600 to-indigo-700">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              About Blogs<span className="text-blue-300"> Mela</span>
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">
              We demystify technology and explore how it's shaping our future,
              one article at a time.
            </p>
          </div>
        </div>
      </div>

      {/* Mission Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Our Mission
            </h2>
            <p className="text-lg text-gray-600 mb-4">
              Founded in 2020, Blogs-Mela began as a small blog with a big
              vision: to bridge the gap between complex technological
              advancements and everyday understanding.
            </p>
            <p className="text-lg text-gray-600 mb-6">
              We believe that understanding technology is no longer
              optional—it's essential. Our team of passionate writers,
              researchers, and tech enthusiasts work tirelessly to bring you
              clear, accurate, and engaging content about the technologies
              transforming our world.
            </p>
            <div className="flex items-center space-x-6 text-gray-600">
              <div className="flex items-center">
                <Calendar className="w-5 h-5 mr-2" />
                <span>Founded 2020</span>
              </div>
              <div className="flex items-center">
                <MapPin className="w-5 h-5 mr-2" />
                <span>Global Team</span>
              </div>
            </div>
          </div>
          <div className="bg-linear-to-br from-blue-50 to-indigo-50 p-8 rounded-2xl">
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="bg-white p-6 rounded-xl shadow-sm text-center hover:shadow-md transition-shadow"
                >
                  <div className="text-blue-600 mb-2 flex justify-center">
                    {stat.icon}
                  </div>
                  <div className="text-3xl font-bold text-gray-900">
                    {stat.value}
                  </div>
                  <div className="text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Values Section */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Our Core Values
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300"
              >
                <div className="text-blue-600 mb-4">{value.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Meet Our Team
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Passionate individuals dedicated to bringing you the best tech
            insights
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member) => (
            <div
              key={member.id}
              className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300"
            >
              <div className="aspect-square overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900">
                  {member.name}
                </h3>
                <p className="text-blue-600 font-medium mb-3">{member.role}</p>
                <p className="text-gray-600 mb-4">{member.bio}</p>
                <div className="flex space-x-4">
                  <a
                    href={member.social.linkedin}
                    className="text-gray-400 hover:text-blue-600"
                  >
                    <Linkedin className="w-5 h-5" />
                  </a>
                  <a
                    href={member.social.twitter}
                    className="text-gray-400 hover:text-blue-400"
                  >
                    <Twitter className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-linear-to-r from-blue-600 to-indigo-700 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Join Our Tech Community
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Subscribe to our newsletter for weekly insights, or contribute your
            own story.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Subscribe to Newsletter
            </button>
            <button className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">
              Write for Us
            </button>
          </div>
          <div className="mt-12 flex justify-center space-x-6">
            <a href="#" className="text-white hover:text-blue-300">
              <Github className="w-6 h-6" />
            </a>
            <a href="#" className="text-white hover:text-blue-300">
              <Twitter className="w-6 h-6" />
            </a>
            <a href="#" className="text-white hover:text-blue-300">
              <Linkedin className="w-6 h-6" />
            </a>
            <a href="#" className="text-white hover:text-blue-300">
              <Mail className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
