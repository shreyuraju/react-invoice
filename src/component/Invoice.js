import React from 'react'
import './invoice.css'
// import { jsPDF } from "jspdf";


const Invoice = ({ invoiceData }) => {
  const copy = invoiceData[0].copy.customer;
  const buyerName = invoiceData[0].buyerName;
  const buyerAddress = invoiceData[0].buyerAddress;
  const vehicleNo = invoiceData[0].motorVehicleNo;
  const invoiceDate = invoiceData[0].invoiceDate;
  const items = invoiceData[0].billingItem;

  const sellerBankDetails = invoiceData[0].sellerBankDetails;

  // console.log(invoiceData[0].billerAddress);
  // const billerAddress = invoiceData[0].billerAddress;
  const billNo = invoiceData[0].billNo;
  const declaration = invoiceData[0].declaration;


  function numberToIndianWords(number) {
    if (isNaN(number)) {
      return 'Please enter a valid number';
    }

    const units = ["", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine"];
    const tens = ["", "", "Twenty", "Thirty", "Forty", "Fifty", "Sixty", "Seventy", "Eighty", "Ninety"];
    const teens = ["Ten", "Eleven", "Twelve", "Thirteen", "Fourteen", "Fifteen", "Sixteen", "Seventeen", "Eighteen", "Nineteen"];

    const convertTwoDigits = (n) => {
      if (n < 10) {
        return units[n];
      } else if (n < 20) {
        return teens[n - 10];
      } else {
        return tens[Math.floor(n / 10)] + " " + units[n % 10];
      }
    };

    const convertThreeDigits = (n) => {
      if (n < 100) {
        return convertTwoDigits(n);
      } else {
        return units[Math.floor(n / 100)] + " Hundred " + convertTwoDigits(n % 100);
      }
    };

    const convertGroup = (num) => {
      if (num < 1000) {
        return convertThreeDigits(num);
      } else if (num < 100000) {
        return convertThreeDigits(Math.floor(num / 1000)) + " Thousand " + convertThreeDigits(num % 1000);
      } else if (num < 10000000) {
        return convertThreeDigits(Math.floor(num / 100000)) + " Lakh " + convertGroup(num % 100000);
      } else {
        return convertThreeDigits(Math.floor(num / 10000000)) + " Crore " + convertGroup(num % 10000000);
      }
    };

    return convertGroup(number) + " Rupees";
  }

  // Example usage:
  console.log(numberToIndianWords(210));  // Output: "Twelve Crore Thirty-Four Lakh Fifty-Six Thousand Seven Hundred Eighty-Nine Rupees"




  var totalAmount = 0;
  var totalQuantity = 0;
  var itemIndex = "";
  var itemName = [];
  var itemQuantity = [];
  var itemRate = [];
  var itemAmount = [];

  //uncomment when in use 

  // items.foreach((item, index) => {
  //   var currentItemIndex = index + 1;
  //   itemIndex = itemIndex + currentItemIndex + "\n";
  //   itemName.push(item.name);
  //   itemQuantity.push(item.quantity);
  //   totalQuantity += item.quantity;
  //   itemRate.push(item.price);
  //   itemAmount.push(item.total);
  //   totalAmount += item.total;
  // });

  // var amountWords = numberToIndianWords(totalAmount);



  //temporary variables COMMENT LATER
  itemIndex = "1"
  itemName.push(items.name);
  itemQuantity.push(items.quantity);
  totalQuantity += items.quantity;
  itemRate.push(items.price);
  itemAmount.push(items.total);
  totalAmount += items.total;
  
  var amountWords = numberToIndianWords(totalAmount);

  // const generateInvoice = () => {
  //   const doc = new jsPDF();
  //   doc.autoTable('invoicetable')
  //   doc.save(buyerName+'-Invoice.pdf')
  // }

  const handlePrint = () => {
    // generateInvoice();
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
            <td rowspan="3" colspan="2" style={{ width: '100px' }}><b>SELLER NAME</b><br />SELLER ADDRESS</td>
            <td colspan="3" style={{ height: '1px' }}>Invoice No. e-Way Bill No.<br /><b>{billNo}</b></td>
            <td colspan="2" style={{ height: '1px' }}>date:<br /><b>{invoiceDate}</b></td>

          </tr>

          <tr style={{ height: '1px' }}>
            <td colspan="3">Delivery Note:<br /><b>{vehicleNo}</b></td>
            <td colspan="2">mode of payment</td>
          </tr>

          <tr style={{ height: '1px' }}>
            <td colspan="3">supplier's ref</td>
            <td colspan="3">other ref</td>
          </tr>

          <tr style={{ height: '1px' }}>
            <td rowspan="5" colspan="2" style={{ width: '20px' }}>
              Buyer Details:<br />
              <p>
                <b>{buyerName}<br />
                  {buyerAddress}
                </b>
              </p>
            </td>
            <td colspan="3">Buyers order no</td>
            <td colspan="3">dated</td>
          </tr>

          <tr style={{ height: '1px' }}>
            <td colspan="3">despatch doc no.</td>
            <td colspan="3">delivry data<br /><b>{invoiceDate}</b></td>
          </tr>

          <tr style={{ height: '1px' }}>
            <td colspan="3">despatched through</td>
            <td colspan="3">destination</td>
          </tr>

          <tr style={{ height: '1px' }}>
            <td colspan="3">Bill of Landing</td>
            <td colspan="3">Motor Vehicle No.<br /><b>{vehicleNo}</b></td>
          </tr>

          <tr style={{ height: '80px' }}>
            <td colspan="5" >Terms of Delivery</td>
          </tr>
          <tr style={{ height: '1px' }}>
            <td style={{ width: '1px' }}>Sl
              no</td>
            <td style={{ textAlign: 'center' }}>Description of Goods</td>
            <td>HSN/SAC</td>
            <td>Quantity</td>
            <td>Rate</td>
            <td>per</td>
            <td>Amount</td>
          </tr>
        </thead>
        {/* Table Body */}
        <tbody>
          <tr>
            <td>
              {itemIndex.split('').map((character, index) => (
                <span key={index}><b>{character}</b></span>
              ))}
            </td>
            <td>
              {itemName.map((name, index) => (
                <span key={index}><b>{name}</b><br /></span>
              ))}
            </td>
            <td></td>
            <td>
              {itemQuantity.map((quantity, index) => (
                <span key={index}><b>{quantity}</b><br /></span>
              ))}
            </td>
            <td>
              {itemRate.map((rate, index) => (
                <span key={index}><b>{rate}</b><br /></span>
              ))}
            </td>
            <td></td>
            <td>
              {itemAmount.map((amount, index) => (
                <span key={index}><b>{amount}</b><br /></span>
              ))}
            </td>
          </tr>
        </tbody>

        {/* Table Footer */}
        <tfoot>
          <tr style={{ height: '1px' }}>
            <td></td>
            <td style={{ textAlign: 'right' }}><b>Total</b></td>
            <td></td>
            <td><b>{totalQuantity}</b></td>
            <td></td>
            <td></td>
            <td style={{ width: '80px' }}><b><span>&#8377;</span>{totalAmount}</b></td>
          </tr>

          <tr style={{ height: '1px' }}>
            <td colspan="2">Amount Chargeable (in words)<br /><b>{amountWords}</b></td>
            <td colspan="5"></td>
          </tr>
          <tr style={{ height: '50px' }}>
            <td colspan="2"></td>
            <td colspan="5" style={{ fontSize: 12 }}>Seller Bank Details:<br />
              <b>Bank Name : {sellerBankDetails.bankName}<br />
                Acc/No.    : {sellerBankDetails.accNo}<br />
                Branch     : {sellerBankDetails.branch}<br />
                IFSC       : {sellerBankDetails.ifsc}
              </b>
            </td>
          </tr>
          <tr style={{ height: '50px' }} className='sign'>
            <td colspan="2">Declaration :<br />{declaration}</td>
            <td colspan="5" style={{ height: '50px' }}>
              <b>for SELLER NAME</b><br /><br />Authorised Signatory
            </td>
          </tr>
        </tfoot>
      </table>
      <div className='note'><p style={{ fontSize: 12 }}>This is Computer Generated Invoice</p></div>
      <div className='button-content'>
        <button onClick={handlePrint} className="hide-on-print button-content">
          Print
        </button>
      </div>

    </div>
  )
}

export default Invoice
