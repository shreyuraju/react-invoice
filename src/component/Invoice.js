import React from 'react'
import './invoice.css'

const Invoice = ({invoiceData}) => {
  console.log(invoiceData[0].name);
  return (
    <div className="a4-container">
      <table id='invoicetable' className='invoice-table'>
        <tbody>

          <tr>
            <td rowspan="3" colspan="2" style={{ width: '300px'}}>Address</td>
            <td colspan="3" style={{height: '1px'}}>no</td>
            <td colspan="2" style={{height: '1px'}}>date</td>
            
          </tr>

          <tr style={{height: '1px' }}>
            <td colspan="3">note</td>
            <td colspan="2">mode of payment</td>
          </tr>

          <tr style={{height: '1px' }}>
            <td colspan="3">supplier's ref</td>
            <td colspan="3">other ref</td>
          </tr>

          <tr style={{height: '1px' }}>
            <td rowspan="5" colspan="2"  style={{ width: '20px'}}>Buyer</td>
            <td colspan="3">Buyers order no</td>
            <td colspan="3">dated</td>
          </tr>

          <tr style={{height: '1px' }}>
            <td colspan="3">despatch doc no.</td>
            <td colspan="3">delivry data</td>
          </tr>

          <tr style={{height: '1px' }}>
            <td colspan="3">despatched through</td>
            <td colspan="3">destination</td>
          </tr>

          <tr style={{height: '1px' }}>
            <td colspan="3">Bill of Landing</td>
            <td colspan="3">Motor Vehicle No.</td>
          </tr>
          
          <tr style={{height: '100px' }}>
            <td colspan="5" >Terms of</td>
          </tr>


          {/* items to print */}
          <tr style={{height: '1px' }}>
            <td style={{width: '1px' }}>Sl
              no</td>
            <td>Description of Goods</td>
            <td>HSN/SAC</td>
            <td>Quantity</td>
            <td>Rate</td>
            <td>per</td>
            <td>Amount</td>
          </tr>
          <tr>
            <th>1</th>
            <th>vgasgvasdv</th>
            <th></th>
            <th>vasva</th>
            <th>53532</th>
            <th>segsdvv</th>
            <th>32523</th>
          </tr>
          <tr style={{height: '1px' }}>
            <td></td>
            <td>Total</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td><b><span>&#8377;</span> 26600000</b></td>
          </tr>
          <tr style={{height: '1px' }}>
            <td colspan="2">Amount Chargeable</td>
            <td colspan="5"></td>
          </tr>
          <tr style={{height: '50px' }}>
            <td colspan="2"></td>
            <td colspan="5">Bank Details</td>
          </tr>
          <tr style={{height: '50px' }}>
            <td colspan="2"> Bank Details</td>
            <td colspan="5"> Sign</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default Invoice
