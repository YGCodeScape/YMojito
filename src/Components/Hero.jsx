import React from 'react'

const Hero = () => {
  return (
    <>
    <section id="hero" className=" absolute inset-0 size-full ">
        <h1 className="hero-text">MOJITO</h1>
        <img src="/public/images/hero-left-leaf.png" alt="left-leaf" className='left-leaf '/>
        <img src="/public/images/hero-right-leaf.png" alt="right-leaf" className="right-leaf" />

        <div className="hero-body">
            <div className="content">
                <div className="sub-text">
                    <p className="max-w-xl">Cool. Crisp. Classic.</p>
                    <p>Sip the Spirit <br />of Summer </p>
                </div>
                
                <div className="subtitle">
                    <p className="">Every cocktail on our menu is a blend of premium ingredients,
                         creative flair, and timeless recipes designed to delight your senses.
                    </p>
                    <a href="#">View cocktails</a>
                </div>
            </div>
        </div>
    </section>
    </>
  )
}

export default Hero