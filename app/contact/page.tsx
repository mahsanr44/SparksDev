import React from 'react'
import { Wrapper } from '../Components/Shared/Wrapper'
import Image from 'next/image'
import ContactImg from "@/app/Components/Assets/contact.png"
import Button from '../Components/Shared/Button'
const Contact = () => {
    return (
        <>
            <Wrapper>
                <div>
                    <div className='flex justify-center my-8'>
                    <h1 className='font-extrabold text-5xl'>Lets Keep in Touch</h1>
                    </div>
                        
                    <div className='flex justify-center items-center mt-12 space-x-20'>
                        <div>
                            <Image src={ContactImg} height={350} width={350} alt='Contact Us' />
                        </div>
                        <div className='flex-col justify-center items-center space-y-4 '>
                            <div>
                            <input type="text" placeholder='name' className='px-3 font-bold pr-16 border-2 bg-[#111] m-1 p-1' />
                            </div>
                            <div>
                            <input type="email" placeholder='email' className='px-3 font-bold pr-16 bg-[#111] border-2 m-1 p-1' />
                            </div>
                            <div>
                            <textarea name="message" placeholder='message' className='pl-2 font-bold border-2 bg-[#111] m-1 p-1' cols={30} rows={5}></textarea>
                            </div>
                            <div>
                                <Button txt='Send' />
                            </div>
                        </div>
                    </div>
                </div>
            </Wrapper>
        </>
    )
}

export default Contact
