"use client"
import React, {useTransition, useState} from 'react'
import Image from 'next/image'
import TabButton from './TabButton'


const  TAB_DATA = [
    {
        title: "Skills",
        id: "skills",

        content: (
            <ul className='list-disc '>
                <li>Node.js</li>
                <li>express</li>
                <li>PostgreSQL</li>
                <li>Javascript</li>
                <li>React Native</li>
                <li>NextJs</li>
            </ul>
        )
    },

    {
        title: "Education",
        id: "education",

        content: (
            <ul className='list-disc '>
                <li>Fullstack Academy of code</li>
                <li>Udemy Academy</li>
            </ul>
        )
    },

    {
        title:  "Certifications",
        id: "certifications",

        content: (
            <ul className='list-disc'>
                <li>Aws Cloud Practitioner</li>
            </ul>
        )
    }
]

const AboutSection = () => {
    const [tab, setTab] =useState("skills");
    const [ isPending, startTransition,] = useTransition();


    const handleTabchange = (id) => {
        startTransition(()=> {
            setTab(id);
        });
    };

  return (
    <section className='text-white'>
        <div className='md:grid md:grid-cols-2 gap-8 items-center px-4 py-8 xl:gap-16 sm:py-16 xl:px-16'>
            <Image src="/images/setup1.jpg" width={400} height={400} alt='setup' className='justify-center items-center'/>
            <div className='mt-4 md:mt-0 text-left flex flex-col h-full' >
                <h2 className='text-4xl font-bold text-white mb-4'>
                    About Me
                </h2>
                <p className='text-base lg:text-lg'>
                    I’m a software developer with expertise in mobile and web development, working primarily with React Native, JavaScript, and Next.js. My specialty lies in building intuitive, high-performance applications with a strong emphasis on UI/UX design.

                    I enjoy crafting digital experiences that not only function seamlessly but also leave a lasting visual impact. Whether it’s contributing to open-source projects, developing innovative solutions, or collaborating with teams, I bring both technical skill and design sensitivity to the table.

                    If you’re looking for someone who can bridge the gap between design and development — let’s connect, create, and bring ideas to life.
                </p>
                <div className='flex flex-row  mt-8'>
                    <TabButton selectTab={()=> handleTabchange("skills")} active={tab === "skills"}>
                        {""}
                        Skills{""}
                    </TabButton>


                    <TabButton selectTab={() => handleTabchange("education")}
                        active={tab === "education"}>
                    {""}
                    Education{""}
                    </TabButton>

                    <TabButton selectTab={() => handleTabchange("certifications")}
                        active={tab === "certifications"}>
                    {""}
                    Certifications{""}
                    </TabButton>

                   
                    
                </div>
                <div className='mt-3'>
                        <div>
                            {TAB_DATA.find((t) => t.id === tab).content}
                        </div>
                    </div>
            </div>
            
        </div>
         
    </section>
  )
}

export default AboutSection