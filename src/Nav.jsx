import React from "react"
import { NavLink } from "react-router-dom"


export default function Nav(){
  return (
    <>
     <div className="navbar  text-white fixed top-0   p-5 bg-[rgb(44,62,80)]">
     <div className="navbar-start">
      <h1 class=" text-2xl sm:text-xl mx-3 md:text-4xl "> Start FrameWork</h1>
     </div>
     <div className="navbar-center fixed right-6
     top-5 invisible sm:visible ">
       <NavLink to={""} className="btn hover:bg-blue-200  btn-ghost text-3xl">Home</NavLink>
       <NavLink to={"about"} className="btn hover:bg-blue-200  btn-ghost text-3xl">About</NavLink>
       <NavLink to={"contact"} className="btn hover:bg-blue-200  btn-ghost text-3xl">Contact</NavLink>
     </div>
     <div className="navbar-end">
     <div className="dropdown visible sm:invisible  mx-6">
         <div
           tabIndex={0}
           role="button"
           className="btn mr-4 hover:outline outline-gray-900  btn-ghost btn-circle"
         >
           <svg
              className="h-5    w-5"
             fill="none"
             viewBox="0 0 24 24"
             stroke="currentColor"
           >
             <path
               strokeLinecap="round"
               strokeLinejoin="round"
               strokeWidth="2"
               d="M4 6h16M4 12h16M4 18h7"
             />
           </svg>
         </div>
         <ul
           tabIndex={0}
    className="menu   bg-[rgb(44,62,80)] -mx-[222px] menu-sm dropdown-content mt-3 z-[1] p-22   text-white shadow   rounded-box w-[500%]   "
         >
           <li>
             <NavLink to={""} class="text-lg hover:bg-blue-400 " >Homepage</NavLink>
           </li>
           <li>
             <NavLink to={"contact"} class="text-lg ">Contact</NavLink>
           </li>
           <li>
             <NavLink to={"about"} class="text-lg ">About</NavLink>
           </li>
         </ul>
       </div>
     </div>
   </div>
    
    </>
  )
}