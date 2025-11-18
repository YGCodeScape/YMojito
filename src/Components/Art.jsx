import React, { useRef } from 'react'
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

 gsap.registerPlugin(ScrollTrigger);

const Art = () => {
  const artRef = useRef(null);
  const wrapperRef = useRef(null);

  useGSAP(() => {
    const art = artRef.current;
    const wrapper = wrapperRef.current;

    gsap.fromTo( art,
      {
        width: 0,
        height: 0,
        borderRadius: "0px",
      },
      {
        width: "100%",
        height: "100vh",
        borderRadius: "20px",
        ease: "power2.out",
        scrollTrigger: {
          trigger: wrapper,
          start: "top center",
          end: "bottom center",
          scrub: 4,
        }
      }
    );
  }, []);

  return (
    <div id='work' ref={wrapperRef} >
        <div className="art-sec">
             <img src="/public/images/drink4.png" alt=""  className='art-left-img'/>
             <div ref={artRef} className="art-img"></div>
             <img src="/public/images/cup-2.png" alt="" className='art-right-img'/>
        </div>
        <div className="art-text">
            <h2>Made with Craft Poured with Passion</h2>
            <p>This isn't just a drink. it's a crafted moment made just for you.</p>
        </div>
    </div>
  )
}

export default Art