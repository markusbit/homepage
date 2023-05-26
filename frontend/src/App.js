import './App.css';
import './style.css';
import Navbar from './components/Navbar';
import "bootstrap/dist/css/bootstrap.min.css";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate
} from "react-router-dom";

import Home from './pages/Home/Home';

import About from './pages/About/About';
import Contact from './pages/Contact/Contact';
import Projects from './pages/Projects/Projects';
import NoPage from './pages/NoPage';

import CustomParticles from './components/Particles';
import { createContext, useState } from 'react';
import Footer from './components/Footer';

import { useEffect } from 'react';
import Preloader from './components/Preloader';
import ScrollToTop from './components/ScrollToTop';
import Login from './pages/Login/Login';
import Contacts from './pages/Contacts/Contacts';
import Messages from './pages/Messages/Messages';
import ProtectedRoute from './components/ProtectedRoute';

export const ThemeContext = createContext(null);

function App() {
  const [load, upadateLoad] = useState(true);
  const [quote, updateQuote] = useState({});

  const getQuote = async (title) => {
    const response = await fetch(`https://type.fit/api/quotes`);
    const data = await response.json();
    const quote = generateRandomQuote(data);
    updateQuote(quote);
  };

  const generateRandomQuote = (data) => {
    const quote = data[Math.round(Math.random() * data.length)];
    if (quote.text.length > 100) {
      console.log(quote);
      return generateRandomQuote(data);
    }
    return quote;
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      upadateLoad(false);
    }, 1200);
    getQuote();
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    window.addEventListener("beforeunload", () => {
      sessionStorage.removeItem('animationPlayed')
      sessionStorage.removeItem('textAnimationPlayed')
    });
  }, []);

  return (
    <div className="App">
      <Preloader load={load} />
      <CustomParticles />
      <Navbar />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home loading={load} />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/contacts" element={<ProtectedRoute element={<Contacts />} />} />
        <Route path="/messages" element={<ProtectedRoute element={<Messages />} />} />
        <Route path="*" element={<NoPage />} />
      </Routes>
      <Footer quote={quote} />
    </div>
  );
}

export default App;
