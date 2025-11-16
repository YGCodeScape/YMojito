import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { SplitText } from 'gsap/all'
import React from 'react'

const About = () => {
    useGSAP(() => {
        const titleSplit = SplitText.create('#about h2', {
            type: 'words'
        })

        const scrollTimeLine = gsap.timeline({
            scrollTrigger: {
                trigger: '#about',
                start: 'top center'
            }
        })

        scrollTimeLine.from(titleSplit.words, {
            opacity: 0,
            duration: 1,
            yPercent: 100,
            ease: 'expo.out',
            stagger: 0.02
        })
        .from('.top-grid div, .bottom-grid div', {
            opacity: 0,
            duration: 1,
            ease: 'power1.inOut',
            stagger: 0.04,
        }, '-=0.5')
    })

  return (
    <div id='about' className="container">
        <div className='mb-12'>
             <div className="content">
                 <div className="first-content">
                     <p className="badge">Best Cocktails</p>
                     <h2>Where every details <br /> matters -from muddle<br /> to garnish</h2>
                 </div>
                 <div className="sub-content w-1/3">
                        <p>Every cocktail we serve is a reflection of our obsession with detail from the first muddle to the final garnish.
                            That care is what turns a simple drink into something truly memorable
                        </p>
                        <div className="rating-d" >
                            <p><span>4.5 /</span> 5</p>
                            <p>More than +12000 customers</p>
                        </div>
                 </div>
             </div>
        </div>

        <div className="top-grid">
             <div className="ab-i-holder ">
                <div className="noicy-img"></div>
                 <img src="/images/abt1.png" alt="" className='ab-img'/>
             </div>
             <div className="ab-i-holder">
                <div className="noicy-img"></div>
                 <img src="/images/abt5.png" alt="" className='ab-img'/>
             </div>
             <div className="ab-i-holder">
                <div className="noicy-img"></div>
                 <img src="/images/abt2.png" alt="" className='ab-img'/>
             </div>
        </div>
        <div className="bottom-grid">
            <div className="ab-i-holder">
                <div className="noicy-img"></div>
                <img src="/images/abt3.png" alt="" className='ab-img'/>
            </div>
            <div className="ab-i-holder">
                <div className="noicy-img"></div>
                <img src="/images/abt4.png" alt="" className='ab-img'/>
            </div>    
        </div>
    </div>
  )
}

export default About