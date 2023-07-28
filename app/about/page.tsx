import React from 'react'
import { Wrapper } from '../Components/Shared/Wrapper'
import Aboutimg from "../Components/Assets/contact.png"
import Image from 'next/image'
const About = () => {
    return (
        <>
            <Wrapper>
                <div>

                    <div>
                        <Image src={Aboutimg} alt='About us' height={100} width={300} />
                    </div>
                    <div className='flex justify-evenly space-x-32 mx-14 text-justify'>
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
                        
                                <div className='space-y-2 pt-6'>

                              
                          
                                <p> - Create Dynamic Websites</p>
                                <p>  - Laboriosam voluptatem</p>
                                <p>  - Labore doloribus accusantium </p>
                                <p>  - Temporibus Alias</p>
                                <p>  - Create Web Pages </p>
                                <p> - Molestias exercitationem</p>
                                <p> - Create Static Websites</p>  
                                </div>
                                </p>
                        </div>
                    </div>
                </div>
            </Wrapper>
        </>
    )
}

export default About
