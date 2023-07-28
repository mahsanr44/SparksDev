import React from 'react'
import { Wrapper } from '../Shared/Wrapper'
import HeroImg from "@/app/Components/Assets/hero.png"
import Image from 'next/image'
import Link from 'next/link'
import Button from '../Shared/Button'

const Hero = () => {
    return (
        <section>
            <Wrapper>
                <div >


                    <div className=' lg:p-10 p-5 md:flex lg:space-x-36 md:space-x-14  justify-center items-center lg:mx-20 pt-20 mt-20 '>
                        <div className='space-y-3'>
                            <h1 className='font-extrabold text-6xl bg-gradient-to-tl from-gray-200 to-green-500 bg-clip-text text-transparent'> Better Design for Your Digital Products</h1>
                            <p className='py-2 text-lg '>Turning your Idea into Reality. We bring together the teams from the
          global tech industry.</p>
                            <div className='max-w-fit'>
                                <Link href={"/portfolio"} className='py-2'>
                                    <Button txt={'See Our Works'} />
                                </Link>
                            </div>
                        </div>
                        <div className=''>
                            <Image className=' animate-bounce animate-infinite animate-duration-[7000ms] animate-delay-1000 ' src={HeroImg} alt={'Hero '} width={750} height={750} />
                        </div>
                    </div>
                </div>
            </Wrapper>
        </section>

    )
}

export default Hero
