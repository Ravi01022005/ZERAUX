import React from 'react'
import axios from 'axios'
import {toast} from "react-toastify"
import "../styles/Contact.css"
import {useForm} from "react-hook-form"
export default function Contact() {
  const{register,reset,handleSubmit,formState:{errors}}=useForm({  mode: "onSubmit",
  reValidateMode: "onSubmit"});
  const handler=async(data)=>{
try{
const response= await axios.post("url",data);//fill with exact url point
console.log(response)
if(response.status==200){
toast.success(response.message);
}else{
toast.Failed(response.message);
}}catch(e){
toast.warning("Submission failed");
}finally{
    reset()
}
}
  return (
<div className='contact d-flex flex-column align-items-center h-100 mt-5'>
  <div className='head_of_contact d-flex flex-column align-items-center'>
    <div className='text-light' style={{fontSize:"60px",letterSpacing:"2px",fontFamily: "Playfair Display, Georgia, serif"
}}>GET IN TOUCH</div>
    <div className='bt text-center' style={{fontSize:"34px",letterSpacing:"2px"}}>LET'S ENGINEER TOMORROW<span style={{fontWeight:"lighter",fontSize:"34px"}}>'</span>S WORLD TOGETHER</div>
  </div>

  <div className='d-flex flex-column align-items-center w-100'>
     <form id='former' className='m-5 w-50 flex-column align-items-center text-light' style={{border:".5px solid #FFC97A",height:"18vw"}} onSubmit={handleSubmit(handler)}>
      
      <div className='ms-5 me-5 mt-4 mb-4 d-flex pb-3' style={{border:"none",borderBottom:".5px solid #FFC97A"}} >
        <div>Name</div>
  <input className='bt input1 ms-5'type="text" {...register('username',{max:"25",required:"username is required"})} />
  {errors.username && <p className='bt ms-5 d-block p-0 m-0'>{errors.username.message}</p>}
      </div>

      <div className='ms-5 me-5 mt-4 mb-4 d-flex pb-3' style={{border:"none",borderBottom:".5px solid #FFC97A"}} >
        <div className='d'>Email</div>
          <input className='bt input1 ms-5' type="email" {...register('mailId',{required:"email is required",pattern:/^\S+@\S+$/i})} />{errors.mailId && <p className='bt ms-5 d-block p-0 m-0'>{errors.mailId.message || "Invalid email"}</p>}

</div>
<div className='ms-5 me-5 mt-4 mb-4 d-flex pb-3' style={{border:"none",borderBottom:".5px solid #FFC97A"}}  >
  <div>Message</div>
         <input className='bt input1 ms-5' max={500} type="text" {...register('message')}/>
</div>


 
  </form>
  <button type='submit' form='former'  className='bt' style={{border:".5px solid #FFC97A",padding:"10px 50px",letterSpacing:"2px",fontSize:"1.5vw"}} >SUBMIT</button>
  </div>
 
</div>
  )
}
