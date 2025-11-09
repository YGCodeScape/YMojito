import React from 'react'

const Hero = () => {
  return (
    <>
    <section id="hero" className=" absolute inset-0 size-full ">
        <h1 className="hero-text">MOJITO</h1>
        <img src="/public/images/hero-left-leaf.png" alt="left-leaf" className='left-leaf '/>
        <img src="/public/images/hero-right-leaf.png" alt="right-leaf" className="right-leaf" />
    </section>
    </>
  )
}

export default Hero