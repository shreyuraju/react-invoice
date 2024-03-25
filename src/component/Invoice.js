import React from 'react'
import './invoice.css'

const Invoice = ({ invoiceData }) => {
  const copy = invoiceData[0].copy.customer;
  console.log(invoiceData[0].billerAddress);
  // const billerAddress = invoiceData[0].billerAddress;
  const billNo = invoiceData[0].billNo;
  const declaration = invoiceData[0].declaration;

  const handlePrint = () => {
    window.print();
  };
  return (
    <div className="a4-container">
      <table id='invoicetable' className='invoice-table'>
        <thead>
          <tr style={{ height: '1px' }}>
            <th style={{ textAlign: "center", fontSize: 24 }} colspan="5"><b>Invoice</b></th>
            <th colspan="2">[{copy}]</th>
          </tr>
          <tr>
            <td rowspan="3" colspan="2" style={{ width: '300px' }}><b>DURO TECH INDUSTRIES</b><br />Composition Dealer<br />D.No 1-376(1)<br />Kalambadi Padav Attur North Nitte Karkala<br />State Name : Karnataka, Code : 29<br />GSTIN/UIN : 29AHOPN9298C1ZK<br />State Name : Karnataka, Code : 29</td>
            <td colspan="3" style={{ height: '1px' }}>Invoice No. e-Way Bill No.<br /><b>{billNo}</b></td>
            <td colspan="2" style={{ height: '1px' }}>date</td>

          </tr>

          <tr style={{ height: '1px' }}>
            <td colspan="3">note</td>
            <td colspan="2">mode of payment</td>
          </tr>

          <tr style={{ height: '1px' }}>
            <td colspan="3">supplier's ref</td>
            <td colspan="3">other ref</td>
          </tr>

          <tr style={{ height: '1px' }}>
            <td rowspan="5" colspan="2" style={{ width: '20px' }}>Buyer</td>
            <td colspan="3">Buyers order no</td>
            <td colspan="3">dated</td>
          </tr>

          <tr style={{ height: '1px' }}>
            <td colspan="3">despatch doc no.</td>
            <td colspan="3">delivry data</td>
          </tr>

          <tr style={{ height: '1px' }}>
            <td colspan="3">despatched through</td>
            <td colspan="3">destination</td>
          </tr>

          <tr style={{ height: '1px' }}>
            <td colspan="3">Bill of Landing</td>
            <td colspan="3">Motor Vehicle No.</td>
          </tr>

          <tr style={{ height: '100px' }}>
            <td colspan="5" >Terms of</td>
          </tr>
        </thead>
        {/* Table Body */}
        <tbody>
          {/* items to print */}
          <tr style={{ height: '1px' }}>
            <td style={{ width: '1px' }}>Sl
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
          <tr style={{ height: '1px' }}>
            <td></td>
            <td>Total</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td style={{ width: '80px' }}><b><span>&#8377;</span>26600000</b></td>
          </tr>
        </tbody>

        {/* Table Footer */}
        <tfoot>
          <tr style={{ height: '1px' }}>
            <td colspan="2"><p>Amount Chargeable (in words)</p><br /></td>
            <td colspan="5"></td>
          </tr>
          <tr style={{ height: '50px' }}>
            <td colspan="2"></td>
            <td colspan="5">bankname
            </td>
          </tr>
          <tr style={{ height: '50px' }}>
            <td colspan="2">Declaration : {declaration}</td>
            <td colspan="5" style={{ height: '50px' }}> Sign</td>
          </tr>
        </tfoot>
      </table>
      <div className='button-content'>
        <button onClick={handlePrint} className="hide-on-print button-content">
          Print
        </button>
      </div>
    </div>
  )
}

export default Invoice
