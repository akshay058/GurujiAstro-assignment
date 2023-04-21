import "./App.css";
import Astrologers from "./components/Astrologers";
import Banner from "./components/Banner";
import FooterComp from "./components/FooterComp";
import HamNavbar from "./components/HamNavbar";
import Header from "./components/Header";
import RouterPath from "./components/RouterPath";
import UserTestimonial from "./components/UserTestimonial";

function App() {
  return (
    <div className="App d-flex flex-column">
      <div>
        <Header />
      </div>
      <div>
        <HamNavbar />
      </div>
      <div>
        <UserTestimonial />
      </div>
      <div>
        <Banner />
      </div>
      <div>
        <Astrologers />
      </div>
      <div>
        <FooterComp />
      </div>
      {/* </RouterPath> */}
    </div>
  );
}

export default App;
