import './App.scss';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Register from './pages/Register'
import Login from './pages/Login'
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Register />} />
          <Route path="/Login" element={<Login/>} />
        </Routes>

      </Router>

    </div>
  );
}

export default App;
