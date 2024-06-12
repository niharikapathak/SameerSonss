import React from 'react';
import "./navbar.css";
import { NavLink } from 'react-router-dom'; // Import NavLink component from react-router-dom
import { FaFacebookSquare, FaInstagramSquare, FaYoutubeSquare} from 'react-icons/fa';

const Navbar = () => {
  return (
    <>
      <nav className="main-nav">
        <div className='logo'>
            <h2> 
                <span>S</span>ameer
                <span>&</span>
                <span>S</span>ons
            </h2>
        </div>

        <div className='menu-link'>
            <ul>
                <li>
                    <NavLink exact to='/' activeClassName="active-link">Home</NavLink>
                </li>
                <li>
                    <NavLink to='/about' activeClassName="active-link">About us</NavLink>
                </li>
                <li>
                    <NavLink to='/contact' activeClassName="active-link">Contact Us</NavLink>
                </li>
                <li>
                    <NavLink to='/rnd' activeClassName="active-link">R&D</NavLink>
                </li>
                <li className="dropdown">
                    <NavLink to='#' activeClassName="active-link">Products</NavLink> {/* Use NavLink component for dropdown trigger */}
                    <div className="dropdown-content">
                        <NavLink to="/products/reactive-me-dyes" activeClassName="active-link">Reactive ME Dyes</NavLink>
                        <NavLink to="/products/rgb-rr-dyes" activeClassName="active-link">RGB</NavLink>
                        <NavLink to="/products/reactive-he-dyes" activeClassName="active-link">Reactive HE Dyes</NavLink>
                        <NavLink to="products/vinylsulphone-dyes" activeClassName="active-link">VinylSulphone Dyes</NavLink>
                        <NavLink to="products/premium-dyes" activeClassName="active-link">Premium Dyes</NavLink>
                        <NavLink to="products/direct-dyes" activeClassName="active-link">Direct Dyes</NavLink>
                        <NavLink to="products/reactive-cold-dyes" activeClassName="active-link">Reactive Cold Dyes</NavLink>
                        <NavLink to="products/printing-dyes" activeClassName="active-link">Printing Dyes</NavLink>
                        <NavLink to="products/pigmentauxiliares" activeClassName="active-link">Pigment/Textile Auxiliaries</NavLink>
                        <NavLink to="products/pigment-dyes" activeClassName="active-link">Pigment Dyes</NavLink>
                        <NavLink to="products/disperse-dyes" activeClassName="active-link">Disperse Dyes</NavLink>
                        <NavLink to="products/AcidBase" activeClassName="active-link">Acid Base Dyes</NavLink>
                        <NavLink to="products/napthol-base" activeClassName="active-link">Napthol Base</NavLink>
                       

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
