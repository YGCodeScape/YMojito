import React, { useRef } from 'react'
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { SplitText } from 'gsap/all';
import { useMediaQuery } from 'react-responsive';

const Hero = () => {
    const videoRef = useRef();
    const isMobile = useMediaQuery({maxWidth: 767 })

    useGSAP(() => {
        const heroSplit = new SplitText('.title', {
            type: 'chars, words' 
        });
        const paragraphSplit = new SplitText('.subtitles', {
            type: 'lines'
        });

        heroSplit.chars.forEach((char) => char.classList.add('text-gradient'));
        gsap.from(heroSplit.chars, {
            yPercent: 100,
            delay: 0.4,
            duration: 0.7,
            ease: 'expo.out',
            stagger: 0.1,
            autoAlpha: 0
        });

        gsap.from(paragraphSplit.lines, {
            opacity: 0,
            yPercent: 100,
            duration: 1.8,
            ease: 'expo.out',
            stagger: 0.1,
            delay: 1.4
        })

        gsap.timeline({
            scrollTrigger: {
                trigger: '#hero',
                start: 'top top',
                end: 'bottom top',
                scrub: true,
                
            }
        })
        .to('.right-leaf', {y: 300 }, 0)
        .to('.left-leaf', {y : -300}, 0)


        const startValue = isMobile ? 'top 45%' : 'center 60%';
        const endValue = isMobile ? '70% top' : 'bottom top';

        // video animation timeline
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: 'video',
                start: startValue,
                end: endValue,
                scrub: 0.4,
                pin: true,
            }
        })

        videoRef.current.onloadedmetadata = () => {
            tl.to(videoRef.current, {
                currentTime: videoRef.current.duration
            })
        }
    }, []);

  return (
    <>
    <section id="hero" className=" absolute inset-0 size-full ">
        <h1 className="hero-text title">MOJITO</h1>
        <img src="/images/hero-left-leaf.png" alt="left-leaf" className='left-leaf '/>
        <img src="/images/hero-right-leaf.png" alt="right-leaf" className="right-leaf" />

        <div className="hero-body">
            <div className="content">
                <div className="sub-text">
                    <p className="max-w-xl">Cool. Crisp. Classic.</p>
                    <p className="subtitles">Sip the Spirit <br />of Summer </p>
                </div>
                
                <div className="subtitle">
                    <p className="subtitles">Every cocktail on our menu is a blend of premium ingredients,
                         creative flair, and timeless recipes designed to delight your senses.
                    </p>
                    <a href="#" className=' opacity-80 cursor-pointer '>View cocktails</a>
                </div>
            </div>
        </div>
    </section>

    <div className="video absolute inset-0">
        <video 
          ref={videoRef}
        src="/videos/output.mp4"
               muted
               playsInline
               preload='auto'
        />
    </div>
    </>
  )
}

export default Hero