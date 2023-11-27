import React from 'react'
import "./contact.scss"
import {motion} from "framer-motion"

const Contact = () => {
  return (
    <motion.div className='contact'
    initial={{
      opacity:0,
      y:500
    }}
    whileInView={{
      opacity:1,
      y:0
    }}
    transition={{
      duration:1
    }}

     >
      <motion.div className="wrapper">
        <div className="textContainer">
          <h1>Let's Work Together</h1>
          <div className="item">
            <h2>mail</h2>
            <span>hello@react.dev</span>
          </div>
          <div className="item">
            <h2>phone</h2>
            <span>6289197569</span>
          </div>
          <div className="item">
            <h2>Address</h2>
            <span>Surat ,Gujraat</span>
          </div>
        </div>
        <div className="formContainer">

          <form action="">
            <input type="text" placeholder='Name' required />
            <input type="email" placeholder='Email' required />
            <textarea rows="6" placeholder='Message' />
            <button>Submit</button>
          </form>
        </div>
      </motion.div>

    </motion.div>


  )
}

export default Contact