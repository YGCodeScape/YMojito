import React from 'react'
import { featureLists, goodLists} from '../../constants'

const Art = () => {
  return (
    <div id="Art" className=' radial-gradient'>
        <div className="container second-art mx-auto pt-20 ">
            <h2 className="will-fade ">The ART</h2>

            <div className="content">
                <ul className="space-y-4">
                    {goodLists.map((feature, index) => (
                        <li key={index} className='flex items-center gap-2'>
                            <img src="/public/images/check.png" alt="" />
                            <p>{feature}</p>
                        </li>
                    ))}
                </ul>

                <div className="cocktail-img">
                    <img src="/public/images/under-img.jpg" alt="" 
                    className=" abs-center masked-img size-full object-contain " />
                </div>

                 <ul className="space-y-4">
                    {featureLists.map((feature, index) => (
                        <li key={index} className='flex items-center justify-start gap-2'>
                            <img src="/public/images/check.png" alt="" />
                            <p>{feature}</p>
                        </li>
                    ))}
                </ul>

                <div className="masked-container">
                    <h2 className="">Sip-worthy Perfection</h2>
                    <div id="masked-content">
                        <h3>Made with Craft, Poured with Passion</h3>
                        
                    </div>
                </div>

            </div>
        </div>
    </div>
  )
}

export default Art