import React, { useState } from 'react'
import Carddetails from './Carddetails'
import LoginPage from './LoginPage'

const Cards = () => {

  return (
    <div className='flex flex-wrap justify-around  bg-gray-300'>
      <div className= "p-4">
        <h1 className='font-bold' >Courses</h1>
        <p className='font-thin text-[8px]
       '>Crestest offers a wide range of preparatory cources </p>

        <div className='flex flex-wrap cursor-pointer '>
          <div>
            <Carddetails  des={"Basic Conversation"} name={"beginner"} />
            <Carddetails  des={"Intermediate speaking"} name={"intermidiate"} />
          </div>

          <div>
            <Carddetails des={"Advance fluency"} name={"Advance"} />
            <Carddetails des={"Business communication"} name={"Business English"} />
          </div>

          <div>
            <Carddetails des={"IELTS preparation"} name={"Exam preparation"} />
            <Carddetails des={"TOEFL preparation"} name={"Exam preparation"} />
          </div>

          <div>
            <Carddetails des={"Cambridge exam"} name={"Exam preparation"} />
            <Carddetails des={"English pronounciation"} name={"Online English Courses"} />
          </div>
        </div>

      </div>



      <div>
        <LoginPage />
      </div>




    </div>
  )
}

export default Cards
