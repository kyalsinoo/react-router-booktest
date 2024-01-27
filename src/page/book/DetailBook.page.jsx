import React from 'react';
import { GetBookData } from '../../service/book.service';
import useFetch from '../../hook/useFetch';
import {useNavigate,useParams} from "react-router-dom"
const DetailBookPage = () => {
    const {id}=useParams();
    const nav=useNavigate();
    const {data,error,loading}=useFetch(GetBookData,`book/${id}`);
    const handleBack=()=>{
nav(-1)
    }
  return (
    <div>
      {loading ? (
        <div>
          

<div role="status" className="flex items-center justify-center h-56 max-w-sm bg-gray-300 rounded-lg animate-pulse dark:bg-gray-700">
  <svg className="w-10 h-10 text-gray-200 dark:text-gray-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 20">
    <path d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.98 2.98 0 0 0 .13 5H5Z" />
    <path d="M14.066 0H7v5a2 2 0 0 1-2 2H0v11a1.97 1.97 0 0 0 1.934 2h12.132A1.97 1.97 0 0 0 16 18V2a1.97 1.97 0 0 0-1.934-2ZM9 13a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-2a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2Zm4 .382a1 1 0 0 1-1.447.894L10 13v-2l1.553-1.276a1 1 0 0 1 1.447.894v2.764Z" />
  </svg>
  <span className="sr-only">Loading...</span>
</div>

        </div>
      ) : (
        <>
          {error ? (
            <h1>Error</h1>
          ) : (
            <div className="pb-5">
            
              <div className='mb-5 grid grid-cols-12'>
                
                <img
                className=' col-span-6 rounded-lg'
                  src={data.imgs}
                  alt="img.jpg"
                />
                <div className=" col-span-6 flex items-start ">
                <button className=' ml-auto relative bottom-0    text-base px-5 py-3 leading-none border rounded text-blue-600 border-blue-600 hover:border-blue-600 hover:text-white hover:bg-blue-600 mt-4 my-5 ' onClick={handleBack}>Back</button>

                </div>
              </div>
              <div>
                <h1 className=" text-2xl mb-4  font-bold">{data.book}</h1>
                <h2 className="text-xl mb-2 text-gray-400">{data.author}</h2>
              </div>
              <div className='text-lg'>
                <p>{data.description}</p>
              </div>
            </div>
          )}
        </>
      )}
    </div>
  )
}

export default DetailBookPage
