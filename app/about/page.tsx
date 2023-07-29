import React from 'react'
import { Wrapper } from '../Components/Shared/Wrapper'
import Image from 'next/image'
const About = () => {
    return (
        <>
            <Wrapper>
                <div className='mx-32 mt-20'>
                    <div className='relative flex justify-center'>
                        <div className=' bg-slate-200 w-full h-72 '>
                            <Image className='grayscale object-cover h-72 w-full' src={"https://images.pexels.com/photos/3194521/pexels-photo-3194521.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"} alt='About us' height={150} width={500} />
                        </div>
                        <div className='absolute p-1 top-52  mr-[490px] flex items-baseline  flex-col  bg-primary text-white'>
                            <h1 className='font-extrabold text-2xl'>Digital Storytellers</h1>
                            <h2 className='font-bold text-xl'>
                                Handcrafting award winning digital experiences
                            </h2>
                        </div>
                    </div>
                    <div className='flex justify-evenly space-x-32 mt-7 text-justify'>
                        <div>
                            <h1 className='font-bold text-2xl'>Who We Are?</h1>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                Harum animi ratione hic deleniti odio soluta. Tenetur doloribus earum molestiae.
                                <br /><br />
                                repudiandae repellendus hic ratione iste dolor quas officiis. Accusamus, magnam.
                                Dolorum rem delectus recusandae voluptas ullam vitae,
                                distinctio at libero doloremque quidem assumenda quas blanditiis ab.
                                Lorem ipsum dolor sit amet consectetur, adipisicing eli.
                                <br />
                                <br />
                                Laboriosam voluptatem, labore doloribus accusantium temporibus alias
                                sunt assumenda sapiente nostrum ab at architecto sint facilis facere velit
                                vero inventore ex? Molestias exercitationem nostrum itaque non nihil facilis similique
                                aspernatur voluptates fuga iste repellat autem nulla?
                            </p>
                        </div>
                        <div>
                            <h1 className='font-bold text-2xl'>What We Do?</h1>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                Harum animi ratione hic deleniti odio soluta. Tenetur doloribus earum molestiae.
                                Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet. Lorem ipsum, dolor sit amet
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, laudantium?

                                <br />
                            </p>
                            <div className='space-y-2 pt-6'>

                                <p> - Create Dynamic Websites</p>
                                <p>  - Laboriosam voluptatem</p>
                                <p>  - Labore doloribus accusantium </p>
                                <p>  - Temporibus Alias</p>
                                <p>  - Create Web Pages </p>
                                <p> - Molestias exercitationem</p>
                                <p> - Create Static Websites</p>
                            </div>

                        </div>
                    </div>
                </div>
            </Wrapper>
        </>
    )
}

export default About
