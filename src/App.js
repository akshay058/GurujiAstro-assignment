import "./App.css";
import Astrologers from "./components/Astrologers";
import HamNavbar from "./components/HamNavbar";
import Header from "./components/Header";
import UserTestimonial from "./components/UserTestimonial";

function App() {
  return (
    <div className="App">
      <div>
        <Header />
      </div>
      <div>
        <UserTestimonial />
      </div>
      <div>
        <Astrologers />
      </div>
    </div>
  );
}

export default App;
