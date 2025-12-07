import React from "react";
import "../styles/About.css"
import bg from  "../../assets/bg_image.png"
import { Link } from "react-router-dom";

export default function About(){

const data = [
  "We shape ideas with clarity and commitment, guiding them through development, advertising, and maintenance. Our work is reliable, intentional, and delivered through a simple, secure process that ensures lasting impact and client satisfaction.",
  
  "We help brands grow with quiet confidence, serving as a trusted partner for those who value thoughtful craft, steady support, and a focused approach to innovation, helping them evolve naturally while staying relevant over time."
];



    const principles=[["INNOVATION","FUTURISTIC","TRUST","IMPACT"],["Creating better ways to build","Preparing our work for what's next","Making things that truly help","Standing with the people who rely on us"]]
    return(
        <div
  className="about w-100 min-vh-100 d-flex flex-column mt-5"
  style={{
    backgroundClip:"transparent",
    backgroundImage: `url(${bg})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: "100vh",
  }}
>



    <div className="sect1 d-flex flex-column w-50 " style={{fontFamily: "Playfair Display, Georgia, serif",fontSize:"50px",letterSpacing:"5px", marginLeft:"clamp(4vw,8vw,10vw)",
}}> 
    <div className="text-light" style={{}}>EXCELLENCE IN WORK OUR FOUNDATION</div>
    <div style={{color:"#FFd97A"}}>FOR GENERATIONS</div>
    </div>




    <div className="sect-2 mt-5 text-light pt-4 pe-5 mb-5" style={{marginLeft:"clamp(4vw,8vw,10vw)",width:"35%"}} >
<div style={{color:"#FFC97A",fontFamily: "Playfair Display, Georgia, serif",fontSize:"30px"}}>MISSON and VISION</div>
{[1,2].map((a,i)=>(
<div className="mt-3" style={{lineHeight:"32.5px",wordSpacing:"1.2px",fontSize:"16px",fontWeight:"lighter"}}>
{data[i]}
</div>
))}

    </div>





<div className="d-flex justify-content-around mb-5" style={{backgroundColor:"transparent"}}>
{[1,2,3,4].map((a,i)=>(
<div className="inner col-2 d-flex flex-column justify-content-center align-items-center"style={{height:"200px",border:"1px solid #FFC97A",backgroundColor:"black",fontFamily: "Playfair Display, Georgia, serif",fontWeight:"lighter"}}>
<div style={{color:"#FFC97A",}} >{principles[0][i]}</div>
<div className="c text-center m-3 text-light">{principles[1][i]}</div>
</div>
))}
</div>

<div className="nav d-flex justify-content-center mt-3">
      <div className=" mb-5 me-3">
    <div
      style={{
        border: "2px solid #FFC97A",
        padding: "10px 50px",
      }}
    >
      <Link className="landing text-decoration-none" to={"/SERVICES"}>
        <div style={{ color: "white" }}>DISCOVER OUR SERVICES</div>
      </Link>
    </div>
  </div>
</div>
        </div>
    )
}