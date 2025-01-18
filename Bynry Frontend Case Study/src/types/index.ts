export interface ProfileDetails {
  email: string;
  phone: string;
  interests: string[];
}

export interface Profile {
  id: number;
  name: string;
  photo: string;
  description: string;
  address: string;
  latitude: number;
  longitude: number;
  details: ProfileDetails;
  created_at?: string;
}