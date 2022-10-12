import './App.css';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import FilmsContainer from './components/FilmsContainer';
import FilmDetails from './components/FilmDetails';
import { Routes, Route } from 'react-router-dom';
import News from './components/News';
import About from './components/About';
import Contact from './components/Contact';

function App() {
  return (
    <div className="App">
      <Navigation />
      <Routes>
        <Route path="/" element={<FilmsContainer />}></Route>
        <Route path="/details/:id" element={<FilmDetails />}></Route>
        <Route path="/news" element={<News />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
