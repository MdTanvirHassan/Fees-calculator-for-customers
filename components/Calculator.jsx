import React, { useState } from "react";

const Calculator = () => {
  const [amount, setAmount] = useState(0);
  const [interest, setInterest] = useState(0);
  const [time, setTime] = useState(0);
  const [emi, setEmi] = useState(0);
  const [totalinterest, setTotalinterest] = useState(0);
  const [principal, setPrincipal] = useState(0);

  const handlePrincipalchange = (event) => {
    setPrincipal(event.target.value);
  };
  const handleInterestchange = (event) => {
    setInterest(event.target.value);
  };
  const handleTimechange = (event) => {
    setTime(event.target.value);
  };

  const calculateLoan = () => {
    if (principal > 0 && interest > 0 && time > 0) {
      let p = parseFloat(principal);
      let r = parseFloat(interest);
      let n = parseFloat(time);

      let actualRate = parseFloat(r / 12 / 100);

      let calcemi =
        p *
        actualRate *
        (Math.pow(1 + actualRate, n) / (Math.pow(1 + actualRate, n) - 1));

      setEmi(Math.round(calcemi));
      setAmount(Math.round(calcemi * n));
      setTotalinterest(Math.round(calcemi * n - p));
    } else {
      toast.error("Amount, Interest and Period must be greater than 0!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: true,
        toastId: "id",
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  };
  return (
    <div className="container max-w-[1240px] m-auto py-20">
      <div className="p-8 bg-white/10 z-10 backdrop-filter backdrop-blur-lg shadow-xl rounded-md ring-1 ring-gray-50">
        <h2 className="text-center py-5">Tax Calculator</h2>
        <div className="grid md:grid-cols-2 gap-10">
          <form className="p-8 bg-white/10 z-10 backdrop-filter backdrop-blur-lg shadow-xl rounded-md ring-1 ring-gray-50">
            <div className="py-5">
              <label
                htmlFor="countries"
                className="block mb-2 text-sm font-medium text-gray-900">
                Calculation basis
              </label>
              <select
                id="countries"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
                <option defaultValue>purchase price</option>
                <option value="balance">Balance</option>
              </select>
            </div>

            <div className="relative">
              <input
                type="text"
                defaultValue={'25,00'}
                id="floating_outlined"
                className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
              />
              <label
                htmlFor="floating_outlined"
                className="absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1">
                purchase price
              </label>
            </div>
            <div className="py-5">
              <label
                htmlFor="countries"
                className="block mb-2 text-sm font-medium text-gray-900">
                type of payment
              </label>
              <select
                id="countries"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
                <option defaultValue>pay for goods or services</option>
                <option value="">Payment to friends and family</option>
                <option value="">to collect donations</option>
                <option value="">micropayment</option>
                <option value="">Payment with dealer conditions</option>
              </select>
            </div>
            <div className="justify-evenly mb-5 bg-gray-50 rounded-lg shadow-md p-2">
              <span>Unit Rate: </span>
              <span className="ml-20">2.49% and €0.35</span>
            </div>
            <div
              type="button"
              className="bg-blue-600 text-white text-center py-2 px-3 hover:bg-blue-500 rounded-md">
              Calculate
            </div>
          </form>
          <div className="right space-y-2">
            <h3 className="text-center bg-gray-50 rounded-lg shadow-md p-5">
              Calculation
            </h3>
            <div className="bg-gray-50 rounded-lg shadow-md p-5">
              Paypal fees: <span className="ml-10">{interest}</span>
            </div>
            <div className="bg-gray-50 rounded-lg shadow-md p-5">
              purchase price: <span className="ml-10">{amount}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
