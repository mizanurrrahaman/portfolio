import React from 'react'
import Title from '../layouts/Title'
import ProjectsCard from './ProjectsCard'

const Project = () => {
  return (
   <section id="projects" className="w-full py-20 border-b-[1px] border-b-black">
      <div className="flex justify-center items-center text-center">
         <Title  title="WISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK" 
          des="My Projects"/>
      </div>
     
      <div className='grid grid-cols-3 gap-14'>
      <ProjectsCard
          title="SOCIAL MEDIA CLONE"
          des=" Lorem, ipsum dolor sit amet consectetur adipisicing elit.
             Explicabo quibusdam voluptate sapiente voluptatibus harum quidem!"
            src="public/projectOne.jpg" 
        />
        <ProjectsCard
          title="E-commerce Website"
          des=" Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Explicabo quibusdam voluptate sapiente voluptatibus harum quidem!"
          src="public/projectTwo.jpg"
        />
        <ProjectsCard
          title="Chatting App"
          des=" Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Explicabo quibusdam voluptate sapiente voluptatibus harum quidem!"
          src="public/projectThree.jpeg"
        />
        <ProjectsCard
          title="Real Estate "
          des=" Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Explicabo quibusdam voluptate sapiente voluptatibus harum quidem!"
          src="https://media.istockphoto.com/id/1442014267/photo/north-berkeley-california-neighborhood.jpg?s=1024x1024&w=is&k=20&c=RQv7DV7_MZBAv3zAj69jcgNpTN0HBht7FAZCIRJ3eCY="
        />
        <ProjectsCard
          title="Hotel Management System "
          des=" Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Explicabo quibusdam voluptate sapiente voluptatibus harum quidem!"
              src="https://images.unsplash.com/photo-1560200353-ce0a76b1d438?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
        />
        <ProjectsCard
          title="Hospital Cleaning"
          des=" Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Explicabo quibusdam voluptate sapiente voluptatibus harum quidem!"
              src="https://media.istockphoto.com/id/1316473356/photo/an-employee-pulls-a-trolley-for-cleaning-offices-woman-cleaner-is-engaged-in-work.jpg?s=1024x1024&w=is&k=20&c=-RPH3gnX0T_T7ZYDcCun0tlzDg9P-mdQ0s8nUSNxdV0="
        />
      </div>
   </section>
  )
}

export default Project