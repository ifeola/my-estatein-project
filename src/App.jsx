import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./assets/pages/Layout";
import Home from "./assets/pages/Home";
import About from "./assets/pages/About";
import Properties from "./assets/pages/Properties";
import Services from "./assets/pages/Services";
import Contact from "./assets/pages/Contact";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index path="/" element={<Home />} />
            <Route index path="/about" element={<About />} />
            <Route index path="/properties" element={<Properties />} />
            <Route index path="/services" element={<Services />} />
            <Route index path="/contact" element={<Contact />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
