import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { mockData } from '../data/mockData';

const Programs: React.FC = () => {
  const navigate = useNavigate();
  const { t } = useLanguage();

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="px-4 pt-4">
        <h1 className="text-2xl font-bold text-gray-900 mb-2">{t('programs')}</h1>
        <p className="text-gray-600">Empowering communities across Algeria through comprehensive programs</p>
      </div>

      {/* Programs Grid */}
      <div className="px-4 space-y-4">
        {mockData.programs.map((program) => (
          <div 
            key={program.id}
            onClick={() => navigate(`/programs/${program.id}`)}
            className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden cursor-pointer hover:shadow-md transition-shadow"
          >
            <div className="p-6">
              <div className="flex items-start space-x-4">
                <div className={`w-16 h-16 rounded-xl flex items-center justify-center flex-shrink-0 ${program.color}`}>
                  <program.icon size={28} className="text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-gray-900 mb-2 text-lg">{program.title}</h3>
                  <p className="text-gray-600 mb-4 line-clamp-3">{program.description}</p>
                  
                  {/* Key Metrics */}
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    {program.metrics.map((metric, index) => (
                      <div key={index} className="text-center">
                        <div className="text-xl font-bold text-gray-900">{metric.value}</div>
                        <div className="text-xs text-gray-500">{metric.label}</div>
                      </div>
                    ))}
                  </div>
                  
                  {/* Key Areas */}
                  <div className="flex flex-wrap gap-2">
                    {program.keyAreas.slice(0, 3).map((area, index) => (
                      <span key={index} className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded-full">
                        {area}
                      </span>
                    ))}
                    {program.keyAreas.length > 3 && (
                      <span className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded-full">
                        +{program.keyAreas.length - 3} more
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Programs;