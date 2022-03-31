import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import Home from "./pages/Home"
import Carta from "./pages/Carta"
import Locales from "./pages/Locales"
import Blogs from "./pages/Blogs"
import "./App.css";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Main />}>
          <Route index element={<Home />} />
          <Route path="cartainfo" element={<Carta />}/>
          <Route path="carta" element={<Carta />}/>
          <Route path="locales" element={<Locales />}/>
          <Route path="blog" element={<Blogs />}/>
        </Route>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
