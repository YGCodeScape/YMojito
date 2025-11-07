import React from 'react';
import gsap from "gsap";
import { ScrollTrigger, SplitText } from "gsap/all";

gsap.registerPlugin(ScrollTrigger, SplitText);

const App = () => {
  return (
    <div>App
      <h1 className="text-3xl text-red-500">hello from TAILWIND</h1>
    </div>
  )
}

export default App