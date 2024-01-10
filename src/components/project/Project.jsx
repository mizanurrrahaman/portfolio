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
          title="SOCIAL MEDIA CLONE"
          des=" Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Explicabo quibusdam voluptate sapiente voluptatibus harum quidem!"
          src="public/projectThree.jpeg"
        />
        <ProjectsCard
          title="E-commerce Website"
          des=" Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Explicabo quibusdam voluptate sapiente voluptatibus harum quidem!"
              src="public/projectOne.jpg" 
        />
        <ProjectsCard
          title="Chatting App"
          des=" Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Explicabo quibusdam voluptate sapiente voluptatibus harum quidem!"
              src="public/projectTwo.jpg"
        />
      </div>
   </section>
  )
}

export default Project