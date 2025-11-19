import React from 'react'

const Menu = () => {
  return (
    <section id="menu" aria-labelledby='menu-heading' className="radial-gradient h-screen px-5 py-20">
        <img src="/images/slider-left-leaf.png" alt="" id='m-left-leaf' className="w-1/5"/>
        <img src="/images/slider-right-leaf.png" alt="" id='m-right-leaf' className="w-1/6"/>

        <h2 id="menu-heading" className="sr-only">Cocktail Menu</h2>

        
    </section>
  )
}

export default Menu