import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import LandingPage from './Pages/LandingPage';
import OtherPage from './components/OtherPage';
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
            <Route path="/other" element={<OtherPage/>} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
