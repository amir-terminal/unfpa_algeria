import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, Calendar, MapPin, Users, Clock, Share, Bookmark, User } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { mockData } from '../data/mockData';

const EventDetail: React.FC = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { t } = useLanguage();

  const event = mockData.events.find(e => e.id === id);

  if (!event) {
    return (
      <div className="flex items-center justify-center h-64">
        <p className="text-gray-500">Event not found</p>
      </div>
    );
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'open': return 'bg-green-100 text-green-800';
      case 'full': return 'bg-red-100 text-red-800';
      case 'closed': return 'bg-gray-100 text-gray-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case 'open': return 'Registration Open';
      case 'full': return t('eventFull');
      case 'closed': return t('registrationClosed');
      default: return status;
    }
  };

  const canRegister = event.status === 'open' && event.registered < event.capacity;

  return (
    <div className="space-y-4">
      {/* Header */}
      <div className="px-4 pt-4 flex items-center justify-between">
        <button
          onClick={() => navigate(-1)}
          className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
        >
          <ArrowLeft size={24} />
        </button>
        <div className="flex items-center space-x-2">
          <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
            <Bookmark size={20} />
          </button>
          <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
            <Share size={20} />
          </button>
        </div>
      </div>

      {/* Event Image */}
      <div className="px-4">
        <img 
          src={event.image} 
          alt={event.title}
          className="w-full h-64 object-cover rounded-xl"
        />
      </div>

      {/* Event Info */}
      <div className="px-4 space-y-4">
        {/* Status and Category */}
        <div className="flex items-center space-x-2">
          <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">
            {event.category}
          </span>
          <span className={`text-xs px-2 py-1 rounded-full ${getStatusColor(event.status)}`}>
            {getStatusText(event.status)}
          </span>
          <span className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded-full">
            {event.type}
          </span>
        </div>

        {/* Title */}
        <h1 className="text-2xl font-bold text-gray-900 leading-tight">
          {event.title}
        </h1>

        {/* Quick Info */}
        <div className="bg-gray-50 rounded-xl p-4 space-y-3">
          <div className="flex items-center">
            <Calendar size={20} className="text-blue-600 mr-3" />
            <div>
              <div className="font-medium text-gray-900">
                {event.date} - {event.endDate}
              </div>
              <div className="text-sm text-gray-600">
                {event.time} - {event.endTime}
              </div>
            </div>
          </div>
          
          <div className="flex items-start">
            <MapPin size={20} className="text-blue-600 mr-3 mt-0.5" />
            <div>
              <div className="font-medium text-gray-900">{event.location}</div>
              <div className="text-sm text-gray-600">{event.address}</div>
            </div>
          </div>
          
          <div className="flex items-center">
            <Users size={20} className="text-blue-600 mr-3" />
            <div>
              <div className="font-medium text-gray-900">
                {event.registered}/{event.capacity} registered
              </div>
              <div className="text-sm text-gray-600">
                {event.capacity - event.registered} spots remaining
              </div>
            </div>
          </div>
        </div>

        {/* Registration Button */}
        {canRegister ? (
          <button
            onClick={() => navigate(`/events/${event.id}/register`)}
            className="w-full bg-blue-600 text-white py-3 px-4 rounded-xl font-semibold hover:bg-blue-700 transition-colors"
          >
            {t('registerNow')}
          </button>
        ) : (
          <button
            disabled
            className="w-full bg-gray-300 text-gray-500 py-3 px-4 rounded-xl font-semibold cursor-not-allowed"
          >
            {event.status === 'full' ? t('eventFull') : t('registrationClosed')}
          </button>
        )}

        {/* Description */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-4">
          <h2 className="text-lg font-semibold text-gray-900 mb-3">About This Event</h2>
          <p className="text-gray-700 leading-relaxed">{event.longDescription}</p>
        </div>

        {/* Agenda */}
        {event.agenda && (
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-4">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">Agenda</h2>
            <div className="space-y-4">
              {event.agenda.map((day, dayIndex) => (
                <div key={dayIndex}>
                  <h3 className="font-medium text-gray-900 mb-2">{day.day} - {day.date}</h3>
                  <div className="space-y-2">
                    {day.sessions.map((session, sessionIndex) => (
                      <div key={sessionIndex} className="flex items-start space-x-3 p-2 bg-gray-50 rounded-lg">
                        <div className="text-sm font-medium text-blue-600 min-w-0 flex-shrink-0">
                          {session.time}
                        </div>
                        <div className="text-sm text-gray-700">{session.title}</div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Speakers */}
        {event.speakers && event.speakers.length > 0 && (
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-4">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">Speakers</h2>
            <div className="space-y-3">
              {event.speakers.map((speaker, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center">
                    <User size={20} className="text-gray-500" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-medium text-gray-900">{speaker.name}</h3>
                    <p className="text-sm text-blue-600">{speaker.title}</p>
                    <p className="text-sm text-gray-600 mt-1">{speaker.bio}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Requirements & Benefits */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {event.requirements && (
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-4">
              <h3 className="font-semibold text-gray-900 mb-3">Requirements</h3>
              <ul className="space-y-1">
                {event.requirements.map((req, index) => (
                  <li key={index} className="text-sm text-gray-600 flex items-start">
                    <span className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                    {req}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {event.benefits && (
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-4">
              <h3 className="font-semibold text-gray-900 mb-3">What You'll Get</h3>
              <ul className="space-y-1">
                {event.benefits.map((benefit, index) => (
                  <li key={index} className="text-sm text-gray-600 flex items-start">
                    <span className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                    {benefit}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        {/* Contact Info */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-4">
          <h3 className="font-semibold text-gray-900 mb-3">Event Contact</h3>
          <div className="space-y-2 text-sm">
            <div>
              <span className="font-medium text-gray-700">Organizer: </span>
              <span className="text-gray-600">{event.organizer}</span>
            </div>
            <div>
              <span className="font-medium text-gray-700">Contact: </span>
              <span className="text-blue-600">{event.contact}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventDetail;