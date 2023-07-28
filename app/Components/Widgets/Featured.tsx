import Image from 'next/image'
import React from 'react'

import { Wrapper } from '../Shared/Wrapper'
import ProductCard from '../Shared/ProductCard'


const getProductbyCategory = async () => {

}

const Featured = async () => {

    const result = await getProductbyCategory();

    return (
        <section>
            <Wrapper>
                <div>
                    <h1 className='text-2xl mt-20 text-[#30207a] font-bold font-serif flex justify-center items-center'>
                        Featured Products
                    </h1>
                </div>
                <div className='flex flex-wrap  mt-8 gap-10 md:mx-20  lg:mx-32 justify-around items-center text-center '>
                    

                </div>
            </Wrapper>
        </section>
    )
}

export default Featured
