import React from "react";
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <div className=" flex justify-between bg-black text-white rounded-lg px-6 py-8 ring-1 ring-slate-900/5 shadow-xl w-full h-full">
      <div className="text-4xl ">John</div>
      <div className="flex justify-between gap-10">
        <Link to='/'><p>Home</p>
        </Link>
          <Link to='/project'><p>Projects</p>
        </Link>
        <Link to='/contact'><p>Contacts</p>
        </Link>
      </div>
    </div>
  );
}
