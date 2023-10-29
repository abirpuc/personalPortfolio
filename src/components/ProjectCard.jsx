import React from 'react'
import { BsGithub } from 'react-icons/bs'
import { FaLink } from 'react-icons/fa'
import { GiArchiveResearch } from 'react-icons/gi'
import PortfolioModal from './PortfolioModal'

export default function ProjectCard({ project, openModal, closeModal, isModalOpen, activeId}) {
    const {id, title, type, git, live, thumbnail, tools, description,version} = project

    return (
        <>
            <div className='projectCard' data-aos="flip-up" data-aos-duration="10000">
                <div className='group relative rounded-md w-full h-[250px]'>
                    <div className='imageColor'>
                        <button onClick={()=>openModal(id)} className='viewDetails'>View Details <span><GiArchiveResearch /></span></button>
                    </div>
                    <img src={thumbnail} className='w-full h-full rounded-md' alt="" loading='lazy'/>
                </div>
                <div>
                    <h1 className='cardTitle'>{title}/{type}</h1>
                    <p>{version === 'beta'?<span className='ml-[5px] bg-yellow-400 rounded-sm text-black font-[10px]'>Beta</span>:''}</p>
                    <p className='visible sm:invisible text-yellow-300'>[Click on the image for details]</p>
                </div>
                <div className='cardBtnContainer'>
                    <a href={git} target='_blanck' className='cardLinkBtn cursor-pointer'>
                    Github<span><BsGithub /></span>
                    </a>
                    <a href={live} target='_blanck' className='cardLinkBtn cursor-pointer'>Live<span><FaLink /></span></a>
                </div>
            </div>

            {
                id === activeId ?   <PortfolioModal isOpen={isModalOpen} onClose={closeModal} git={git} live={live}>
                <h1 className="text-2xl text-black font-semibold">{title}/{type}</h1>
                <div className='sm:p-4'>
                    <img className='w-full h-[200px] sm:h-[300px] rounded-md' src={thumbnail} alt="" />
                </div>
                <div>
                    <h1 className='text-md text-black font-bold'>Description:</h1>
                    <div className='text-black'>
                        {
                            description.map((des, idx) => <li key={idx}>{des}</li>)
                        }
                    </div>
                    <h1 className='pt-2 text-black sm:flex flex-wrap'>
                        <span className='text-md font-bold'>Tools&Technology:</span>
                        {
                            tools.map((tool, id) => <p key={id} className='flex'><span>{tool}</span>,</p>)
                        }

                    </h1>
                </div>
            </PortfolioModal>:''
            }
        </>
    )
}
