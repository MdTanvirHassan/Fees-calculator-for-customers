import React from 'react'

const contact = () => {
  return (
    <div id="contact" className="container m-auto py-5">
         <div className="text-justify p-10 rounded-md">
            <h1 className="text-gray-900 text-center  font-bold text-2xl pb-8 mb-5">Kontaktiere uns</h1>
           <p className="text-gray-900  text-xl tracking-widest mb-2">
              Wenn Sie Fragen haben oder Hilfe benötigen, können Sie uns über das Kontaktformular oder per E-Mail kontaktieren. Wir antworten so schnell wie möglich. Wenn Sie uns telefonisch erreichen möchten, finden Sie unsere Telefonnummer auf dieser Seite. Wir helfen Ihnen gerne weiter
           </p>
          <p><a href='#' mailto="kontact@payrechner.de" className='text-gray-500 font-bold text-xl'>kontact@payrechner.de</a></p>
         </div>
    
    </div>
  )
}

export default contact