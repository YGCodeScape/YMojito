import React from 'react';
import gsap from "gsap";
import { ScrollTrigger, SplitText } from "gsap/all";
import Navbar from './Components/Navbar';
import Hero from './Components/Hero';
import Cocktails from './Components/Cocktails';
import CustomCursor from './Components/CustomCursor';
import About from './Components/About';
import TheArt from './Components/TheArt';

gsap.registerPlugin(ScrollTrigger, SplitText);

const App = () => {
  return (
    <main>
      <CustomCursor />
      <Navbar />
      <Hero />
      <Cocktails />
      <About />
      <TheArt />
      {/* <div className="w-full h-screen bg-red-800"></div> */}
    </main>
  )
}

export default App