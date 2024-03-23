import Invoice from './component/Invoice'
function App() {
  const invoiceData = [{
    name:"abc",
    title:"def",
    daya:{
      id:1,
      name:"ghi"
    }
  }];
  return (
    <div>
      <Invoice invoiceData={invoiceData}/>
    </div>
  );
}

export default App;
