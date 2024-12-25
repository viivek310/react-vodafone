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

function Signup() {
  const [personal, setPersonal] = useState(true)
  const [business, setBusiness] = useState(false)
  const [congratulations, setCongratulations] = useState()
  const [progress, setProgress] = useState(5)
  const [components, setComponents] = useState([<Name />,<Email />,<Username />,<Password />])
  const [number, setNumber] = useState(0)

  const next = ()=>{
    setNumber(num=>{
      if(num<11){
        return num+1
      }
      return num
    })
  }

  const previous = ()=>{
    setNumber(num=>{
      if(num>0){
        return num-1
      }
      return num
    })
  }

  return (
    <>
      <Nav2 />

      <section className='pb-5'>
        <div className='w-[800px] px-14 mx-auto'>

          <div className='flex justify-between mb-11'>
            <div className='flex gap-2 items-center text-[#ACACAC] '>
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


            <div className='flex gap-2 items-center text-[#ACACAC] '>
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


            <div className='flex gap-2 items-center text-[#ACACAC] '>
              <div>
                {congratulations ? (
                  <div className='bg-[#EE3023] rounded-full h-5 aspect-square grid place-items-center'>
                    <svg width="9" height="7" viewBox="0 0 9 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M3.33397 4.79298L1.68747 3.14648L0.980469 3.85348L3.33397 6.20698L8.18747 1.35348L7.48047 0.646484L3.33397 4.79298Z" fill="white" />
                    </svg>

                  </div>
                ) : 3}
              </div>
              <div className={`font-bold ${congratulations && "text-black"}`}>Business Information</div>
            </div>
          </div>


          <div className='w-full h-2 bg-[#ACACAC] rounded-[5px] overflow-hidden mb-2'>
            <div className={`h-full bg-[#EE3023] rounded-[5px]`}
              style={{ width: `${progress}%` }}
            ></div>
          </div>
          <div>Progress {progress}%</div>

          <div className='my-8'>
              {/* <Name />
              <Email /> */}
              {components[number]}
          </div>

          <button onClick={next} className='bg-black hover:bg-slate-800 transition-colors duration-300 text-white flex w-full text-[28px] font-bold items-center py-4 rounded-full px-8 mb-7'>
            <div className='ml-auto'>Continue</div>
            <div className='ml-auto'><FaArrowRight /></div>
          </button>
        </div>

        <button onClick={previous} className='mb-7 flex items-center gap-3 mx-auto'>
          <span><IoIosArrowBack /></span>
          <span>Previous</span>
        </button>

        <div className='text-[#0D0D0D] text-[40px] text-center mb-5'>Key Features</div>

        <div className='mx-[260px]'>
          <Swiper
            spaceBetween={10}
            slidesPerView={4.5}
              // onSlideChange={() =>}
              // onSwiper={(swiper) => }
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
        </div>

      </section>
    </>
  )
}

export default Signup
