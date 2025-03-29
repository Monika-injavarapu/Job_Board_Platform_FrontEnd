import { Link } from 'react-router-dom';
import useThemeStore from '../store/themeStore';

function Navbar() {
  const { darkMode, toggleDarkMode } = useThemeStore();

  return (
    <nav className="p-4 bg-gray-200 dark:bg-gray-800 flex justify-between items-center">
      <div className="text-lg font-bold">
        <Link to="/" className="text-blue-600 dark:text-blue-400">Job Portal</Link>
      </div>
      <div className="space-x-4">
        <Link to="/dashboard" className="text-blue-600 dark:text-blue-400">Jobs Dashboard</Link>
        <button
          onClick={toggleDarkMode}
          className="px-3 py-1 bg-black text-white dark:bg-white dark:text-black rounded"
        >
          {darkMode ? "Light Mode" : "Dark Mode"}
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
