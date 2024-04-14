import React from 'react'

const Footer = () => {
    return (
        <div className='flex flex-wrap justify-between p-7 bg-pink-400'> 
            <div className='text-[7px] '>
                <h1 className='font-bold text-[12px]'>THRIVE</h1>
                <p>Stay in the loop with our latest <br /> updates! subscribe to our newsletter <br /> for exclusive content and offers.</p> <br />
                <h2 className='font-bold'> 123 Main Street, Cityville, <br /> Country XYZ </h2> &nbsp; &nbsp;  <br />
               <div className='flex items-center'>
               <p className='border-black rounded-full bg-yellow-500 p-1 w-5 h-5'><i class="fa-brands fa-instagram fa-xl"></i></p>  &nbsp;  &nbsp; 
               <p className='border-black rounded-full bg-yellow-500 p-1 w-5 h-5'> <i class="fa-brands fa-linkedin fa-xl"></i></p> &nbsp;  &nbsp; 
                <p className='border-black rounded-full bg-yellow-500 p-1 w-5 h-5'><i class="fa-brands fa-facebook fa-xl"></i></p>
               </div>

            </div>

            <div className='text-[8px] list-disc'>
                <h1 className='font-bold text-[11px]'>Our Company</h1>

                <li>Home</li>
                <li>Courses</li>
                <li>pricing plan</li>
                <li>about</li>

            </div>
            <div className='text-[8px]'>
                <p className='font-bold text-[11px]' > Our Courses</p>
                <li>  Basic Conversation</li>
                <li>Intermidiate Speaking</li>
                <li>Advance Fluency</li>
                <li>Business communication</li>
            </div>

        </div>
    )
}

export default Footer
