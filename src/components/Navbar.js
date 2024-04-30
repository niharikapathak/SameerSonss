import React from 'react';
import "./navbar.css";
import { Link } from 'react-router-dom'; // Import Link component from react-router-dom
import { FaFacebookSquare, FaInstagramSquare, FaYoutubeSquare} from 'react-icons/fa';

const Navbar = () => {
  return (
    <>
      <nav className="main-nav">
        <div className='logo'>
            <h2>
                <span>S</span>ameer
                <span>N</span>
                <span>S</span>ons
            </h2>
        </div>

        <div className='menu-link'>
            <ul>
                <li>
                    <Link to='/'>Home</Link> {/* Use Link component for Home */}
                </li>
                <li>
                    <Link to='/about'>About us</Link> {/* Use Link component for About */}
                </li>
                <li>
                    <Link to='/contact'>Contact Us</Link> {/* Use Link component for Contact Us */}
                </li>
                <li>
                    <Link to='/rnd'>R&D</Link> {/* Use Link component for R&D */}
                </li>
                <li className="dropdown">
                    <Link to='#'>Products</Link> {/* Use Link component for dropdown trigger */}
                    <div className="dropdown-content">
                        <Link to="/reactive-me-dyes">Reactive ME Dyes</Link> {/* Use Link component for dropdown items */}
                        <Link to="/rgb">RGB</Link>
                        <Link to="/product-3">Product 3</Link>
                    </div>
                </li>
            </ul>
        </div>

        <div className='enquiry-btn'>
          {/* Button for Enquiry Now */}
          <button>Enquiry Now</button>
        </div>
      </nav>
    </>
  )
}

export default Navbar;
