import React, { useState } from 'react'
const LoginPage = () => {
  const [user, setuser]= useState({name:"", email:"", number:"", password:""})


      const handlechange = (e)=>{
         
      let name, value;
     
          name= e.target.name;
          
          value= e.target.value
      setuser({...user,[name]:value});
    }

    const  handleclick = ()=>{
    
      console.log(user);
    }
    return (
    <div className=' m-1 h-[220px] w-[200px] bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl cursor-pointer'>
      <div className='ml-2'>
        <h1 className='flex justify-center'>Sign Up</h1>

        <input value={user.name} onChange={handlechange} autoSave='off' className=' outline-none rounded-2xl m-1 pl-1 text-[12px] px-8 py-0.5' type="text" name='name' placeholder='Name' />


        <input value={user.email} onChange={handlechange}  className="outline-none rounded-2xl m-1 pl-1 text-[12px] px-8 py-0.5" type="email" name='email' placeholder='Email' /> <br/>  

        <input value={user.number} onChange={handlechange}  className="outline-none rounded-2xl m-1 pl-1 text-[12px] px-8 py-0.5" type="number" name='number' placeholder='Phone Number' /> <br/>  

        <input value={user.password} onChange={handlechange} className='outline-none rounded-2xl m-1 pl-1 text-[12px] px-8 py-0.5' type="password" name='password' placeholder='Password' /> <br />

        <div className='flex text-center text-[11px] ml-12'>
          <input type="checkbox" />
          <p>remember me</p>
        </div>
      </div>
      <a className='flex text-center text-[9px] ml-[57px]' href="">Forgot password</a>

      <button onClick={handleclick} className='border border-solid border-black rounded-2xl px-4 text-[12px] hover:bg-slate-300 hover:outline-none hover:border-none flex ml-14 mt-3 justify-center text-center'>Sign Up</button>
    </div>
  )
}

export default LoginPage
