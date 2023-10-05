import React from 'react'
import { skillTitle } from '../data/skills'

export default function Filter({handleFilter}) {
    return (
        <div className=' flex flex-col sm:flex-row gap-2 justify-center py-4 mx-12'>
            {
                skillTitle.map((item, idx) => <button onClick={()=>handleFilter(item.type)} key={idx} className='filterbtn transition-all duration-200 text-md'>{item.title}</button>)
            }
        </div>
    )
}
