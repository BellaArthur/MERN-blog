import React, {useState} from 'react'
import { NavLink } from 'react-router-dom'
import '../index.css'
import { FaBars, FaXmark} from 'react-icons/fa6'


export default function Header () {

    const [isMenuOpen, setMenuOpen] = useState(false);
    const toggleMenu = () => {
        setMenuOpen(!isMenuOpen);
    }
    
    const navItems = [
        {path: "/", link: "Home"},
        {path: "/about", link: "About"},
        {path: "/projects", link: "Projects"},
        {path: "/dashboard", link: "Dashboard"},
    ]

    return (
        <header className='bg-gray-200 mx-auto shadow-md'>
            <nav className='px-4 py-4 mx-auto max-w-7xl flex justify-between'>
                <a href='/' className='text-black text-3xl font-bold  sm:tex-xl'>Mern<span className='text-orange-500'>Blog</span></a>
                
                {/*nav items for lg devices*/}
                <ul className='hidden text-lg md:flex baseline pt-2 sm:gap-4 md:gap-6 lg:gap-12'>
                    {
                        navItems.map((navItem) => 
                        <li key={navItem.path} className='text-black hover:text-orange-700'>
                             <NavLink className={({isActive}) =>
                             isActive ? "active"
                                    : ""
                            } 
                            to={navItem.path}>{navItem.link}</NavLink>
                        </li>
                        )
                    }
                </ul>
                <div className='flex gap-1'>
                    <NavLink to="/sign-in" className="hidden sm:inline-flex p-3 px-6 pt-2 text-black bg-gray-300 
                        rounded-full baseline hover:bg-orange-700">
                        Get Started
                    </NavLink>
                    <NavLink to="/sign-up" className="hidden sm:inline-flex p-3 px-6 pt-2 text-black bg-orange-500 
                        rounded-full baseline hover:bg-orange-700">
                        Get Started
                    </NavLink>
                </div>

                {/*menu buton */}
                <div className="">
                    <button onClick={toggleMenu} className='cursor-pointer md:hidden '>
                        {
                            isMenuOpen ? <FaXmark className="text-black w-10 h-10"  /> : <FaBars className="text-black w-10 h-10" />
                        }
                    </button>
                </div>
            </nav>

            {/*mobile menu*/}
            <div>
                <ul className={`text-lg block space-y-4 px-4 py-4 mt-10 bg-white shadow-md md:hidden
                        ${isMenuOpen ? 
                                "relative left-0 w-full transition-all ease-out duration-150" : 
                                "hidden"}`
                    }
                >
                        {
                            navItems.map((navItem) => 
                            <li key={navItem.path} className='text-black'>
                                <NavLink onClick={toggleMenu} to={navItem.path}>{navItem.link}</NavLink>
                            </li>
                            )
                        }
                </ul>
            </div>
        </header>
    )
}