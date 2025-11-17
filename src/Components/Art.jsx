import React from 'react'

const Art = () => {
  return (
    <div id='work' className='w-full h-screen border'>
        <div className="art-sec">
             <img src="/public/images/drink4.png" alt=""  className='art-left-img'/>
             <div className="art-img"></div>
            <img src="/public/images/cup-2.png" alt="" className='art-right-img'/>
        </div>
        <div className="art-text">
            <h2>Made with Craft, Poured with Passion</h2>
            <p>This isn't just a drink. it's a crafted moment made just for you.</p>
        </div>
    </div>
  )
}

export default Art