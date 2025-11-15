import React from 'react'

const About = () => {
  return (
    <div>
        <div id='about'>
            <div className='mb-12 px-5'>
                <div className="content">
                    <div className="first-content">
                        <p className="badge">Best Cocktails</p>
                        <h2>Where every details matters -from <br /> muddle to garnish</h2>
                    </div>
                    <div className="sub-content">
                        <p>Every cocktail we serve is a reflection of our obsession with detail from the first muddle to the final garnish.
                            That care is what turns a simple drink into something truly memorable
                        </p>
                        <div>
                            <p className=""><span>4.5</span>/5</p>
                            <p className="text-sm">More than +12000 customers</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="top-grid">
             <div className="ab-i-holder">
                 <img src="/images/abt1.png" alt="" />
             </div>
             <div className="ab-i-holder">
                 <img src="/images/abt5.png" alt="" />
             </div>
             <div className="ab-i-holder">
                 <img src="/images/abt2.png" alt="" />
             </div>
        </div>
        <div className="bottom-grid">
            <div className="ab-i-holder">
                <img src="/images/abt3.png" alt="" />
            </div>
            <div className="ab-i-holder">
                <img src="/images/abt4.png" alt="" />
            </div>    
        </div>
    </div>
  )
}

export default About