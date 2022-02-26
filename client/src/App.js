import Header from "./Components/Header/Header"
import Home from "./Components/Home/Home"
import About from "./Components/About/About"
import Services from "./Components/Services/Services"
import Testimonials from "./Components/Testimonials/Testimonials"
import Works from "./Components/Works/Works"
import Contact from "./Components/Contact/Contact"
import Footer from "./Components/Footer/Footer"

const App = () => {
  return (
    <div className="app">
      <Header />
      <Home />
      <About />
      <Services />
      <Testimonials />
      <Works />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
