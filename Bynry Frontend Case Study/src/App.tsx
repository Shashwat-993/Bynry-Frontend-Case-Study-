import React, { useState } from 'react';
import ProfileList from './components/ProfileList';
import Map from './components/Map';
import ProfileDetails from './components/ProfileDetails';
import { Profile } from './types';
import { Users, Map as MapIcon, Layout } from 'lucide-react';

// Sample dataset
const sampleProfiles: Profile[] = [
  {
    id: 1,
    name: "Alice Johnson",
    photo: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150",
    description: "Software Engineer passionate about AI and Web Development.",
    address: "123 Main St, New York, NY",
    latitude: 40.712776,
    longitude: -74.005974,
    details: {
      email: "alice.johnson@example.com",
      phone: "555-1234",
      interests: ["AI", "Traveling", "Photography"]
    }
  },
  {
    id: 2,
    name: "Bob Smith",
    photo: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150",
    description: "Graphic Designer with expertise in UX/UI.",
    address: "456 Elm St, San Francisco, CA",
    latitude: 37.774929,
    longitude: -122.419418,
    details: {
      email: "bob.smith@example.com",
      phone: "555-5678",
      interests: ["Design", "Hiking", "Cooking"]
    }
  },
  {
    id: 3,
    name: "Catherine Davis",
    photo: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150",
    description: "Marketing Specialist with a love for social media.",
    address: "789 Pine St, Chicago, IL",
    latitude: 41.878113,
    longitude: -87.629799,
    details: {
      email: "catherine.davis@example.com",
      phone: "555-9876",
      interests: ["Marketing", "Yoga", "Reading"]
    }
  },
  {
    id: 4,
    name: "David Lee",
    photo: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150",
    description: "Entrepreneur and business consultant.",
    address: "101 Maple Ave, Seattle, WA",
    latitude: 47.606209,
    longitude: -122.332069,
    details: {
      email: "david.lee@example.com",
      phone: "555-6543",
      interests: ["Business", "Cycling", "Startups"]
    }
  },
  {
    id: 5,
    name: "Emily Brown",
    photo: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150",
    description: "Freelance Writer and Content Creator.",
    address: "202 Oak Dr, Austin, TX",
    latitude: 30.267153,
    longitude: -97.743057,
    details: {
      email: "emily.brown@example.com",
      phone: "555-4321",
      interests: ["Writing", "Photography", "Music"]
    }
  }
];

type ViewMode = 'split' | 'list' | 'map';

function App() {
  const [selectedProfile, setSelectedProfile] = useState<Profile | null>(null);
  const [showDetails, setShowDetails] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [viewMode, setViewMode] = useState<ViewMode>('split');

  const renderContent = () => {
    switch (viewMode) {
      case 'list':
        return (
          <div className="w-full">
            <ProfileList
              profiles={sampleProfiles}
              onProfileSelect={(profile) => {
                setSelectedProfile(profile);
                setShowDetails(true);
              }}
              searchQuery={searchQuery}
              onSearchChange={setSearchQuery}
            />
          </div>
        );
      case 'map':
        return (
          <div className="w-full">
            <Map selectedProfile={selectedProfile} profiles={sampleProfiles} />
          </div>
        );
      default:
        return (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <ProfileList
              profiles={sampleProfiles}
              onProfileSelect={(profile) => {
                setSelectedProfile(profile);
                setShowDetails(true);
              }}
              searchQuery={searchQuery}
              onSearchChange={setSearchQuery}
            />
            <Map selectedProfile={selectedProfile} profiles={sampleProfiles} />
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-3xl font-bold text-gray-800">Profile Explorer</h1>
            <div className="flex items-center space-x-2">
              <button
                onClick={() => setViewMode('split')}
                className={`p-2 rounded-lg ${
                  viewMode === 'split'
                    ? 'bg-blue-100 text-blue-600'
                    : 'hover:bg-gray-100'
                }`}
                title="Split View"
              >
                <Layout size={20} />
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`p-2 rounded-lg ${
                  viewMode === 'list'
                    ? 'bg-blue-100 text-blue-600'
                    : 'hover:bg-gray-100'
                }`}
                title="List View"
              >
                <Users size={20} />
              </button>
              <button
                onClick={() => setViewMode('map')}
                className={`p-2 rounded-lg ${
                  viewMode === 'map'
                    ? 'bg-blue-100 text-blue-600'
                    : 'hover:bg-gray-100'
                }`}
                title="Map View"
              >
                <MapIcon size={20} />
              </button>
            </div>
          </div>
        </div>
      </header>
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {renderContent()}
        {showDetails && selectedProfile && (
          <ProfileDetails
            profile={selectedProfile}
            onClose={() => setShowDetails(false)}
          />
        )}
      </main>
    </div>
  );
}

export default App;