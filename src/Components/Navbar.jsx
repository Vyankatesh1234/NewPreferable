import React from 'react';
import PreferableIcon from "./Images/PreferableIcon.png";

import {
  Navbar,
  MobileNav,
  Typography,
  // Button,
  IconButton,
  // Input,
} from "@material-tailwind/react";
 
export function NavbarWithSearch() {
  const [openNav, setOpenNav] = React.useState(false);
 
  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false),
    );
  }, []);
  
  const navList = (
    <ul className="mt-2 mb-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-16">
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="flex items-center gap-x-2 p-1 font-thin text-white"
      >
 
        <a href="#" className="flex items-center">
          Students
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="flex items-center gap-x-2 p-1 font-thin text-white"
      >
        
        <a href="#" className="flex items-center">
          Setup <br /> CoE
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="flex items-center gap-x-2 p-1 font-thin text-white"
      >
        
        <a href="#" className="flex items-center">
          Join <br /> Network
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="flex items-center gap-x-2 p-1 font-thin text-white"
      >
        
        <a href="#" className="flex items-center">
          Resources
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="flex items-center gap-x-2 p-1 font-thin text-white"
      >
        
        <a href="#" className="flex items-center">
          Register
        </a>
      </Typography>
    </ul>
  );
 
  
  return (
    
    <Navbar className="mx-auto max-w-screen-3xl flex-shrink-0 bg-black pb-5">
      <div className="container mx-auto flex flex-wrap items-center justify-between">
        <Typography
          as="a"
          href="#"
          className="mr-4 cursor-pointer py-1.5 w-156 h-39 space-y-4 flex-shrink-0 text-[#F2F2F2] font-inter text-32 font-normal leading-normal capitalize"
        >
        </Typography>
        <div>
        <img className="h-16 w-22 mr-96" src={PreferableIcon} alt="Logo" />
        </div>
        <div className="hidden lg:block">{navList}</div>
          <div className="relative flex w-full gap-2 md:w-max">
            <div className="!absolute left-3 top-[13px]">
            </div>
          </div>
          
        <IconButton
          variant="text"
          className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
          ripple={false}
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              className="h-6 w-6"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </IconButton>
      </div>
      <MobileNav open={openNav}>
        <div className="container mx-auto">
          {navList}
        </div>
      </MobileNav>
    </Navbar>
  );
}