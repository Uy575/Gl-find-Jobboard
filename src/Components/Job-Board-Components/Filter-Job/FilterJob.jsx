import React from 'react'
import FilterJobForm from '../FilterJobForm/FilterJobForm'
import BackHome from '../Back-To-Home/BackHome'

function FilterJob() {
  return (
     <>
        <aside>
        <BackHome backArrowDescription="Home" navigating= "/" />
         <FilterJobForm/>
        </aside>
     </>
  )
}

export default FilterJob