import './App.css';
import './styles/sass/Header.scss'
import Footer from "./components/Footer";
import Navigation from "./components/Navigation"

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
          <p>Slider</p>
        </div>
      </main>
      <Footer
        credits={credits}
      /> 
    </>
  );
}

export default App;