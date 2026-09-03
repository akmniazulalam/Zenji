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
          <Route path="*" element={<Error />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
