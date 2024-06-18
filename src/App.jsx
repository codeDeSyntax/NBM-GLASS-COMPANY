import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import LandingPage from './Pages/LandingPage';
// import OtherPage from './components/OtherPage';


import ProjectGallery from './components/ProjectsGallery';
const App = () => {
  return (
    <Router>
      <div
        className=""
      >
        <Navbar />
        <div className="">
          <Routes>
            <Route exact path="/" element={<LandingPage/>} />
            <Route path="/projects" element={<ProjectGallery/>} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
    // <ProductGallery/>
  );
};

export default App;
