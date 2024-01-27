import React, { useEffect, useState } from 'react'

import useFetch from './hook/useFetch'
import { GetBookData } from './service/book.service';
import { GetAuthorData } from './service/author.service';
import {Routes,Route} from "react-router-dom"
import { HomePage,DetailBookPage } from './page';
import { NavComponents } from './components';
import NotFound from './Not.found';
const App = () => {
  const {loading,data,error}=useFetch(GetBookData,"book");
   
  return (
    <div className='main'>
      <NavComponents/>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/detail/:id' element={<DetailBookPage/>}/>
        <Route path='*' element={<NotFound/>}/>
      </Routes>
   
    </div>
  )
}

export default App

//custom hook
// =>bulid in hook =>useState,useEffect,useRef,useContext,useRender,useLayoutEffect,useId,useTransition,useCallback,useMemo,etc...
// => lib provide hook=>
// {loading?(
//   <h1>Loading....</h1>
//   ):(
//     <>{data? <>{JSON.stringify(data)}</>:<h1>{error}</h1> }</>
//   )}