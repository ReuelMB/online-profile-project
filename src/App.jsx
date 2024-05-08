import { useRef } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { NavigationBar } from "./Components";
import {
  HeroBanner,
  About,
  Expirience,
  Portfolio,
  Testimonials,
  ContactMe,
  Footer,
} from "./Sections";

function App() {
  const heroBannerRef = useRef();
  const aboutRef = useRef();
  const expirienceRef = useRef();
  const portfolioRef = useRef();
  const testimonialsRef = useRef();
  const contactMeRef = useRef();

  const navLinks = [
    { id: 1, href: "#home", ref: heroBannerRef, label: "Home" },
    { id: 2, href: "#about", ref: aboutRef, label: "About" },
    { id: 3, href: "#expirience", ref: expirienceRef, label: "Expirience" },
    { id: 4, href: "#portfolio", ref: portfolioRef, label: "Portfolio" },
    {
      id: 5,
      href: "#testimonials",
      ref: testimonialsRef,
      label: "Testimonials",
    },
    {
      id: 6,
      href: "#contactMe",
      ref: contactMeRef,
      label: "Contact Me",
    },
  ];

  return (
    <>
      <NavigationBar navLinks={navLinks} />
      <section
        id="home"
        ref={heroBannerRef}
        className="h-dvh bg-gradient-to-r from-blue-500 to-gray-100"
      >
        <HeroBanner />
      </section>
      <section id="about" ref={aboutRef}>
        <About />
      </section>
      <section id="expirience" ref={expirienceRef} className="bg-gray-100">
        <Expirience />
      </section>
      <section id="portfolio" ref={portfolioRef}>
        <Portfolio />
      </section>
      <section id="testimonials" ref={testimonialsRef} className="bg-gray-100">
        <Testimonials />
      </section>
      <section id="contactMe" ref={contactMeRef} className="md:hidden">
        <ContactMe />
      </section>
      <section className="bg-black">
        <Footer />
      </section>
      <ToastContainer />
    </>
  );
}

export default App;
