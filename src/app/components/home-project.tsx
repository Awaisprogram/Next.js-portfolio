import React from 'react'
import Image from 'next/image';
import tourley from '../images/tourly.png';
import shoes from '../images/shoes.png'
import project from '../images/project-1.png'
import clock2 from '../images/clock2.jpg'
import Heading from './heading';
import Link from 'next/link';

function  Main() {
  const images = [
    { src: tourley, alt: 'Image 1' },
    { src: shoes, alt: 'Image 2' },
    { src: project, alt: 'Image 3' },
    { src: clock2, alt: 'Image 4' },
  ];
  return (
    <> 
    <div>
    <Heading heading='My Projects'/>
    </div>
   
    <div className="container mx-auto p-4 mt-10">
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4">
        {images.map((image, index) => (
          <div key={index} className="flex flex-col filter grayscale hover:grayscale-0 transition duration-300 items-center">
            <Image
              src={image.src}
              alt={image.alt}
              className="rounded-2xl  shadow-lg object-fit p-2 h-48"
            />
          </div>
        ))}
      </div>

      <div className="flex justify-center mt-6">
        <Link href='./projects'>
        <button
          className="rounded-full bg-gradient-to-br from-green-300 via-green-400 to-green-700  px-4 py-2 text-white font-semibold hover:bg-green-500 focus:outline-none focus:ring-2 focus:ring-[#77e675] focus:ring-offset-2 my-8"
        >
        See All Projects
        </button>
        </Link>
      </div>

      
    </div>
    </>
  )
}

export default Main 