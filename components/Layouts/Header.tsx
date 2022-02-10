import React, { useState } from 'react';

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    return <div className='flex justify-between items-center py-4 px-6' >
        <a href="/">
            <img src="/images/AppLogo.png" className='w-20 h-20' />
        </a>
        <nav >
            <ul className='lg:flex hidden items-center space-x-8 text-customGray-4 font-semibold' >
                <li> <a href="/" >Home</a> </li>
                <li> <a href="/about-us" >About Us</a> </li>
                <li> <a href="/products" >Products</a> </li>
                <li> <a href="/production" >Production</a> </li>
                <li> <a href="/quality" >Quality</a> </li>
                <li> <a href="/markets" >Markets</a> </li>
                <li> <a href="/" >Contacts</a> </li>
            </ul>
            <div
          id="header-nav"
          className={`header-nav lg:hidden bg-white px-5 lg:px-8 transition-all duration-300`}
        >
          <div className="relative h-16 flex items-center justify-center">
            {/* <!-- menu button --> */}
            <div className="absolute left-0 flex items-center">
              <button
                onClick={() => {
                setMenuOpen(!menuOpen)
                  document.getElementsByTagName('body')[0].style.overflow = 'hidden';
                }}
                type="button"
                className="inline-flex items-center justify-center text-black focus:outline-none focus:bg-transparent"
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                <span className="sr-only">Open menu</span>
                <svg
                  className="block h-6 w-6 text-black"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
                <svg
                  className="hidden h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            {/* <!-- logo --> */}
          </div>
        </div>
        </nav>

        {/* {menuOpen && (
        <div
          onClick={() => {
            setMenuOpen(false);
            document.getElementsByTagName('body')[0].removeAttribute('style');
          }}
          className="w-full h-full fixed top-0 left-0 transition duration-300 opacity-1 bg-black bg-opacity-60 z-9999"
        />
      )} */}

        {/* <nav
        className={`fixed top-0 w-4/5 h-full overflow-hidden overflow-y-auto no-scrollbar bg-white shadow transition ease-out duration-100${
          menuOpen ? ' transform translate-x-0 z-9999' : ' transform -translate-x-full z-1'
        }`}
        aria-label="Global"
        id="mobile-menu"
      >
        <div className="w-full h-full overflow-y-auto no-scrollbar bg-customWhite-1">
          <div className="sticky top-0 bg-customGray-3 py-4 w-full px-5 text-white flex items-center justify-between">
            <a
              onClick={() => {
                            setMenuOpen(false);
                document.getElementsByTagName('body')[0].removeAttribute('style');
              }}
              className="cursor-pointer"
            >
              <CloseIcon className="w-3 h-3 text-customWhite-1" strokeWidth="2" />
            </a>
          </div>

          <div className="border-t-0.5 bg-customWhite-1 border-customBlack-3 mx-5">
            <ul className="pt-2 pb-3 space-y-1">
              

              <li> <a href="/" >Home</a> </li>
                <li> <a href="/about-us" >About Us</a> </li>
                <li> <a href="/products" >Products</a> </li>
                <li> <a href="/production" >Production</a> </li>
                <li> <a href="/quality" >Quality</a> </li>
                <li> <a href="/markets" >Markets</a> </li>
                <li> <a href="/contacts" >Contacts</a> </li>
            </ul>
          </div>

          
        </div> */}
      {/* </nav> */}
  </div>;
};

export default Header;
