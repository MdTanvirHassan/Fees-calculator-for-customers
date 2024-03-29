import React from 'react';
import CookieConsent from 'react-cookie-consent';

function CookieNotice() {
  return (
    <CookieConsent
      buttonText="Accept"
      cookieName="myAwesomeCookieName2"
      className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-10 pt-0 flex flex-col items-center justify-center text-justify bg-white text-gray-700 font-medium shadow-md rounded-lg "
      buttonWrapperClasses=""
      buttonClasses="bg-indigo-600 text-white p-4 rounded-lg font-bold"
      expires={150}
    >
      Wir verwenden Cookies, um sicherzustellen, dass Sie die beste Erfahrung auf unserer Website erhalten.{' '}
      <a href="#">Learn more</a>
    </CookieConsent>

  );
}

export default CookieNotice;

