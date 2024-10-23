"use client";

import React from "react";
import Image from "next/image";

import myImage from "../images/myImage.jpeg";
import styles from "../styles/home.module.css";
import Link from "next/link";
import { TypeAnimation } from "react-type-animation";

function Homecomponent() {
  return (
    <>
      <div className="  min-h-[70vh] flex items-center justify-center bg-black">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
          {/* Left side content */}
          <div className="text-center md:text-left mb-8 md:mb-0">
            <h1 className="text-5xl md:text-7xl font-bold mb-2 text-white mt-8">
              Hello, I'm
            </h1>
            <h2 className="text-3xl md:text-5xl font-semibold  text-green-400 mb-6">
              <TypeAnimation
                sequence={[
                  "Awais Mehmood",
                  1000,
                  "Web Developer",
                  1000,
                  "Video Editor",
                  1000,
                ]}
                wrapper="span"
                speed={30}
                style={{ fontSize: "1em", display: "inline-block" }}
                repeat={Infinity}
              />
            </h2>
            <p className="text-white my-3 text-lg">
              Design and code beautifully simple projects without overwhelming
              yourself with complexity.{" "}
            </p>
            <div className="space-x-4 mt-8 grow justify-center">
              <button className="bg-gradient-to-br from-green-300 via-green-400 to-green-700 text-white px-4 py-2 rounded-full hover:bg-green-600 transition mt-2">
                Download CV
              </button>
              <Link href={'./hire'}>
              <button className="bg-black text-white px-4 py-2 rounded-full hover:bg-gray-600 border transition mt-2">
                Hire Me
              </button>
              </Link>
            </div>
          </div>

          {/* Right side image */}
          <div className="w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden">
            <Image
              src={myImage}
              height={150}
              alt="Profile"
              className="object-cover w-full h-full"
            />
          </div>
        </div>
        <div></div>
      </div>
      <div className={styles['countdown-container']}>
        <ul className= {styles['countdown-counter']}>
          <li className="flex row">
            <span className="" id="days">
              20+ 
            </span>
            Projects
          </li>
          <li>
            <span className="fs-1 d-block" id="hours">
              3
            </span>
            Certificates
          </li>
          <li>
            <span className="fs-1 d-block" id="min">
              02+
            </span>
            Years
          </li>
          <li>
            <span className="fs-1 d-block" id="sec">
            5+
            </span>
            Lanuages
          </li>
        </ul>
      </div>
    </>
  );
}

export default Homecomponent;
