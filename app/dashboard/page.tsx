"use client"
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import React from 'react'
import useSWR from 'swr'
import { Wrapper } from '../Components/Shared/Wrapper'
import Image from 'next/image'
import Button from '../Components/Shared/Button'
const Dashboard = () => {

  const router = useRouter();
  const session = useSession();
  const fetcher = async (...args: Parameters<typeof fetch>) => fetch(...args).then((res) => res.json())

  const { data, mutate, isLoading } = useSWR(`/api/posts?username=${session?.data?.user?.name}`, fetcher);
  console.log(data)
  if (session.status === 'loading') {
    return <p>Loading...</p>
  }
  if (session.status === 'unauthenticated') {
    router?.push('/dashboard/login')
    return null;
  }

  const handleSubmit = async (e: {
    target: any; preventDefault: () => void
  }) => {
    e.preventDefault();

    const title = e.target[0].value;
    const desc = e.target[1].value;
    const image = e.target[2].value;
    const content = e.target[3].value;

    try {

      const LOCAL_URL = 'http://localhost:3000/api/posts'
      const data = await fetch(LOCAL_URL, {
        method: 'POST',
        cache: "no-store",
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          title, desc, image, content, username: session?.data?.user?.name
        }),
      }
      )
      mutate();
      e.target.reset();
    } catch (error) {
      console.log(error);
    }
  }
  const handleDelete = async (id: string) => {
    try {
      await fetch(`/api/posts/${id}`, {
        method: "DELETE",
      });
      mutate();
    } catch (err) {
      console.log(err);
    }
  };

  if (session.status === 'authenticated') {
    return (
      <div>
        <Wrapper>
          <div className='flex justify-center items-center space-x-5 mt-10'>


            <div className='grid grid-cols-1 gap-5 '>
              <h1 className='font-bold text-4xl col-span-3'>My Blogs</h1>
              {isLoading ? "loading"
                : data ?
                  (
                    data?.success.map((item: any) => (
                      <div key={item._id} className='flex items-center space-x-5'>
                        <div className='flex-col  justify-center items-center space-y-5'>
                          <h2 className='font-bold text-3xl'>{item.title}</h2>
                        </div>
                        <div className='w-32 h-32'>
                          <Image className='object-cover w-32 h-32' src={item.image} alt={'Blog 1'} height={200} width={200} />
                        </div>
                        <div className='flex justify-end mx-1 items-right'>
                    <button
                    onClick={()=>handleDelete(item._id)}
                     className='bg-red-500  text-white py-2 font-semibold rounded-sm font-sans px-4 overflow-hidden'>
                      Delete</button>
                  </div>
                      </div>
                    ))
                  ) : (
                    <p>No data available.</p>
                  )}
            </div>
            <div className='flex justify-center items-center mt-16 space-x-20'>
              <div className='flex-col justify-center items-center space-y-4 '>
                <form onSubmit={handleSubmit}>
                  <div>
                    <input type="text" placeholder='Title' className='px-3 text-black font-bold pr-16 border-2  m-1 p-1' />
                  </div>
                  <div>
                    <input type="text" placeholder='Description' className='px-3 text-black  font-bold pr-16  border-2 m-1 p-1' />
                  </div>
                  <div>
                    <input type="text" placeholder='Image' className='px-3 text-black  font-bold pr-16  border-2 m-1 p-1' />
                  </div>
                  <div>
                    <textarea name="message" placeholder='Content' className='pl-2 text-black font-bold border-2  m-1 p-1' cols={30} rows={5}></textarea>
                  </div>
                  <div>
                  </div>
                  <div className='flex justify-end mx-1 items-right'>
                    <Button txt='Post' />
                  </div>
                </form>
              </div>
            </div>
          </div>
        </Wrapper >
      </div >
    )
  }

}

export default Dashboard
