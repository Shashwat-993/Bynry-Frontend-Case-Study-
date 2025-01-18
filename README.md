# 🌍 Profile Explorer  

[Live Demo](https://super-pastelito-ea7f39.netlify.app/)  
A beautiful, interactive web application for exploring user profiles with an integrated map view. Built with **React**, **TypeScript**, and **Leaflet** maps.  

![Profile Explorer Screenshot](https://i.imgur.com/YourScreenshot.jpg)  

---

## 🌟 Features  

- **Interactive Map View**: Visualize profile locations dynamically.  
- **Profile List**: Browse profiles with detailed information like name, description, and more.  
- **Search & Filter**: Find profiles quickly by name, location, or interests.  
- **Multiple View Modes**:  
  - Split View (Map + List)  
  - List View  
  - Map View  
- **Responsive Design**: Seamlessly works on desktop and mobile.  
- **Profile Details Modal**: Explore additional details in an intuitive modal.  
- **Real-time Updates**: Markers and list update dynamically as you navigate.  

---

## 🚀 Tech Stack  

- **Frontend Framework**: React with TypeScript.  
- **Styling**: Tailwind CSS for sleek and responsive design.  
- **Map Integration**: Leaflet for powerful, interactive mapping.  
- **Icons**: Lucide React for consistent, aesthetic icons.  
- **Database**: Supabase for storage and authentication.  
- **Deployment**: Netlify for hassle-free hosting.  

---
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
