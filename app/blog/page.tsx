import React from 'react'
import IllusImg from "@/app/Components/Assets/illustration.png"
import WebImg from "@/app/Components/Assets/websites.jpg"
import AppImg from "@/app/Components/Assets/apps.jpg"
import Image from 'next/image'
import { Wrapper } from '../Components/Shared/Wrapper'
import Link from 'next/link'

const Blog = () => {
  return (
    <div>
      <Wrapper>
      <div className='mx-40 py-8 mt-2 space-y-2 flex-col justify-start items-center'>
        <h1 className='text-6xl font-extrabold'>Our Blogs</h1>
      </div>
      <Link href={'/blog/id'}>
      <div className='flex justify-center items-center mx-40 space-x-10 mt-10'>
        <div className='w-full h-48'>
          <Image className='object-cover w-full h-48' src={IllusImg} alt={'Blog 1'} height={500} width={500} />
        </div>
        <div className='flex-col justify-center items-center space-y-5'>
          <h2 className='font-bold text-3xl'>My First Blog Heading Here</h2>
          <p className='text-justify'>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Vel suscipit veniam unde perspiciatis repellendus eos, sequi,
            cupiditate quidem blanditiis dolores Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, quibusdam!
            Eaque voluptatum ab ea est
            ad iusto quia facilis fugiat quis pariatur Lorem ipsum dolor sit amet,
            consectetur adipisicing elit. Ut, natus!.</p>
        </div>
      </div>
      </Link>
      <Link href={'/blog/id'}>
      <div className='flex justify-center items-center mx-40 space-x-10 mt-10'>
      <div className='w-full h-48'>
          <Image className='object-cover w-full h-48' src={WebImg} alt={'Blog 1'} height={500} width={500} />
        </div>
        <div className='flex-col justify-center items-center space-y-5'>
          <h2 className='font-bold text-3xl'>My First Blog Heading Here</h2>
          <p className='text-justify'>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Vel suscipit veniam unde perspiciatis repellendus eos, sequi,
            cupiditate quidem blanditiis dolores Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, quibusdam!
            Eaque voluptatum ab ea est
            ad iusto quia facilis fugiat quis pariatur Lorem ipsum dolor sit amet,
            consectetur adipisicing elit. Ut, natus!.</p>
        </div>
      </div>
      </Link>
      <Link href={'/blog/id'}>
      <div className='flex justify-center items-center mx-40 space-x-10 mt-10'>
      <div className='w-full h-48'>
          <Image className='object-cover w-full h-48' src={AppImg} alt={'Blog 1'} height={500} width={500} />
        </div>
        <div className='flex-col justify-center items-center space-y-5'>
          <h2 className='font-bold text-3xl'>My First Blog Heading Here</h2>
          <p className='text-justify'>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Vel suscipit veniam unde perspiciatis repellendus eos, sequi,
            cupiditate quidem blanditiis dolores Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, quibusdam!
            Eaque voluptatum ab ea est
            ad iusto quia facilis fugiat quis pariatur Lorem ipsum dolor sit amet,
            consectetur adipisicing elit. Ut, natus!.</p>
        </div>
      </div>
      </Link>
      </Wrapper>
    </div>
  )
}

export default Blog
