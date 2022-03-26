import './App.css';
import Footer from "./components/Footer";

function App() {
  const credits = {
    author: 'Developer-team',
    currentYear: new Date().getFullYear()
  };
  return (
    <>
      <header className='header'> Hello World</header>
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