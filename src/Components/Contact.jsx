import React from 'react'
import { openingHours } from '../../constants'

const Contact = () => {
  return (
    <footer id='contact'>
        <img src="/images/footer-right-leaf.png" alt="" id="f-right-leaf"/>
        <img src="/images/footer-left-leaf.png" alt="" id="f-left-leaf"/>

        <div className="f-content">
             <h2>Where to Find Us</h2>

             <div className="f-row1">
                <h3>Visit Our Bar</h3>
                <p>345, Ret, Blod, $4033, London CA 60604</p>
             </div>

             <div className="f-row1">
                <h3>Contact Us</h3>
                <p>(555) 754-3452</p>
             </div>

             <div className="f-col3">
                 <h3>Open Every Day</h3>
                 {openingHours.map((time) => (
                    <p key={time.day}>
                        {time.day}: {time.time}
                    </p>
                 ))}
             </div>

        </div>
    </footer>
  )
}

export default Contact