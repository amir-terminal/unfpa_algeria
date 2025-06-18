import React, { useState } from 'react';
import { Download, FileText, Calendar, Eye } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { mockData } from '../data/mockData';

const Publications: React.FC = () => {
  const { t } = useLanguage();
  const [selectedType, setSelectedType] = useState('all');

  const types = ['all', 'Report', 'Policy Brief', 'Factsheet', 'Guide'];

  const filteredPublications = mockData.publications.filter(pub => 
    selectedType === 'all' || pub.type === selectedType
  );

  return (
    <div className="space-y-4">
      {/* Header */}
      <div className="px-4 pt-4">
        <h1 className="text-2xl font-bold text-gray-900 mb-2">{t('publications')}</h1>
        <p className="text-gray-600">Research, reports, and resources</p>
      </div>

      {/* Type Filter */}
      <div className="px-4">
        <div className="flex space-x-2 overflow-x-auto pb-2">
          {types.map((type) => (
            <button
              key={type}
              onClick={() => setSelectedType(type)}
              className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors ${
                selectedType === type
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {type === 'all' ? 'All' : type}
            </button>
          ))}
        </div>
      </div>

      {/* Publications List */}
      <div className="px-4 space-y-4">
        {filteredPublications.map((publication) => (
          <div key={publication.id} className="bg-white rounded-xl shadow-sm border border-gray-100 p-4">
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <FileText size={24} className="text-blue-600" />
              </div>
              
              <div className="flex-1">
                <div className="flex items-center mb-2">
                  <span className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded-full">
                    {publication.type}
                  </span>
                  <span className="text-gray-500 text-xs ml-2 flex items-center">
                    <Calendar size={12} className="mr-1" />
                    {publication.date}
                  </span>
                </div>
                
                <h3 className="font-semibold text-gray-900 mb-2">{publication.title}</h3>
                <p className="text-gray-600 text-sm mb-3 line-clamp-2">{publication.description}</p>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4 text-xs text-gray-500">
                    <span className="flex items-center">
                      <Eye size={12} className="mr-1" />
                      {publication.downloads} downloads
                    </span>
                    <span>{publication.pages} pages</span>
                    <span>{publication.language}</span>
                  </div>
                  
                  <button className="flex items-center space-x-1 bg-blue-600 text-white px-3 py-1.5 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors">
                    <Download size={14} />
                    <span>{t('download')}</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Publications;