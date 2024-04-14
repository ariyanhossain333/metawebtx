import React from 'react'

const Carddetails = (props, des, name) => {
    return (
        <div>


            <div className='outline-none bg-white w-[120px] p-1 rounded-sm ml-4 mt-3 hover:bg-gradient-to-r from-purple-500 to-pink-500 '>
                <h1 className='text-[9px] font-bold'>{props.des}</h1>
                <p className='text-[7px] font-medium'>{props.name}</p>
            </div>

        </div>
    )
}

export default Carddetails
