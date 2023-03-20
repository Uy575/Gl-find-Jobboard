import React from 'react'
import { useSelector } from 'react-redux'
import './SalaryBreakdownTable.css'
function SalaryBreakdownTable() {
    const detailApi = useSelector((state)=>state.JobReducer)
 

    // tableCalculation 
    const taxRate = 0.2 // 20%
    const niRate = 0.13
     const hourlyRate = detailApi.jobDetail.salary_type === "Range"?  Number(detailApi.jobDetail.salary_max) : Number(detailApi.jobDetail.salary);
     const weeklyHours = detailApi.jobDetail.working_hours;

     const calTotalWeekly = hourlyRate * weeklyHours ?? 0
     const calTotalAnnually = (calTotalWeekly * 52).toFixed(2)
     const calTotalMonthly = (calTotalAnnually/12).toFixed(2)
     //tax calculation
     const calTaxWeekly = (calTotalWeekly * taxRate).toFixed(2);
     const calTaxAnnually = (calTotalAnnually * taxRate).toFixed(2);
     const calTaxMonthly = (calTotalMonthly * taxRate) .toFixed(2);
     //national incuranse cal
     const calNIWeekly = (calTotalWeekly * niRate).toFixed(2);
     const calNIAnnually = (calTotalAnnually * niRate).toFixed(2);
     const calNIMonthly = (calTotalMonthly * niRate).toFixed(2);
     //take home
     const calTakeHomeWeekly = (calTotalWeekly - calTaxWeekly - calNIWeekly).toFixed(2);
     const calTakeHomeAnnually = (calTotalAnnually - calTaxAnnually - calNIAnnually).toFixed(2);
     const calTakeHomeMonthly = (calTotalMonthly - calTaxMonthly - calNIMonthly).toFixed(2);

    
  return (
    <>
    <div>
           <div className='salaryRate'>
            <span className='hourlyRate'>Hourly Rate £{hourlyRate}</span>
            <span className='weeklyHours'>Weekly hrs {weeklyHours}</span>
           </div>
           <hr className='tableHr'/>
           <div style={{ overflowX :"auto"}}>
        <table>
            <thead>

            <tr>
                <th  ></th>
                <th style={{padding:'1px'}}> Weekly</th>
                <th >Monthly</th>
                <th>Annually</th>
            </tr>
            </thead>
            <tbody>

            <tr>
                <td style={{padding:'3px'}}><strong>Total</strong></td>
                <td>£ {calTotalWeekly}</td>
                <td>£ {calTotalMonthly}</td>
                <td>£ { calTotalAnnually }</td>
            </tr>
            <tr>
                <td style={{padding:'3px'}}><strong>Tax</strong></td>
                <td>£ {calTaxWeekly}</td>
                <td>£ {calTaxMonthly}</td>
                <td>£ {calTaxAnnually}</td>
            </tr>
            <tr>
                <td style={{padding:'3px'}}><strong>NI</strong></td>
                <td>£ {calNIWeekly}</td>
                <td>£ {calNIAnnually}</td>
                <td>£ {calNIMonthly}</td>
            </tr>
            <tr>
                <td style={{padding:'3px'}}><strong>Take Home</strong></td>
                <td>£ {calTakeHomeWeekly}</td>
                <td>£ {calTakeHomeMonthly}</td>
                <td>£ {calTakeHomeAnnually}</td>
            </tr>
            </tbody>
        </table>
        </div>
    </div>
        <div style={{paddingTop:'1.5rem'}}>
            <p>
           <strong> Note: </strong> This gross wage breakdown is not accurate as it is estimated from the hourly payout indicated by the employer. Actual figures may vary.
            </p>
        </div>
       </>
  )
}

export default SalaryBreakdownTable