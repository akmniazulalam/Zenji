import { Link, Route, Routes } from "react-router-dom";
import "./App.css";
import Cursor from "./components/Cursor";
import Home from "./pages/Home";
import MainLayout from "./layouts/MainLayout";
import Error from "./pages/Error";
import Drop from "./pages/Drop";
import Collection from "./pages/Collection";
import Lookbook from "./pages/Lookbook";
import OurStory from "./pages/OurStory";
import Collaboration from "./pages/Collaboration";
import Review from "./pages/Review";
import Faq from "./pages/Faq";
import Login from "./pages/Login";
import Wishlist from "./pages/Wishlist";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import Terms from "./pages/Terms";
import ReturnPolicy from "./pages/ReturnPolicy";
import Contact from "./pages/Contact";

function App() {

  return (
    <>
      <Cursor />
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="/drop" element={<Drop />} />
          <Route path="/collection" element={<Collection />} />
          <Route path="/lookbook" element={<Lookbook />} />
          <Route path="/our-story" element={<OurStory />} />
          <Route path="/collaboration" element={<Collaboration />} />
          <Route path="/review" element={<Review />} />
          <Route path="/faq" element={<Faq />} />
          <Route path="/login" element={<Login />} />
          <Route path="/wishlist" element={<Wishlist />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/return-policy" element={<ReturnPolicy />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Error />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
