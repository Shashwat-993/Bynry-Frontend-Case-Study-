# Profile Explorer

A beautiful, interactive web application for exploring user profiles with an integrated map view. Built with React, TypeScript, and Leaflet maps.

![Profile Explorer Screenshot](https://i.imgur.com/YourScreenshot.jpg)

## 🌟 Features

- **Interactive Map View**: Visualize profile locations on an interactive map
- **Profile List**: Browse through profiles with detailed information
- **Search Functionality**: Search profiles by name, location, or interests
- **Responsive Design**: Works seamlessly on desktop and mobile devices
- **Multiple View Modes**:
  - Split View (Map + List)
  - List View
  - Map View
- **Profile Details**: View comprehensive profile information in a modal
- **Real-time Updates**: Profile markers update on the map as you browse

## 🚀 Tech Stack

- **Frontend Framework**: React with TypeScript
- **Styling**: Tailwind CSS for modern, responsive design
- **Map Integration**: Leaflet for interactive maps
- **Icons**: Lucide React for beautiful, consistent icons
- **Database**: Supabase for data storage and authentication
- **Deployment**: Netlify for hosting

## 💻 Local Development

1. Clone the repository:
```bash
git clone https://github.com/yourusername/profile-explorer.git
cd profile-explorer
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file in the root directory and add your Supabase credentials:
```env
VITE_SUPABASE_URL=your_supabase_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
```

4. Start the development server:
```bash
npm run dev
```

5. Open [http://localhost:5173](http://localhost:5173) in your browser.

## 🏗️ Project Structure

```
profile-explorer/
├── src/
│   ├── components/         # React components
│   │   ├── Map.tsx        # Map component with Leaflet integration
│   │   ├── ProfileList.tsx # Profile listing component
│   │   └── ...
│   ├── types/             # TypeScript type definitions
│   ├── App.tsx            # Main application component
│   └── main.tsx          # Application entry point
├── public/               # Static assets
└── supabase/            # Supabase configurations and migrations
```

## 🔐 Database Schema

The application uses the following database structure:

```sql
profiles
├── id (uuid, primary key)
├── name (text)
├── photo (text)
├── description (text)
├── address (text)
├── latitude (double precision)
├── longitude (double precision)
├── created_at (timestamptz)
└── user_id (uuid, references auth.users)
```

## 🚀 Deployment

The application is deployed on Netlify. To deploy your own instance:

1. Fork this repository
2. Connect your fork to Netlify
3. Set up the required environment variables in Netlify:
   - `VITE_SUPABASE_URL`
   - `VITE_SUPABASE_ANON_KEY`

## 🤝 Contributing

1. Fork the repository
2. Create a new branch: `git checkout -b feature-name`
3. Make your changes
4. Push to your fork: `git push origin feature-name`
5. Submit a pull request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Profile photos from [Unsplash](https://unsplash.com)
- Map data from [OpenStreetMap](https://www.openstreetmap.org)
- Icons from [Lucide](https://lucide.dev)
