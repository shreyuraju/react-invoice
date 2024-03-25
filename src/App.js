import Invoice from './component/Invoice'
function App() {
  const invoiceData = [{
    copy:{customer:"Customer Copy", transport:"Transport Copy"},
    sellerName:"DURO TECH INDUSTRIES",
    billerAddress:"\nComposition Dealer\nD.No 1-376(1)\nKalambadi Padav Attur North Nitte Karkala\nState Name : Karnataka, Code : 29, GSTIN/UIN : 29AHOPN9298C1ZK\nState Name : Karnataka, Code : 29",
    billNo:245,
    invoiceDate:"25-03-2024",
    deliveryNote:"VEH.NO. KA21B9592",
    modeOfPayment:"",
    supplierRef:245,
    otherRef:"",

    buyerName:"Prasad",
    buyerAdderss:"Bailur\nState Name : Karnatak, Code : 29",
    buyerOrderNo:"",
    date:"",
    dispatchedDocNo:"",
    deliveryNoteDate:"30-01-2024",
    dispatchThrough:"",
    destination:"",
    billLanding:"",
    MotorVehicleNo:"",
    termsofDelivery:"",

    billingItem:{name:"40 mm Square Interlock", HSN:"",quantity:700.00,rate:38.00, per:"sparefeet", amount:26600.00},

    sellerBankDetails:{bankName:"Canara Bank", accNo:"0609201000633", branch:"Karkals",ifsc:"CNRB0000609" },
    declaration:"We declare this invoice shows the price of the goods described and that all particulars are true and correct.",

  }];
  return (
    <div>
      <Invoice invoiceData={invoiceData}/>
    </div>
  );
}

export default App;
