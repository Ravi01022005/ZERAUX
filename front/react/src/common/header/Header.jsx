import Logo from "../../assets/logo";
import "./Header.css"
import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
export default function Header() {
  return (
    <div className="header1 w-100 d-flex align-content-center">
        <div className="header w-75 d-flex justify-content-between">
            <div className="header w-75">
              <Link to={'/'} >{  <Logo />  }</Link>
              </div>
            <div className="header d-flex w-25 justify-content-between mt-4 " 
            style={{fontWeight:"lighter",paddingLeft:"80px"}}>
                {["ABOUT","SERVICES","CONTACT"].map((data,i)=>(
                    <div key={i} className="header ms-5" style={{fontSize:"14px"}}><Link className="link text-decoration-none text-light" to={`/${data}`}>{data}</Link></div>))}
            </div>
        </div>
    </div>
  )
}
