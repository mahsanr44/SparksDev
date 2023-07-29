import React from 'react'
import { Wrapper } from '../Components/Shared/Wrapper'
import Image from 'next/image'
import WebImg from "@/app/Components/Assets/websites.jpg"
import AppImg from "@/app/Components/Assets/apps.jpg"
import IllusImg from "@/app/Components/Assets/illustration.png"
import Link from 'next/link'

const Portfolio = () => {
  return (
    <div>
      <Wrapper>
        <div>
          <div className='mx-40 py-8 mt-2 space-y-2 flex-col justify-start items-center'>
            <h1 className='text-6xl font-extrabold'>Our Works</h1>
            <h2 className='font-extrabold text-xl ml-2'>Choose a Gallery</h2>
          </div>
          <div className='flex justify-center items-center space-x-20'>
            <Link href={'/portfolio/illustrations'} >
            <div className='border-4 w-52 h-72 relative  text-gray-300 hover:text-primary hover:cursor-pointer'>
              <Image className='object-cover w-52 h-[279px]' src={IllusImg} alt={'Illustrations'} width={300} height={300} />
              <div className='absolute p-1 px-2 top-60 '>
                <h1 className='font-bold text-2xl  '>Illustrations</h1>
              </div>
            </div>
            </Link>
            <Link href={'/portfolio/websites'} >
            <div className='border-4 w-52 h-72 relative hover:text-primary text-gray-300 hover:cursor-pointer'>
              <Image className='object-cover w-52 h-[279px]' src={WebImg} alt={'Websites'} width={300} height={300} />
              <div className='absolute p-1 px-2 top-60 '>
                <h1 className='font-bold text-2xl  '>Websites</h1>
              </div>
            </div>
            </Link>
            <Link href={'/portfolio/applications'} >
            <div className='border-4 w-52 h-72 relative hover:text-primary text-gray-300 hover:cursor-pointer'>
              <Image className='object-cover w-52 h-[279px]' src={AppImg} alt={'Applications'} width={300} height={300} />
              <div className='absolute p-1 px-2 top-60 '>
                <h1 className='font-bold text-2xl  '>Applications</h1>
              </div>
            </div>
            </Link>
          </div>
        </div>
      </Wrapper>
    </div>
  )
}

export default Portfolio
