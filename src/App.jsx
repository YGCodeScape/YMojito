import React from 'react';
import gsap from "gsap";
import { ScrollTrigger, SplitText } from "gsap/all";
import Navbar from './Components/Navbar';

gsap.registerPlugin(ScrollTrigger, SplitText);

const App = () => {
  return (
    <main>
      <Navbar />
      <div className= "w-full h-[200vh] bg-white/30" ></div>
    </main>
  )
}

export default App