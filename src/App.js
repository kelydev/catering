import './App.css';
import './styles/sass/Header.scss'
import Footer from "./components/Footer";
import Navigation from "./components/Navigation"
import Carousel from "./components/Carousel"

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
      <main className='slider'>
        <div>
          <Carousel />
        </div>
      </main>
      <Footer
        credits={credits}
      /> 
    </>
  );
}

export default App;