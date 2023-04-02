import React from 'react';


function Payment() {
  return (
    <div className="container max-w-[1240px] m-auto py-5">
      <div className='p-10 px-3 sm:px-6 pt-0'>
            <h1 className="text-lg sm:text-3xl pt-4 font-bold tracking-tight text-gray-800">
            Art der Zahlung: Wann fallen welche Paypal Gebühren an?
             </h1>
              <div className="mt-6 pt-2">
                <h3 className="text-justify text-sm sm:text-lg leading-8  text-gray-600">Je nachdem, welche Art von Zahlung du erhältst, sind die Gebühren unterschiedlich. Wenn du als Händler höhere Summen monatlich umsetzt, kannst du dich für die Händlerkonditionen qualifizieren. Hier gilt, je Höher der Umsatz, desto besser die Konditionen.</h3>
             </div>
        </div>
      <div className=' p-10 px-3 sm:px-6 pt-3'>
      <table className='table-auto text-md sm:text-lg'>
           <thead>
            <tr className='border-t border-gray-200'>
              <th class="px-5 py-5">Art der Zahlung</th>
               <th class="px-5 py-5">Gebühren</th>
              </tr>
        </thead>
           <tbody>
        <tr className='border-t border-gray-200'>
        <td class=" px-5 py-5">Geld an Freunde und Familie senden</td>
           <td class="px-5 py-5">kostenlos</td>
         </tr>
    <tr className='border-t border-gray-200'>
      <td class=" px-5 py-5">Waren oder Dienstleistungen bezahlen</td>
      <td class=" px-5 py-5">2,49% + 0,35€</td>
    </tr>
    <tr className='border-t border-gray-200'>
      <td class=" px-5 py-5">Spenden sammeln</td>
      <td class=" px-5 py-5">1,50% + 0,35€</td>
    </tr>
    <tr className='border-t border-gray-200'>
      <td class=" px-5 py-5">Mikrozahlung</td>
      <td class=" px-5 py-5">10% + 0,10€</td>
    </tr>
    <tr className='border-t border-gray-200'>
      <td class=" px-5 py-5">Zahlung mit Händlerkonditionen (0 – 2,000€)</td>
      <td class=" px-5 py-5">2,49% + 0,35€</td>
    </tr>
    <tr className='border-t border-gray-200'>
      <td class=" px-5 py-5">Zahlung mit Händlerkonditionen (2.000,01 – 5.000€)</td>
      <td class=" px-5 py-5">2,19% + 0,35€</td>
    </tr>
    <tr className='border-t border-gray-200'>
      <td class=" px-5 py-5">Zahlung mit Händlerkonditionen (5.000,01 – 25.000€)</td>
      <td class=" px-5 py-5">1,99% + 0,35€</td>
    </tr>
    <tr className='border-t border-gray-200'>
      <td class=" px-5 py-5">Zahlung mit Händlerkonditionen (25.000,01 – 100.000€)</td>
      <td class=" px-5 py-5">1,79% + 0,35€</td>
    </tr>
    <tr className='border-t border-b border-gray-200'>
      <td class=" px-5 py-5">Zahlung mit Händlerkonditionen (mehr als 100.000€)</td>
      <td class=" px-5 py-5">1,49% + 0,35€</td>
    </tr>
  </tbody>
</table>
      </div>

        
    </div>


  );
}

export default Payment;

