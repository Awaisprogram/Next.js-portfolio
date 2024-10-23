import React from 'react'
import Link from 'next/link'

function HireMe() {
  return (
    <div className="min-h-screen  flex items-center justify-center p-6">
      <div className="max-w-4xl w-full bg-gradient-to-r from-gray-900 to-gray-500 rounded-lg shadow-lg p-8">
        <h1 className="text-5xl font-bold text-center mb-6 text-green-400">Hire Me</h1>

        <p className="text-lg text-gray-400 mb-4 ">
          Looking to build an amazing website or web app? I'm a front-end developer specializing in modern web
          technologies like HTML, CSS, JavaScript, TypeScript, and React. I love creating user-friendly, responsive, and
          high-performance websites.
        </p>

        <p className="text-lg text-gray-400 mb-4 ">
          I’m available for freelance projects, contract work, and full-time positions. Feel free to reach out if you
          need help with:
        </p>
        <ul className="list-disc list-inside mb-6 text-gray-400">
          <li>Custom web design and development</li>
          <li>Responsive layouts and mobile-first design</li>
          <li>JavaScript or TypeScript-based applications</li>
          <li>Frontend frameworks like React or Next.js</li>
        </ul>

        <div className="flex justify-center mt-6">
        <Link href='./contact'>
        <button
          className="rounded-full bg-gradient-to-br from-green-300 via-green-400 to-green-700  px-4 py-2 text-white font-semibold hover:bg-green-500 focus:outline-none focus:ring-2 focus:ring-[#77e675] focus:ring-offset-2 mb-5"
        >
         Contact Me
        </button>
        </Link>
      </div>
      </div>
    </div>
  )
}

export default HireMe
