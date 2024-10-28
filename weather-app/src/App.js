import './styles/styles.css';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<WeatherPage />} />
      </Routes>
    </Router>
  );
}

export default App;
