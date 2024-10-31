import './styles/styles.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import WeatherPage from './pages/weatherPage';
import SearchPage from './pages/searchPage';
import { FavouritesProvider } from './context/FavouritesContext';
import { ThemeProvider } from './context/ThemeContext';

function App() {
  return (
    <ThemeProvider>
      <FavouritesProvider>
        <Router>
          <Routes>
            <Route path="/" element={<SearchPage />} />
            <Route path="/weather/:location" element={<WeatherPage />} />
          </Routes>
        </Router>
      </FavouritesProvider>
    </ThemeProvider>
  );
}

export default App;
