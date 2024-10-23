"use client"
import Link from 'next/link';
import { useState } from 'react';
import { FaBars, FaTimes } from 
'react-icons/fa'; // FontAwesome icons

const Navbar = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  return (
    <nav>
      <div className="open-sidebar-btn" onClick={toggleSidebar}>
        <FaBars />
      </div>

      {isSidebarOpen && <div className="overlay" onClick={toggleSidebar}></div>}

      <div className={`links-container ${isSidebarOpen ? 'active' : ''}`}>
        <div className="close-sidebar-btn" onClick={toggleSidebar}>
          <FaTimes />
        </div>
        <a href="#" className="home-links text-3xl text-green-400 p-2">PORTFOLIO</a>
        <Link href="/" className="nav-link py-5">Home</Link>

        <Link href="/about" className="nav-link">About</Link>
        <Link href="/projects" className="nav-link">Projects</Link>
        <Link href="/contact" className="nav-link">Contact</Link>
      </div>
    </nav>
  );
};

export default Navbar;
