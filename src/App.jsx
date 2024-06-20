import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import LandingPage from './Pages/LandingPage';
import Contact from './Pages/ContactPage';
// import OtherPage from './components/OtherPage';


import ProjectGallery from './components/ProjectsGallery';
import ScrollToTop from './components/ScrollTop';
import AboutUsPage from './Pages/About';
const App = () => {
  return (
    <Router>
      <ScrollToTop/>
      <div
        className=""
      >
        <Navbar />
        <div className="">
          <Routes>
            <Route exact path="/" element={<LandingPage/>} />
            <Route path="/projects" element={<ProjectGallery/>} />
            <Route path="/Contact" element={<Contact/>} />
            <Route path="/about" element={<AboutUsPage/>} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
    // <ProductGallery/>
  );
};

export default App;
