import React from 'react'
import { featureLists, goodLists} from '../../constants'

const TheArt = () => {
  return (
    <div id="Art" className=' radial-gradient'>
        <div className="container second-art mx-auto pt-20 ">
             <h2 className="art-text">The ART</h2>
             
             <div className="Art-content">
                 <ul className="art-ul">
                    {goodLists.map((feature, index) => (
                        <li key={index} className='flex items-center gap-2'>
                            <img src="/public/images/check.png" alt="" />
                            <p>{feature}</p>
                        </li>
                    ))}
                 </ul>

                 <div className="cocktail-img">
                     <img src="/public/images/under-img.jpg" alt=""  className=" masked-img size-full object-contain " />
                 </div>

                 <ul className="art-ul">
                    {featureLists.map((feature, index) => (
                        <li key={index} className='flex items-center justify-start gap-2'>
                            <img src="/public/images/check.png" alt="" />
                            <p>{feature}</p>
                        </li>
                    ))}
                 </ul>

                {/* <div className="masked-container">
                    <h2 className="">Sip-worthy Perfection</h2>
                    <div id="masked-content">
                        <h3>Made with Craft, Poured with Passion</h3>
                        <p>This isn't just a drink. it's a carefully crafted moment made just for you.</p>
                    </div>
                </div> */}

            </div>
        </div>
    </div>
  )
}

export default TheArt