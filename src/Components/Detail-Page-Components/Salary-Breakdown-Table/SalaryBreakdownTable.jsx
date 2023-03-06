import React from 'react'

function SalaryBreakdownTable() {
  return (
    <div>
           <div>
            <span>Hourly Rate £ 10.50</span>
            <span>Weekly hrs 48</span>
           </div>
        <table>
            <tr>
                <th>Weekly</th>
                <th>Monthly</th>
                <th>Annually</th>
            </tr>
            <tr>
                <td>Total</td>
                <td>£ 588.00</td>
                <td>£ 588.00</td>
                <td>£ 588.00</td>
            </tr>
            <tr>
                <td>Tax</td>
                <td>£ 588.00</td>
                <td>£ 588.00</td>
                <td>£ 588.00</td>
            </tr>
            <tr>
                <td>NI</td>
                <td>£ 588.00</td>
                <td>£ 588.00</td>
                <td>£ 588.00</td>
            </tr>
            <tr>
                <td>Take home</td>
                <td>£ 588.00</td>
                <td>£ 588.00</td>
                <td>£ 588.00</td>
            </tr>
        </table>
    </div>
  )
}

export default SalaryBreakdownTable