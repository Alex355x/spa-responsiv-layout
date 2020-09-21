import React, {useState} from "react";
import "./header.scss";
import Menu from '../menu/Menu'

const Header = () => {

  const [showMenu, setShowMenu] = useState(false)

  const handleClick = () => {
    setShowMenu(showMenu ? false : true);
  }

  return (
    
      <header className='header'>
      {showMenu ? <Menu /> : null}
        <div className='header-container'>
          <div className='header-logo'>
            <div className='header-logo-svg-1'>
              <svg id="logo" xmlns="http://www.w3.org/2000/svg" width="135" height="20" viewBox="0 0 135 20">
                <path id="testtask" className="cls-1" d="M73.25,25.818h3.37V24.182H68.007v1.636h3.37V35.847H73.25V25.818Zm14.818,8.41H83.459V30.565h4.319v-1.6H83.459V25.794h4.609V24.182H81.586V35.847h6.482v-1.62Zm12.02-2.92a2.924,2.924,0,0,0-.862-1.045,8.449,8.449,0,0,0-1.85-1,10.386,10.386,0,0,1-1.552-.758,1.936,1.936,0,0,1-.619-0.61,1.521,1.521,0,0,1-.188-0.778,1.334,1.334,0,0,1,.47-1.065,2.068,2.068,0,0,1,1.379-.4,7.054,7.054,0,0,1,2.728.654l0.6-1.556a7.92,7.92,0,0,0-3.276-.734,4.175,4.175,0,0,0-2.735.838,2.815,2.815,0,0,0-1.019,2.3,3.16,3.16,0,0,0,.643,1.995,5.3,5.3,0,0,0,2.21,1.476A7.278,7.278,0,0,1,98.019,31.7a1.462,1.462,0,0,1,.486,1.109,1.415,1.415,0,0,1-.529,1.157,2.578,2.578,0,0,1-1.642.431,6.944,6.944,0,0,1-1.642-.215,8.537,8.537,0,0,1-1.665-.59v1.8a7.163,7.163,0,0,0,3.182.614,4.75,4.75,0,0,0,3.049-.886,2.956,2.956,0,0,0,1.1-2.442A3.19,3.19,0,0,0,100.088,31.307Zm9.661-5.489h3.37V24.182h-8.614v1.636h3.371V35.847h1.873V25.818Zm12.294,0h3.37V24.182H116.8v1.636h3.37V35.847h1.873V25.818Zm17.436,10.029-4.287-11.713h-2.038l-4.287,11.713h1.975l1.121-3.239h4.381l1.144,3.239h1.991Zm-6.968-4.883,1.035-3.04a18.242,18.242,0,0,0,.619-2.146q0.078,0.319.286,1.005t0.325,1.005l1.074,3.175h-3.339Zm18.024,0.343a2.922,2.922,0,0,0-.862-1.045,8.461,8.461,0,0,0-1.85-1,10.385,10.385,0,0,1-1.552-.758,1.936,1.936,0,0,1-.619-0.61,1.525,1.525,0,0,1-.188-0.778,1.335,1.335,0,0,1,.47-1.065,2.069,2.069,0,0,1,1.38-.4,7.054,7.054,0,0,1,2.727.654l0.6-1.556a7.919,7.919,0,0,0-3.276-.734,4.175,4.175,0,0,0-2.736.838,2.815,2.815,0,0,0-1.019,2.3,3.163,3.163,0,0,0,.643,1.995,5.3,5.3,0,0,0,2.21,1.476,7.277,7.277,0,0,1,2.007,1.077,1.462,1.462,0,0,1,.486,1.109,1.417,1.417,0,0,1-.529,1.157,2.579,2.579,0,0,1-1.642.431,6.938,6.938,0,0,1-1.642-.215,8.551,8.551,0,0,1-1.666-.59v1.8a7.163,7.163,0,0,0,3.182.614,4.75,4.75,0,0,0,3.049-.886,2.956,2.956,0,0,0,1.1-2.442A3.19,3.19,0,0,0,150.535,31.307ZM160.564,29.3q1.3-1.524,4.3-5.114h-2.132l-3.1,3.726q-0.761.886-1.528,1.843V24.182h-1.873V35.847h1.873V31.483l1.105-.918,3.6,5.282h2.171Z" transform="translate(-30 -20)"/>
                <path className="cls-2" d="M37,20L30,30l7,10H53l7-10L53,20H37Z" transform="translate(-30 -20)"/>
                <path className="cls-3" d="M50,36H48V26H46V24h6v2H50V36Zm-8,0H40V26H38V24h6v2H42V36Z" transform="translate(-30 -20)"/>
              </svg>
            </div>
            <div className='header-logo-svg-2'>
              <button className='svg_btn' onClick={handleClick}>
                <svg 
                xmlns="http://www.w3.org/2000/svg" 
                width="20" 
                height="15" 
                viewBox="0 0 20 15">
                  <path id="menu_icon" 
                  data-name="menu icon" 
                  className="cls-1" d="M325,13h20v3H325V13Zm0,6h20v3H325V19Zm0,6h20v3H325V25Z" transform="translate(-325 -13)"/>
                </svg>
              </button>
            </div>
            <nav className="header__navigation">
              <ul className="header__navigation_list">
                <li><a className="header__navigation_list-a" href="#reg">About me</a></li>
                <li><a className="header__navigation_list-a" href="#reg">Relationships</a></li>
                <li><a className="header__navigation_list-a" href="#reg">Requirements</a></li>
                <li><a className="header__navigation_list-a" href="#reg">Users</a></li>
                <li><a className="header__navigation_list-a" href="#reg">Sign Up</a></li>
              </ul>
            </nav>
          </div>
        </div>
      </header>
  )
}

export default Header;
