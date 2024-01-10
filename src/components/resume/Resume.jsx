import React, { useState } from 'react'
import Title from '../layouts/Title'
import Education from './Education'
import Skills from './Skills'
import Exprience from './Exprience'
import Achievement from './Achievement'


const Resume = () => {
     const [educationData, setEducationData] = useState(true);
     const [skillData, setSkillData] = useState(false);
     const [experienceData, setExperienceData] = useState(false);
     const [achievementData, setAchievementData] = useState(false);
  return (
    <section id="resume" className="w-full py-20 border-b-[1px] border-b-black">
        <div className="flex justify-center items-center text-center">
         <Title  title="7+ YEARS OF EXPERIENCE" des="My Resume"/>
      </div>
       <div>
         <ul className="w-full grid grid-cols-4">
          
             <li onClick={()=> 
                 setEducationData(true) &
                 setSkillData(false) &
                 setExperienceData(false) &
                 setAchievementData(false) 
                }
                className="resumeLi"> Education</li>
             <li onClick={()=> 
                setEducationData(false) & 
                setSkillData(true) &
                setExperienceData(false) &
                setAchievementData(false) 
                }
                className="resumeLi"> Professional Skills</li>
             <li onClick={()=>
                   setEducationData(false) & 
                   setSkillData(false) &
                   setExperienceData(true) &
                   setAchievementData(false) 
                   } className="resumeLi"> Experience</li>
             <li onClick={()=>
                   setEducationData(false) & 
                   setSkillData(false) &
                   setExperienceData(false) &
                   setAchievementData(true) 
                   } className="resumeLi"> Achievements</li>
         </ul>
       </div>
       {
        educationData && <Education/>
       }
       {
        skillData && <Skills/>
       }
       {
        achievementData && <Achievement/>
       }
       {
        experienceData && <Exprience/>
       }
      {/*
     <Education/>
    < Skills/>
     <Exprience/>
     <Achievement/>
    */}
     </section>
  )
}

export default Resume



 {/*
     <div className="py-12 font-titleFont">
            <p className="text-sm text-red-600 tracking-[4px]"> 1998-2010</p>
            <h2 className="text-4xl font-bold"> Education Quality</h2>
        </div>
        <div className=" w-1/2 mt-14 h-[1000px] border-l-[6px] border-l-black     border-opacity-30 flex flex-col gap-10">
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
  */}
       
