import React, { useState } from 'react'
import CountUp from 'react-countup';
import ScrollTrigger from 'react-scroll-trigger';
export default function AboutCard({about}) {
    const [scrollOn, setScrollOn] = useState(false)
  return (
    <div className="bg-indigo-200 dark:bg-gray-700/80 text-primaryColor dark:text-darkPrimaryColor w-[200px]  h-[150px] rounded-md flex flex-col justify-center items-center" data-aos="flip-right">
              <p className="text-xl font-bold md:text-4xl">
                <ScrollTrigger onEnter={() => setScrollOn(true)} onExit={() => setScrollOn(false)}>
                  {
                    scrollOn &&
                    <CountUp
                      start={0}
                      end={about.number}
                      duration={3}
                      suffix="+"
                    />
                  }
                </ScrollTrigger>
              </p>
              <h1 className="text-md text-textColor dark:text-darkTextColor font-bold md:text-2xl">{about.title}</h1>
            </div> 
  )
}
