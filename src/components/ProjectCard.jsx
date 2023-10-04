import React from 'react'
import { BsGithub } from 'react-icons/bs'
import { FaLink } from 'react-icons/fa'
import { GiArchiveResearch } from 'react-icons/gi'
import PortfolioModal from './PortfolioModal'

export default function ProjectCard({ project, openModal, closeModal, isModalOpen }) {
    const { title, type, git, live, thumbnail, tools, description } = project
    return (
        <>
            <div className='projectCard'>
                <div className='group relative rounded-md w-full h-[250px]'>
                    <div className='imageColor'>
                        <button onClick={openModal} className='viewDetails'>View Details <span><GiArchiveResearch /></span></button>
                    </div>
                    <img src={thumbnail} className='w-full h-full rounded-md' alt="" />
                </div>
                <div>
                    <h1 className='cardTitle'>{title}/{type}</h1>

                </div>
                <div className='cardBtnContainer'>
                    <a href={git} className='cardLinkBtn'>
                    Github<span><BsGithub /></span>
                    </a>
                    <a href={live} className='cardLinkBtn'>Live<span><FaLink /></span></a>
                </div>
            </div>

            <PortfolioModal isOpen={isModalOpen} onClose={closeModal} git={git} live={live}>
                <h1 className="text-2xl font-semibold">{title}</h1>
                <div className='sm:p-4'>
                    <img className='w-full h-[200px] sm:h-[300px] rounded-md' src={thumbnail} alt="" />
                </div>
                <div>
                    <h1 className='text-md font-bold'>Description:</h1>
                    <div>
                        {
                            description.map((des, idx) => <li key={idx}>{des}</li>)
                        }
                    </div>
                    <h1 className='pt-2'>
                        <span className='text-md font-bold'>Tools&Technology:</span>
                        {
                            tools.map((tool, id) => <>{tool},</>)
                        }

                    </h1>
                </div>
            </PortfolioModal>
        </>
    )
}
