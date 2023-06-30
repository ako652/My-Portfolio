import React from "react";

import image from '../images/imag1.jpg'

export default function Projects() {
  return (
    <div className="bg-black text-white h-screen ">
      <h1 className="text-3xl md:mb-10">Skills</h1>
      <div className="grid grid-cols-2 md:flex justify-around">
        <p className="text-3xl transform hover:scale-150">Javascript</p>
        <p className="text-3xl transform hover:scale-150">Redux</p>
        <p className="text-3xl transform hover:scale-150">tailwind CSS|MUI</p>
        <p className="text-3xl transform hover:scale-75"> React |NodeJs |expressJs| mongoDB</p>
      </div>
      <div className="grid  m-4 gap-4  lg:flex justify-center ">
        <div>
          <img src={image} alt="yummy" className=" w-48 md:w-96  lg:transform hover:animate-bounce" />
        </div>
        <div className=" mt-0 md:mt-20 ">
          <h1>Yummy page</h1>
          <p>description : MUI , Javascript, React </p>
           <button className="bg-black text-white hover:bg-sky-700 ... w-24 rounded-full border-2 border-indigo-200 border-y-indigo-500 ">
           <a href="https://github.com/ako652/Food_Yummy_Prpject" target="_blank"  rel="noreferrer" > github</a> 
          </button>
        </div>

      </div>
      <div className="grid m-2 gap-2 md:m-2 gap-2 lg:flex justify-center lg:m-0 ">
         <div className=" mt-0 md:mt-20">
          <h1>Products API</h1>
          <p>description : MUI , Javascript, React </p>
           <button className="bg-black text-white hover:bg-sky-700 ... w-24 rounded-full border-2 border-indigo-200 border-y-indigo-500 ">
           <a href="https://github.com/ako652/FrontEnd-ProJect" target="_blank"  rel="noreferrer" > github</a> 
          </button>
        </div>
        <div>
          <img src={image} alt="yummy" className=" w-48 md:w-96   lg:transform hover:animate-bounce"/>
        </div>
       

      </div>
      
    </div>
  );
}
