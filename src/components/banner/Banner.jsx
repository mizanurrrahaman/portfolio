import React from 'react'
import LeftBanner from './LeftBanner'



const Banner = () => {

  {/*
  const [text] = useTypewriter({
    words: ['Professional Coder.', 'Full stack Developer.', 'UI Designer.', 'Hook!'],
    loop: true,
    typeSpeed: 20,
    deleteSpeed: 20,
    delaySpeed:2000,

  });
  */}
  return (
    <section id='home' className="w-full py-20 justify-between gap-10  h-[900px] pb-30 flex border-b-[1px] border-b-black">
          <LeftBanner/>
          
          <div className="w-[620px] h-[750px] pt-6 pb-9 relative" > 
            <img className=" w-[100%]  h-[100%] object-cover z-0" src="https://scontent.fjsr13-1.fna.fbcdn.net/v/t39.30808-6/309035988_1518253608606992_6099515262601810109_n.jpg?_nc_cat=103&cb=99be929b-8d691acd&ccb=1-7&_nc_sid=efb6e6&_nc_ohc=WMKBu1nHKTIAX_7RyAR&_nc_ht=scontent.fjsr13-1.fna&oh=00_AfA2z1L9h6lx-3wQHxFJkNap6oM1wXdS_UJDZT6gpq_e3w&oe=65DABFD8" alt="not found" />
          </div>
      
    </section>
  )
}

export default Banner