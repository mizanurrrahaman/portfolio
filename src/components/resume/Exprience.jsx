import React from 'react'
import ResumeCarde from './ResumeCarde'
import {motion} from "framer-motion"


const Exprience = () => {
  return (
    <motion.div initial={{opacity:0}} 
    animate={{opacity:1,
   transition: {duration:.5}}} className=" gap-12 w-full flex">
    <div>
    <div className="py-12 font-titleFont">
    <p className="text-sm text-red-600 tracking-[4px]"> 2010 - 2022</p>
    <h2 className="text-4xl font-bold">Job Experience</h2>
 </div>
<div className=" w-full mt-14 h-[1000px] border-l-[6px] border-l-black     border-opacity-30 flex flex-col gap-10">
    <ResumeCarde
    title=" BCs in Computer Science"
    subTitle = "University of DVI (2006-2010)"
    result="3.90/4"
    des="The training provided by universities in order to prepare people to work in various sectors of the economy or areas of culture." 
    />
    <ResumeCarde
    title="AS - Science & Information"
    subTitle = "SuperKing College (2001 - 2005)"
    result="4.75/5"
    des="Higher education is tertiary education leading to award of an academic degree. Higher education, also called post-secondary education." 
    />
     <ResumeCarde
    title="Secondary School Education"
    subTitle = "Kingstar Secondary School (1998 - 2000)"
    result="5.00/5"
    des="Secondary education or post-primary education covers two phases on the International Standard Classification of Education scale." 
    />
   </div>
    </div>
    <div>
    <div className="py-12 font-titleFont">
    <p className="text-sm text-red-600 tracking-[4px]"> 2001 - 2020</p>
    <h2 className="text-4xl font-bold"> Trainer Experience</h2>
 </div>
<div className=" w-full mt-14 h-[1000px] border-l-[6px] border-l-black     border-opacity-30 flex flex-col gap-10">
    <ResumeCarde
    title=" Sr. Software Engineer "
    subTitle = "Google Out Tech - (2017 - Present)"
    result="USA"
    des="Google's hiring process is an important part of our culture. Googlers care deeply about their teams and the people who make them up." 
    />
    <ResumeCarde
    title="Web Developer & Trainer"
    subTitle = "Apple Developer Team - (2012 - 2016)"
    result="MALAYSIA"
    des="A popular destination with a growing number of highly qualified homegrown graduates, it's true that securing a role in Malaysia isn't easy" 
    />
     <ResumeCarde
    title="Front-end Developer"
    subTitle = "Nike - (2020 - 2011)"
    result="Oman"
    des="The Oman economy has grown strongly over recent years, having transformed itself from a producer and innovation-based economy." 
    />
   </div>
    </div>
    </motion.div>
  )
}

export default Exprience