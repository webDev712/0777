import Technologies from './components/Blocks/Technologies';
import LetsAutomate from './components/Blocks/LetsAutomate';
import CaseStudies from './components/Blocks/CaseStudies';
import ContactForm from './components/Blocks/ContactForm';
import TrustedBy from './components/Small/TrustedBy';
import Services from './components/Blocks/Services';
import AboutUs from './components/Blocks/AboutUs';
import FromTo from './components/Blocks/FromTo';
import { ToastContainer } from "react-toastify";
import WhyUS from './components/Blocks/WhyUS';
import Hero from './components/Blocks/Hero';
import Team from './components/Blocks/Team';
import { useEffect } from 'react';
import './mobile.css';
import './App.css';
import Notice from './components/Blocks/Notice';

function App() {
  useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("show");
                }
            });
        });

        const sections = document.querySelectorAll(".App > div");
        sections.forEach((el) => observer.observe(el));

        return () => observer.disconnect();
    }, []);
  return (
    <div className="App">
      <ToastContainer position="top-right" autoClose={5000} hideProgressBar={false} newestOnTop closeOnClick pauseOnHover draggable theme="light" />
      <Hero />
      <TrustedBy />
      <AboutUs />
      <Services />
      <Team />
      <FromTo />
      <CaseStudies />
      <Technologies />
      <WhyUS />
      <LetsAutomate />
      <ContactForm />
      <Notice />
    </div>
  );
}

export default App;
