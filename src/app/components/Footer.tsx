import React from 'react'
import Link from 'next/link';
import { FaLinkedin, FaInstagram, FaWhatsapp, FaGithub, FaFacebook } from "react-icons/fa";

function Footer() {
  return (
    <div>
      <footer className="bg-gray-900 text-white py-10 mt-2">
      <div className="container mx-auto text-center">
        <div className="socials flex gap-5 justify-center text-2xl mb-4 hover:">
          <Link href={'https://www.linkedin.com/in/awais-mehmood-903500309'}><FaLinkedin /></Link>
          <Link href={"https://www.instagram.com/ash._.shaikh/"}><FaInstagram /></Link>
          <Link href={'https://wa.me/03267093484'}><FaWhatsapp/></Link>
          <Link href={'https://github.com/Awaisprogram'}><FaGithub/></Link>
          <Link href={'https://www.facebook.com/awais.mehmood.359126'}><FaFacebook/></Link>
        
        
        
        
        
        </div>
        <p>
          &copy; {new Date().getFullYear()} All Rights Reserved | Developed by Awais Mehmood
        </p>
      </div>
    </footer>
    </div>
  )
}

export default Footer
