import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, Users, Target, MapPin, Calendar } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { mockData } from '../data/mockData';

const ProgramDetail: React.FC = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { t } = useLanguage();

  const program = mockData.programs.find(p => p.id === id);

  if (!program) {
    return (
      <div className="flex items-center justify-center h-64">
        <p className="text-gray-500">Program not found</p>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="px-4 pt-4 flex items-center">
        <button
          onClick={() => navigate(-1)}
          className="p-2 hover:bg-gray-100 rounded-lg transition-colors mr-3"
        >
          <ArrowLeft size={24} />
        </button>
        <h1 className="text-xl font-bold text-gray-900">Program Details</h1>
      </div>

      {/* Program Header */}
      <div className="px-4">
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <div className="flex items-start space-x-4 mb-6">
            <div className={`w-16 h-16 rounded-xl flex items-center justify-center ${program.color}`}>
              <program.icon size={32} className="text-white" />
            </div>
            <div className="flex-1">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">{program.title}</h2>
              <p className="text-gray-600 leading-relaxed">{program.description}</p>
            </div>
          </div>

          {/* Key Metrics */}
          <div className="grid grid-cols-2 gap-4">
            {program.metrics.map((metric, index) => (
              <div key={index} className="text-center p-4 bg-gray-50 rounded-lg">
                <div className="text-2xl font-bold text-gray-900">{metric.value}</div>
                <div className="text-sm text-gray-600">{metric.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Program Details */}
      <div className="px-4 space-y-4">
        {/* Objectives */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <div className="flex items-center mb-4">
            <Target size={24} className="text-blue-600 mr-3" />
            <h3 className="text-lg font-semibold text-gray-900">Objectives</h3>
          </div>
          <ul className="space-y-2">
            {program.objectives.map((objective, index) => (
              <li key={index} className="flex items-start">
                <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <span className="text-gray-700">{objective}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Key Areas */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <div className="flex items-center mb-4">
            <Users size={24} className="text-green-600 mr-3" />
            <h3 className="text-lg font-semibold text-gray-900">Key Focus Areas</h3>
          </div>
          <div className="flex flex-wrap gap-2">
            {program.keyAreas.map((area, index) => (
              <span key={index} className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">
                {area}
              </span>
            ))}
          </div>
        </div>

        {/* Target Beneficiaries */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <div className="flex items-center mb-4">
            <Users size={24} className="text-purple-600 mr-3" />
            <h3 className="text-lg font-semibold text-gray-900">Target Beneficiaries</h3>
          </div>
          <div className="space-y-3">
            {program.targetBeneficiaries.map((beneficiary, index) => (
              <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <span className="text-gray-700">{beneficiary.group}</span>
                <span className="font-semibold text-gray-900">{beneficiary.count}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Implementation Areas */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <div className="flex items-center mb-4">
            <MapPin size={24} className="text-orange-600 mr-3" />
            <h3 className="text-lg font-semibold text-gray-900">Implementation Areas</h3>
          </div>
          <div className="grid grid-cols-2 gap-2">
            {program.implementationAreas.map((area, index) => (
              <div key={index} className="flex items-center p-2 bg-orange-50 rounded-lg">
                <MapPin size={16} className="text-orange-600 mr-2" />
                <span className="text-gray-700 text-sm">{area}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Timeline */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <div className="flex items-center mb-4">
            <Calendar size={24} className="text-indigo-600 mr-3" />
            <h3 className="text-lg font-semibold text-gray-900">Program Timeline</h3>
          </div>
          <div className="space-y-4">
            {program.timeline.map((phase, index) => (
              <div key={index} className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-indigo-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-indigo-600 font-semibold text-sm">{index + 1}</span>
                </div>
                <div className="flex-1">
                  <h4 className="font-medium text-gray-900">{phase.phase}</h4>
                  <p className="text-gray-600 text-sm">{phase.description}</p>
                  <p className="text-indigo-600 text-sm font-medium mt-1">{phase.duration}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProgramDetail;