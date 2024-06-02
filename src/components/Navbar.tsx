"use client";
import React, { useState } from "react";
import Link from "next/link";
import "../css/Navbar.css";

const transition = {
  type: "spring",
  mass: 0.5,
  damping: 11.5,
  stiffness: 100,
  restDelta: 0.001,
  restSpeed: 0.001,
};

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const handleMenuToggle = (): void => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleMenuOptionClick = (
    event: React.MouseEvent<HTMLAnchorElement>,
    sectionId: string
  ): void => {
    event.preventDefault();
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  return (
    <nav className="navbar">
      <div className="navbar__logo">
        <div className="logo_text_">Hi - Tech</div>
      </div>
      <div className={`navbar__menu ${isMenuOpen ? "open" : ""}`}>
        <ul className="navbar__list">
          <li className="navbar__item">
            <Link href="/" className="navbar__link">
              Home
            </Link>
          </li>
          <li className="navbar__item">
            <Link href="/Products" className="navbar__link">
              Products
            </Link>
          </li>
          <li className="navbar__item">
            <Link href="/About" className="navbar__link">
              About
            </Link>
          </li>
          <li className="navbar__item">
            <Link href="/Services" className="navbar__link">
              Services
            </Link>
          </li>
          <li className="navbar__item">
            <Link href="/Contact" className="navbar__link">
              Contact
            </Link>
          </li>
        </ul>
      </div>
      <button className="navbar__toggle" onClick={handleMenuToggle}>
        <span className={`navbar__icon ${isMenuOpen ? "open" : ""}`}></span>
      </button>
    </nav>
  );
};

export default Navbar;