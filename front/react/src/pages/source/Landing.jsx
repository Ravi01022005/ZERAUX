import React from 'react'
import "../styles/Landing.css"
import LuxuryMesh from '../../common/LuxuryMesh'
import { Link } from 'react-router-dom'
export default function Landing() {
  return (
    <>
    <div className='Landingpage d-flex justify-content-center h-100 w-100'>
          <LuxuryMesh/>
        <div
  className="landing position-absolute"
  style={{
    top: "30%",
    right: "clamp(20px, -25vw, 200px)", 
    width: "clamp(300px, 45vw, 600px)",
    background: "balck",
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
  }}
>
  <div className='ms-5'
    style={{
      fontSize: "clamp(40px, 8vw, 80px)",
      color: "white",
      fontFamily: "Playfair Display, Georgia, serif",
      letterSpacing: "10px",
      fontWeight: "lighter",
    }}
  >
    ZERAUX
  </div>

  <div
  className='ms-5'
    style={{
      color: "white",
      fontFamily: "Playfair Display, Georgia, serif",
      fontSize: "clamp(18px, 2vw, 28px)",
      letterSpacing: "2px",
      marginTop: "20px",
    }}
  >
    INNOVATING LUXURY  
    <br />
    IN TECHNOLOGY
  </div>

  <div className="nav mt-5 ms-5">
    <div
      style={{
        border: "2px solid #FFC97A",
        padding: "10px 50px",
      }}
    >
      <Link className="landing text-decoration-none" to={"/About"}>
        <div style={{ color: "white" }}>LEARN MORE</div>
      </Link>
    </div>
  </div>
</div>

        <div></div>
        <div className='w-50'>
        </div>
        </div>
    </>
  )
}
