import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";
import { BrowserRouter } from "react-router-dom";
import Contact from "./components/Contact/Contact";
import Skills from "./components/Skills/Skills";

const App = () => {
  return (
    <section id="skills">
      <div className="container">
        <BrowserRouter>
          <Header />
          <Hero />
          <div className="line"></div>
          <Skills />
          <div className="line"></div>
          <Main />
          <div className="line"></div>
          <Contact />
          <div className="line"></div>
          <Footer />
        </BrowserRouter>
      </div>
    </section>
  );
};

export default App;
