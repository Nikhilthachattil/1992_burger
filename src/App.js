import "./App.css";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import { CartProvider } from "react-use-cart";
import Header from "./components/Header";
import Home from "./components/Home";
import Offers from "./components/Offers";
import Contact from "./components/contact";
import Cart from "./components/Cart";
import Footer from "./components/footer";

function App() {
  return (
    <div className="App bg-dcream">
      <Router>
        <CartProvider>
          <Header />
          {/* <SideBar className="z-20" /> */}
          <div className="z-10 ">
            <Routes>
              <Route path="/" element={<Home />}></Route>
              <Route path="/Portfolio-NikhilReact" element={<Home />} />
              <Route path="/Skill" element={<Cart />}></Route>{" "}
              <Route path="/Profile" element={<Offers />}></Route>
              <Route path="/Contact" element={<Contact />}></Route>
            </Routes>
          </div>
          <Footer />
        </CartProvider>
      </Router>
    </div>
  );
}

export default App;
