import React from 'react'
import Image from 'next/image'
import { Wrapper } from '../Components/Shared/Wrapper'
import Link from 'next/link'
export const metadata = {
  title: 'Our Blogs',
  description: 'Blogs by Mr. Ahsan Raza',
}

const getData = async () => {

  try {
    const LOCAL_URL = 'http://localhost:3000/api/posts'
    const res = await fetch(LOCAL_URL, {
      method: 'GET',
      cache: "no-store",
      headers: { 'Content-Type': 'application/json' }
    })
    if (!res.ok) {
      throw new Error(`Error fetching data`)
    }
    const blogs = await res.json();
    return blogs

  } catch (error) {
    console.log(error)
  }
}


const Blog = async () => {
  const blogs = await getData();
  const data = blogs;

  return (
    <div>
      <Wrapper>
        <div className='mx-40 py-8 mt-2 space-y-2 flex-col justify-start items-center'>
          <h1 className='text-6xl font-extrabold'>Our Blogs</h1>
        </div>
        {
          data?.success?.map((item: any) => {
            return (
              <>
                <Link href={`blog/${item._id}`}>
                  <div className='flex  justify-center items-center mx-40 space-x-10 mt-10'>
                    <div className='w-full h-48'>
                      <Image className='object-cover w-full h-48' src={item.image} alt={'Blog 1'} height={500} width={500} />
                    </div>
                    <div className='flex-col  justify-center items-center space-y-5'>
                      <h2 className='font-bold text-3xl'>{item.title}</h2>
                      <p className='text-justify'>{item.desc}</p>
                    </div>
                  </div>
                </Link>
              </>
            )
          })
        }
      </Wrapper>
    </div>
  )
}

export default Blog
