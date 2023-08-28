import "./styles.css";
import About from "./About";
import Skills from "./Skills";
import Hero from "./Hero";

export default function App() {
  return(
    <>
    <div className="contact-info">
    <Hero/>
    <Skills/>
    <About/>
    </div>
    </>
  )
}
