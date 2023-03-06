import React from 'react'
import { Accordion } from 'react-bootstrap-accordion'
import 'react-bootstrap-accordion/dist/index.css'
import SalaryBreakdownTable from '../Salary-Breakdown-Table/SalaryBreakdownTable'
import './Accordion.css'
function AccordionComp() {

    return (
        <div className='App' >
          <Accordion  title={<h1 className='accordion'>Take Home Salary Breakdown*</h1>} children={<SalaryBreakdownTable/>} /* Props */ />
        </div>
      )
}

export default AccordionComp


