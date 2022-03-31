import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import Home from "./pages/Home"
import Carta from "./pages/Carta"
import Locales from "./pages/Locales"
import Blogs from "./pages/Blogs"
import NotFound from "./pages/NotFound"
import LogIn from "./pages/LogIn"
import SignUp from "./pages/SignUp"
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
