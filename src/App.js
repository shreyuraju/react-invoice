import Invoice from './component/Invoice'
function App({
  invoiceBillingItem,
  buyerName,
  buyerAddress,
  vehicleNo,
}) {

  console.log("data in invoice", invoiceBillingItem);
  console.log("buyerName", buyerName);
  console.log("buyerAddress", buyerAddress);
  console.log("vehicleNo", vehicleNo);

  const invoiceData = [
    {
      copy: { customer: "Customer Copy", transport: "Transport Copy" },
      sellerName: "DURO TECH INDUSTRIES",
      billerAddress:
        "\nComposition Dealer\nD.No 1-376(1)\nKalambadi Padav Attur North Nitte Karkala\nState Name : Karnataka, Code : 29, GSTIN/UIN : 29AHOPN9298C1ZK\nState Name : Karnataka, Code : 29",
      billNo: 0,
      invoiceDate: "25-03-2024",
      motorVehicleNo: vehicleNo,
      modeOfPayment: "",
      supplierRef: 0,
      otherRef: "",

      buyerName: buyerName,
      buyerAddress: buyerAddress,
      buyerOrderNo: 0,
      date: "",
      dispatchedDocNo: "",
      deliveryNoteDate: "30-01-2024",
      dispatchThrough: "",
      destination: "",
      billLanding: "",
      termsofDelivery: "",

      billingItem: invoiceBillingItem,

      sellerBankDetails: {
        bankName: "Canara Bank",
        accNo: "0609201000633",
        branch: "Karkals",
        ifsc: "CNRB0000609",
      },
      declaration:
        "We declare this invoice shows the price of the goods described and that all particulars are true and correct.",
    },
  ];
  return (
    <div>
      <Invoice invoiceData={invoiceData}/>

      {/* <BillingInvoice
            invoiceBillingItem={updatedBillItems}
            buyerName={buyerName}
            buyerAddress={buyerAddress}
            vehicleNo={vehicleNo}
          /> */}
    </div>
  );
}

export default App;
