import React from "react"
import { Outlet } from "react-router-dom"
import Nav from "./Nav"
import Footer from "./footer"

export default function Layout(){
  return (
    <>
     <div className=" layout  text-white bg-[rgb(26,37,47)">
          <Nav/>
          <Outlet/>
          <Footer/>
   </div>
    
    </>
  )
}