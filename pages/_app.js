
import CookieNotice from '@/components/CookieNotice'
import Navbarr from '@/components/Navbarr'
import '@/styles/globals.css'
import  Footer  from '@/components/Footer'
export default function App({ Component, pageProps }) {
  return <>
      <Navbarr />
      <Component {...pageProps} />
      <CookieNotice/>
      <Footer/>
  </>
}
