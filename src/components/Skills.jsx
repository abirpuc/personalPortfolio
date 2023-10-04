import React, { useEffect, useState } from 'react'
import SpanText from './SpanText'
import Filter from './Filter'
import SkillsCard from './SkillsCard'
import { skills } from '../data/skills'
import BtnSee from './BtnSee'

export default function Skills() {
    const [data, setData] = useState(skills)
    const [skillsLength, setSkillsLength] = useState(10)
    const [filter, setFilter] = useState('all')

    const handleSkillsLength = () => {
        setSkillsLength(skillsLength + 5)
    }

    const handleFilter = (value) => {
       setFilter(value)
       console.log(value, filter)
    }

    useEffect(()=>{
        if(filter != 'all'){
            const filterData = skills.filter(item => item.type === filter)
            setData(filterData)
            setFilter(filter)

        }else{
            setData(skills)
            setFilter(filter)
        }

    },[filter])


    return (
        <>
            <div>
                <h1 className="flex justify-center items-center md:gap-x-2 text-2xl sm:text-4xl font-semibold md:text-8xl md:font-bold uppercase tracking-widest"><SpanText className="">MY</SpanText> Skills</h1>
            </div>
            <div className=''>
                <Filter handleFilter={handleFilter} />
                <div className='px-8 md:pl-12 pt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-8'>
                    {
                        data.slice(0, skillsLength).map((item, idx) => <SkillsCard key={idx} item={item} />)
                    }
                </div>
            </div>
            {
                data.length > 10 && skillsLength <= data.length &&
                <BtnSee 
                lengthFun={handleSkillsLength}
                title="See More"
                />
            }
        </>
    )
}
