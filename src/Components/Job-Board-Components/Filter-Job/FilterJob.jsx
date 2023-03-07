import React from 'react'
import FilterJobForm from '../FilterJobForm/FilterJobForm'
import BackHome from '../Back-To-Home/BackHome'

function FilterJob({show}) {
  return (
     <>
        <aside>
        <BackHome backArrowDescription="Home" navigating= "/"  show={show} />
         <FilterJobForm/>
        </aside>
     </>
  )
}

export default FilterJob