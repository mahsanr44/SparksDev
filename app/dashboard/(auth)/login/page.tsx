'use client'
import { Wrapper } from '@/app/Components/Shared/Wrapper'
import { signIn, useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import React from 'react'

const Login = () => {

  const router = useRouter()
  const session = useSession()

  if (session.status === 'loading') {

    return <div>  Loading...</div>
  }

  if (session.status === 'authenticated') {

    router?.push('/dashboard')
    
  }

  const handleSubmit = async (e: {
    target: any; preventDefault: () => void
  }) => {
    e.preventDefault();
    const email = e.target[0].value;
    const password = e.target[1].value;

    signIn('credentials', { email, password });
  }
  return (
    <Wrapper>
      <div>
        <div className='flex-col mt-20 justify-center items-center space-y-5'>
          <div className='flex justify-center items-center mt-12 space-x-20'>
            <form
              onSubmit={handleSubmit} className='flex-col justify-center items-center space-y-4'>
              <div>
                <input type="email" placeholder='email' required className='px-3 font-bold pr-16 border-2  m-1 p-1 py-2' />
              </div>
              <div>
                <input type="password" placeholder='password' required className='px-3 font-bold pr-16 border-2  m-1 p-1 py-2' />
              </div>
              <div className='flex justify-center items-center bg-red-500 overflow-hidden rounded-sm mx-1'>
                <button className='font-bold text-white py-3   font-sans px-4 '>Login</button>
              </div>
            </form>
          </div>
          <div className='flex justify-center items-center'>
            <div className=' bg-primary font-bold  overflow-hidden rounded-sm '>
              <button className='  py-3 px-[86px]  text-white font-sans'
                onClick={() => signIn("google")}>Login with Google</button>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>

  )
}

export default Login
