import React, { useState } from 'react';
const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <header className="site-header">
      <div className="wrapper site-header__wrapper">
        <a href="#" className="brand">Brand</a>
        <nav className="nav">
          <button className="nav__toggle"  onClick={() => setIsOpen(!isOpen) } type="button">
            menu
          </button>
          <ul className={isOpen ? "nav__wrapper--active" : "nav__wrapper"} >
            <li className="nav__item"><a href="#">Home</a></li>
            <li className="nav__item"><a href="#">About</a></li>
            <li className="nav__item"><a href="#">Services</a></li>
            <li className="nav__item"><a href="#">Hire us</a></li>
            <li className="nav__item"><a href="#">Contact</a></li>
          </ul>
        </nav>
      </div>
    </header>
    )
};


export default Navbar;