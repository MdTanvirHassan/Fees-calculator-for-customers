import React, { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { PieChart } from "react-minimal-pie-chart";

function Calculator() {
  const [calculationBasis, setCalculationBasis] = useState("Purchase price");
  const [purchasePrice, setPurchasePrice] = useState(0);
  const [feePercentage, setFeePercentage] = useState(2.49);
  const [feeAmount, setFeeAmount] = useState(0);
  const [totalAmount, setTotalAmount] = useState(0);
  const [showDealerConditions, setShowDealerConditions] = useState(false);

  useEffect(() => {
    calculateFee();
  }, [purchasePrice, feePercentage]);

  const handleCalculationBasisChange = (event) => {
    const selectedValue = event.target.value;
    if (selectedValue === "balance") {
      setCalculationBasis("Balance");
    } else {
      setCalculationBasis("Purchase price");
    }
  };

  const handlePurchasePriceChange = (event) => {
    setPurchasePrice(parseFloat(event.target.value));
  };

  const handlePaymentTypeChange = (event) => {
    const paymentType = event.target.value;

    if (paymentType === "goodsandservices") {
      setFeePercentage(2.49);
      setShowDealerConditions(false);
    } else if (paymentType === "friendsandfamily") {
      setFeePercentage(0);
      setShowDealerConditions(false);
    } else if (paymentType === "donations") {
      setFeePercentage(1.5);
      setShowDealerConditions(false);
    } else if (paymentType === "micropayment") {
      setFeePercentage(0.1);
      setShowDealerConditions(false);
    } else if (paymentType === "conditions") {
      setShowDealerConditions(true);
      const purchasePrice = event.target.options[        event.target.selectedIndex      ].getAttribute("data-price");
      if (purchasePrice == "0-2000") {
        setFeePercentage(2.49);
      } else if (purchasePrice == "2001-5000") {
        setFeePercentage(2.19);
      } else if (purchasePrice == "5001-25000") {
        setFeePercentage(1.99);
      } else if (purchasePrice == "25001-100000") {
        setFeePercentage(1.79);
      } else if (purchasePrice == "100000+") {
        setFeePercentage(1.49);
      }
    } else {
      // reload the page if an unexpected payment type is selected
      window.location.reload();
    }
  };

  const calculateFee = () => {
    if (purchasePrice > 0) {
      const fee = purchasePrice * (feePercentage / 100) + 0.35;
      const total = purchasePrice + fee;
      setFeeAmount(fee);
      setTotalAmount(total);
    } else {
      setFeeAmount(0);
      setTotalAmount(0);
    }
  };

  const data = [    { title: "Purchase Price", value: purchasePrice, color: "#1d4ed8" },    { title: "Fee Amount", value: feeAmount, color: "#f87171" },  ];

  return (
    <div className="container max-w-[1240px] m-auto py-20">
      <ToastContainer />
      <div className="p-8 bg-white/10 z--10 relative rounded-md shadow-xl">
<h1 className="text-3xl font-semibold text-white mb-8">PayPal Fee Calculator</h1>
<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
<div className="space-y-4">
<label htmlFor="calculation-basis" className="text-white font-medium block">
Calculation Basis
</label>
<div className="flex items-center space-x-4">
<div className="relative flex items-center">
<input
type="radio"
id="purchase-price"
name="calculation-basis"
value="Purchase price"
checked={calculationBasis === "Purchase price"}
onChange={() => setCalculationBasis("Purchase price")}
className="sr-only"
/>
<label htmlFor="purchase-price" className="cursor-pointer">
Purchase Price
</label>
</div>
<div className="relative flex items-center">
<input
type="radio"
id="balance"
name="calculation-basis"
value="Balance"
checked={calculationBasis === "Balance"}
onChange={() => setCalculationBasis("Balance")}
className="sr-only"
/>
<label htmlFor="balance" className="cursor-pointer">
Balance
</label>
</div>
</div>
{calculationBasis === "Purchase price" && (
<>
<label htmlFor="purchase-price-input" className="text-white font-medium block">
Purchase Price
</label>
<div className="relative">
<div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
<span className="text-gray-400">$</span>
</div>
<input
                 type="number"
                 id="purchase-price-input"
                 value={purchasePrice}
                 onChange={handlePurchasePriceChange}
                 className="bg-white/30 py-2 pl-10 pr-4 rounded-md w-full text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                 step="0.01"
               />
</div>
</>
)}
<label htmlFor="payment-type" className="text-white font-medium block">
Payment Type
</label>
<select
           id="payment-type"
           onChange={handlePaymentTypeChange}
           className="bg-white/30 py-2 px-4 rounded-md w-full text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
         >
<option value="goodsandservices">Goods and Services</option>
<option value="friendsandfamily">Friends and Family</option>
<option value="donations">Donations</option>
<option value="micropayment">Micropayment</option>
<option value="conditions">Additional Conditions</option>
</select>
{showDealerConditions && (
      <>
        <label htmlFor="dealer-conditions" className="text-white font-medium block mt-4">
          Dealer Conditions
        </label>
        <select
          id="dealer-conditions"
          onChange={handlePaymentTypeChange}
          className="bg-white/30 py-2 px-4 rounded-md w-full text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        >
          <option value="0-2000" data-price="0-2000">
            $0 - $2,000
          </option>
          <option value="2001-5000" data-price="2001-5000">
            $2,001 - $5,000
          </option>
          <option value="5001-25000" data-price="5001-25000">
            $5,001 - $25,000
          </option>
          <option value="25001-100000" data-price="25001-100000">
            $25,001 - $100,000
          </option>
          <option value="100000+" data-price="100000+">
            Over $100,000
          </option>
        </select>
      </>
    )}
    <div className="mt-8">
      <div className="text-xl font-medium mb-2 text-white">Fees</div>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <div className="text-sm text-gray-400 mb-2">Fee Percentage</div>
          <div className="text-2xl font-semibold text-white">{feePercentage}%</div>
        </div>
        <div>
          <div className="text-sm text-gray-400 mb-2">Fee Amount</div>
          <div className="text-2xl font-semibold text-white">${feeAmount.toFixed(2)}</div>
        </div>
        <div>
          <div className="text-sm text-gray-400 mb-2">Total Amount</div>
          <div className="text-2xl font-semibold text-white">${totalAmount.toFixed(2)}</div>
        </div>
      </div>
    </div>
  </div>
  <div className="mt-8">
    <PieChart
      data={data}
      lineWidth={15}
      label={({ dataEntry }) => dataEntry.value.toFixed(2)}
      labelStyle={{
        fontSize: "30px",
        fontFamily: "sans-serif",
        fill: "#fff",
      }}
      labelPosition={100 - (feeAmount / totalAmount) * 100}
      startAngle={-90}
    />
  </div>
</div>
);
}

export default Calculator;
