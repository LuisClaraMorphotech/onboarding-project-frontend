import React, { useState } from 'react';
import logo from '../assets/logo.svg'
import { Link } from "../components/Link"

const Navbar: React.FC = () => {

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    // const filterProduct = (category: string) => {
    //     sessionStorage.setItem("filterProduct", category)
    //     setIsMenuOpen(!isMenuOpen);
    // }

    return (
        <>
            <div className="lg:bg-[#FFCF00] lg:text-white lg:p-4 lg:w-full lg:z-10 h-28 flex justify-center items-center bg-white p-4 border-b border-[#FFCF00]">
                <div className="container mx-auto flex justify-start items-center">

                    {/* navbar mobile */}
                    <div className="lg:hidden space-x-6 flex justify-start items-center">
                        <button
                            className="text-white focus:outline-none"
                            onClick={toggleMenu}
                        >
                            {/*burger menu and cross*/}
                            {isMenuOpen ? <svg
                                className="w-6 h-6"
                                fill="none"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                viewBox="0 0 24 24"
                                stroke="#000"
                            >
                                <path d="M6 18L18 6M6 6l12 12"></path>
                            </svg> : <svg
                                className="w-6 h-6"
                                fill="none"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                viewBox="0 0 24 24"
                                stroke="#000"
                            >
                                <path d="M4 6h16M4 12h16m-7 6h7"></path>
                            </svg>}

                        </button>
                        <div className="w-16 font-bold lg:mr-6">
                            <Logo />
                        </div>
                    </div>

                    {/* navbar desktop */}
                    <div className={`lg:flex space-x-6 max-lg:hidden`}>
                        <Logo />
                        <div className='flex justify-center items-center '>
                            <Link href="/">
                                <p className='font-700 text-[#000] p-3'>Home</p>
                            </Link>
                            <p className='font-700 text-[#000] p-3' onClick={toggleMenu}>Shop</p>
                            <Link href="/about">
                                <p className='font-700 text-[#000] p-3'>About</p>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            {/* navbar model */}
            {isMenuOpen && (
                <div className={`bg-white z-20 ${isMenuOpen ? 'block w-96 absolute lg:left-56 top-24 left-4  p-4 border border-neutral-700' : 'hidden'}`}>
                    <div className='lg:hidden'>
                        <Link href="/" className="block py-2"><p onClick={toggleMenu}>Home</p></Link>
                        <Link href="/about" className="block py-2"><p onClick={toggleMenu}>About</p></Link>
                    </div>
                    <Link href="/products" className="block py-2"
                    // onClick={() => filterProduct("all")}
                    >All Products</Link>
                    {/* {categories && categories.length > 0 ? categories.map(category => (
                    <button onClick={() => filterProduct(category.attributes.Name)} className="bg-white block py-2 px-0">{category.attributes.Name}</button>
                )) : null} */}
                </div>
            )}
        </>
    )
}

function Logo() {
    return (
        <div className='mt-5 mb-3'>
            <a href="/">
                <img src={logo} height={64} width={64} alt="logo" />
            </a>
        </div>
    )
}

export default Navbar