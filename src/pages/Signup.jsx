import React, { useState } from 'react'
import Nav2 from '../components/Nav2'
import { FaArrowRight } from "react-icons/fa6";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import FeaturesCard from '../components/FeaturesCard';
import globalcall from "../assets/svgs/globalcall.svg"
import chat from "../assets/svgs/chat.svg"
import tools from "../assets/svgs/tools.svg"
import com from "../assets/svgs/communication.svg"
import scalable from "../assets/svgs/scalable.svg"
import Name from '../components/inputs/Name';
import Email from '../components/inputs/Email';
import { IoIosArrowBack } from "react-icons/io";
import Username from '../components/inputs/Username';
import Password from '../components/inputs/Password';
import Country from '../components/inputs/Country';
import Phone from '../components/inputs/Phone';
import BusinessName from '../components/inputs/BusinessName';
import BusinessType from '../components/inputs/BusinessType';
import Employees from '../components/inputs/Employees';
import Footer2 from '../components/Footer2';
import qr from "../assets/svgs/qrcode.svg"
import android from "../assets/svgs/android.svg"
import apple from "../assets/svgs/apple.svg"


function Signup() {
  const [personal, setPersonal] = useState(true)
  const [business, setBusiness] = useState(false)
  const [congratulations, setCongratulations] = useState()
  const [progress, setProgress] = useState(0)
  const [step, setStep] = useState(0)
  const [formdata, setFormdata] = useState({
    firstname:"",
    lastname:"",
    email:"",
    username:"",
    password:"",
    confpassword:"",
    country:"",
    phone:"",
    businessname:"",
    businesstype:"",
    employees:""
  })
  const [errors, setErrors] = useState({}); 

  const handleChange = (name,value)=>{
    setFormdata(data=>({...data,[name]:value}))
  }

  const validate = (name,value) =>{
    if(value===""){
      return `required`
    }
    const patterns = {
      firstname: /^[A-Za-z\s]+$/,
      lastname: /^[A-Za-z\s]+$/,
      email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
      username: /^[A-Za-z][A-Za-z0-9]{4,}$/,
      password: /^(?=.*[!@#$%^&*(),.?":{}|<>])(?=.*\d).{8,}$/,
      phone: /^\+?[1-9]\d{0,2}\s?\d{10}$/,
    }

    
    if(!patterns[name]?.test(value)){
      switch(name){
          case "firstname":
            return "First name must only contain letters.";
          case "lastname":
             return "Last name must only contain letters.";
          case "email":
            return "Invalid email address.";
          case "username":
            return "Username must be alphanumeric and at least 5 characters.";
          case "password":
            return "Password must be 8+ characters, include a number and a special character.";
          case "confpassword":
            return value!==formdata.password?"Password do not match":""
          case "phone":
            return "Phone number must be 10 digits and can include country code";
          default:
            return "";
       }
    }

    return "";
  }



  const components = [<Name firstname={formdata.firstname} lastname={formdata.lastname} onChange={handleChange} errors={errors}/>,
  <Email value={formdata.email} onChange={handleChange} errors={errors}/>,
  <Username value={formdata.username} onChange={handleChange} errors={errors} />,
  <Password password={formdata.password} confpassword={formdata.confpassword} onChange={handleChange} errors={errors}/>,
  <Country  value={formdata.country} onChange={handleChange} errors={errors}/>,
  <Phone value={formdata.phone} onChange={handleChange} errors={errors}/>,
  <BusinessName value={formdata.businessname} onChange={handleChange} errors={errors}/>,
  <BusinessType value={formdata.businesstype} onChange={handleChange} errors={errors}/>,
  <Employees value={formdata.employees} onChange={handleChange} errors={errors}/>]

  const next = (e) => {
    e.preventDefault()
    const fields = [
      ["firstname","lastname"],
      ["email"],
      ["username"],
      ["password","confpassword"],
      ["country"],
      ["phone"],
      ["businessname"],
      ["businesstype"],
      ["employees"]
    ]
  

    let currentErrors = {}

    fields[step].forEach((field)=>{
      currentErrors[field]=validate(field,formdata[field])
    })

    setErrors(err => ({...err,...currentErrors}))

    const hasError = Object.values(currentErrors).some(err=>err!=="")
    
    if(!hasError){
      if (step < components.length - 1) {
        if (step === 7)
          setProgress(100)
        else
          if(step>=5){
            setPersonal(false)
            setBusiness(true)
          }
          setProgress(12 * (step + 1))
        setStep(num => num + 1)
      } else {
        setPersonal(false)
        setBusiness(false)
        setCongratulations(true)
      }
    }
  }

  const previous = () => {
    if (!step > 0 || congratulations) return
    setStep(num => num - 1)
    setProgress(12 * (step - 1))
  }

  

  return (



    <>
      <Nav2 />

      <section className='pb-5 min-h-[90svh]'>
        <div className='max-w-[800px] px-5 md:px-14 mx-auto'>

          <div className='flex justify-between mb-11 relative before:w-full before:h-[1px] before:bg-[#CFD6DC] before:hidden  sm:before:block before:absolute before:top-1/2  before:-translate-y-1/2 flex-col sm:flex-row gap-y-5 sm:gap-y-0 w-fit sm:w-auto mx-auto'>
            <div className='flex gap-2 items-center text-[#ACACAC] relative z-10 bg-white sm:pr-3'>
              <div>
                {personal ? (
                  <div className='bg-[#EE3023] rounded-full h-5 aspect-square grid place-items-center'>
                    <svg width="9" height="7" viewBox="0 0 9 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M3.33397 4.79298L1.68747 3.14648L0.980469 3.85348L3.33397 6.20698L8.18747 1.35348L7.48047 0.646484L3.33397 4.79298Z" fill="white" />
                    </svg>

                  </div>
                ) : 1}
              </div>
              <div className={`font-bold ${personal && "text-black"}`}>Personal Information</div>
            </div>


            <div className='flex gap-2 items-center text-[#ACACAC]  relative z-10 bg-white sm:px-3'>
              <div>
                {business ? (
                  <div className='bg-[#EE3023] rounded-full h-5 aspect-square grid place-items-center'>
                    <svg width="9" height="7" viewBox="0 0 9 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M3.33397 4.79298L1.68747 3.14648L0.980469 3.85348L3.33397 6.20698L8.18747 1.35348L7.48047 0.646484L3.33397 4.79298Z" fill="white" />
                    </svg>

                  </div>
                ) : 2}
              </div>
              <div className={`font-bold ${business && "text-black"}`}>Business Information</div>
            </div>


            <div className='flex gap-2 items-center text-[#ACACAC]  relative z-10 bg-white sm:pl-3'>
              <div>
                {congratulations ? (
                  <div className='bg-[#EE3023] rounded-full h-5 aspect-square grid place-items-center'>
                    <svg width="9" height="7" viewBox="0 0 9 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M3.33397 4.79298L1.68747 3.14648L0.980469 3.85348L3.33397 6.20698L8.18747 1.35348L7.48047 0.646484L3.33397 4.79298Z" fill="white" />
                    </svg>

                  </div>
                ) : 3}
              </div>
              <div className={`font-bold ${congratulations && "text-black"}`}>Congratulations</div>
            </div>
          </div>


          {!congratulations && <>
            <div className='w-full h-2 bg-[#ACACAC] rounded-[5px] overflow-hidden mb-2'>
              <div className={`h-full bg-[#EE3023] rounded-[5px]`}
                style={{ width: `${progress}%` }}
              ></div>
            </div>
            <div>Progress {progress}%</div>

            <form onSubmit={next} className='mt-8'>
              {/* <Name />
              <Email /> */}
              {components[step]}
              {/* <button type='submit'></button> */}
            <button  onClick={next} className='bg-black hover:bg-slate-800 transition-colors duration-300 text-white flex w-full text-lg lg:text-[28px] font-bold items-center py-4 rounded-full px-8 mb-7 mt-8'>
              <div className='ml-auto'>Continue</div>
              <div className='ml-auto'><FaArrowRight /></div>
            </button>
            </form>


            <button onClick={previous} className='mb-7 flex items-center gap-3 mx-auto'>
              <span><IoIosArrowBack /></span>
              <span>Previous</span>
            </button>

            <div className='text-[#0D0D0D] text-[40px] text-center mb-5'>Key Features</div>
          </>}
        </div>



        {!congratulations && <div className='mx-auto max-w-[1400px]'>
          <Swiper
            spaceBetween={10}
            // slidesPerView={4.5}
          // onSlideChange={() =>}
          // onSwiper={(swiper) => }
            breakpoints={{
             
              600:{
                slidesPerView:2
              },
              900:{
                slidesPerView:3
              },
              1400:{
                slidesPerView: 4.5
              }
            }}
          >
            <SwiperSlide>
              <FeaturesCard svg={globalcall} heading={"Global Calls"} text={"Stay connected with international clients effortlessly. Enjoy clear and reliable voice calls, no matter the location."} />
            </SwiperSlide>

            <SwiperSlide>
              <FeaturesCard svg={chat} heading={"Real-Time Chat"} text={"Chat instantly with individuals or groups, ensuring smooth communication for both personal and professional needs."} />
            </SwiperSlide>

            <SwiperSlide>
              <FeaturesCard svg={tools} heading={"Integrated Collaboration Tools"} text={"Collaborate with your global team using our tools."} />
            </SwiperSlide>

            <SwiperSlide>
              <FeaturesCard svg={com} heading={"Secure Communication"} text={"Your data's security is our top priority. All calls and chats are fully encrypted to keep your business communications ..."} />
            </SwiperSlide>

            <SwiperSlide>
              <FeaturesCard svg={scalable} heading={"Scalable Solutions"} text={"Our app grows with your business. From basic features to advanced tools, Vodafone scales to meet your needs"} />
            </SwiperSlide>

            <SwiperSlide>
              <FeaturesCard svg={globalcall} heading={"Global Calls"} text={"Stay connected with international clients effortlessly. Enjoy clear and reliable voice calls, no matter the location."} />
            </SwiperSlide>

            <SwiperSlide>
              <FeaturesCard svg={chat} heading={"Real-Time Chat"} text={"Chat instantly with individuals or groups, ensuring smooth communication for both personal and professional needs."} />
            </SwiperSlide>

            <SwiperSlide>
              <FeaturesCard svg={tools} heading={"Integrated Collaboration Tools"} text={"Collaborate with your global team using our tools."} />
            </SwiperSlide>

            <SwiperSlide>
              <FeaturesCard svg={com} heading={"Secure Communication"} text={"Your data's security is our top priority. All calls and chats are fully encrypted to keep your business communications ..."} />
            </SwiperSlide>

            <SwiperSlide>
              <FeaturesCard svg={scalable} heading={"Scalable Solutions"} text={"Our app grows with your business. From basic features to advanced tools, Vodafone scales to meet your needs"} />
            </SwiperSlide>

          </Swiper>
        </div>}

        {congratulations&&<div className='px-5'>
          <div className='text-4xl lg:text-[50px] font-bold text-[#E60000] mb-10 text-center'>Congratulations</div>
          <div className='text-[18px] font-bold text-[#00AC4F] text-center mb-10'>Your instance creation is in progress. Once it is completed, we will notify you via email.</div>

          <div className='mb-7 flex justify-center'>
            <img src={qr} alt="" />
          </div>

          <div className='text-[18px] mb-7 text-center'>
            Download our app now by scanning the QR code or clicking the link below
          </div>

          <div className='text-[28px] mb-7 text-center'>Download App From</div>

          <div className='flex flex-col sm:flex-row items-center justify-center gap-10 mb-7'>
            <div className='bg-black flex items-center text-white w-fit py-[18px] px-10 rounded-xl gap-3'>
              <div><img src={android} alt="" /></div>
              <div>
                <div className='text-sm'>Get it on</div>
                <div className='text-[21px]'>Google Play</div>
              </div>
            </div>

            <div className='bg-black flex items-center text-white w-fit py-[18px] px-10 rounded-xl gap-3'>
              <div><img src={apple} alt="" /></div>
              <div>
                <div className='text-sm'>Get it on</div>
                <div className='text-[21px]'>Apple Store</div>
              </div>
            </div>
          </div>

          <div className='flex justify-center'>
          <button className='bg-[#E60000] text-white text-[18px] py-4 px-10 rounded-[6px] '>Login</button>
          </div>
        </div>}

      </section>


      <Footer2 />
    </>
  )
}

export default Signup
