import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import Home from "./pages/Home"
import Carta from "./pages/Carta"
import Locales from "./pages/Locales"
import Blogs from "./pages/Blogs"
import TerminosCondiciones from "./pages/Terminos-Condiciones"
import NotFound from "./pages/NotFound"
import LogIn from "./pages/LogIn"
import SignUp from "./pages/SignUp"
import "./App.css";
import { Routes, Route } from "react-router-dom";
import {firebaseConfig} from "./firebase";

firebaseConfig();
function App() {
  
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Main />}>
          <Route index element={<Home />} />
          <Route path="cartainfo" element={<Carta />}/>
          <Route path="carta" element={<Carta />}/>
          <Route path="carta/:type" element={<Carta />}/>
          <Route path="carta/:type/:id" element={<Home />}/>
          <Route path="locales" element={<Locales />}/>
          <Route path="blog" element={<Blogs />}/>
          <Route path="terminos-condiciones" element={<TerminosCondiciones />}/>
          <Route path="login" element={<LogIn />}/>
          <Route path="sigup" element={<SignUp />}/>
          <Route path="*" element={<NotFound />}/>
        </Route>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
