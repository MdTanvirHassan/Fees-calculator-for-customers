import react, { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function PayPalFeeCalculator() {
  const [calculationBasis, setCalculationBasis] = useState("Kaufpreis");
  const [purchasePrice, setPurchasePrice] = useState(0);
  const [feePercentage, setFeePercentage] = useState(2.49);
  const [feeCharge, setFeeCharge] = useState(0.35);
  const [feeAmount, setFeeAmount] = useState(0);
  const [totalPurchaseAmount, setTotalPurchaseAmount] = useState(0);
  const [totalBalanceAmount, setTotalBalanceAmount] = useState(0);
  const [showBalance, setShowBalance] = useState(false);
  const [showPurchase, setShowPurchase] = useState(true);
  const [showDealerConditions, setShowDealerConditions] = useState(false);
  const [showCalculation, setShowCalculation] = useState(false);
  const [paymentOutPercentage, setPaymentOutPercentage] = useState(0);

  const handleCalculationBasisChange = (event) => {
    const selectedValue = event.target.value;
    if (selectedValue === "balance") {
      setCalculationBasis("Restbetrag");
      setShowBalance(true);
      setShowPurchase(false);
    } else {
      setCalculationBasis("Kaufpreis");
      setShowPurchase(true);
      setShowBalance(false);
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

      if (paymentType === "goodsandservices") {
        setFeePercentage(2.49);
        setFeeCharge(0.35);
        setShowDealerConditions(false);
        const paymentOut = event.target.value;
      if (paymentOut === "Britain") {
        setPaymentOutPercentage(1.29);
      } else if (paymentOut == "USA") {
        setPaymentOutPercentage(1.99);
      } else if (paymentOut == "german") {
        setPaymentOutPercentage(0);
      } else if (paymentOut == "EEA") {
        setPaymentOutPercentage(0);
      } else if (paymentOut == "other") {
        setPaymentOutPercentage(2.99);
      }
      } else if (paymentType === "friendsandfamily") {
        setFeePercentage(0);
        setFeeCharge(0.35);
        setShowDealerConditions(false);
        setPaymentOutPercentage(0);
      } else if (paymentType === "donations") {
        setFeePercentage(1.5);
        setFeeCharge(0.35);
        setShowDealerConditions(false);
        setPaymentOutPercentage(0);
      } else if (paymentType === "micropayment") {
        setFeePercentage(10);
        setFeeCharge(0.1);
        setShowDealerConditions(false);
        setPaymentOutPercentage(0);
      } else if (paymentType === "conditions") {
        setShowDealerConditions(true);
        setFeeCharge(0.35);
        setPaymentOutPercentage(0);
      } else {
        // reload the page if an unexpected payment type is selected
        window.location.reload();
      }
    }
  };

  const handlePaymentOut = (event) => {
    if (event && event.preventDefault) {
      event.preventDefault();
      const paymentOut = event.target.value;
      if (paymentOut === "Britain") {
        setPaymentOutPercentage(1.29);
      } else if (paymentOut == "USA") {
        setPaymentOutPercentage(1.99);
      } else if (paymentOut == "german") {
        setPaymentOutPercentage(0);
      } else if (paymentOut == "EEA") {
        setPaymentOutPercentage(0);
      } else if (paymentOut == "other") {
        setPaymentOutPercentage(2.99);
      } else {
        // reload the page if an unexpected payment type is selected
        window.location.reload();
      }
    }
  };

  const calculateFee = (event) => {
    if (event && event.preventDefault) {
      event.preventDefault();
      setShowCalculation(true);

      if (purchasePrice > 0) {
        const fee = purchasePrice * (feePercentage / 100) + feeCharge;
        const total = purchasePrice + fee;
        const total1 = purchasePrice - fee;
        setFeeAmount(fee);
        setTotalPurchaseAmount(total);
        setTotalBalanceAmount(total1);
        toast.success("Erfolgreich! Berechnet.", {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: true,
          toastId: "id",
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      } else {
        toast.error("Der Kauf muss größer als 0 sein!", {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: true,
          toastId: "id",
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      }
    }
  };

  return (
    <div className="container max-w-[1240px] m-auto py-20">
      <ToastContainer />
      <div className="pb-20">
        <h1 className="text-2xl font-extrabold tracking-tight text-gray-900 sm:text-5xl sm:leading-none">
          PayPal Gebührenrechner - Berechnen Sie Ihre PayPal Gebühren einfach
          und schnell
        </h1>
        <div className="mt-6 border-t border-gray-200 pt-10">
          <h3 className="text-lg leading-8 font-medium text-gray-900">
            Wenn Sie ein Online-Verkäufer oder Freiberufler sind und PayPal
            verwenden, um Zahlungen zu empfangen, wissen Sie, dass PayPal für
            jede Transaktion eine Gebühr erhebt. Diese Gebühren können sich
            schnell summieren, und es ist wichtig zu wissen, wie viel Sie zahlen
            werden, um unerwartete Kosten zu vermeiden.Unser
            PayPal-Gebührenrechner ist einfach zu bedienen. Geben Sie einfach
            den Betrag ein, den Sie erhalten, und unser Rechner berechnet
            automatisch die Gebühren, die Ihnen auf der Grundlage Ihres
            PayPal-Kontotyps und -Standorts berechnet werden. Sie können den
            Bruttobetrag, die PayPal-Gebühren, den Nettobetrag und den
            Prozentsatz der von Ihrer Transaktion abgezogenen Gebühren sehen.
            Unser PayPal-Gebührenrechner ist aktuell und genau, sodass Sie
            sicher sein können, dass Sie die genauesten Ergebnisse erhalten. Wir
            berücksichtigen alle Faktoren, die sich auf Ihre PayPal-Gebühren
            auswirken können, einschließlich Ihres Kontotyps, Ihrer Währung und
            Ihres Standorts. Mit unserem PayPal-Gebührenrechner können Sie Zeit
            und Geld sparen, da Sie genau wissen, welche Gebühren Ihnen
            berechnet werden, bevor Sie Ihre Transaktion durchführen. Keine
            Überraschungen oder versteckten Gebühren mehr – Sie haben alle
            Informationen, die Sie benötigen, um fundierte Entscheidungen über
            Ihre Geschäftstransaktionen zu treffen. Einer der Vorteile unseres
            PayPal Gebührenrechners ist, dass er kostenlos zu nutzen ist. Es
            gibt keine versteckten Gebühren oder Kosten - geben Sie einfach den
            Transaktionsbetrag ein und erhalten Sie eine sofortige Berechnung
            Ihrer Gebühren. Neben der Berechnung Ihrer Gebühren bietet unser
            PayPal Gebührenrechner auch eine Aufschlüsselung der Gebühren, so
            dass Sie genau sehen können, wo Ihr Geld hingeht. Diese
            Informationen können bei der Festlegung von Preisen für Ihre
            Produkte oder Dienstleistungen hilfreich sein, da Sie die Gebühren
            berücksichtigen und dennoch einen Gewinn erzielen können.
          </h3>
        </div>
      </div>
      <div className="p-8 bg-white/10 z-10 backdrop-filter backdrop-blur-lg shadow-xl rounded-md ring-1 ring-gray-50">
        <div className="grid md:grid-cols-2 gap-10">
          <form className="p-8 bg-white/10 z-10 backdrop-filter rounded-md">
            <h1 className="text-black text-2xl bg-amber-200 font-bold text-center py-5">
              PayPal Gebührenrechner
            </h1>
            <div className="py-5">
              <label
                htmlFor="calculation"
                className="block mb-2 text-xl font-bold text-gray-900">
                Rechnungsgrundlage
              </label>
              <select
                id="calculation"
                onChange={handleCalculationBasisChange}
                className="bg-gray-50 border border-gray-300 text-gray-500 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full py-3 px-5">
                <option defaultValue>Kaufpreis</option>
                <option value="balance">Restbetrag</option>
              </select>
            </div>

            <div className="relative">
              <input
                type="number"
                id="purchasePrice"
                value={purchasePrice}
                onChange={handlePurchasePriceChange}
                className="block px-3 pb-3 pt-4 w-full text-lg text-gray-500 bg-transparent rounded-lg border border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600"
              />
              <label
                htmlFor="floating_outlined"
                className="absolute text-xl font-bold text-black duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1">
                {calculationBasis}
              </label>
            </div>

            <div className="my-4">
              <label
                htmlFor="paymentType"
                className="block mb-2 text-xl font-bold text-gray-900">
                Art der Zahlung
              </label>
              <select
                id="paymentType"
                className="bg-gray-50 border border-gray-300 text-gray-500 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full py-3 px-5"
                onChange={handlePaymentTypeChange}>
                <option defaultValue value="goodsandservices">
                  Waren oder Dienstleistungen bezahlen
                </option>
                <option value="friendsandfamily">
                  Zahlung an Freunde und Familie
                </option>
                <option value="donations">Spenden sammeln</option>
                <option value="micropayment">Mikrozahlung</option>
                <option value="conditions">
                  Zahlung mit Händlerkonditionen
                </option>
              </select>

              {showDealerConditions && (
                <div className="mt-4">
                  <label
                    htmlFor="dealerConditions"
                    className="block mb-2 font-bold text-xl   text-gray-900">
                    Eingegangenen Transaktionen im letzten Monat
                  </label>
                  <select
                    id="dealerConditions"
                    name="dealerConditions"
                    className="bg-gray-50 border border-gray-300 text-gray-500 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full py-3 px-5"
                    onChange={(event) => {
                      const dealerConditions = event.target.value;
                      if (dealerConditions == "0-2000") {
                        setFeePercentage(2.49);
                      } else if (dealerConditions == "2001-5000") {
                        setFeePercentage(2.19);
                      } else if (dealerConditions == "5001-25000") {
                        setFeePercentage(1.99);
                      } else if (dealerConditions == "25001-100000") {
                        setFeePercentage(1.79);
                      } else if (dealerConditions == "100000+") {
                        setFeePercentage(1.49);
                      }
                    }}>
                    <option defaultValue value="0-2000" data-price="0-2000">
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
                      $100,000+
                    </option>
                  </select>
                </div>
              )}
            </div>
            <div className="py-5">
              <label
                htmlFor="calculation"
                className="block mb-2 text-xl font-bold text-gray-900">
                Zahlung aus
              </label>
              <select
                id="paymentOut"
                name="paymentOut"
                onChange={handlePaymentOut}
                className="bg-gray-50 border border-gray-300 text-gray-500 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full py-3 px-5"
                // onChange={(event) => {
                //   const paymentOut = event.target.value;
                //   if(paymentOut === 'Britain'){
                //     setFeePercentage(3.78);
                //   } else if(paymentOut == 'USA'){
                //     setFeePercentage(4.48);
                //   } else if(paymentOut == 'german'){
                //     setFeePercentage(5.48);
                //   } else if(paymentOut == 'EEA'){
                //     setFeePercentage(5.48);
                //   } else if(paymentOut == 'other'){
                //     setFeePercentage(5.48);
                //   }
                // }}
              >
                <option defaultValue value="german">
                  Deutschland
                </option>
                <option value="EEA">EEA</option>
                <option value="Britain">Graet Britain</option>
                <option value="USA">USA/Canada</option>
                <option value="other">All other</option>
              </select>
            </div>
            <div className="justify-evenly mb-5 bg-gray-50 rounded-lg p-3 shadow-md ">
              <span className="text-xl font-bold">Gebührensatz: </span>
              <span className="ml-20 md:ml-48 text-blue-500 text-lg ">
                { feePercentage + paymentOutPercentage }%
                <span className="text-black">and</span> €{feeCharge}
              </span>
            </div>
            <div className="mb-4">
              <div
                type="button"
                className="bg-blue-600 text-white text-xl text-center font-bold py-2 px-4 rounded-md hover:bg-blue-500 cursor-pointer"
                onClick={calculateFee}>
                Berechnen
              </div>
            </div>
          </form>
          {showCalculation && (
            <form className="p-8 bg-white/10 z-10  rounded-md ring-1 ring-gray-50">
              <div className="right space-y-4 my-auto">
                <h3 className="text-xl text-center font-bold text-white bg-green-400 rounded-lg shadow-md p-5">
                  Berechnung
                </h3>
                <div className="text-xl text-center bg-orange-50 rounded-lg shadow-md p-5">
                  Gebührenprozentsatz:{" "}
                  <span className="ml-10 text-blue-600"> {feePercentage}%</span>
                </div>
                <div className="text-xl text-center bg-orange-50 rounded-lg shadow-md p-5">
                  PayPal Gebühren:{" "}
                  <span className="ml-10 text-blue-600">
                    ${feeAmount.toFixed(2)}{" "}
                  </span>
                </div>
                {showPurchase && (
                  <div className="text-xl text-center bg-orange-50 rounded-lg shadow-md p-5">
                    Kaufpreis:{" "}
                    <span className="ml-10 text-blue-600">
                      ${totalPurchaseAmount.toFixed(2)}
                    </span>
                  </div>
                )}
                {showBalance && (
                  <div className="text-xl text-center bg-orange-50 rounded-lg shadow-md p-5">
                    Restbetrag:{" "}
                    <span className="ml-10 text-blue-600">
                      ${totalBalanceAmount.toFixed(2)}
                    </span>
                  </div>
                )}
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}

export default PayPalFeeCalculator;
