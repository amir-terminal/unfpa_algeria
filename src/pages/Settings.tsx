import React, { useState } from 'react';
import { Bell, Download, Database, Info, ChevronRight, ToggleLeft as Toggle, Smartphone, Wifi, Moon, Sun } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const Settings: React.FC = () => {
  const { t } = useLanguage();
  const [settings, setSettings] = useState({
    pushNotifications: true,
    offlineReading: true,
    lowDataMode: false,
    darkMode: false,
  });

  const toggleSetting = (key: keyof typeof settings) => {
    setSettings(prev => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  const settingsGroups = [
    {
      title: 'Notifications',
      items: [
        {
          icon: Bell,
          label: t('pushNotifications'),
          description: 'Receive updates about new content',
          type: 'toggle',
          key: 'pushNotifications',
        },
      ],
    },
    {
      title: 'Content',
      items: [
        {
          icon: Download,
          label: t('offlineReading'),
          description: 'Download articles for offline access',
          type: 'toggle',
          key: 'offlineReading',
        },
      ],
    },
    {
      title: 'Data & Performance',
      items: [
        {
          icon: Wifi,
          label: 'Low Data Mode',
          description: 'Reduce data usage and load times',
          type: 'toggle',
          key: 'lowDataMode',
        },
        {
          icon: Database,
          label: 'Clear Cache',
          description: 'Free up storage space',
          type: 'action',
        },
      ],
    },
    {
      title: 'Appearance',
      items: [
        {
          icon: Moon,
          label: 'Dark Mode',
          description: 'Switch to dark theme',
          type: 'toggle',
          key: 'darkMode',
        },
      ],
    },
    {
      title: 'About',
      items: [
        {
          icon: Info,
          label: t('about'),
          description: 'App version and information',
          type: 'navigation',
        },
        {
          icon: Smartphone,
          label: 'App Version',
          description: '1.0.0 (Build 1)',
          type: 'info',
        },
      ],
    },
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="px-4 pt-4">
        <h1 className="text-2xl font-bold text-gray-900 mb-2">{t('appSettings')}</h1>
        <p className="text-gray-600">Customize your app experience</p>
      </div>

      {/* Settings Groups */}
      <div className="space-y-6">
        {settingsGroups.map((group, groupIndex) => (
          <div key={groupIndex} className="px-4">
            <h2 className="text-lg font-semibold text-gray-900 mb-3">{group.title}</h2>
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
              {group.items.map((item, itemIndex) => (
                <div
                  key={itemIndex}
                  className={`p-4 flex items-center justify-between ${
                    itemIndex < group.items.length - 1 ? 'border-b border-gray-100' : ''
                  }`}
                >
                  <div className="flex items-center space-x-3 flex-1">
                    <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center">
                      <item.icon size={20} className="text-gray-600" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-medium text-gray-900">{item.label}</h3>
                      <p className="text-sm text-gray-500">{item.description}</p>
                    </div>
                  </div>
                  
                  {item.type === 'toggle' && item.key && (
                    <button
                      onClick={() => toggleSetting(item.key as keyof typeof settings)}
                      className={`w-12 h-6 rounded-full transition-colors ${
                        settings[item.key as keyof typeof settings]
                          ? 'bg-blue-600'
                          : 'bg-gray-300'
                      }`}
                    >
                      <div
                        className={`w-5 h-5 bg-white rounded-full transition-transform ${
                          settings[item.key as keyof typeof settings]
                            ? 'translate-x-6'
                            : 'translate-x-0.5'
                        }`}
                      />
                    </button>
                  )}
                  
                  {item.type === 'navigation' && (
                    <ChevronRight size={20} className="text-gray-400" />
                  )}
                  
                  {item.type === 'action' && (
                    <button className="text-blue-600 font-medium text-sm">
                      Clear
                    </button>
                  )}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Footer Info */}
      <div className="px-4 pb-8">
        <div className="bg-blue-50 rounded-xl p-4 border border-blue-100">
          <div className="flex items-start space-x-3">
            <Info size={20} className="text-blue-600 mt-0.5" />
            <div>
              <h3 className="font-medium text-blue-900 mb-1">About UNFPA Algeria</h3>
              <p className="text-blue-700 text-sm">
                This app provides access to UNFPA Algeria's programs, news, and resources. 
                For technical support, please contact our team.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;