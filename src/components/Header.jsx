import { useState } from 'react';
import Navbar from '@material-tailwind/react/Navbar';
import NavbarContainer from '@material-tailwind/react/NavbarContainer';
import NavbarWrapper from '@material-tailwind/react/NavbarWrapper';
import NavbarBrand from '@material-tailwind/react/NavbarBrand';
import NavbarToggler from '@material-tailwind/react/NavbarToggler';
import NavbarCollapse from '@material-tailwind/react/NavbarCollapse';
import Nav from '@material-tailwind/react/Nav';
import NavLink from '@material-tailwind/react/NavLink';
import Image from '@material-tailwind/react/Image';

import { Link } from 'react-router-dom';

export default function DefaultNavbar() {
    const [openNavbar, setOpenNavbar] = useState(false);

    return (
        <div className=" shadow-md ">
            <Navbar color="blueGray" navbar>
                <NavbarContainer>
                    <NavbarWrapper>
                        <a
                            href="https://www.thinkxsoftware.com"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <div className="flex flex-row items-center justify-between">
                                <Image
                                    src="/assets/logo2.jpeg"
                                    className="h-12 w-12 mr-2"
                                    rounded={true}
                                    raised={true}
                                    alt="logo"
                                />

                                <NavbarBrand>Thinkx Cloud</NavbarBrand>
                            </div>
                        </a>
                        <NavbarToggler
                            onClick={() => setOpenNavbar(!openNavbar)}
                            color="white"
                        />
                    </NavbarWrapper>

                    <NavbarCollapse open={openNavbar}>
                        <Nav>
                            <div className="flex flex-col z-50 lg:flex-row lg:items-center">
                                <Link
                                    to="/"
                                    rel="noreferrer"
                                    className="text-white px-3"
                                >
                                    Home
                                </Link>

                                <Link
                                    to="/sharedhosting"
                                    rel="noreferrer"
                                    className="text-white px-3"
                                >
                                    Shared Hosting
                                </Link>

                                <Link
                                    to="/vpshosting"
                                    rel="noreferrer"
                                    className="text-white px-3"
                                >
                                    VPS Hosting
                                </Link>

                                <Link
                                    to="/ssl"
                                    rel="noreferrer"
                                    className="text-white px-3"
                                >
                                    SSL
                                </Link>

                                <Link
                                    to="/billing/cart.php?a=add&domain=register"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="text-white px-3"
                                >
                                    Domain
                                </Link>

                                <Link
                                    to="https://thinkxcloud.com/billing/index.php?rp=/login"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    <h2
                                        className=" md:mr-5 rounded-full   p-2 cursor-pointer text-center w-24 text-gray-900 bg-gray-200
                               hover:bg-blue-700 hover:text-white"
                                    >
                                        LOGIN
                                    </h2>
                                </Link>

                                <Link
                                    to="https://thinkxcloud.com/billing/register.php"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    <h2
                                        className=" md:mr-5 rounded-full   p-2 cursor-pointer text-center w-24 text-gray-900 bg-gray-200
                               hover:bg-blue-700 hover:text-white"
                                    >
                                        SIGN UP
                                    </h2>
                                </Link>
                            </div>
                        </Nav>
                    </NavbarCollapse>
                </NavbarContainer>
            </Navbar>
        </div>
    );
}
