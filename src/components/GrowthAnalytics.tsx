import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, BarChart3, Users, Globe, Zap } from 'lucide-react';

interface DataPoint {
  month: string;
  value: number;
}

interface GrowthMetric {
  title: string;
  value: string;
  change: string;
  icon: React.ElementType;
  color: string;
}

const GrowthAnalytics: React.FC = () => {
  const trafficGrowth: DataPoint[] = [
    { month: 'Jan', value: 500 },
    { month: 'Feb', value: 1200 },
    { month: 'Mar', value: 1800 },
    { month: 'Apr', value: 2500 },
    { month: 'May', value: 3200 },
    { month: 'Jun', value: 2000 }
  ];

  const conversionGrowth: DataPoint[] = [
    { month: 'Jan', value: 2 },
    { month: 'Feb', value: 3.5 },
    { month: 'Mar', value: 5 },
    { month: 'Apr', value: 6.8 },
    { month: 'May', value: 8.2 },
    { month: 'Jun', value: 9.1 }
  ];

  const engagementGrowth: DataPoint[] = [
    { month: 'Jan', value: 1200 },
    { month: 'Feb', value: 2800 },
    { month: 'Mar', value: 4500 },
    { month: 'Apr', value: 6200 },
    { month: 'May', value: 7800 },
    { month: 'Jun', value: 9500 }
  ];

  const growthMetrics: GrowthMetric[] = [
    {
      title: 'Daily Organic Visitors',
      value: '2,000+',
      change: '+300% growth',
      icon: Globe,
      color: 'from-teal-500 to-blue-500'
    },
    {
      title: 'Search Rankings',
      value: 'Top 10',
      change: '+25 keywords',
      icon: TrendingUp,
      color: 'from-blue-500 to-purple-500'
    },
    {
      title: 'Monthly Engagement',
      value: '9,500+',
      change: '+690% growth',
      icon: Users,
      color: 'from-purple-500 to-pink-500'
    },
    {
      title: 'Domain Authority',
      value: '+25%',
      change: 'Quality backlinks',
      icon: Zap,
      color: 'from-pink-500 to-red-500'
    }
  ];

  const renderChart = (data: DataPoint[], maxValue: number) => {
    const chartWidth = 100;
    const barWidth = 12;
    const spacing = 3;
    const chartHeight = 200;
    const bottomPadding = 40;

    return (
      <div className="flex items-end justify-center gap-2 h-64 px-2">
        {data.map((point, index) => {
          const percentage = (point.value / maxValue) * 100;
          const barHeight = (chartHeight / 100) * percentage;

          return (
            <motion.div
              key={index}
              initial={{ height: 0 }}
              whileInView={{ height: `${percentage}%` }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="group relative"
              style={{ minHeight: '4px' }}
            >
              <motion.div
                whileHover={{ scale: 1.1 }}
                className={`w-${barWidth === 12 ? '3' : '4'} bg-gradient-to-t from-teal-500 to-blue-500 rounded-t-lg cursor-pointer shadow-lg transition-all duration-300 group-hover:shadow-xl`}
                style={{ width: `${barWidth}px` }}
              >
                <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gray-800 text-white text-xs font-semibold py-1 px-2 rounded whitespace-nowrap z-10">
                  {point.value.toLocaleString()}
                </div>
              </motion.div>
              <div className="text-center mt-3 text-xs text-gray-600 font-medium">
                {point.month}
              </div>
            </motion.div>
          );
        })}
      </div>
    );
  };

  const maxTraffic = Math.max(...trafficGrowth.map(d => d.value));
  const maxConversion = Math.max(...conversionGrowth.map(d => d.value));
  const maxEngagement = Math.max(...engagementGrowth.map(d => d.value));

  return (
    <div className="w-full">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16"
      >
        <h3 className="text-4xl font-bold text-gray-800 mb-4">Supreme Computers Growth Journey</h3>
        <p className="text-lg text-gray-600">
          Transforming digital presence from startup metrics to industry-leading performance through strategic SEO, content optimization, and paid advertising campaigns.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
        {growthMetrics.map((metric, index) => {
          const IconComponent = metric.icon;
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 hover:shadow-xl transition-all duration-300"
            >
              <div className={`w-12 h-12 bg-gradient-to-r ${metric.color} rounded-xl flex items-center justify-center mb-4 shadow-lg`}>
                <IconComponent className="w-6 h-6 text-white" />
              </div>
              <h4 className="text-sm text-gray-600 font-medium mb-2">{metric.title}</h4>
              <div className="text-3xl font-bold text-gray-800 mb-2">{metric.value}</div>
              <div className="text-sm text-green-600 font-semibold">{metric.change}</div>
            </motion.div>
          );
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Organic Traffic Growth */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-white to-blue-50 rounded-3xl shadow-xl border border-gray-100 p-8"
        >
          <div className="flex items-center justify-between mb-8">
            <h4 className="text-xl font-bold text-gray-800">Organic Traffic Growth</h4>
            <div className="w-10 h-10 bg-gradient-to-br from-teal-500 to-blue-500 rounded-xl flex items-center justify-center shadow-lg">
              <Globe className="w-5 h-5 text-white" />
            </div>
          </div>
          <div className="mb-4 text-sm text-gray-600">
            <span className="font-semibold text-teal-600">500</span> daily visitors
            <span className="mx-2 text-gray-400">→</span>
            <span className="font-semibold text-teal-600">2,000+</span> daily visitors
          </div>
          {renderChart(trafficGrowth, maxTraffic)}
          <div className="mt-6 pt-6 border-t border-gray-200">
            <p className="text-sm text-gray-600">
              Achieved through comprehensive SEO optimization, technical improvements, and strategic content positioning targeting high-intent search queries.
            </p>
          </div>
        </motion.div>

        {/* Conversion Rate Improvement */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="bg-gradient-to-br from-white to-purple-50 rounded-3xl shadow-xl border border-gray-100 p-8"
        >
          <div className="flex items-center justify-between mb-8">
            <h4 className="text-xl font-bold text-gray-800">Conversion Rate (%)</h4>
            <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center shadow-lg">
              <BarChart3 className="w-5 h-5 text-white" />
            </div>
          </div>
          <div className="mb-4 text-sm text-gray-600">
            <span className="font-semibold text-purple-600">2%</span> baseline
            <span className="mx-2 text-gray-400">→</span>
            <span className="font-semibold text-purple-600">9.1%</span> optimized
          </div>
          {renderChart(conversionGrowth, maxConversion)}
          <div className="mt-6 pt-6 border-t border-gray-200">
            <p className="text-sm text-gray-600">
              Improved through A/B testing, page speed optimization, mobile responsiveness, and CRO strategies.
            </p>
          </div>
        </motion.div>

        {/* Social & Engagement */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="bg-gradient-to-br from-white to-pink-50 rounded-3xl shadow-xl border border-gray-100 p-8"
        >
          <div className="flex items-center justify-between mb-8">
            <h4 className="text-xl font-bold text-gray-800">Monthly Engagement</h4>
            <div className="w-10 h-10 bg-gradient-to-br from-pink-500 to-red-500 rounded-xl flex items-center justify-center shadow-lg">
              <Users className="w-5 h-5 text-white" />
            </div>
          </div>
          <div className="mb-4 text-sm text-gray-600">
            <span className="font-semibold text-pink-600">1,200</span> interactions
            <span className="mx-2 text-gray-400">→</span>
            <span className="font-semibold text-pink-600">9,500+</span> interactions
          </div>
          {renderChart(engagementGrowth, maxEngagement)}
          <div className="mt-6 pt-6 border-t border-gray-200">
            <p className="text-sm text-gray-600">
              Built through strategic social media campaigns, paid advertising, email marketing, and community engagement.
            </p>
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mt-16 bg-gradient-to-r from-teal-50 via-blue-50 to-purple-50 rounded-3xl border border-teal-200 p-8 lg:p-12"
      >
        <h4 className="text-2xl font-bold text-gray-800 mb-6">Key Growth Drivers</h4>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              title: 'Technical SEO Excellence',
              description: 'Site speed optimization, Core Web Vitals improvements, mobile responsiveness, and schema markup implementation'
            },
            {
              title: 'Strategic Link Building',
              description: 'High-authority backlinks, niche citations, partnerships, and domain authority growth through quality link acquisition'
            },
            {
              title: 'Content Optimization',
              description: 'Keyword-targeted product descriptions, category pages, and meta tags designed for search visibility and user intent'
            },
            {
              title: 'Paid Advertising',
              description: 'Google Ads and Meta Ads campaigns with ROI focus, audience targeting, and continuous A/B testing'
            },
            {
              title: 'AI-Powered Search Integration',
              description: 'Listed on AI-driven search platforms, expanded reach beyond traditional search engines'
            },
            {
              title: 'Analytics & Tracking',
              description: 'Data-driven insights from Google Analytics, real-time performance monitoring, and actionable recommendations'
            }
          ].map((driver, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="bg-white rounded-2xl p-6 border border-gray-100 shadow-md hover:shadow-lg transition-all duration-300"
            >
              <div className="flex items-start">
                <TrendingUp className="w-5 h-5 text-teal-600 mr-3 mt-0.5 flex-shrink-0" />
                <div>
                  <h5 className="font-semibold text-gray-800 mb-2">{driver.title}</h5>
                  <p className="text-sm text-gray-600">{driver.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default GrowthAnalytics;
