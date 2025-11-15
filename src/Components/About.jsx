import React from 'react'

const About = () => {
  return (
    <div id='about' className="container">
        <div className='mb-12 border'>
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