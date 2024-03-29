
import React, { useState } from 'react'
import Title from '../layouts/Title'
import ContactLeft from './ContactLeft'


const Contact = () => {
   const [username, setUsername] = useState("");
   const [phoneNumber, setPhoneNumber] = useState("");
   const [email, setEmail] = useState("");
   const [subject, setSubject] = useState("");
   const [message, setMessage] = useState("");
   const [errMsg, setErrMsg] = useState("");
   const [successMsg, setSuccessMsg] = useState("");

   //========= Email vallidion start here=========
   const emailValidation = () => {
   return String(email)
   .toLocaleLowerCase()
   .match(/^\w+([-]?\w+)*@\w+([-]?\w+)*(\.\w{2,3})+$/);
      };
   //========= Email vallidion end here=========

   const handleSend =(e) => {
      e.preventDefault()
         if(username === ""){
            setErrMsg("Username is required!")
         }
         else if (phoneNumber == " "){
            setErrMsg(" Phone number is required!")
         }
         else if(email === " "){
            setErrMsg(" Please give up your email")
         }
         else if(!emailValidation(email)){
            setErrMsg(" Give a valid Emails")
         }
         else if(subject === " "){
            setErrMsg("Message is required!")
         }
         else{
            setSuccessMsg("your Messages sent Successfully!");
            setErrMsg(" ");
            setUsername(" ");
            setPhoneNumber(" ");
            setEmail(" ");
            setSubject(" ");
            setMessage(" ");

            console.log(username, phoneNumber, email, message, subject)
         }

   }

  return (
 <section id="contact" className="w-full py-20 border-b-[1px] border-b-black">
    <div className="flex justify-center items-center text-center">
       <Title  title="Contact With Me" des="CONTACT"/>
    </div>
       <div className='w-full'>
            <div className='w-full h-auto flex justify-between'>
               <ContactLeft/>
             <div className="w-[60%] h-full py-10 bg-gradient-to-r from-[#1e2024] to-[#23272b] flex flex-col p-8 rounded-lg shadow-shadowOne">
              <form className="w-full flex flex-col gap-6 py-2">

                 {
                  errMsg &&( <p className="py-3 bg-gradient-to-r from-[#1e2024] to-[#23272b] shadow-shadowOne text-center text-orange-500 text-base tracking-wide animate-bounce">{errMsg}</p>
                   )}
                   {successMsg && (
                     <p className=" py-3 bg-gradient-to-r from-[#1e2024] to-[#23272b] shadow-shadowOne text-center text-green-500 text-base tracking-wide animate-bounce"> {successMsg}</p>
                   )}
                  
                 <div className="w-full flex items-center gap-[30px]">
                    <div className="w-1/2 flex flex-col gap-4">
                       <p className="text-sm test-gray-400 uppercase tracking-wide"> Your name</p>
                       <input onChange={(e)=>setUsername(e.target.value)} value={username} className="contactInput" type="text" />
                    </div>
                     <div className="w-1/2 flex flex-col gap-4">
                     <p className="text-sm test-gray-400 uppercase tracking-wide"> phone number</p>
                       <input onChange={(e)=> setPhoneNumber(e.target.value)} value={phoneNumber} className="contactInput" type="text" />
                     </div>
                 </div>
                 <div>
                 <p className="text-sm pb-4 test-gray-400 uppercase tracking-wide"> Email</p>
                       <input onChange={(e)=> setEmail(e.target.value)}
                       value={email} className="contactInput" type="text" />
                 </div>
                 <div>
                 <p className="text-sm pb-4 test-gray-400 uppercase tracking-wide"> Subject</p>
                       <input  onChange={(e) => setSubject(e.target.value)}
                     value={subject} className="contactInput" type="text" />
                 </div>
                 <div>
                 <p className="text-sm pb-4 test-gray-400 uppercase tracking-wide"> MESSAGE
                 </p>
                  <textarea onChange={(e)=> setMessage(e.target.value)} value={message} className="contactTextArea" cols="30" rows="8"></textarea>
                 </div>
                 <div>
                    <button onClick={handleSend} className="w-full h-12 bg-[#141518] rounded-lg text-base text-gray-400 tracking-wider uppercase hover:text-white duration-300 hover:border-[1px] hover:border-red-600 border-transparent"> Send Message</button>
                 </div>
                 {
                  errMsg && <p className="py-3 bg-gradient-to-r from-[#1e2024] to-[#23272b] shadow-shadowOne text-center text-orange-500 text-base tracking-wide animate-bounce">{errMsg}</p>
                 }
                 {successMsg && (
                     <p className=" py-3 bg-gradient-to-r from-[#1e2024] to-[#23272b] shadow-shadowOne text-center text-green-500 text-base tracking-wide animate-bounce"> {successMsg}</p>
                   )}
                   
              </form>
              </div>
            </div>
          </div>
    </section>
  )
}

export default Contact






























 {/*
    <section id="contact" className="w-full py-20 border-b-[1px] border-b-black">
    <div className="flex justify-center items-center text-center">
       <Title  title="Contact With Me" des="CONTACT"/>
    </div>
       <div className='w-full'>
            <div className='w-full h-auto flex justify-between'>
               <ContactLeft/>
             <div className="w-[60%] h-full py-10 bg-gradient-to-r from-[#1e2024] to-[#23272b] flex flex-col p-8 rounded-lg shadow-shadowOne">
              <form className="w-full flex flex-col gap-6 py-2">
                  {
                      errMsg && <p>{errMsg}</p>
                  }
                 <div className="w-full flex items-center gap-[30px]">
                    <div className="w-1/2 flex flex-col gap-4">
                       <p className="text-sm test-gray-400 uppercase tracking-wide"> Your name</p>
                       <input onChange={(e)=> setUsername(e.target.value)} value={username} className="contactInput" type="text" />
                    </div>
                     <div className="w-1/2 flex flex-col gap-4">
                     <p className="text-sm test-gray-400 uppercase tracking-wide"> phone number</p>
                       <input onChange={(e)=>setPhoneNumber(e.target.value)} value={phoneNumber} className="contactInput" type="text" />
                     </div>
                 </div>
                 <div>
                 <p className="text-sm pb-4 test-gray-400 uppercase tracking-wide"> Email</p>
                       <input onChange={(e)=>setEmail(e.target.value)} value={email} className="contactInput" type="text" />
                 </div>
                 <div>
                 <p className="text-sm pb-4 test-gray-400 uppercase tracking-wide"> Subject</p>
                       <input onChange={(e)=>setSubject (e.target.value)} value={subject} className="contactInput" type="text" />
                 </div>
                 <div>
                 <p className="text-sm pb-4 test-gray-400 uppercase tracking-wide"> MESSAGE
                 </p>
                  <textarea onChange={(e) => setMessage (e.target.value)} value={message} className="contactTextArea" cols="30" rows="8"></textarea>
                 </div>
                 <div>
                    <button onClick={handleSend} className="w-full h-12 bg-[#141518] rounded-lg text-base text-gray-400 tracking-wider uppercase hover:text-white duration-300 hover:border-[1px] hover:border-red-600 border-transparent"> Send Message</button>
                 </div>
              </form>
              </div>
            </div>
          </div>
    </section>
  */}