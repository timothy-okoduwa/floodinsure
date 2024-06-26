import './App.css';
import NavBar from './components/NavBar';
import Home from './pages/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import Hero from './pages/Hero';
function App() {
  return (
    <BrowserRouter>
      {' '}
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/hero" element={<Hero />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
