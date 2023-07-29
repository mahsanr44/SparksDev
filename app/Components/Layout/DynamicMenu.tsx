'use client'
import Link from 'next/link';
import React, { useState } from 'react'
import { AlignJustify } from 'lucide-react';
import Button from '../Shared/Button';
import DarkModeToggle from '../Widgets/DarkModeToggle';

const DynamicMenu = () => {
  let allLinks = [
    { name: " Home", link: "/" },
    { name: "Portfolio", link: "/portfolio" },
    { name: "Blog", link: "/blog" },
    { name: "About", link: "/about" },
    { name: "Contact", link: "/contact" },
    { name: "Dashboard", link: "/dashboard" },

  ];
  let [open, setOpen] = useState(false);
  return (
    <div>
      <div onClick={() => setOpen(!open)} className='md:py-7 md:mx-5 mt-3 md:px-2 lg:px-12  md:justify-between md:items-center md:hidden  absolute right-8 top-6 cursor-pointer '>
        <AlignJustify name={open ? 'close' : 'menu'}></AlignJustify>
      </div>

      <ul className={` lg:space-x-8 md:space-x-7  md:bg-transparent  md:mr-0  md:flex md:items-center md:pb-0 pb-12 absolute md:static  md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? 'top-20 ' : 'top-[-490px]'}`}>
 <DarkModeToggle/>
        {
          allLinks.map((item) => (
            <li key={item.name}  >
              <Link  href={item.link}>{item.name}</Link>
            </li>
          ))
        }
       
      <Button txt={'Logout'}/>
      </ul>
    </div>
  )
}

export default DynamicMenu
