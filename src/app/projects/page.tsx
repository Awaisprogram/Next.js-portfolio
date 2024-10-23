import React from 'react';
import Heading from '../components/heading';
import Cards from '../components/cards';
import tourley from '../images/tourly.png';
import shoes from '../images/shoes.png'
import project from '../images/project-1.png'
import portfolio from '../images/portfolio.jpeg'
import clock2 from '../images/clock2.jpg'
import images from '../images/images.jpeg'

function Project() {
  const posts = [
    {
      name: 'TOURLEY',
      description: 'A travel-themed website featuring responsive design and interactive elements, blending sleek navigation with engaging animations for an immersive user experience that inspires exploration and fosters a sense of adventure.',
      image: tourley,
      url: 'travel-website-six-alpha.vercel.app'
    },
    // Add more post objects as needed
    {
      name: 'SHOES',
      description: 'Master TypeScript with ease using our interactive quiz app. Test your knowledge, track your progress, and enhance your skills through a series of engaging quizzes. Perfect for exam preparation and learning on the go!',
      image: shoes,
      url: 'https://myshoesweb.netlify.app'
    },
    {
      name: 'ECOMMERS WEBSIE',
      description: 'Crafted a dynamic and responsive e-commerce platform, featuring seamless navigation, secure checkout, and an intuitive user experience, all optimized for mobile and desktop devices.',
      image: project,
      url: 'ecommers-website.vercel.app'
    },
    {
      name: 'PORTFOLIO',
      description: 'This portfolio site showcases my skills and projects with a clean, modern design. It features sections for my background, skills, and projects, all built with a responsive layout for a seamless experience on any device.',
      image: portfolio,
      url: 'portfolio-ruddy-ten-60.vercel.app'
    },
    {
      name: 'THEME CLOCK',
      description: 'Designed and developed a sleek theme clock, featuring customizable themes, smooth animations, and real-time updates, optimized for both dark and light modes, providing a versatile and engaging user experience.',
      image: clock2,
      url: 'theme-clock-psi-gules.vercel.app'
    },
    {
      name: 'MOVIE APP',
      description: 'Discover and explore movies effortlessly. Search for any film, view detailed summaries, and see high-quality posters—all in one sleek and responsive app. Find your next favorite movie',
      image: images,
      url: 'https://lnkd.in/e3SBwUgx'
    },
  ];

  return (
    <>
      <div>
        <Heading heading="Projects" />
      </div>
      <div className='project grid grid-cols-3 gap-4'>
        {posts.map((post, index) => (
          <Cards key={index} post={post} />
        ))}
      </div>
    </>
  );
}

export default Project;
