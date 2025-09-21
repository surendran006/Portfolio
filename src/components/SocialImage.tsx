import React from 'react';
import { TrendingUp, Target, BarChart3, Users, Search, Zap } from 'lucide-react';

const SocialImage: React.FC = () => {
  return (
    <div className="w-[1200px] h-[630px] bg-gradient-to-br from-teal-600 via-blue-600 to-purple-700 flex items-center justify-center relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-20 h-20 border-2 border-white rounded-full"></div>
        <div className="absolute top-32 right-20 w-16 h-16 border-2 border-white rounded-lg rotate-45"></div>
        <div className="absolute bottom-20 left-32 w-12 h-12 border-2 border-white rounded-full"></div>
        <div className="absolute bottom-32 right-10 w-24 h-24 border-2 border-white rounded-lg rotate-12"></div>
      </div>

      {/* Main Content */}
      <div className="text-center text-white z-10 px-16">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-6xl font-bold mb-4">Surendran M</h1>
          <p className="text-2xl font-light opacity-90">Digital Marketing Executive</p>
        </div>

        {/* Key Stats */}
        <div className="flex justify-center items-center gap-12 mb-8">
          <div className="text-center">
            <div className="flex items-center justify-center mb-2">
              <TrendingUp className="w-8 h-8 mr-2" />
              <span className="text-3xl font-bold">+45%</span>
            </div>
            <p className="text-sm opacity-80">Traffic Growth</p>
          </div>
          <div className="text-center">
            <div className="flex items-center justify-center mb-2">
              <Target className="w-8 h-8 mr-2" />
              <span className="text-3xl font-bold">ROI</span>
            </div>
            <p className="text-sm opacity-80">Optimization</p>
          </div>
          <div className="text-center">
            <div className="flex items-center justify-center mb-2">
              <BarChart3 className="w-8 h-8 mr-2" />
              <span className="text-3xl font-bold">Data</span>
            </div>
            <p className="text-sm opacity-80">Driven Results</p>
          </div>
        </div>

        {/* Skills Icons */}
        <div className="flex justify-center items-center gap-8 mb-8">
          <div className="bg-white/20 p-4 rounded-full">
            <Search className="w-8 h-8" />
          </div>
          <div className="bg-white/20 p-4 rounded-full">
            <Users className="w-8 h-8" />
          </div>
          <div className="bg-white/20 p-4 rounded-full">
            <Zap className="w-8 h-8" />
          </div>
        </div>

        {/* Tagline */}
        <div className="text-xl font-medium opacity-90">
          SEO • Google Ads • Meta Ads • E-commerce Optimization
        </div>
        
        {/* Location */}
        <div className="text-lg opacity-75 mt-4">
          📍 Chennai, India
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-32 translate-x-32"></div>
      <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full translate-y-24 -translate-x-24"></div>
    </div>
  );
};

export default SocialImage;