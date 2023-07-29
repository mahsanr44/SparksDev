'use client'
import { ThemeContext } from '@/context/ThemeContext'
import React, { useContext } from 'react'

const DarkModeToggle = () => {
    const {toggle, mode}=useContext(ThemeContext)
    return (
        <div 
        onClick={toggle} className='flex cursor-pointer relative justify-center items-center border border-gray-500 rounded-full px-0.5'>
            <div>🌙</div>
            <div>🔆</div>
            <div
                className='h-5 w-5 absolute bg-primary rounded-full' style={mode === 'light' ? { left: "2px" } : { right: "2px" }}></div>
        </div>
    )
}

export default DarkModeToggle