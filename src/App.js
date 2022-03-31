import './App.css';
import './styles/sass/Header.scss'
import Footer from "./components/Footer";
import Navigation from "./components/Navigation"
import Carousel from "./components/Carousel"
import { Routes, Route } from 'react-router-dom'

function App() {
  const credits = {
    author: 'Developer-team',
    currentYear: new Date().getFullYear()
  };
  return (
    <>
      <header className='header'>
        <Navigation/>
      </header>
      <main>
        <Routes>
            <Route path="/" element={<Carousel/>}/>
            <Route path="/cartainfo" element={<Carousel/>}/>
            <Route path="/blog"/>
            <Route path="/locales"/>
        </Routes>
      </main>
      <Footer credits={credits}/>
    </>
  );
}

export default App;