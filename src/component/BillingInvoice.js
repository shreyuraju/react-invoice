import React from 'react'
import Invoice from './Invoice';

const BillingInvoice = ({
    invoiceBillingItem,
    buyerName,
    buyerAddress,
    vehicleNo,
}) => {

    console.log("data in invoice", invoiceBillingItem);
    console.log("buyerName", buyerName);
    console.log("buyerAddress", buyerAddress);
    console.log("vehicleNo", vehicleNo);

    const invoiceData = [
        {
            copy: { customer: "Customer Copy", transport: "Transport Copy" },
            sellerName: "SELLER NAME",
            billerAddress:
                // "\nComposition Dealer\nD.No 1-376(1)\nKalambadi Padav Attur North Nitte Karkala\nState Name : Karnataka, Code : 29, GSTIN/UIN : 29AHOPN9298C1ZK\nState Name : Karnataka, Code : 29",
                "BILLER ADDRESS",
            billNo: 0,
            invoiceDate: "DATE",
            motorVehicleNo: vehicleNo,
            modeOfPayment: "",
            supplierRef: 0,
            otherRef: "",

            buyerName: buyerName,
            buyerAddress: buyerAddress,
            buyerOrderNo: 0,
            date: "DATE",
            dispatchedDocNo: "",
            deliveryNoteDate: "",
            dispatchThrough: "",
            destination: "",
            billLanding: "",
            termsofDelivery: "",

            billingItem: {
                name: "shirt",
                quantity: 10,
                price: 20,
                total: 200
            },
            // billingItem: invoiceBillingItem,

            sellerBankDetails: {
                bankName: "Bank Name",
                accNo: "ACCOUNT NUMBER",
                branch: "BRANCH",
                ifsc: "IFSC",
            },
            declaration:
                "We declare this invoice shows the price of the goods described and that all particulars are true and correct.",
        },
    ];
    return (
        <div>
            <Invoice invoiceData={invoiceData} />
        </div>
    )
}

export default BillingInvoice
