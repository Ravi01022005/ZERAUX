import React from 'react'
import { Link } from 'react-router-dom'
import { TbBrandBebo } from "react-icons/tb";
import { SiLapce } from "react-icons/si";
import { LiaMicrochipSolid } from "react-icons/lia";
import "../styles/Services.css"
export default function Services() {
  const services=[[<TbBrandBebo/>, <SiLapce />,<LiaMicrochipSolid />
  ],["PRODUCT DEVELOPMENT","BRANDING","IT MAINTAINANCE & SECURITY"],["Crafting high-quality products end-to-end","Shaping identities that connect and endure","Protecting systems for seamless, secure performance"]]
  return (
    <>
<div>
  <div className='d-flex flex-column mt-5'> 
    <div className="sect1 d-flex flex-column align-content-center" id='font'>
      <div className='text-light text-center m-0' style={{fontSize:"60px",letterSpacing:"4px"}}>OUR <div style={{width:"20px",display:"inline-block"}}></div>SERVICES</div>

      <div className='bt d-flex flex-column  align-items-center ' style={{fontSize:"40px",letterSpacing:"4px"}}>
        <div>LUXURY GRADE SOLUTIONS IN IT,</div>
        <div>PRODUCT DEVELOPMENT AND BRANDING</div>
      </div>
    </div>
    <div className="sect2 d-flex justify-content-around mb-5 mt-5" style={{backgroundColor:"transparent"}}>
{[1,2,3].map((a,i)=>(
    <div  key={i}  className="inner col-2 d-flex flex-column justify-content-center align-items-center"style={{height:"200px",border:"1px solid #FFC97A",backgroundColor:"black",}}>
      <div className='bt' style={{fontFamily: "Playfair Display, Georgia, serif",fontWeight:"lighter"}}>{services[0][i]}</div>
<div className='text-light text-center' style={{fontWeight:"lighter",letterSpacing:"2px",fontSize:"20px"}} id='font' >{services[1][i]}</div>
<div className="c text-center m-3 text-light" style={{fontWeight:"lighter",letterSpacing:"2px"}}>{services[2][i]}</div>
</div>
))}
    </div>
    <div className="sect3 d-flex ms-5 me-5 mb-5 align-baseline">
      <div className='' style={{width:"65%"}}>
        <siLapce className='text-light' />
        <div style={{color:"#FFC97A",letterSpacing:"2px",fontSize:"36px"}} id='font' >Why Zeraux</div>
<div className='text-light mt-3' style={{letterSpacing:"1px",paddingRight:"100px"}} >      
          We don’t just create products - we craft experiences. From development to branding to security, every layer is refined to elevate your presence and protect your vision.
</div>
      </div>
      <div className='mt-3' style={{width:"35%"}}>
            <div className='text-center w-75 ms-5 mt-3'
      style={{
        border: ".5px solid #FFC97A",
        padding: "15px",
      }}
    >
      <Link className="landing text-decoration-none" to={"/CONTACT"}>
        <div className='bt text-center' >LET'S BUILD THINGS TOGETHER</div>
      </Link>
    </div>
      </div>
    </div>

  </div>
</div>
    </>
  )
}
