'use client'
import { Wrapper } from '@/app/Components/Shared/Wrapper'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'

const Register = () => {

    const [err, setErr] = useState(false)
    const router = useRouter()
    const handleSubmit = async (e: {
        target: any; preventDefault: () => void
    }) => {
        e.preventDefault();
        const name = e.target[0].value;
        const email = e.target[1].value;
        const password = e.target[2].value

        try {

            const LOCAL_URL = 'http://localhost:3000/api/auth/register'
            const res = await fetch(LOCAL_URL, {
                method: 'POST',
                cache: "no-store",
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    name, email, password
                }),
            });
            res.status === 201 && router.push('/dashboard/login?success=Account Created Successfully')
        } catch (error) {
            setErr(true)

        }

    }
    return (
        <div>
            <Wrapper>
                <div className='flex-col justify-center items-center space-y-5'>
                    <div className='flex justify-center items-center mt-12 space-x-20'>
                        <form
                            onSubmit={handleSubmit} className='flex-col justify-center items-center space-y-4'>
                            <div>
                                <input type="text" placeholder='username' className='px-3 font-bold pr-16 border-2  m-1 p-1 py-2' required />
                            </div>
                            <div>
                                <input type="email" placeholder='email' required className='px-3 font-bold pr-16 border-2  m-1 p-1 py-2' />
                            </div>
                            <div>
                                <input type="password" placeholder='password' required className='px-3 font-bold pr-16 border-2  m-1 p-1 py-2' />
                            </div>
                            <div className='flex justify-center items-center bg-red-500 overflow-hidden rounded-sm mx-1'>
                                <button className='font-bold text-white py-3   font-sans px-4 '>Register with a New Account</button>
                            </div>
                        </form>
                    </div>

                    {err && "Something went wrong!"}

                    <div className='flex justify-center items-center '>
                        <Link href={'/dashboard/login'} className=' bg-primary overflow-hidden rounded-sm mx-1'>
                            <button className='font-bold text-white py-3   font-sans px-10 '>Login with an Existing Account</button>
                        </Link>
                    </div>
                </div>
            </Wrapper>
        </div>
    )
}

export default Register