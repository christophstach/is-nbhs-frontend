import '../styles/globals.css'
import type { AppProps } from 'next/app'


function MuiApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
  
}

export default MuiApp
