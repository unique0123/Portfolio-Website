'use client'
import React, { useState, useRef } from 'react'
import ProjectCard from './ProjectCard'
import ProjectTag from './ProjectTag'
import { animate, motion, useInView } from 'framer-motion'

const projectData = [
    {
        id: 1,
        title: "NextJs Admin panel",
        description: "Backend Panel for order management and product flow to a user side application",
        image: "/images/projects/products.png",
        tag: ["All", "Web"],
        gitUrl: "/",
        previewUrl: "/",

    },
    {
          id: 2,
        title: " Electronic Gadgets store (React-Native)",
        description: "A mobile application to purchase electronic gadgets made with React-Native",
        image: "/images/projects/rn-shop.png",
        tag: ["All", "Mobile"],
        gitUrl: "/",
        previewUrl: "/",
    },
    {
          id: 3,
        title: "Portfolio Website (Next-Js )",
        description: "A Software Developer's Portfolio Website made with NextJs",
        image: "/images/projects/portfolio.png",
        tag: ["All", "Web"],
        gitUrl: "/",
        previewUrl: "/",
    }
]

const ProjectSection = () => {
    const [tag, setTag] = useState("All");
    const ref = useRef(null);
    const isINView = useInView(ref, {once: true})

    const handleTagChange = (newTag) => {
        setTag(newTag);
    };

    const filteredprojects = projectData.filter((project) => project.tag.includes(tag)
    );

    const cardVariants = {
        initial: {
            y: 50, opacity: 0
        },
        animate: {
            y: 0, opacity: 1
        },
    };
  return (
    <section >
    <h2 className='self-center justify-self-center font-extrabold text-2xl'>My Projects</h2>
    <div className='text-white flex flex-row items-center justify-center gap-2 py-4'>
        <ProjectTag  
        onclick={handleTagChange} name="All" isSelected={tag === "All"}/>

        <ProjectTag 
        onclick={handleTagChange} name="Web" isSelected={tag === "Web"}/>

        <ProjectTag 
        onclick={handleTagChange} name="Mobile" isSelected={tag === "Mobile"}/>

    </div>

    <ul ref={ref} className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>{filteredprojects.map((project, index)=> 
        
        <motion.li
        key={index}
        variants={cardVariants}
        initial="initial" animate={isINView ? "animate" : "initial"}
        transition={{duration: 0.3, delay: index * 0.4}}
        >
            <ProjectCard 
            key={project.id}
            title={project.title}
            description={project.description} 
            imgUrl={project.image } 
            gitUrl={project.gitUrl}
            previewUrl={project.previewUrl  }

            />
        </motion.li>   
    )}</ul>
    </section>
  )
}

export default ProjectSection 