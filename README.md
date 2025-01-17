# Profile Map Explorer

A React-based web application that allows users to view and manage profiles while exploring their locations on an interactive map. This project was developed as part of the BYNRY Frontend Case Study.

## 🌟 Features

- **Profile Management**
  - View list of profiles with details
  - Add, edit, and delete profiles through admin panel
  - Search and filter profiles by name or location
  - Detailed profile view with extended information

- **Interactive Map Integration**
  - View profile locations on an interactive map
  - Click markers to view profile details
  - Summary view showing profile location
  - Integrated with OpenStreetMap (easily switchable to Google Maps/Mapbox)

- **User Experience**
  - Responsive design for all devices
  - Loading indicators for async operations
  - Error handling and validation
  - Intuitive navigation and interface

## 🚀 Tech Stack

- React 18
- TypeScript
- React Router v6
- React-Leaflet for mapping
- Tailwind CSS for styling
- shadcn/ui for UI components

## 📦 Project Structure

```
src/
├── app/
│   ├── layout.tsx
│   ├── page.tsx
│   └── loading.tsx
├── components/
│   ├── ProfileList/
│   ├── ProfileCard/
│   ├── Map/
│   ├── AdminPanel/
│   ├── LoadingIndicator/
│   └── ui/
├── services/
│   └── api.ts
├── types/
│   └── index.ts
└── utils/
    └── helpers.ts
```

## 🛠️ Setup and Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/profile-map-explorer.git
   ```

2. Install dependencies:
   ```bash
   cd profile-map-explorer
   npm install
   ```

3. Create a `.env` file with required environment variables:
   ```
   NEXT_PUBLIC_MAP_API_KEY=your_map_api_key
   ```

4. Start the development server:
   ```bash
   npm run dev
   ```

## 💻 Usage

### User Interface

1. **Browse Profiles**
   - View all profiles on the home page
   - Use search bar to filter profiles
   - Click on profile cards to view details

2. **Map Interaction**
   - Click "View on Map" to see profile location
   - Interact with map markers for quick info
   - Use zoom controls for better navigation

3. **Admin Panel**
   - Access admin panel through "/admin" route
   - Add new profiles with required information
   - Edit existing profiles
   - Delete profiles when needed

### API Integration

The application uses a RESTful API for data management. Key endpoints:

- GET /api/profiles - Fetch all profiles
- GET /api/profiles/:id - Fetch specific profile
- POST /api/profiles - Create new profile
- PUT /api/profiles/:id - Update profile
- DELETE /api/profiles/:id - Delete profile

## 🎯 Key Requirements Met

1. ✅ Profile Display
   - Implemented profile cards with essential information
   - Responsive grid layout
   - Efficient data loading

2. ✅ Interactive Mapping
   - Integrated map component
   - Dynamic marker placement
   - Smooth interaction handling

3. ✅ Summary Integration
   - One-click location view
   - Seamless map integration
   - Quick profile overview

4. ✅ User Experience
   - Intuitive navigation
   - Responsive design
   - Loading states
   - Error handling

5. ✅ Admin Functionality
   - Secure admin panel
   - CRUD operations
   - Form validation

## 📱 Responsive Design

The application is fully responsive and tested on:
- Desktop (1920px and above)
- Laptop (1024px to 1919px)
- Tablet (768px to 1023px)
- Mobile (320px to 767px)

## 🔒 Error Handling

- Form validation with error messages
- API error handling with user feedback
- Fallback UI for failed data loading
- Network error detection

## 🚦 Loading States

- Skeleton loaders for profile cards
- Progress indicators for map loading
- Loading states for form submissions
- Smooth transitions between states

## 🧪 Testing

Run tests using:
```bash
npm run test
```

Tests cover:
- Component rendering
- User interactions
- API integration
- Error scenarios

## 📈 Future Improvements

1. Add authentication system
2. Implement real-time updates
3. Add profile image upload
4. Enhance map features
5. Add data export functionality

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Create a Pull Request
