import React from 'react'
import Image from 'next/image'
import about from '../images/about.png'
import styles from '../styles/about.module.css'
import Heading from '../components/heading'

function About() {
  return(
    <>
        <div className={styles["about-1"]}>
          <Heading heading="About Me"/>
          </div>

        <div>
            <Image src={about} alt='' className={styles['left']}/>
           <div className={styles["right"]}>
           <p> I am a passionate and dedicated Front-end developer with a strong foundation in modern web technologies. My journey in the tech world began with mastering HTML, CSS, and JavaScript, which laid the groundwork for my foray into more advanced frameworks and languages. This includes TypeScript and React, which have enabled me to build dynamic, responsive, and user-friendly web applications.</p>
           <ul>
            <li>Name: Awais Mehmood</li>
            <li>Age: 19</li>
            <li>Gender: Male</li>
            <li>Email: awaisbinmehmoodahmed@gmail.com</li>
            <li>Address: Karachi, Pakistan</li>
            <li>Phone: 0318-3153371</li></ul>
            <p>Currently, I am expanding my horizons by delving into the cutting-edge fields of Generative AI, Web3, and the Metaverse through an intensive program at the Governor Sindh House. This exciting venture is equipping me with the skills to navigate and innovate in the rapidly evolving landscape of digital technology, preparing me for the future of the web and beyond.</p>
           </div>
    </div>
    
    </>
  )
}

export default About
