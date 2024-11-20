import { useState } from "react";

export default function App() {
  const [bill, setBill] = useState(null);
  const [tip, setTip] = useState(0.1);
  const [friendTip, setFriendTip] = useState(0.1);
  return (
    <div>
      <BillInput bill={bill} onSetBill={setBill}></BillInput>
      <TipInput tip={tip} onSetTip={setTip}>
        How did you like the service :
      </TipInput>
      <TipInput tip={friendTip} onSetTip={setFriendTip}>
        How did your friend like the service :
      </TipInput>
      <FinalBill bill={bill} tip={tip} friendTip={friendTip}></FinalBill>
    </div>
  );
}
function BillInput({ bill, onSetBill }) {
  return (
    <div className="container">
      <span>
        How much was the bill:
        <input
          type="number"
          value={bill}
          onChange={(e) => onSetBill(e.target.value)}
        ></input>
      </span>
    </div>
  );
}
function TipInput({ children, tip, onSetTip }) {
  function handleTip(e) {
    //const x = Number(e.target.value) / 100;
    onSetTip(e.target.value);
  }
  return (
    <div className="container">
      <span>
        {children}
        <select value={tip} onChange={(e) => handleTip(e)}>
          <option value={0.1}>not satisfied 10%</option>
          <option value={0.15}>satisfied 15%</option>
          <option value={0.2}>Great 20%</option>
        </select>
      </span>
    </div>
  );
}
function FinalBill({ bill, tip, friendTip }) {
  const yourTip = bill * tip;
  const yourFriendTip = bill * friendTip;
  const totalBill = Number(bill) + yourTip + yourFriendTip;

  return (
    <div className="result">
      <h1>
        You pay ${totalBill.toFixed(2)} (${bill} + ${yourTip.toFixed(2)} (your
        tip) + ${yourFriendTip.toFixed(2)} (friend's tip))
      </h1>
    </div>
  );
}
