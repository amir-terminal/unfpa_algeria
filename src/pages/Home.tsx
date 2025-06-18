import React from 'react';
import { ChevronRight, Heart, Users, Shield, Globe, Calendar } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { mockData } from '../data/mockData';

const Home: React.FC = () => {
  const navigate = useNavigate();
  const { t } = useLanguage();

  const quickStats = [
    { icon: Heart, label: 'Lives Impacted', value: '2.5M+', color: 'text-red-500' },
    { icon: Users, label: 'Youth Reached', value: '150K+', color: 'text-blue-500' },
    { icon: Shield, label: 'Women Protected', value: '75K+', color: 'text-purple-500' },
    { icon: Globe, label: 'Communities', value: '48', color: 'text-green-500' },
  ];

  return (
    <div className="space-y-6">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-blue-600 to-purple-700 text-white p-6 rounded-b-3xl">
        <div className="relative z-10">
          <h1 className="text-2xl font-bold mb-3">{t('welcome')}</h1>
          <p className="text-blue-100 leading-relaxed">{t('mission')}</p>
        </div>
        <div className="absolute top-0 right-0 w-32 h-32 bg-white bg-opacity-10 rounded-full -translate-y-8 translate-x-8"></div>
        <div className="absolute bottom-0 left-0 w-24 h-24 bg-white bg-opacity-5 rounded-full translate-y-8 -translate-x-8"></div>
      </div>

      {/* Quick Stats */}
      <div className="px-4">
        <div className="grid grid-cols-2 gap-4">
          {quickStats.map((stat, index) => (
            <div key={index} className="bg-white p-4 rounded-xl shadow-sm border border-gray-100">
              <div className="flex items-center mb-2">
                <stat.icon size={20} className={stat.color} />
              </div>
              <div className="text-2xl font-bold text-gray-900 mb-1">{stat.value}</div>
              <div className="text-sm text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Latest News */}
      <div className="px-4">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-bold text-gray-900">{t('latestNews')}</h2>
          <button 
            onClick={() => navigate('/news')}
            className="flex items-center text-blue-600 font-medium"
          >
            {t('viewAll')}
            <ChevronRight size={16} className="ml-1" />
          </button>
        </div>
        
        <div className="space-y-4">
          {mockData.news.slice(0, 2).map((article) => (
            <div 
              key={article.id}
              onClick={() => navigate(`/news/${article.id}`)}
              className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden cursor-pointer hover:shadow-md transition-shadow"
            >
              <img 
                src={article.image} 
                alt={article.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <div className="flex items-center mb-2">
                  <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">
                    {article.category}
                  </span>
                  <span className="text-gray-500 text-xs ml-2">{article.date}</span>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2 line-clamp-2">{article.title}</h3>
                <p className="text-gray-600 text-sm line-clamp-2">{article.excerpt}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Upcoming Events */}
      <div className="px-4">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-bold text-gray-900">{t('upcomingEvents')}</h2>
          <button 
            onClick={() => navigate('/events')}
            className="flex items-center text-blue-600 font-medium"
          >
            {t('viewAll')}
            <ChevronRight size={16} className="ml-1" />
          </button>
        </div>
        
        <div className="space-y-3">
          {mockData.events.slice(0, 2).map((event) => (
            <div 
              key={event.id}
              onClick={() => navigate(`/events/${event.id}`)}
              className="bg-white rounded-xl shadow-sm border border-gray-100 p-4 cursor-pointer hover:shadow-md transition-shadow"
            >
              <div className="flex items-start space-x-3">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Calendar size={20} className="text-blue-600" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-900 mb-1 line-clamp-1">{event.title}</h3>
                  <p className="text-gray-600 text-sm mb-2 line-clamp-2">{event.description}</p>
                  <div className="flex items-center text-xs text-gray-500">
                    <span>{event.date}</span>
                    <span className="mx-2">•</span>
                    <span>{event.location}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Our Programs */}
      <div className="px-4">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-bold text-gray-900">{t('ourPrograms')}</h2>
          <button 
            onClick={() => navigate('/programs')}
            className="flex items-center text-blue-600 font-medium"
          >
            {t('viewAll')}
            <ChevronRight size={16} className="ml-1" />
          </button>
        </div>
        
        <div className="grid grid-cols-2 gap-4">
          {mockData.programs.slice(0, 4).map((program) => (
            <div 
              key={program.id}
              onClick={() => navigate(`/programs/${program.id}`)}
              className="bg-white rounded-xl shadow-sm border border-gray-100 p-4 cursor-pointer hover:shadow-md transition-shadow"
            >
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-3 ${program.color}`}>
                <program.icon size={24} className="text-white" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">{program.title}</h3>
              <p className="text-gray-600 text-sm line-clamp-2">{program.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;