import { Wrapper } from '@/app/Components/Shared/Wrapper'
import Image from 'next/image'
import React from 'react'
import AppImg from "@/app/Components/Assets/apps.jpg"
import AhsanImg from "@/app/Components/Assets/ahsan.jpg"
import { notFound } from 'next/navigation'

interface IProps {
  _id: string,
  title: string,
  username: string,
  image: string,
  content: string,
  desc: string,
  createdAt: string;
  updatedAt: string;
}

const getData = async (id: string) => {

  try {
    const LOCAL_URL = `http://localhost:3000/api/posts/${id}`
    const res = await fetch(LOCAL_URL, {
      method: 'GET',
      cache: "no-store",
      headers: { 'Content-Type': 'application/json' }
    })
    if (!res.ok) {
      return notFound();
    }
    const blogs = await res.json();
    console.log(blogs)
    return blogs

  } catch (error) {
    console.log(error)
  }
}

export async function generateMetadata({ params }: { params: { id: string } }) {

  const post = await getData(params.id)
  return {
    title: post.success.title,
    description: post.success.desc,
  };
}

const BlogPost = async ({ params }: { params: { id: string } }) => {

  const blog = await getData(params.id);
  const data = blog.success


  return (
    <div>
      <Wrapper>
        <div className='mx-10 mt-10'>
          <div className='flex justify-center items-center'>
            <div className='space-y-4'>
              <h2 className='font-bold text-3xl '>{data.title}</h2>
              <p className='text-justify pr-10'>{data.desc}</p>
              <div className="flex items-center space-x-3">
                <Image className="w-10 h-10 rounded-full" src={AhsanImg} alt="avatar" />
                <div className="font-medium ">
                  <div>{data.username}</div>
                </div>
              </div>
            </div>
            <div className='w-[1600px] h-56'>
              <Image className='object-cover w-[1600px] h-56' height={200} width={200} src={AppImg} alt='Blog IMG' />
            </div>
          </div>
          <div>
          </div>
          <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-500" />

          <div className='text-justify mt-16'>
            <p>{data.content}</p>
            <br />
            <p>{data.content}</p>
            <br />
            <p>{data.content}</p>
          </div>
        </div>
      </Wrapper>
    </div>
  )
}

export default BlogPost
