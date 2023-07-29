import React from 'react'

const Button = ({txt}:{txt:string}) => {
    return (
        <div>
            <button className='bg-primary  text-white py-2 font-semibold rounded-sm font-sans px-4 overflow-hidden'>{txt}</button>
        </div>
    )
}

export default Button
