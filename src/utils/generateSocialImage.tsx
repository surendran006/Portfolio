import React from 'react';
import { TrendingUp, Target, BarChart3, Users, Search, Zap, Award, Globe } from 'lucide-react';

// This component generates the social sharing image layout
// You can use this as a reference to create the actual image file
const SocialShareImage: React.FC = () => {
  return (
    <div className="w-[1200px] h-[630px] bg-gradient-to-br from-teal-500 via-blue-600 to-purple-700 flex items-center justify-center relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-16 left-16 w-24 h-24 border-2 border-white rounded-full"></div>
        <div className="absolute top-20 right-32 w-16 h-16 border-2 border-white rounded-lg rotate-45"></div>
        <div className="absolute bottom-24 left-40 w-20 h-20 border-2 border-white rounded-full"></div>
        <div className="absolute bottom-32 right-16 w-28 h-28 border-2 border-white rounded-lg rotate-12"></div>
        <div className="absolute top-1/2 left-8 w-12 h-12 border-2 border-white rounded-full"></div>
        <div className="absolute top-1/3 right-8 w-14 h-14 border-2 border-white rounded-lg rotate-45"></div>
      </div>

      {/* Main Content Container */}
      <div className="text-center text-white z-10 px-20 max-w-5xl">
        {/* Header Section */}
        <div className="mb-10">
          <div className="flex items-center justify-center mb-4">
            <Globe className="w-12 h-12 mr-4 text-yellow-300" />
            <h1 className="text-7xl font-bold tracking-tight">Surendran M</h1>
          </div>
          <p className="text-3xl font-light opacity-95 mb-2">Digital Marketing Executive</p>
          <div className="flex items-center justify-center text-xl opacity-85">
            <span className="mr-2">📍</span>
            <span>Chennai, India</span>
          </div>
        </div>

        {/* Key Achievements */}
        <div className="flex justify-center items-center gap-16 mb-10">
          <div className="text-center bg-white/15 rounded-2xl p-6 backdrop-blur-sm">
            <div className="flex items-center justify-center mb-3">
              <TrendingUp className="w-10 h-10 mr-3 text-green-300" />
              <span className="text-4xl font-bold">+45%</span>
            </div>
            <p className="text-lg opacity-90">Traffic Growth</p>
          </div>
          <div className="text-center bg-white/15 rounded-2xl p-6 backdrop-blur-sm">
            <div className="flex items-center justify-center mb-3">
              <Target className="w-10 h-10 mr-3 text-orange-300" />
              <span className="text-4xl font-bold">ROI</span>
            </div>
            <p className="text-lg opacity-90">Optimization</p>
          </div>
          <div className="text-center bg-white/15 rounded-2xl p-6 backdrop-blur-sm">
            <div className="flex items-center justify-center mb-3">
              <Award className="w-10 h-10 mr-3 text-yellow-300" />
              <span className="text-4xl font-bold">Expert</span>
            </div>
            <p className="text-lg opacity-90">Results</p>
          </div>
        </div>

        {/* Skills Section */}
        <div className="mb-8">
          <div className="flex justify-center items-center gap-6 mb-6">
            <div className="bg-white/20 p-4 rounded-full backdrop-blur-sm">
              <Search className="w-10 h-10" />
            </div>
            <div className="bg-white/20 p-4 rounded-full backdrop-blur-sm">
              <BarChart3 className="w-10 h-10" />
            </div>
            <div className="bg-white/20 p-4 rounded-full backdrop-blur-sm">
              <Users className="w-10 h-10" />
            </div>
            <div className="bg-white/20 p-4 rounded-full backdrop-blur-sm">
              <Zap className="w-10 h-10" />
            </div>
          </div>
          
          {/* Skills Text */}
          <div className="text-2xl font-semibold opacity-95 mb-4">
            SEO • Google Ads • Meta Ads • E-commerce Optimization
          </div>
          
          {/* Call to Action */}
          <div className="text-xl opacity-85 bg-white/10 rounded-full px-8 py-3 inline-block backdrop-blur-sm">
            🚀 Driving Measurable Business Growth
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-gradient-to-br from-white/10 to-transparent rounded-full -translate-y-40 translate-x-40"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-tr from-white/10 to-transparent rounded-full translate-y-32 -translate-x-32"></div>
      
      {/* Additional decorative dots */}
      <div className="absolute top-1/4 left-1/4 w-3 h-3 bg-white/40 rounded-full"></div>
      <div className="absolute top-3/4 right-1/4 w-2 h-2 bg-white/30 rounded-full"></div>
      <div className="absolute top-1/3 right-1/3 w-4 h-4 bg-white/20 rounded-full"></div>
    </div>
  );
};

export default SocialShareImage;