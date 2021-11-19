import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { SWRConfig } from 'swr'

import axios from 'axios'

const axiosFetcher = (url: string) => axios.get(url).then(res => res.data);


function MuiApp({Component, pageProps}: AppProps) {
    return (
        <SWRConfig value={{
            refreshInterval: 3000,
            fetcher: axiosFetcher
        }}>
            <Component {...pageProps} />
        </SWRConfig>

    )

}

export default MuiApp
