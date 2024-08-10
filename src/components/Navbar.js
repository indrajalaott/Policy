// src/components/Navbar.js
"use client"; // Mark this component as a Client Component

import { useState } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false); // State to manage dropdown visibility

  const toggleMenu = () => {
    setIsOpen(!isOpen); // Toggle the menu open/close
  };

  return (
    <nav>
      <div className="nav-container">
        <button onClick={toggleMenu} className="menu-button">
          &#9776; {/* Hamburger icon */}
        </button>
        <ul className="desktop-menu">
          <li><Link href="/">Home</Link></li>
          <li><Link href="/Policies">Policies</Link></li>
          <li><Link href="/Refund-Policy">Refund Policy</Link></li>
          <li><Link href="/Data-Policy">Privacy Policy</Link></li>
          <li><Link href="/Terms-of-Usage">Terms of Condition</Link></li>
          <li><Link href="/Child-Protection">Child Protection</Link></li>
        </ul>
      </div>
      {isOpen && (
        <ul className="dropdown">
          <li><Link href="/">Home</Link></li>
          <li><Link href="/Policies">Policies</Link></li>
          <li><Link href="/Refund-Policy">Refund Policy</Link></li>
          <li><Link href="/Data-Policy">Privacy Policy</Link></li>
          <li><Link href="/Terms-of-Usage">Terms of Condition</Link></li>
          <li><Link href="/Child-Protection">Child Protection</Link></li>
        </ul>
      )}
      <style jsx>{`
        nav {
          background: #333;
          padding: 1rem;
        }
        .nav-container {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        .desktop-menu {
          list-style: none;
          display: flex;
          gap: 2rem; /* Increase gap between items */
          justify-content: center; /* Center align the menu items */
          flex-grow: 1; /* Allow the menu to take available space */
        }
        .desktop-menu li {
          font-weight: bold; /* Make the text bold */
        }
        .desktop-menu li a {
          color: white; /* Set font color to white */
          text-decoration: none;
        }
        .menu-button {
          background: transparent;
          color: white;
          border: none;
          font-size: 1.5rem;
          cursor: pointer;
          display: none; /* Hide button on larger screens */
        }
        .dropdown {
          list-style: none;
          padding: 0;
          margin: 1rem 0 0;
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        .dropdown li {
          margin: 0.5rem 0;
        }
        .dropdown li a {
          color: white; /* Set font color to white */
          text-decoration: none;
          background: #555;
          padding: 0.5rem 1rem;
          border-radius: 4px;
          transition: background 0.3s;
          font-weight: bold; /* Make the dropdown text bold */
        }
        .dropdown li a:hover {
          background: #666;
        }

        /* Mobile responsiveness */
        @media (max-width: 600px) {
          .desktop-menu {
            display: none; /* Hide desktop menu on mobile */
          }
          .menu-button {
            display: block; /* Show button on mobile */
            margin-left: auto; /* Right align the button */
          }
        }
      `}</style>
    </nav>
  );
}