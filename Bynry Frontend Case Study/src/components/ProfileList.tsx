import React from 'react';
import { Profile } from '../types';
import { MapPin, Search, Briefcase } from 'lucide-react';

interface ProfileListProps {
  profiles: Profile[];
  onProfileSelect: (profile: Profile) => void;
  searchQuery: string;
  onSearchChange: (query: string) => void;
}

export default function ProfileList({
  profiles,
  onProfileSelect,
  searchQuery,
  onSearchChange,
}: ProfileListProps) {
  const filteredProfiles = profiles.filter(
    (profile) =>
      profile.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      profile.address.toLowerCase().includes(searchQuery.toLowerCase()) ||
      profile.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      profile.details.interests.some((interest) =>
        interest.toLowerCase().includes(searchQuery.toLowerCase())
      )
  );

  return (
    <div className="w-full bg-white shadow-lg rounded-lg overflow-hidden">
      <div className="p-4 border-b">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
          <input
            type="text"
            placeholder="Search by name, location, interests..."
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </div>
      <div className="divide-y max-h-[600px] overflow-y-auto">
        {filteredProfiles.length === 0 ? (
          <div className="p-4 text-center text-gray-500">
            No profiles found matching your search.
          </div>
        ) : (
          filteredProfiles.map((profile) => (
            <div
              key={profile.id}
              className="p-4 hover:bg-gray-50 cursor-pointer transition-colors"
              onClick={() => onProfileSelect(profile)}
            >
              <div className="flex items-center space-x-4">
                <img
                  src={profile.photo}
                  alt={profile.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div className="flex-1 min-w-0">
                  <h3 className="font-semibold text-gray-800 truncate">
                    {profile.name}
                  </h3>
                  <p className="text-sm text-gray-500 flex items-center">
                    <MapPin size={16} className="mr-1 flex-shrink-0" />
                    <span className="truncate">{profile.address}</span>
                  </p>
                  <p className="text-sm text-gray-500 flex items-center mt-1">
                    <Briefcase size={16} className="mr-1 flex-shrink-0" />
                    <span className="truncate">{profile.description}</span>
                  </p>
                  <div className="flex flex-wrap gap-1 mt-2">
                    {profile.details.interests.map((interest, index) => (
                      <span
                        key={index}
                        className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-blue-100 text-blue-800"
                      >
                        {interest}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}