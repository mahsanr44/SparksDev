import { Wrapper } from '@/app/Components/Shared/Wrapper'
import Image from 'next/image'
import React from 'react'
import AppImg from "@/app/Components/Assets/apps.jpg"
import AhsanImg from "@/app/Components/Assets/ahsan.jpg"

const BlogPost = () => {
  return (
    <div>
      <Wrapper>
        <div className='mx-10 mt-10'>
          <div className='flex justify-center items-center'>
            <div className='space-y-4'>
              <h2 className='font-bold text-3xl '>My First Blog Heading Here</h2>
              <p className='text-justify pr-10'>Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Repellendus doloribus unde asperiores minima sint quasi aliquam labore architecto veniam accusamus similique ut,
                aperiam modi? Libero enim est soluta quae recusandae? lorem.</p>
              <div className="flex items-center space-x-3">
                <Image className="w-10 h-10 rounded-full" src={AhsanImg} alt="avatar" />
                <div className="font-medium ">
                  <div>Ahsan Raza</div>
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
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
              Beatae eaque neque esse laborum molestiae vel, reprehenderit aspernatur officia
               veniam repellat facilis exercitationem et  Lorem ipsum dolor sit amet consectetur,
                adipisicing elit. Cupiditate minus sequi cum natus quisquam repellendus illo saepe distinctio sed, 
                necessitatibus voluptas dolorum, quia repudiandae?
                Praesentium repudiandae magnam quod incidunt fugiat.
              cupiditate recusandae odit facere necessitatibus magnam dolorum.</p>
              <br />
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
              Beatae eaque neque esse laborum molestiae vel, reprehenderit aspernatur officia
               veniam repellat facilis exercitationem et  Lorem ipsum dolor sit amet consectetur,
                adipisicing elit. Cupiditate minus sequi cum natus quisquam repellendus illo saepe distinctio sed, 
                necessitatibus voluptas dolorum, quia repudiandae?
                Praesentium repudiandae magnam quod incidunt fugiat.
              cupiditate recusandae odit facere necessitatibus magnam dolorum.</p>
          
          <br />
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
              Beatae eaque neque esse laborum molestiae vel, reprehenderit aspernatur officia
               veniam repellat facilis exercitationem et  Lorem ipsum dolor sit amet consectetur,
                adipisicing elit. Cupiditate minus sequi cum natus quisquam repellendus illo saepe distinctio sed, 
                necessitatibus voluptas dolorum, quia repudiandae?
                Praesentium repudiandae magnam quod incidunt fugiat. Lorem ipsum dolor 
                sit amet consectetur adipisicing elit. Corrupti, eaque. Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, exercitationem?
              cupiditate recusandae odit facere necessitatibus magnam dolorum.</p>
              </div>
        </div>
      </Wrapper>
    </div>
  )
}

export default BlogPost
