import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/landing-page/LandingPage";
import Solutions from "./pages/solutions/Solutions";
import ContactUs from "./pages/contact-us/ContactUs";
import Header from "./components/Header";
import Servicepage from "./pages/services/Servicepage";
import BookDemo from "./pages/book-demo/BookDemo";


function App() {
  return (
    <Router>
      <div className="font-sans">
        <Header />
        {/* Push content below the fixed header */}
        <main className="pt-14 md:pt-20">
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/solutions" element={<Solutions />} />
            <Route path="/contact-us" element={<ContactUs />} />
            <Route path="/services" element={<Servicepage />} />
            <Route path="/book-demo" element={<BookDemo />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
