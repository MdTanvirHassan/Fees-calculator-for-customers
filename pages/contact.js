import React from 'react'

const contact = () => {
  return (
    <div id="contact" className="container m-auto h-full py-5">
      <h2 className="text-center py-5">Contact Us</h2>
      <p className="text-justify p-10 pb-20 bg-orange-50 shadow-xl rounded-md ">
      Wenn Sie Fragen haben oder Hilfe benötigen, können Sie uns über das Kontaktformular oder per E-Mail kontaktieren. Wir antworten so schnell wie möglich. Wenn Sie uns telefonisch erreichen möchten, finden Sie unsere Telefonnummer auf dieser Seite. Wir helfen Ihnen gerne weiter. <a href='#' mailto="kontact@payrechner.de" className='text-blue-600 '>kontact@payrechner.de</a>
      </p>
    </div>
  )
}

export default contact