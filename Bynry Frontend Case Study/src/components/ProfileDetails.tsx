import React from 'react';
import { Profile } from '../types';
import { MapPin, X, Mail, Phone, Heart } from 'lucide-react';

interface ProfileDetailsProps {
  profile: Profile;
  onClose: () => void;
}

export default function ProfileDetails({ profile, onClose }: ProfileDetailsProps) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg max-w-2xl w-full mx-4">
        <div className="p-6">
          <div className="flex justify-between items-start mb-4">
            <div className="flex items-center space-x-4">
              <img
                src={profile.photo}
                alt={profile.name}
                className="w-16 h-16 rounded-full object-cover"
              />
              <div>
                <h2 className="text-2xl font-bold text-gray-800">{profile.name}</h2>
                <p className="text-gray-500 flex items-center">
                  <MapPin size={16} className="mr-1" />
                  {profile.address}
                </p>
              </div>
            </div>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-gray-600 transition-colors"
            >
              <X size={24} />
            </button>
          </div>
          <p className="text-gray-700 mt-4 mb-6">{profile.description}</p>
          
          <div className="space-y-3">
            <div className="flex items-center text-gray-600">
              <Mail size={16} className="mr-2" />
              <span>{profile.details.email}</span>
            </div>
            <div className="flex items-center text-gray-600">
              <Phone size={16} className="mr-2" />
              <span>{profile.details.phone}</span>
            </div>
            <div className="flex items-center text-gray-600">
              <Heart size={16} className="mr-2" />
              <div className="flex flex-wrap gap-2">
                {profile.details.interests.map((interest, index) => (
                  <span
                    key={index}
                    className="bg-gray-100 px-3 py-1 rounded-full text-sm"
                  >
                    {interest}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}