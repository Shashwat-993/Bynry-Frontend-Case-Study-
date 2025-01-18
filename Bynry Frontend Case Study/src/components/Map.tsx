import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { Profile } from '../types';
import L from 'leaflet';

// Fix for default marker icon
delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
});

interface MapProps {
  selectedProfile: Profile | null;
  profiles: Profile[];
}

export default function Map({ selectedProfile, profiles }: MapProps) {
  const defaultPosition: [number, number] = [39.8283, -98.5795]; // Center of USA
  const position: [number, number] = selectedProfile 
    ? [selectedProfile.latitude, selectedProfile.longitude]
    : defaultPosition;

  return (
    <MapContainer
      center={position}
      zoom={selectedProfile ? 14 : 4}
      className="w-full h-[600px] rounded-lg shadow-lg z-0"
      key={`${position[0]}-${position[1]}`}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {profiles.map(profile => (
        <Marker
          key={profile.id}
          position={[profile.latitude, profile.longitude]}
          opacity={selectedProfile ? (selectedProfile.id === profile.id ? 1 : 0.5) : 1}
        >
          <Popup>
            <div className="p-2">
              <div className="flex items-center space-x-3 mb-2">
                <img
                  src={profile.photo}
                  alt={profile.name}
                  className="w-10 h-10 rounded-full object-cover"
                />
                <div>
                  <h3 className="font-semibold">{profile.name}</h3>
                  <p className="text-sm text-gray-500">{profile.address}</p>
                </div>
              </div>
              <p className="text-sm">{profile.description}</p>
            </div>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}