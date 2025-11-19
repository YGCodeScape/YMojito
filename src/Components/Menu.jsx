import React, { use, useState } from 'react'
import { allCocktails } from '../../constants'

const Menu = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <section id="menu" aria-labelledby='menu-heading' className="radial-gradient h-screen px-5 py-20">
        <img src="/images/slider-left-leaf.png" alt="" id='m-left-leaf' className="w-1/5"/>
        <img src="/images/slider-right-leaf.png" alt="" id='m-right-leaf' className="w-1/6"/>

        <h2 id="menu-heading" className="sr-only">Cocktail Menu</h2>

        <div className='cocktail-tabs' aria-label='Cocktail-Navigation'>
            {allCocktails.map((cocktail, index) => {
                 const isActive = index === currentIndex;

                 return (
                    <button className="Cock-btn" key={cocktail.id}>
                        {cocktail.name}
                    </button>
                 )
            })}
        </div>
    </section>
  )
}

export default Menu