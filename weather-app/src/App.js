import './styles/styles.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import WeatherPage from './pages/weatherPage';
import SearchPage from './pages/searchPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SearchPage />} />
        <Route path="/weather/:location" element={<WeatherPage />} />
      </Routes>
    </Router>
  );
}

export default App;
