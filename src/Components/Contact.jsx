import React from 'react'
import { openingHours, socials } from '../../constants'
import { useGSAP } from '@gsap/react'
import { SplitText } from 'gsap/all'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const Contact = () => {

    useGSAP(() => {
        const titleSplit = SplitText.create('#contact h2', {
            type: 'words'
        });

        const timeline = gsap.timeline({
            scrollTrigger:  {
                trigger: '#contact',
                start: 'top center',
            },
            ease: "power1.inOut"
        })

        timeline.from(titleSplit.words, {
            opacity: 0,
            yPercent: 100,
            stagger: 0.2
        })
        .from('#contact h3, #contact p', {
            opacity: 0,
            yPercent: 100,
            stagger: 0.02
        })
    })

  return (
    <div id="contact" className="radial-gradient">
        <img src="/images/footer-right-leaf.png" alt="" id="f-right-leaf"/>
        <img src="/images/footer-left-leaf.png" alt="" id="f-left-leaf"/>

        <div className="f-content container relative ">
             <h2>Where to Find Us</h2>

             <div>
                <h3>Visit Our Bar</h3>
                <p>345, Ret, Blod, $4033, London CA 60604</p>
             </div>

             <div>
                <h3>Contact Us</h3>
                <p>(555) 754-3452</p>
                <p>contactymojito@gmil.com</p>
             </div>

             <div>
                 <h3>Open Every Day</h3>
                 {openingHours.map((time) => (
                    <p key={time.day}>
                        {time.day}: {time.time}
                    </p>
                 ))}
             </div>
            
              <h5>Socials</h5>
             <div className="social">
                 {socials.map((social) => (
                    <a className="" key={social.name} href={social.url} target="._blank" rel="noopener noreferrer">
                        <img src={social.icon} alt="" />
                    </a>
                 ))}
             </div>
        </div>
    </div>
  )
}

export default Contact