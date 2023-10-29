import React, { useState } from 'react'
import SpanText from '../components/SpanText';
import { about } from '../data/about';
import Skills from '../components/Skills';
import { aboutCard } from '../data/aboutCard';
import AboutCard from '../components/AboutCard';

export default function About() {
  return (
    <section className='container mx-auto pt-20' id="about">
      <div data-aos="fade-up" data-aos-duration="100000">
        <h1 className="flex justify-center items-center md:gap-x-2 text-2xl sm:text-4xl font-semibold md:text-8xl md:font-bold uppercase tracking-widest">About <SpanText className="ml-2"> Me</SpanText></h1>
      </div>
      <div className="mt-1 md:mt-8">
        <div className="flex flex-col justify-between items-center md:flex-row lg:flex-row">
          <div data-aos="fade-right" data-aos-duration="100000">
            <h1 className="text-center text-xl md:text-3xl tracking-wide py-2">Personal Info</h1>
            <div className="flex flex-col md:flex-row justify-between items-center w-full gap-y-2">
              <div className="w-full pl-4">
                <p className="infotext text-sm md:text-md">Name: <span className="text-md md:text-xl textcontent">{about.firstName}</span></p>
                <p className="infotext text-sm md:text-md">Mobile: <span className="textcontent text-md md:text-xl">{about.mobile}</span></p>
                <p className="infotext text-sm md:text-md">Email: <span className="textcontent text-md md:text-xl">{about.email}</span></p>
                <p className="infotext text-sm md:text-md">address: <span className="textcontent text-md md:text-xl">{about.address}</span></p>
                <p className="infotext text-sm md:text-md">skills:<span className="textcontent text-md md:text-xl">{about.skills}</span></p>
                <p className="infotext text-sm md:text-md">Freelancing:<span className="textcontent text-md md:text-xl">{about.freelancing}</span></p>
              </div>
              <div className="w-full pl-4">
                <p className="infotext text-sm md:text-md">present Position: <span className="textcontent text-md md:text-xl">{about.presentPosition[0]}</span>
                  <p className="infotext text-sm md:text-md">Company: <span className="textcontent text-md md:text-xl">{about.presentPosition[1]}</span></p></p>

                <p className="infotext text-sm md:text-md">Experience: <span className="textcontent text-md md:text-xl">{about.experience}</span></p>
                <p className="infotext text-sm md:text-md">Language: <span className="textcontent text-md md:text-xl">{about.language}</span></p>
              </div>
            </div>
          </div>
          {/* <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:gird-cols-2 gap-y-2 gap-x-8 w-[80%] md:w-1/2 mx-auto"> */}
          <div className='flex flex-col sm:flex-row md:flex-col lg:flex-row flex-wrap gap-8'>
            {
              aboutCard.map((about,idx) => <AboutCard key={idx} about={about}/>)
            }
          </div>
        </div>
      </div>
      <div className='container mx-auto mt-20'>
        <Skills />
      </div>
    </section >
  )
}
