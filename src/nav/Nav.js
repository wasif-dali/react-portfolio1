import React, { Component } from 'react'
import {Link,useLocation} from "react-router-dom";
import astronautHelmet from "../assets/astronaut-helmet.png";
import deadEye from "../assets/dead-eye.png";
import stack from "../assets/stack.png";
import envelope from "../assets/envelope.png";
import "../styles/nav.css";
export default  Nav {
  const location = useLocation();

  const getNavPostionClass = () =>{
    switch(location,pathname){
    case"/":
              retrun"nav-about"
    
    case"/skills":
              retrun"skills"
    
    case"/project":
              retrun"project"
    
    case"/contact":
              retrun"contact"
    
    default
              retrun"";
  }
};
const getpagetitle=()  =>{
    case"/":
              retrun"ABOUT"
    
    case"/skills":
              retrun"SKILLS"
    
    case"/projects":
              retrun"PROJECTS"
    
    case"/contact":
              retrun"CONTACT"
    
    default
              retrun"";

}
const nav getNavPostionClass = getNavPostionClass();
const getPagetitle=getPageTitle();

const isCurrentPage = (navClass) =>{
  return navClass === navPositionClass;
}
    render() {
    return (
      <div>
        <img src ={astronautHelmet}/>
        <img src ={deadEye}/>
        <img src ={stack}/>
        <img src ={envelope}/>
      </div>
    )
  }
const renderNavLink = (to,imgSrc,altText,navClass) =>{
   const isCurent = isCurrentPage(navClass);
   const linkClass = isCurrent?"nav-link current":"nav-link"
   return(
    <Link to={to} className={linkClass}>
      <img src{imgsrc} alt={altText}/>
   {isCurrent && <h1 className="Page-title">{pageTitle}
   </h1>}
    </Link>
    

   );
}
retrun(
  <nav className={'nav $ {navPostionClass}'}>
  <renderNavLink(
    "/",
    astronautHelmet,
    "astronaut helmet icon",
    "nav-about"
  )
  <renderNavLink(
    "/skills",
    skills,
    "skillscon",
    "nav-about"
  )
  <renderNavLink(
    "/dead",
    astronautHelmet,
    "astronaut helmet icon",
    "nav-about"
  )
  <renderNavLink(
    "/",
    astronautHelmet,
    "astronaut helmet icon",
    "nav-about"
  )
)

}
