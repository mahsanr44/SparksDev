import React from 'react'

const Button = ({txt}:{txt:string}) => {
    return (
        <div>
            <button className='bg-green-600  text-white py-2 font-semibold rounded-sm font-sans px-2 overflow-hidden'>{txt}</button>
        </div>
    )
}

export default Button
