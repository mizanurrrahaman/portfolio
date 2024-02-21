import React from 'react'
import { FaFacebookF } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

const ContactLeft = () => {
  return (
    <div className="w-[35%] h-full bg-gradient-to-r from-[#1e2024] to-[#23272b] p-8 rounded-lg  shadow-shadowOne ">
               <img className="w-full h-64 object-cover rounded-lg mb-2" src="public/contactImg.png" alt="not found" />
               <div className="flex flex-col gap-4 py-10 ">
                   <h3 className="text-3xl text-white-600 font-bold ">Murad Hossain Chowdhury </h3>
                   <h5 className=" text-lg font-normal text-gray-400">React js and React Native Developer</h5>
                    <p className="text-base text-gray-400 tracking-wide">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facilis ipsam autem cumque, accusantium dicta odio.</p>
                    <h6 className="text-base text-green-400 "> Phone:<span className="text-base text-[#fff]">01538280537 </span></h6>
                    <h6 className="text-base  text-green-600"> Email: <span className="text-base text-[#fff]">muradchowdhury0077@gmail.com</span> </h6>
                    <div>
                   <h2 className="text-base uppercase font-titleFont mb-4"> Find me in</h2>
                   <div className="flex gap-4">
                   <span className="bannerIcon">
                     <FaFacebookF />
                   </span>
                   <span className="bannerIcon">
                   <FaLinkedinIn />
                   </span>
                   <span className="bannerIcon">
                     <FaTwitter /> 
                   </span>
                   </div>
                 </div>
               </div>
             </div>
  )
}

export default ContactLeft