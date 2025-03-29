import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { create } from 'zustand';
import JobListings from './components/JobListings';
import JobDetails from './components/JobDetails';
import Dashboard from './components/Dashboard';
import Navbar from './components/Navbar';
import './index.css';

// Zustand Store for Theme (Now Persistent)
const useThemeStore = create((set) => ({
  darkMode: JSON.parse(localStorage.getItem('darkMode')) || false,
  toggleDarkMode: () => 
    set((state) => {
      const newMode = !state.darkMode;
      localStorage.setItem('darkMode', JSON.stringify(newMode));
      return { darkMode: newMode };
    }),
}));

function App() {
  const { darkMode } = useThemeStore();

  return (
    <div className={darkMode ? 'dark bg-gray-900 text-white' : 'bg-white text-black'}>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<JobListings />} />
          <Route path='/job/:id' element={<JobDetails />} />
          <Route path='/dashboard' element={<Dashboard />} />
          
        </Routes>
      </Router>
    </div>
  );
}

export default App;
