import React from 'react'

const Header = () => {
  return (
     <div className='mt-0 pt-0 p-2 flex flex-wrap justify-around items-center bg-purple-400'>
        <div> <img className='h-10 w-10' src="https://media.licdn.com/dms/image/D560BAQH0MmYXif-x4w/company-logo_200_200/0/1707916120806/metawebtx_it_logo?e=1720656000&v=beta&t=KXsksHbLqo98zsu1QGG6vEAJ7xzUMgJnft7H7_Yi_u4" alt="logo" /></div>

        <ul className='flex justify-between ml-3 gap-9'>
            <li>Home</li>
            <li>About</li>
            <li>Service</li>
            <li>Contact</li>
        </ul>
     </div>

  )
}

export default Header
