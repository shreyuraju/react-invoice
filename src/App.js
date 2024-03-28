
import BillingInvoice from './component/BillingInvoice';
function App() {
  var updatedBillItems = {
      name: "shirt",
      quantity: 10,
      price: 20,
      total: 200
  }
  var buyerName = "BUYER NAME";
  var buyerAddress = "BUYER ADDRESS";
  var vehicleNo ="VEHICLE NUMBER";
  return (
    <div>
      <BillingInvoice
        invoiceBillingItem={updatedBillItems}
        buyerName={buyerName}
        buyerAddress={buyerAddress}
        vehicleNo={vehicleNo}
      />
    </div>
  );
}

export default App;
