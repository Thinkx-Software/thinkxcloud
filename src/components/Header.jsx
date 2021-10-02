import { useState } from 'react';
import Navbar from '@material-tailwind/react/Navbar';
import NavbarContainer from '@material-tailwind/react/NavbarContainer';
import NavbarWrapper from '@material-tailwind/react/NavbarWrapper';
import NavbarBrand from '@material-tailwind/react/NavbarBrand';
import NavbarToggler from '@material-tailwind/react/NavbarToggler';
import NavbarCollapse from '@material-tailwind/react/NavbarCollapse';
import Nav from '@material-tailwind/react/Nav';
import NavLink from '@material-tailwind/react/NavLink';


export default function DefaultNavbar() {
    const [openNavbar, setOpenNavbar] = useState(false);

    return (
        <div className="sticky top shadow-md">
             <Navbar color="blueGray" navbar>
            <NavbarContainer>
                <NavbarWrapper>
                    <a
                        href="https://www.thinkxsoftware.com"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <NavbarBrand>Thinkx Cloud</NavbarBrand>
                    </a>
                    <NavbarToggler
                        onClick={() => setOpenNavbar(!openNavbar)}
                        color="white"
                    />
                </NavbarWrapper>

                <NavbarCollapse open={openNavbar}>
                    <Nav>
                        <div className="flex flex-col z-50 lg:flex-row lg:items-center">
                        <NavLink
                                href="/"

                                rel="noreferrer"
                                ripple="light"
                            >
                           Home
                                
                            </NavLink>
                            <NavLink
                                href="/sharedhosting"
                                
                                rel="noreferrer"
                                ripple="light"
                            >
                           Shared Hosting
                                
                            </NavLink>
                            <NavLink
                                href="/vpshosting"
                            
                                rel="noreferrer"
                                ripple="light"
                            >
                                VPS Hosting
                            </NavLink>
                            <NavLink
                                href="https://thinkxcloud.com/billing/cart.php?a=add&domain=register"
                                target="_blank"
                                rel="noreferrer"
                                ripple="light"
                            >
                                Domain
                            </NavLink>
                            

                            <NavLink
                                href="https://thinkxcloud.com/billing/index.php?rp=/login"
                                target="_blank"
                                rel="noreferrer"
                                ripple="light"
                            >
                                <h2 className=" md:mr-5 rounded-full   p-2 cursor-pointer text-center w-24 text-gray-900 bg-gray-200
                               hover:bg-blue-700 hover:text-white
                    
                              ">
                                 LOGIN
                              </h2>
                            </NavLink>

                            <NavLink
                                href="https://thinkxcloud.com/billing/register.php"
                                target="_blank"
                                rel="noreferrer"
                                ripple="light"
                            >
                                <h2 className=" md:mr-5 rounded-full   p-2 cursor-pointer text-center w-24 text-gray-900 bg-gray-200
                               hover:bg-blue-700 hover:text-white
                    
                              ">
                                 SIGN UP
                              </h2>
                            </NavLink>


                            
                        </div>
                    </Nav>
                </NavbarCollapse>
            </NavbarContainer>
        </Navbar>


        </div>

    );
}

