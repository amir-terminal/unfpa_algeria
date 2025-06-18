import React, { useState } from 'react';
import { Send, MapPin, Phone, Mail, Clock } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const Contact: React.FC = () => {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
    alert('Message sent successfully!');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="px-4 pt-4">
        <h1 className="text-2xl font-bold text-gray-900 mb-2">{t('contactUs')}</h1>
        <p className="text-gray-600">Get in touch with UNFPA Algeria</p>
      </div>

      {/* Contact Info */}
      <div className="px-4 space-y-4">
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-4">
          <div className="space-y-4">
            <div className="flex items-start space-x-3">
              <MapPin size={20} className="text-blue-600 mt-1" />
              <div>
                <h3 className="font-medium text-gray-900">{t('address')}</h3>
                <p className="text-gray-600 text-sm">
                  Villa No. 10, Rue Abderrahim Taleb<br />
                  Hydra, Algiers 16035<br />
                  Algeria
                </p>
              </div>
            </div>
            
            <div className="flex items-center space-x-3">
              <Phone size={20} className="text-blue-600" />
              <div>
                <h3 className="font-medium text-gray-900">{t('phone')}</h3>
                <p className="text-gray-600 text-sm">+213 21 69 12 34</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-3">
              <Mail size={20} className="text-blue-600" />
              <div>
                <h3 className="font-medium text-gray-900">{t('email')}</h3>
                <p className="text-gray-600 text-sm">algeria.office@unfpa.org</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-3">
              <Clock size={20} className="text-blue-600 mt-1" />
              <div>
                <h3 className="font-medium text-gray-900">Office Hours</h3>
                <p className="text-gray-600 text-sm">
                  Sunday - Thursday: 8:00 AM - 4:30 PM<br />
                  Friday - Saturday: Closed
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Form */}
      <div className="px-4">
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-4">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Send us a message</h2>
          
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                {t('name')} *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                {t('email')} *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            
            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                Subject *
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                required
                value={formData.subject}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                {t('message')} *
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={4}
                value={formData.message}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
              />
            </div>
            
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg font-medium hover:bg-blue-700 transition-colors flex items-center justify-center space-x-2"
            >
              <Send size={18} />
              <span>{t('send')}</span>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;