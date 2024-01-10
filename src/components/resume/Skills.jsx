import React from 'react'
import ResumeCarde from './ResumeCarde'
import {motion} from "framer-motion"
import CountUp from 'react-countup'



const Skills = () => {
  return (
    <motion.div 
    initial={{opacity:0}} 
    animate={{opacity:1,
   transition: {duration:.5}}} className=" gap-12 w-full flex">
            <div className="w-1/2">
            <div className="py-12 font-titleFont">
            <p className="text-sm text-red-600 tracking-[4px]"> FEATURES</p>
            <h2 className="text-4xl font-bold">Design Skill</h2>
          </div>
            <div className=" w-full mt-14 flex flex-col gap-6">
              <div className='overflow-x-hidden'>
                  <p className="text-sm uppercase font-medium">Photoshot</p>
                  <span className="w-full h-2 bgOpacity inline-flex rounded-md mt-2">
                     <motion.span 
                     initial={{x: "-100%", opacity: 0}}
                     animate={{x: 0, opacity: 1}}
                    transition={{duration: 0.6, delay: 0.6}} className="w-[99%] h-full bg-gradient-to-r from-blue-600 via-pink-5 to-red-500 rounded-md relative">
                      <CountUp className="absolute -top-7 right-0" start={3} end={99} duration={5} />
                       <span className='absolute -top-7 right-[-15px]'>%</span>
                     </motion.span>
                  </span>
              </div>
               <div className="overflow-x-hidden">
                  <p className="text-sm uppercase font-medium"> Figma</p>
                  <span className="w-full h-2 bgOpacity inline-flex rounded-md mt-2">
                     <motion.span  initial={{x: "-90%", opacity: 0}}
                     animate={{x: 0, opacity: 1}}
                    transition={{duration: 0.6, delay: 0.6}} className="w-[90%] h-full bg-gradient-to-r from-blue-600 via-pink-5 to-red-500 rounded-md relative">
                       <CountUp className="absolute -top-7 right-0" start={3} end={90} duration={5} />
                       <span className='absolute -top-7 right-[-15px]'>%</span>
                     </motion.span>
                  </span>
              </div>
              <div className="overflow-x-hidden">
                  <p className="text-sm uppercase font-medium">Adobe xd.</p>
                  <span className="w-full h-2 bgOpacity inline-flex rounded-md mt-2">
                     <motion.span  initial={{x: "-100%", opacity: 0}}
                     animate={{x: 0, opacity: 1}}
                    transition={{duration: 0.6, delay: 0.6}} className="w-[60%] h-full bg-gradient-to-r from-blue-600 via-pink-5 to-red-500 rounded-md relative">
                     <CountUp className="absolute -top-7 right-0" start={3} end={60} duration={5} />
                       <span className='absolute -top-7 right-[-15px]'>%</span>
                     </motion.span>
                  </span>
              </div>
              <div className="overflow-x-hidden">
                  <p className="text-sm uppercase font-medium"> Adobe Illustrator</p>
                  <span className="w-full h-2 bgOpacity inline-flex rounded-md mt-2">
                     <motion.span  initial={{x: "-100%", opacity: 0}}
                     animate={{x: 0, opacity: 1}}
                    transition={{duration: 0.6, delay: 0.6}} className="w-[70%] h-full bg-gradient-to-r from-blue-600 via-pink-5 to-red-500 rounded-md relative">
                      <CountUp className="absolute -top-7 right-0" start={3} end={70} duration={5} />
                       <span className='absolute -top-7 right-[-15px]'>%</span>
                     </motion.span>
                  </span>
              </div>
              <div className="overflow-x-hidden">
                  <p className="text-sm uppercase font-medium"> Design</p>
                  <span className="w-full h-2 bgOpacity inline-flex rounded-md mt-2">
                     <motion.span  initial={{x: "-100%", opacity: 0}}
                     animate={{x: 0, opacity: 1}}
                    transition={{duration: 0.6, delay: 0.6}} className="w-[95%] h-full bg-gradient-to-r from-blue-600 via-pink-5 to-red-500 rounded-md relative">
                      <CountUp className="absolute -top-7 right-0" start={3} end={95} duration={5} />
                       <span className='absolute -top-7 right-[-15px]'>%</span>
                     </motion.span>
                  </span>
              </div>
            </div>
          </div>

            <div className="w-1/2">
            <div className="py-12 font-titleFont">
            <p className="text-sm text-red-600 tracking-[4px]"> FEATURES</p>
            <h2 className="text-4xl font-bold"> Development Skill</h2>
            </div>
            <div className=" w-full mt-14">
              <div className=" w-full mt-14 flex flex-col gap-6">
              <div className='overflow-x-hidden'>
                  <p className="text-sm uppercase font-medium">React</p>
                  <span className="w-full h-2 bgOpacity inline-flex rounded-md mt-2">
                     <motion.span 
                     initial={{x: "-90%", opacity: 0}}
                     animate={{x: 0, opacity: 1}}
                    transition={{duration: 0.6, delay: 0.6}} className="w-[90%] h-full bg-gradient-to-r from-blue-600 via-pink-5 to-red-500 rounded-md relative">
                        <CountUp className="absolute -top-7 right-[-5px]" start={3} end={90} duration={5} />
                       <span className=' absolute -top-7 right-[-20px]' >%</span>
                     </motion.span>
                  </span>
              </div>
               <div className="overflow-x-hidden">
                  <p className="text-sm uppercase font-medium"> Html 5</p>
                  <span className="w-full h-2 bgOpacity inline-flex rounded-md mt-2">
                     <motion.span  initial={{x: "-95%", opacity: 0}}
                     animate={{x: 0, opacity: 1}}
                    transition={{duration: 0.6, delay: 0.6}} className="w-[95%] h-full bg-gradient-to-r from-blue-600 via-pink-5 to-red-500 rounded-md relative">
                        <CountUp className="absolute -top-7 right-0" start={3} end={95} duration={5} />
                       <span className='absolute -top-7 right-[-15px]'>%</span>
                     </motion.span>
                  </span>
              </div>
              <div className="overflow-x-hidden">
                  <p className="text-sm uppercase font-medium">Css3</p>
                  <span className="w-full h-2 bgOpacity inline-flex rounded-md mt-2">
                     <motion.span  initial={{x: "-80%", opacity: 0}}
                     animate={{x: 0, opacity: 1}}
                    transition={{duration: 0.6, delay: 0.6}} className="w-[80%] h-full bg-gradient-to-r from-blue-600 via-pink-5 to-red-500 rounded-md relative">
                        <CountUp className="absolute -top-7 right-0" start={3} end={80} duration={5} />
                       <span className='absolute -top-7 right-[-15px]'>%</span>
                     </motion.span>
                  </span>
              </div>
              <div className="overflow-x-hidden">
                  <p className="text-sm uppercase font-medium"> Javascript</p>
                  <span className="w-full h-2 bgOpacity inline-flex rounded-md mt-2">
                     <motion.span  initial={{x: "-75%", opacity: 0}}
                     animate={{x: 0, opacity: 1}}
                    transition={{duration: 0.6, delay: 0.6}} className="w-[75%] h-full bg-gradient-to-r from-blue-600 via-pink-5 to-red-500 rounded-md relative">
                     
                      <CountUp className="absolute -top-7 right-0" start={3} end={75} duration={5} />
                       <span className='absolute -top-7 right-[-15px]'>%</span>
                     </motion.span>
                  </span>
              </div>
              <div className="overflow-x-hidden">
                  <p className="text-sm uppercase font-medium"> Software</p>
                  <span className="w-full h-2 bgOpacity inline-flex rounded-md mt-2">
                     <motion.span  initial={{x: "-90%", opacity: 0}}
                     animate={{x: 0, opacity: 1}}
                    transition={{duration: 0.6, delay: 0.6}} className="w-[90%] h-full bg-gradient-to-r from-blue-600 via-pink-5 to-red-500 rounded-md relative">
                       <CountUp className="absolute -top-7 right-0" start={10} end={90} duration={5} />
                       <span className='absolute -top-7 right-[-15px]'>%</span>
                     </motion.span>
                  </span>
              </div>
              </div>
             </div>
            </div>
    </motion.div>
  )
}

export default Skills