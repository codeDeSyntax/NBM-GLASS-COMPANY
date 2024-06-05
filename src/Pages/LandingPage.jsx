// import Navbar from "../components/Navbar"
// import NavContact from "../components/NavContact"
import FixedImage from "../components/LandingImage";
import LoginPage from "../components/LoginPage";
import Tabs from "../components/Tab";
const LandingPage = () => {
  return (
    <div className="bg-background">
      {/* <Navbar/> */}
      <FixedImage />
      <Tabs />
      <LoginPage />
    </div>
  );
};

export default LandingPage;
