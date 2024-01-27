import React from 'react'
import { GetBookData } from './service/book.service'
import useFetch from './hook/useFetch'
import notfoundimg from '../src/img/404-error2.png';
import { useNavigate } from 'react-router-dom';

const NotFound = () => {
  const nav=useNavigate();

  const handleBack=()=>{
    nav("/")
        }
    
  return (
    <div className='w-full grid grid-cols-12'>
      <div className=" col-span-3"></div>
      <img className='col-span-6 flex items-center  object-cover' src={notfoundimg} alt="notfound.png" />
      <div className=" col-span-3">
      <button className=' ml-auto relative bottom-0    text-base px-5 py-3 leading-none border rounded text-blue-600 border-blue-600 hover:border-blue-600 hover:text-white hover:bg-blue-600 mt-4 my-5 ' onClick={handleBack}>Back To Home</button>

      </div>
    </div>
  )
}

export default NotFound
