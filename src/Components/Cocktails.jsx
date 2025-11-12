import React from 'react'
import { cocktailLists, mockTailLists } from '../../constants'

const Cocktails = () => {
  return (
    <section id="cocktails" className='cocktails-sec'>
            <img src="/public/images/cocktail-left-leaf.png" alt="" className='cock-left-leaf '/>
      <img src="/public/images/cocktail-right-leaf.png" alt="" className='cock-right-leaf' />

      <div className="list">
         <div className="popular space-y-8 ">
           <h2>Most popular cocktails:</h2>

           <ul>
             {cocktailLists.map(({ name, country, detail, price }) => (
              <li ley={name}>
                <div className=''>
                  <h3>{name}</h3>
                  <p>{country} | {detail}</p>
                </div>
                <span>-{price}</span>
              </li>
             ))}
           </ul>
         </div>
         <div className="loved space-y-8">
             <h2>Most Loved mocktails:</h2>

             <ul>
               {mockTailLists.map(({ name, country, detail, price }) => (
                <li ley={name}>
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