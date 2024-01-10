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
    <section id='home' className="w-full py-20 justify-between  h-[900px] pb-30 flex border-b-[1px] border-b-black">
          <LeftBanner/>
          
          <div className="w-1/2 w-[500px] h-[700px] pb-9 relative" > 
            <img className="w-[100%] h-[100%] object-cover z-0" src="public/bannerImg.png" alt="not found" />
          </div>
      
    </section>
  )
}

export default Banner