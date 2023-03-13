import react, { useState, useEffect } from 'react';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function PayPalFeeCalculator() {
  
  const [calculationBasis, setCalculationBasis] = useState('Purchase price');
  const [purchasePrice, setPurchasePrice] = useState(0);
  const [feePercentage, setFeePercentage] = useState(2.49);
  const [feeCharge, setFeeCharge] = useState(0.35);
  const [feeAmount, setFeeAmount] = useState(0);
  const [totalAmount, setTotalAmount] = useState(0);
  const [showDealerConditions, setShowDealerConditions] = useState(false);


  const handleCalculationBasisChange = (event) => {
    const selectedValue = event.target.value;
    if (selectedValue === 'balance') {
      setCalculationBasis('Balance');
    } else {
      setCalculationBasis('Purchase price');
    }
  };

  const handlePurchasePriceChange = (event) => {
    const inputVal = event.target.value;
    if (inputVal >= 0) {
      setPurchasePrice(parseFloat(inputVal));
    }
  };

  const handlePaymentTypeChange = (event) => {
    if (event && event.preventDefault) {
      event.preventDefault();
    const paymentType = event.target.value;
  
    if (paymentType === 'goodsandservices') {
      setFeePercentage(2.49);
      setFeeCharge(0.35)
      setShowDealerConditions(false);
    } 
    else if (paymentType === 'friendsandfamily') {
      setFeePercentage(0);
      setFeeCharge(0.35)
      setShowDealerConditions(false);
    }
    else if (paymentType === 'donations') {
      setFeePercentage(1.50);
      setFeeCharge(0.35)
      setShowDealerConditions(false);
    }
    else if (paymentType === 'micropayment') {
      setFeePercentage(10);
      setFeeCharge(0.10)
      setShowDealerConditions(false);
    }
    else if (paymentType === 'conditions') {
      setShowDealerConditions(true);
      setFeeCharge(0.35);
      setFeePercentage(2.49);
      
    }
    else {
      // reload the page if an unexpected payment type is selected
      window.location.reload();
    }
  }
  };


  const calculateFee = (event) => {
    if (event && event.preventDefault) {
      event.preventDefault();
    
    if(purchasePrice > 0 ){
      const fee = purchasePrice * (feePercentage / 100) + feeCharge;
    const total = purchasePrice + fee;
    setFeeAmount(fee);
    setTotalAmount(total);
    toast.success("Successfully! Calculated.", {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: true,
      toastId: "id",
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  }else {
        toast.error("Purchase must be greater than 0!", {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: true,
          toastId: "id",
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      }}
  };

  return (
    <div className="container max-w-[1240px] m-auto py-20">
        <ToastContainer />
        <div className="p-8 bg-white/10 z-10 backdrop-filter backdrop-blur-lg shadow-xl rounded-md ring-1 ring-gray-50">
        <h2 className="text-blue-500 text-center py-5">Fees Calculator for Customers</h2>
        <div className="grid md:grid-cols-2 gap-10">
          <form className="p-8 bg-white/10 z-10 backdrop-filter backdrop-blur-lg shadow-xl rounded-md ring-1 ring-gray-50">
          <div className="py-5">
              <label
                htmlFor="calculation"
                className="block mb-2 text-xl font-bold text-gray-900">
                Calculation Basis
              </label>
              <select
                id="calculation"
                 onChange={handleCalculationBasisChange}
                className="bg-gray-50 border border-gray-300 text-gray-500 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full py-2.5 px-5">
                <option defaultValue >Purchase Price</option>
                <option value="balance">Balance</option>
              </select>
            </div>
        
        <div className="relative">
              <input
                type="number"
                id="purchasePrice"
                value={purchasePrice}
                onChange={handlePurchasePriceChange}
                className="block px-2.5 pb-2.5 pt-4 w-full text-lg text-gray-500 bg-transparent rounded-lg border border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                
              />
              <label
                htmlFor="floating_outlined"
                className="absolute text-xl font-bold text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1">
                 {calculationBasis}
              </label>
            </div>
      
      <div className="my-4">
        <label htmlFor="paymentType" className="block mb-2 text-xl font-bold text-gray-900">
                Type of payment
        </label>
        <select
          id="paymentType"
          className="bg-gray-50 border border-gray-300 text-gray-500 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full py-2.5 px-5"
          onChange={handlePaymentTypeChange}
        >
          <option defaultValue value="goodsandservices">pay for goods or services</option>
          <option value="friendsandfamily">Payment to friends and family</option>
          <option value="donations">to collect donations</option>
          <option value="micropayment">micropayment</option>
          <option value="conditions">Payment with dealer conditions</option>
        </select>

        {showDealerConditions && (
            <div className="mt-4">
              <label htmlFor="dealerConditions" className="block mb-2 text-xl font-medium text-gray-900">
                Transactions received in the last month 
              </label>
              <select
                id="dealerConditions"
                name='dealerConditions'
                className="bg-gray-50 border border-gray-300 text-gray-500 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full py-2.5 px-5"
                onChange={(event) => {
                  const dealerConditions = event.target.value;
                  if (dealerConditions === '0-2000') {
                    setFeePercentage(2.49);
                  } else if (dealerConditions === "2001-5000") {
                    setFeePercentage(2.19);
                  } else if (dealerConditions === '5001-25000') {
                    setFeePercentage(1.99);
                  } else if (dealerConditions === '25001-100000') {
                    setFeePercentage(1.79);
                  } else if (dealerConditions === '100000+') {
                    setFeePercentage(1.49);
                  }
                }}
              >
                <option defaultValue value="0-2000" data-price="0-2000">$0 - $2,000</option>
                <option value="2001-5000" data-price="2001-5000">$2,001 - $5,000</option>
                <option value="5001-25000" data-price="5001-25000">$5,001 - $25,000</option>
                <option value="25001-100000" data-price="25001-100000">$25,001 - $100,000</option>
                <option value="100000+" data-price="100000+">$100,000+</option>
              </select>
            </div>
          )}

      </div>
      <div className="justify-evenly mb-5 bg-gray-50 rounded-lg shadow-md p-2">
              <span className='text-xl font-bold'>Unit Rate: </span>
              <span className="ml-20 md:ml-60 text-blue-500 text-lg ">{feePercentage}% <span className='text-black'>and</span> €{feeCharge}</span>
            </div>
      <div className="mb-4">
        <div
        type="button"
          className="bg-blue-600 text-white text-center font-bold py-2 px-4 rounded-md hover:bg-blue-500 cursor-pointer"
          onClick={calculateFee}
        >
          Calculate Fee
        </div>
      </div>
      
      </form>
      <div className="right space-y-4 my-auto">
            <h3 className="text-xl text-center text-white bg-green-400 rounded-lg shadow-md p-5">
              Calculation
            </h3>
            <div className="text-xl text-center bg-orange-50 rounded-lg shadow-md p-5">
              Fee Percentage: <span className="ml-10 text-blue-600"> {feePercentage}%</span>
            </div>
            <div className="text-xl text-center bg-orange-50 rounded-lg shadow-md p-5">
              Paypal fees: <span className="ml-10 text-blue-600">${feeAmount.toFixed(2)} </span>
            </div>
            <div className="text-xl text-center bg-orange-50 rounded-lg shadow-md p-5">
              purchase price: <span className="ml-10 text-blue-600">${totalAmount.toFixed(2)}</span>
            </div>
          </div>
      </div>
      </div>
    </div>
   
  );
}

export default PayPalFeeCalculator;
