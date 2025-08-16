import React from 'react'
import { CodeBracketIcon, EyeIcon } from '@heroicons/react/24/solid'
import Link from 'next/link';

const ProjectCard = ({imgUrl, title, description, gitUrl, previewUrl}) => {
  return (
    <div className=' '>
        
        <div className='text-white rounded-t-xl mt-4 bg-[#181818] py-6 px-4 border-[#adb7be1d] border'>
            <h5 className='font-semibold text-xl mb-2'>{title}</h5>
            <p className='text-[#ADB7BE]'>
                {description}
            </p>
        </div>
        <div
        className='h-52 md:h-72 rounded-b-xl bg-[#181818 py-6 px-4] relative group' 
        style={{
            background: `url(${imgUrl})`, backgroundSize: "cover",
        }}>


             <div className='overlay absolute top-0 left-0 w-full h-full bg-[#181818a0] bg-opacity-0 hidden group-hover:flex group-hover:bg-opacity-80 transition-all duration-500  items-center justify-center'>

                <Link href={gitUrl} className='h-14 w-14 border-2 relative rounded-full border-[#ADB7BE] hover:border-white items-center justify-center group/link'>
                    <CodeBracketIcon className='h-10 w-10 text-[#ADB7BE] mr-2 m-2 p-2 cursor-pointer group-hover/link:text-white'/>
                </Link>


                 <Link href={previewUrl} className='h-14 w-14 border-2 relative rounded-full border-[#ADB7BE] hover:border-white items-center justify-center group/link'>
                    <EyeIcon className='h-10 w-10 text-[#ADB7BE] m-2 p-2 cursor-pointer group-hover/link:text-white'/>
                </Link>
            
        </div>
        </div>

       

        
        </div>
  )
}

export default ProjectCard