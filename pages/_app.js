
import CookieNotice from '@/components/CookieNotice'
import Footer from '@/components/Footer'
import Navbarr from '@/components/Navbarr'
import '@/styles/globals.css'
export default function App({ Component, pageProps }) {
  return <>
      <Navbarr />
      <Component {...pageProps} />
      <CookieNotice/>
      <Footer/>
  </>
}
