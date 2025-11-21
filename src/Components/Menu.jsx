import React, { useRef, useState } from 'react'
import { allCocktails } from '../../constants'
import { useGSAP } from '@gsap/react';
import gsap from 'gsap'

const Menu = () => {
    const contentRef = useRef(); 
    const [currentIndex, setCurrentIndex] = useState(0);

    useGSAP(() => {
      gsap.fromTo('#title', {
        opacity: 0,
      },
      {
        opacity: 1,
        duration: 1
      });

      gsap.fromTo('.cocktail-box img', {
         opacity: 0,
         xPercent: -60  
      },
       {
         opacity: 1,
         xPercent: 0,
         duration: 1,
         ease: 'power1.inOut'
      });
      gsap.fromTo('.details h2', {
        yPercent: 100,
        opacity: 0
      }, {
        yPercent: 0,
        opacity: 100,
        ease: 'power1.inOut'
      });
      gsap.fromTo('.details p', {
        yPercent: 100,
        opacity: 0
      }, {
        yPercent: 0,
        opacity: 100,
        ease: 'power1.inOut'
      });
    }, [currentIndex]); 

    const totalCocktails = allCocktails.length;
    const goToSlide = (index) => {
        const newIndex = (index + totalCocktails) % totalCocktails;

        setCurrentIndex(newIndex);
    }

    const getCocktailAt = (indexOffset) => {
      return allCocktails[(currentIndex + indexOffset + totalCocktails) % totalCocktails];
    }

    const currentCocktail = getCocktailAt(0);
    const prevCocktail = getCocktailAt(-1);
    const nextCocktail = getCocktailAt(+1);

  return (
    <section id="menu" aria-labelledby='menu-heading' className=" h-screen px-5 py-20 radial-gradient ">
        <img src="/images/slider-left-leaf.png" alt="" id='m-left-leaf' className="w-1/7"/>
        <img src="/images/slider-right-leaf.png" alt="" id='m-right-leaf' className="w-1/7"/>

        <h2 id="menu-heading" className="sr-only">Cocktail Menu</h2>

        <div className='cocktail-tabs' aria-label='Cocktail-Navigation'>
            {allCocktails.map((cocktail, index) => {
                 const isActive = index === currentIndex;

                 return (
                    <button id="cock-btn" key={cocktail.id} className={
                         `${isActive ? 'text-[#ffc6fd] border-b-2 ' : 'text-white/50 border-none'}`
                         } onClick={() => goToSlide(index)} >
                        {cocktail.name}
                    </button>
                 )
            })}
        </div>

        <div className="menu-content container mx-auto">
           <div className="arrow">
             <button className="arrow-btn max-w-36 " onClick={() => goToSlide(currentIndex - 1)}>
               <span>{prevCocktail.name}</span>
               <img src="/images/right-arrow.png" alt="Previous" aria-hidden="true" className="arrow-img" />
             </button>

             <button className="arrow-btn max-w-36" onClick={() => goToSlide(currentIndex + 1)}>
               <span>{nextCocktail.name}</span>
               <img src="/images/left-arrow.png" alt="Next" aria-hidden="true" className="arrow-img" />
             </button>
           </div>

           <div className="cocktail-box flex-center">
              <img src={currentCocktail.image} alt="" className="object-contain h-[80vh]" />
           </div>

          <div className="cocktail-info container mx-auto">
             <div className="cock-info-div" ref={contentRef}>
                 <h5>Recipes for:</h5>
                 <p id ="title">{currentCocktail.name}</p>
             </div>

             <div className="details w-1/3">
                <h2>{currentCocktail.title}</h2>
                <p>{currentCocktail.description}</p>
             </div>
          </div>

        </div>
    </section>
  )
}

export default Menu