"use client"; 
import React from 'react'
import dynamic from 'next/dynamic';

const AnimatedNumbers = dynamic(() => {
    return import("react-animated-numbers");
},
{ssr: false}
);


const acheivementsList = [
    {

        metric: "Projects",
        value: "20",
        postfix: "+"
    },
    {
        prefix: "~ ",
        metric: "Users",
        value: "10",
        postfix: "K"
    },
    {
        metric: "Awards",
        value: "2+"
    },
    {
        metric: "Years",
        value: "2",
        postfix: "+"
    }
];

const AchievmentSection = () => {
  return (
    <div className='py-8  xl:gap-16 xl:px-16'>

        <div className='border-[#33353F] border rounded-md py-8  flex flex-row items-center justify-between px-2'>
        {
            acheivementsList.map((achievement, index) => {
             return (
                <div 
                className='flex flex-col items-center justify-center mx-4'
                key={index}
                >
                    <h2 className='text-white text-2xl font-bold sm:text-2xl '>
                        {achievement.prefix}
                       <AnimatedNumbers
                       includeComma
                       animateToNumber={parseInt(achievement.value)}
                       locale='en-US'
                       className='text-white text-2xl font-bold '
                       configs={((_, index) => {
                        return {
                            mass: 1,
                            friction: 100,
                            tensions: 140 * (index + 1),
                        };
                       })} />
                       {achievement.postfix}
                    </h2>
                    <p className='text-[#ADB7BE] text-base'>
                        {achievement.metric}
                    </p>

                </div>
             );
            })
        }
        </div>
    </div>
  )
}

export default AchievmentSection