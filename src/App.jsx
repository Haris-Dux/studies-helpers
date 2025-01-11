import { useRef } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import TawkMessengerReact from "@tawk.to/tawk-messenger-react";
import { Toaster } from "react-hot-toast";

// Internal modules/components
import ScrollToTop from "./utils/helpers/scroll-to-top";

// Pages
import HomePage from "./pages/home/HomePage";
import Contact from "./pages/contact/Contact";
import About from "./pages/about/About";
import Samples from "./pages/samples/Samples";
import Exams from "./pages/services/Exams";
import Assignments from "./pages/services/Assignments";
import OnlineClasses from "./pages/services/OnlineClasses";
import DoMyClass from "./pages/services/DoMyClass";
import ExamsHelp from "./pages/services/ExamsHelp";
import PrivacyPolicy from "./pages/privacyPolicy/PrivacyPolicy";

// Components
import Footer from "./components/Footer";
import NotFound from "./components/NotFound";
import Header from "./components/Header";
import WhatsappButton from "./components/whatsappButton";

// Styles
import "./App.css";
import HelpWithClasses from "./pages/services/HelpWithClasses";
import HelpWithExams from "./pages/services/HelpWithExams";
import HelpWithCourse from "./pages/services/HelpWithCourse";


function App() {
  const tawkMessengerRef = useRef();

  const handleMinimize = () => {
    tawkMessengerRef.current.minimize();
  };

  const onLoad = () => {
    // console.log('onLoad works!');
  };


  return (
    <>
      <BrowserRouter>
        <ScrollToTop />
        <TawkMessengerReact
          propertyId="677ac9e049e2fd8dfe02db93"
          widgetId="default"
          ref={tawkMessengerRef}
          onLoad={onLoad}
        />

        <Header />
        <Routes>
          <Route path="*" element={<NotFound />} />
          <Route path="/" element={<HomePage />} />
          <Route path="/samples" element={<Samples />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />

          {/* SERVICES */}
          <Route path="/help-with-course" element={<HelpWithCourse />} />
          <Route path="/help-with-class" element={<HelpWithClasses />} />
          <Route path="/help-with-exam" element={<HelpWithExams />} />
          <Route path="/assignments" element={<Assignments />} />
        </Routes>

        <WhatsappButton />

        <Footer />
        <Toaster />
      </BrowserRouter>
    </>
  );
}

export default App;
