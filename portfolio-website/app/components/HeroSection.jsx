'use client';
import React from 'react'
import Image from 'next/image'
import { TypeAnimation } from 'react-type-animation';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';



const HeroSection = () => {
  const router = useRouter();
  return (
    <section>
       <div className='grid grid-cols-1 sm:grid-cols-12'>
         <motion.div 
         initial={{opacity: 0, scale: 0.5}} 
         animate={{opacity: 1, scale: 1,}} 
         transition={{duration: 0.5}} className='col-span-7 place-self-center text-center sm:text-left'>
            <h1 className='text-white mb-4 text-4xl sm:text-5xl  lg:text-6xl font-extrabold '>
               <span className='text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 via-blue-800'>Hello I'm <span><TypeAnimation sequence={[
        // Same substring at the start will only be typed out once, initially
        'UNIQUE',
        5000, // wait 1s before replacing "Mice" with "Hamsters"
        '',
        500
      ]}
      wrapper="span"
      speed={0.2}

      repeat={Infinity}/></span> </span> 
               <br></br>
                 <TypeAnimation
      sequence={[
        // Same substring at the start will only be typed out once, initially

        2000, // wait 1s before replacing "Mice" with "Hamsters"
        'Fullstack Mobile Developer',
        1000,
        'Web Developer',
        2000,
        'UI/UX Designer',
        1000
      ]}
      wrapper="span"
      speed={0.5}

      repeat={Infinity}
    />
            </h1>
         <p className="text-[#ADB7BE] text-base sm:text-lg lg:text-xl mb-6">
           I’m a mobile & web developer specializing in React Native, JavaScript, and Next.js, with a focus on creating high-performance, visually engaging applications. Combining solid engineering with thoughtful UI/UX design, I bring products to life that feel as good as they look. Open to collaborations, open-source projects, and new opportunities — let’s work together and make something worth sharing.
         </p>

         <div>
             <button onClick={() => window.location.href = "mailto:uniquechukwudi09@gmail.com?subject=Hiring Inquiry"
             } className='px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 hover:bg-slate-200 text-black'>Hire Me</button>
             {/* <button className='px-1 py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 hover:bg-slate-800 text-white  mt-3'>
                <span className='block bg-[121212] hover:bg-slate-800 rounded-full px-5 py-2'>
                Download CV</span></button> */}
         </div>
         </motion.div>
         <div className='col-span-5 place-self-center mt-4 lg:mt-0'>
           <div className='rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[400] lg:h-[400] relative'>
             <Image 
            src='/images/hero-image.png'
            alt='hero image'
            width={300}
            height={300}
            className='absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2'
            />
           </div>
         </div>
       </div>
        </section>
  )
}

export default HeroSection