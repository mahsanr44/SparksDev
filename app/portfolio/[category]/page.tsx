import Button from '@/app/Components/Shared/Button'
import { Wrapper } from '@/app/Components/Shared/Wrapper'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import IllusImg from "@/app/Components/Assets/illustration.png"
import { notFound } from "next/navigation"
import { items } from './data'


const getData = (cat: string | number) => {
  const data = items[cat];

  if (data) {
    return data;
  }

  return notFound();
};
const Category = ({ params }: { params: { category: any } }) => {
  const data = getData(params.category)
  return (
    <div>
      <Wrapper>
        <div>
          <div className='mx-40 py-8 mt-2 space-y-2 flex-col justify-start items-center'>
            <h1 className='text-6xl font-extrabold'>Our Works</h1>
            <h2 className='font-extrabold text-xl ml-2 text-primary capitalize'>{params.category}</h2>
          </div>
          {
            data?.map((item: any) => {
              return (
                <div key={item.id} className="flex-col odd:flex-col-reverse  justify-center items-center space-x-16 mx-44 mt-10">
                  <div className='  md:flex lg:space-x-36 md:space-x-14  justify-center items-center  '>
                    <div className='space-y-3' >
                      <h1 className='font-extrabold text-3xl '> {item.title}</h1>
                      <p className='py-2 text-lg text-justify '>{item.desc}</p>
                      <div className='max-w-fit '>
                        <Link href={"/portfolio"} className='py-2 '>
                          <Button txt={'See More'} />
                        </Link>
                      </div>
                    </div>
                    <div className=''>
                      <Image className=' ' src={item.image} alt={'Hero '} width={1550} height={1550} />
                    </div>
                  </div>
                </div>
              )
            })
          }

        </div>
      </Wrapper>
    </div>
  )
}

export default Category
