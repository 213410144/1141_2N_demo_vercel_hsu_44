import React from 'react'
import Wrapper from '../assets/wrappers/Navbar_44'
import { Link } from 'react-router-dom';

const Navbar_44 = () => {
  return <Wrapper>
    <header className="header">
      <div className="header-row container" role="navigation" aria-label="Main">
        <div className="header-left">
          <div className="logo">
            <h1>TkuDemo</h1>
          </div>
        </div>
        <div className="header-right">
          <ul className="main-menu">
            <li className="menu-item"><Link to="#" className="active">Home</Link></li>

            <li className="menu-item mega-menu"><Link to="#">Mega menu +</Link>
              <div className="mega-menu-wrapper slideInUp">
                <div className="mega-menu-col">
                  <h5>Menu block 1</h5>
                  <ul className="mega-sub-menu">
                    <li><Link to="#">Menu block item 1</Link></li>
                    <li><Link to="#">Menu block item 2</Link></li>
                    <li><Link to="#">Menu block item 3</Link></li>
                    <li><Link to="#">Menu block item 4</Link></li>
                    <li><Link to="#">Menu block item 5</Link></li>
                  </ul>
                </div>
                <div className="mega-menu-col">
                  <h5>Menu block 2</h5>
                  <ul className="mega-sub-menu">
                    <li><Link to="#">Menu block item 1</Link></li>
                    <li><Link to="#">Menu block item 2</Link></li>
                    <li><Link to="#">Menu block item 3</Link></li>
                    <li><Link to="#">Menu block item 4</Link></li>
                    <li><Link to="#">Menu block item 5</Link></li>
                  </ul>
                </div>
                <div className="mega-menu-col">
                  <h5>Menu block 3</h5>
                  <ul className="mega-sub-menu">
                    <li><Link to="#">Menu block item 1</Link></li>
                    <li><Link to="#">Menu block item 2</Link></li>
                    <li><Link to="#">Menu block item 3</Link></li>
                    <li><Link to="#">Menu block item 4</Link></li>
                    <li><Link to="#">Menu block item 5</Link></li>
                  </ul>
                </div>
                <div className="mega-menu-col">
                  <h5>Menu block 4</h5>
                  <ul className="mega-sub-menu">
                    <li><Link to="#">Menu block item 1</Link></li>
                    <li><Link to="#">Menu block item 2</Link></li>
                    <li><Link to="#">Menu block item 3</Link></li>
                    <li><Link to="#">Menu block item 4</Link></li>
                    <li><Link to="#">Menu block item 5</Link></li>
                  </ul>
                </div>
              </div>
            </li>

            <li className="menu-item dropdown">
              <Link to="#">Demo +</Link>
              <div className="sub-menu-wrapper slideInUp">
                <ul className="sub-menu">
                  <li className="menu-item"><Link to="/bookList_44">W2-BookList_44</Link></li>
                  <li className="menu-item"><Link to="/static_44">W3-BLogStatic_44</Link></li>
                  <li className="menu-item"><Link to="/localjson_44">W3-BLogLocalJson_44</Link></li>
                  <li className="menu-item"><Link to="/node_44">W4-BlogNode_44</Link></li>
                  <li className="menu-item"><Link to="#">w5-BlogSupa-44</Link></li>
                </ul>
              </div>
            </li>
            <li className="menu-item"><Link to="#">Blog</Link></li>
            <li className="menu-item"><Link to="#">Contact</Link></li>
          </ul>
          <Link
            to="#"
            id="hamburger-icon"
            className="mobile-toggler"
            aria-label="Mobile Menu"
            ><i className="fas fa-bars"></i
          ></Link>
        </div>

  {/* Mobile menu */}
        <div id="mobile-menu" className="mobile-menu hidden slideInDown">
          <ul>
            <li className="menu-item"><Link to="#" className="active">Home</Link></li>

            <li className="menu-item mega-menu">
              <Link to="#">Mega menu +</Link>
              <div className="mega-menu-wrapper">
                <div className="mega-menu-col">
                  <h5>Menu block 1</h5>
                  <ul className="mega-sub-menu">
                    <li><Link to="#">Menu block item 1</Link></li>
                    <li><Link to="#">Menu block item 2</Link></li>
                    <li><Link to="#">Menu block item 3</Link></li>
                    <li><Link to="#">Menu block item 4</Link></li>
                    <li><Link to="#">Menu block item 5</Link></li>
                  </ul>
                </div>
                <div className="mega-menu-col">
                  <h5>Menu block 2</h5>
                  <ul className="mega-sub-menu">
                    <li><Link to="#">Menu block item 1</Link></li>
                    <li><Link to="#">Menu block item 2</Link></li>
                    <li><Link to="#">Menu block item 3</Link></li>
                    <li><Link to="#">Menu block item 4</Link></li>
                    <li><Link to="#">Menu block item 5</Link></li>
                  </ul>
                </div>
                <div className="mega-menu-col">
                  <h5>Menu block 3</h5>
                  <ul className="mega-sub-menu">
                    <li><Link to="#">Menu block item 1</Link></li>
                    <li><Link to="#">Menu block item 2</Link></li>
                    <li><Link to="#">Menu block item 3</Link></li>
                    <li><Link to="#">Menu block item 4</Link></li>
                    <li><Link to="#">Menu block item 5</Link></li>
                  </ul>
                </div>
                <div className="mega-menu-col">
                  <h5>Menu block 4</h5>
                  <ul className="mega-sub-menu">
                    <li><Link to="#">Menu block item 1</Link></li>
                    <li><Link to="#">Menu block item 2</Link></li>
                    <li><Link to="#">Menu block item 3</Link></li>
                    <li><Link to="#">Menu block item 4</Link></li>
                    <li><Link to="#">Menu block item 5</Link></li>
                  </ul>
                </div>
              </div>
            </li>

            <li className="menu-item dropdown">
              <Link to="#">Demo +</Link>
              <div className="sub-menu-wrapper">
                <ul className="sub-menu">
                  <li className="menu-item"><Link to="/static_44">W3-BLogStatic_44</Link></li>
                  <li className="menu-item"><Link to="/localjson_44">W3-BLogLocalJson_44</Link></li>
                  <li className="menu-item"><Link to="/node_44">W4-BlogNode_44</Link></li>
                  <li className="menu-item"><Link to="#">w5-BlogSupa-44</Link></li>
                </ul>
              </div>
            </li>
            <li className="menu-item"><Link to="#">Blog</Link></li>
            <li className="menu-item"><Link to="#">Contact</Link></li>
          </ul>
        </div>
      </div>
    </header>
    </Wrapper>
};

export default Navbar_44
