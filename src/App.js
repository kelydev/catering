import './App.css';
import './styles/sass/_header.scss'
import Footer from "./components/Footer";
import Navigation from "./components/Navigation"
import Carousel from "./components/Carousel"
import Carta from "./pages/Carta"
import Blog from "./pages/Blog"
import Local from "./pages/Local"
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
            <Route path="/cartainfo" element={<Carta/>}/>
            <Route path="/blog" element={<Blog/>}/>
            <Route path="/locales" element={<Local/>}/>
        </Routes>
      </main>
      <Footer credits={credits}/>
    </>
  );
}

export default App;