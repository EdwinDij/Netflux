import './App.scss';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Register from './pages/Register'
import Login from './pages/Login'
import Loader from './pages/Loader';
import MainPage from './pages/MainPage';
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Register />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/loader" element={<Loader />} />
          <Route path ="/main" element={<MainPage />} />
        </Routes>

      </Router>

    </div>
  );
}

export default App;
