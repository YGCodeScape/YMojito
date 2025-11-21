import React from 'react'
import gsap from 'gsap'
import { cocktailLists, mockTailLists } from '../../constants'
import { useGSAP } from '@gsap/react'

const Cocktails = () => {
   useGSAP(() => {
    const parallaxTl = gsap.timeline({
      scrollTrigger: {
         trigger: '#cocktails',
         start: 'top 30%',
         end: 'bottom bottom',
         scrub: true
      }
    })
    parallaxTl
    .from('.cock-left-leaf', {
       x: -100,
       y: 100
    })
    .from('.cock-right-leaf', {
       x: 100,
       y: 100
    })
   })

  return (
    <section id="cocktails" className='cocktails-sec'>
      <img src="images/cocktail-left-leaf.png" alt="" className='cock-left-leaf '/>
      <img src="images/cocktail-right-leaf.png" alt="" className='cock-right-leaf' />

      <div className="list">
         <div className="popular space-y-4 ">
           <h2>Most popular cocktails:</h2>

           <ul className = 'space-y-4 '>
             {cocktailLists.map(({ name, country, detail, price }) => (
              <li key={name}>
                <div className=''>
                  <h3>{name}</h3>
                  <p>{country} | {detail}</p>
                </div>
                <span>-{price}</span>
              </li>
             ))}
           </ul>
         </div>
         <div className="loved space-y-4 ">
             <h2>Most Loved mocktails:</h2>

             <ul className = 'space-y-4 '>
               {mockTailLists.map(({ name, country, detail, price }) => (
                <li key={name}>
                   <div className=''>
                     <h3>{name}</h3>
                     <p>{country} | {detail}</p>
                   </div>
                    <span>-{price}</span>
                 </li>
               ))}
             </ul>
         </div>
      </div>
    </section>
  )
}

export default Cocktails