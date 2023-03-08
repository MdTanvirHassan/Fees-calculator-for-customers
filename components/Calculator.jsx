import React from "react";

const Calculator = () => {
  return (
    <div className="container max-w-[1240px] m-auto py-20">
      <div className="p-8">
        <h2 className="text-center py-5">Tax Calculator</h2>
        <div className="grid md:grid-cols-2 gap-10">
          <form className="">
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
            <div className="justify-evenly">
              <span>Unit Rate: </span>
              <span className="ml-20">2.49% and €0.35</span>
            </div>
          </form>
          <div className="right space-y-2">
            <h3 className="text-center bg-gray-50 rounded-lg shadow-md p-5">Calculation</h3>
            <div className="bg-gray-50 rounded-lg shadow-md p-5">Paypal fees: <span className="ml-10"></span> </div>
            <div className="bg-gray-50 rounded-lg shadow-md p-5">purchase price: <span className="ml-10"></span> </div>
        </div>
        </div>
        
      </div>
    </div>
  );
};

export default Calculator;
