import React from "react";
import { Link } from "react-router-dom";
import image from '../images/profile.jpeg'

export default function Home() {
  return (
    <div className="bg-black grid h-screen grid-cols-1 content-center md:grid-cols-2 content-center  text-white  ">
      <div className="md:m-2 shadow-2xl" >
        <h1 className="text-9xl font-black ">JOHN</h1>
        <div className="grid">
          <h2 className="text-3xl"><span className="text-lime-500">Full</span> <span className="text-lime-500">stack</span> <span className="text-pink-950">developer</span></h2>
          <a href="https://github.com/ako652" target="_blank"  rel="noreferrer" >
            click to view gitHub profile
          </a>
          <div className="m-3">
          <button className="bg-black hover:bg-sky-700 ... w-24 rounded-full border-2 border-indigo-200 border-y-indigo-500 ">
           <Link to='/contact'>contact</Link> 
          </button>
          </div>
        </div>
      </div>
      <div className="ml-28 md:ml-20">
        <img src={image} alt="profile picture" className='w-48 h-64 object-cover rounded-lg transform transition-all hover:scale-150 duration-200 delay-100'/>
      </div>
    </div>
  );
}
