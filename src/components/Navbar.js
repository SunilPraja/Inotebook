import React from 'react';
import { Link, useLocation  } from 'react-router-dom';
import { useEffect } from 'react';

function Navbar() {
  const location = useLocation();
  useEffect(() => { 
    // console.log(location.pathname); 
  }, [location]
    );
  return (
    
    <>
    <header className='bg-white text-dark body-font shadow-md'>
        <div className='container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center'>
            <Link to="/" className={'logo'}>iNotebook</Link>
            <nav className='md:ml-auto flex flex-wrap items-center text-base justify-center'>
                <Link to="/" className={`mr-5 hover:text-blue-900 ${location.pathname === "/" ? "active" : " "}`}>Home</Link>
                <Link to="/about" className={`mr-5 hover:text-blue-900 ${location.pathname === "/about" ? "active" : " "}`}>About</Link>
            </nav>
        </div>
    </header>
    </>
  )
}

export default Navbar
