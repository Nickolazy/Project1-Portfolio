import { useRef } from "react"
import Navbar from "./components/Navbar"
import Main from "./components/Main"
import About from "./components/About"
import Form from "./components/Form"

function App() {
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const formRef = useRef(null);
  const formRefSubmit = useRef(null);

  const scrollToSection = (ref) => {
    ref.current.scrollIntoView({ behavior: 'smooth'});
  };

  const scrollToForm = () => {
    formRefSubmit.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
  };

  return (
    <div>
      <Navbar
        scrollToHome={() => scrollToSection(homeRef)}
        scrollToAbout={() => scrollToSection(aboutRef)}
        scrollToForm={() => scrollToSection(formRef)}
      />
      <div ref={homeRef}>
        <Main scrollToForm={scrollToForm}/>
      </div>
      <div ref={aboutRef}>
      <About scrollToForm={scrollToForm}/>
      </div>
      <div ref={formRef}>
      <Form ref={formRefSubmit}
        scrollToForm={scrollToForm}/>
      </div>
    </div>
  )
}

export default App
