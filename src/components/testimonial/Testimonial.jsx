import React, { useState } from 'react'
import Title from '../layouts/Title'
import Slider from "react-slick";
import { IoStarSharp } from "react-icons/io5";
import {HiArrowRight, HiArrowLeft} from "react-icons/hi"

function SampleNextArrow(props) {
  const { onClick } = props;
  return (
    <div
      className="w-14 h-12 bg-[#0c1821] hover:bg-black duration-300 rounded-md text-2xl text-gray-400 flex justify-center items-center absolute top-0 right-0 shadow-shadowOne cursor-pointer z-10"
      onClick={onClick}
      > <HiArrowRight/></div>
      );
}


function SamplePrevArrow(props) {
  const { onClick } = props;
  return (
    <div className="w-14 h-12 bg-[#0c1821] hover:bg-black duration-300 rounded-md text-2xl text-gray-400 flex justify-center items-center absolute top-0 right-24 shadow-shadowOne cursor-pointer z-10"
      onClick={onClick}
    >
     <HiArrowLeft/> 
     
     </div>
  );
}


const Testimonial = () => {
    const [dotActive, setDocActive] = useState(0);
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow/>,
        prevArrow: <SamplePrevArrow/>,
        beforeChange: (prev, next) =>{
          setDocActive(next);
        },
        appendDots: dots => (
          <div
            style={{
              borderRadius: "10px",
              padding: "10px"
            }}
          >
            <ul style={{ 
              display : "flex",
              gap: "15px",
              justifyContent: "center",
              marginTop: "20px"
             }}
             >
              {" "}
               {dots} {""} </ul>
          </div>
        ),
        customPaging: (i) => (
         <div
          style={
            i === dotActive
             ? {
              width: "12px",
              height: " 12px",
              color: "blue",
              background: "#ff014f",
              borderRadius: "50%",
              cursor: " pointer",
             }
             :
             {
              width: "12px",
              height: " 12px",
              color: "blue",
              background: "gray",
              borderRadius: "50%",
              cursor: " pointer",
             }
          }
         >

         </div>
        ),

      };
  return (
   <section id="testimonial" className="w-full py-20 border-b-[1px] border-b-black">
        <div className="flex justify-center items-center text-center">
           <Title  title="WHAT CLIENTS SAY" des="Testimonia"/>
        </div>
        <div className="max-w-6xl mx-auto">
        <Slider {...settings}>
          <div className='w-full'>
            <div className='w-full h-[500px] flex justify-between'>
             <div className="w-[35%] h-full bg-gradient-to-r from-[#1e2024] to-[#23272b] p-8 rounded-lg  shadow-shadowOne flex flex-col gap-8 justify-center">
             <img className="h-72 rounded-lg object-cover" src="public/testimonialOne.png" alt=" not found" />
             <div>
               <p className="text-xs uppercase text-red-600 tracking-wide mb-2"> Bound - Trolola</p>
                <h3 className="text-2xl font-bold"> Jone Duone Joe</h3>
                <p className="text-base tracking-wide text-gray-500"> Operation Officer</p>
             </div>
             </div>
             <div className="w-[60%] h-full ">
               <img className="w-[20%]" src="public/quote.png" alt="not found" />
                <div className="w-full h-[70%] py-10 bg-gradient-to-r from-[#1e2024] shadow-shadowOne p-8 ">
                  <div className="flex justify-between items-center by-6 border-b-2 border-b-gray-900 pb-10">
                     <div>
                         <h3 className="text-3xl font-medium tracking-wide"> Travel Mobile App Design.</h3>
                         <p className="text-lg text-gray-400 mt-3"> Via UpWork - Mar 4, 2015 -Aug 30, 2021 test</p>
                     </div>
                      <div className="flex gap-1  text-yellow-500">
                      <IoStarSharp />
                      <IoStarSharp />
                      <IoStarSharp />
                      <IoStarSharp />
                      <IoStarSharp />
                      </div>
                  </div>
                  <p className="text-lg font-titleFont text-gray-400 font-medium tracking-wide leading-6 pt-[20px]"> 
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere in accusantium consequatur mollitia corporis blanditiis, voluptatibus soluta ipsam deleniti quae perferendis ratione voluptatum cupiditate iusto placeat assumenda perspiciatis quibusdam praesentium?
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className='w-full'>
            <div className='w-full h-[500px] flex justify-between'>
             <div className="w-[35%] h-full bg-gradient-to-r from-[#1e2024] to-[#23272b] p-8 rounded-lg  shadow-shadowOne flex flex-col gap-8 justify-center">
             <img className="h-72 rounded-lg object-cover" src="public/testimonialTwo.png" alt=" not found" />
             <div>
               <p className="text-xs uppercase text-red-600 tracking-wide mb-2"> Bound - Trolola</p>
                <h3 className="text-2xl font-bold"> Jone Duone Joe</h3>
                <p className="text-base tracking-wide text-gray-500"> Operation Officer</p>
             </div>
             </div>
             <div className="w-[60%] h-full ">
               <img className="w-[20%]" src="public/quote.png" alt="not found" />
                <div className="w-full h-[70%] py-10 bg-gradient-to-r from-[#1e2024] shadow-shadowOne p-8 ">
                  <div className="flex justify-between items-center by-6 border-b-2 border-b-gray-900 pb-10">
                     <div>
                         <h3 className="text-3xl font-medium tracking-wide"> Travel Mobile App Design.</h3>
                         <p className="text-lg text-gray-400 mt-3"> Via UpWork - Mar 4, 2015 -Aug 30, 2021 test</p>
                     </div>
                      <div className="flex gap-1  text-yellow-500">
                      <IoStarSharp />
                      <IoStarSharp />
                      <IoStarSharp />
                      <IoStarSharp />
                      <IoStarSharp />
                      </div>
                  </div>
                  <p className="text-lg font-titleFont text-gray-400 font-medium tracking-wide leading-6 pt-[20px]"> 
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere in accusantium consequatur mollitia corporis blanditiis, voluptatibus soluta ipsam deleniti quae perferendis ratione voluptatum cupiditate iusto placeat assumenda perspiciatis quibusdam praesentium?
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className='w-full'>
            <div className='w-full h-[500px] flex justify-between'>
             <div className="w-[35%] h-full bg-gradient-to-r from-[#1e2024] to-[#23272b] p-8 rounded-lg  shadow-shadowOne flex flex-col gap-8 justify-center">
             <img className="h-72 rounded-lg object-cover" src="public/download (6).jpg" alt=" not found" />
             <div>
               <p className="text-xs uppercase text-red-600 tracking-wide mb-2"> Bound - Trolola</p>
                <h3 className="text-2xl font-bold"> Jone Duone Joe</h3>
                <p className="text-base tracking-wide text-gray-500"> Operation Officer</p>
             </div>
             </div>
             <div className="w-[60%] h-full ">
               <img className="w-[20%]" src="public/quote.png" alt="not found" />
                <div className="w-full h-[70%] py-10 bg-gradient-to-r from-[#1e2024] shadow-shadowOne p-8 ">
                  <div className="flex justify-between items-center by-6 border-b-2 border-b-gray-900 pb-10">
                     <div>
                         <h3 className="text-3xl font-medium tracking-wide"> Travel Mobile App Design.</h3>
                         <p className="text-lg text-gray-400 mt-3"> Via UpWork - Mar 4, 2015 -Aug 30, 2021 test</p>
                     </div>
                      <div className="flex gap-1  text-yellow-500">
                      <IoStarSharp />
                      <IoStarSharp />
                      <IoStarSharp />
                      <IoStarSharp />
                      <IoStarSharp />
                      </div>
                  </div>
                  <p className="text-lg font-titleFont text-gray-400 font-medium tracking-wide leading-6 pt-[20px]"> 
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere in accusantium consequatur mollitia corporis blanditiis, voluptatibus soluta ipsam deleniti quae perferendis ratione voluptatum cupiditate iusto placeat assumenda perspiciatis quibusdam praesentium?
                  </p>
                </div>
              </div>
            </div>
          </div>
            {/*
             <div>
            <h3>2</h3>
          </div>
          <div>
            <h3>3</h3>
          </div>
          <div>
            <h3>4</h3>
          </div>
          <div>
            <h3>5</h3>
          </div>
          <div>
            <h3>6</h3>
          </div>
           */}

         
        </Slider>
      </div>
   </section>
  )
}

export default Testimonial