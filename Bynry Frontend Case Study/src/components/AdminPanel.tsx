import React, { useState } from 'react';
import { Profile } from '../types';
import { Pencil, Trash2, Plus } from 'lucide-react';

interface AdminPanelProps {
  profiles: Profile[];
  onAdd: () => void;
  onEdit: (profile: Profile) => void;
  onDelete: (id: string) => void;
}

export default function AdminPanel({ profiles, onAdd, onEdit, onDelete }: AdminPanelProps) {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredProfiles = profiles.filter(profile =>
    profile.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden">
      <div className="p-4 bg-gray-50 border-b">
        <div className="flex justify-between items-center">
          <h2 className="text-xl font-semibold text-gray-800">Manage Profiles</h2>
          <button
            onClick={onAdd}
            className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors flex items-center"
          >
            <Plus size={20} className="mr-2" />
            Add Profile
          </button>
        </div>
        <input
          type="text"
          placeholder="Search profiles..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="mt-4 w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <div className="divide-y">
        {filteredProfiles.map((profile) => (
          <div key={profile.id} className="p-4 hover:bg-gray-50">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <img
                  src={profile.photo}
                  alt={profile.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <h3 className="font-semibold text-gray-800">{profile.name}</h3>
                  <p className="text-sm text-gray-500">{profile.address}</p>
                </div>
              </div>
              <div className="flex space-x-2">
                <button
                  onClick={() => onEdit(profile)}
                  className="p-2 text-gray-600 hover:text-blue-500 transition-colors"
                >
                  <Pencil size={20} />
                </button>
                <button
                  onClick={() => onDelete(profile.id)}
                  className="p-2 text-gray-600 hover:text-red-500 transition-colors"
                >
                  <Trash2 size={20} />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}