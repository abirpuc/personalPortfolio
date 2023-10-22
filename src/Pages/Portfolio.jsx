import React, { useState } from 'react'
import SpanText from '../components/SpanText'
import ProjectFilter from '../components/ProjectFilter'
import PortfolioModal from '../components/PortfolioModal'
import { projects } from '../data/projects'
import ProjectCard from '../components/ProjectCard'
import BtnSee from '../components/BtnSee'

export default function Portfolio() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [projectData, setProjectData] = useState(projects)
  const [projectLength, setProjectLength] = useState(6)
  const [activeId, setActiveId] = useState(null)

  const handleProjects = () => {
    setProjectLength(projectLength + 3)
  }

  const openModal = (e) => {
    setIsModalOpen(true);
    setActiveId(e)
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  return (
    <section className='mt-12'>
      <div className='container mx-auto' id='portfolio'>
        <div>
          <h1 className="flex justify-center items-center md:gap-x-2 text-2xl sm:text-4xl font-semibold md:text-8xl md:font-bold uppercase tracking-widest"><SpanText className="">MY</SpanText> Project</h1>
        </div>
        <div className='sm:ml-[20%]'>
          {/* <ProjectFilter /> */}
        </div>
        <div className='px-2 mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-3'>
          {
            projectData.slice(0, projectLength).map(project => <ProjectCard
              key={projects.id}
              project={project}
              isModalOpen={isModalOpen}
              openModal={openModal}
              closeModal={closeModal}
              activeId={activeId}
            />)
          }
        </div>
        {
          projectData.length > 6 && projectLength < projectData.length &&
          <BtnSee
            lengthFun={handleProjects}
            title="View More"
          />
        }
      </div>

    </section>
  )
}
