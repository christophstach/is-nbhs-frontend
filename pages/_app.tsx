import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { SWRConfig } from 'swr';

import axios from 'axios';
import MainLayout from '../components/layouts/MainLayout';
import { useRouter } from 'next/router';
import AuthLayout from '../components/layouts/AuthLayout';

import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import deLocale from 'date-fns/locale/de';

const axiosFetcher = (url: string) => axios.get(url).then(res => res.data);


function MuiApp({Component, pageProps}: AppProps) {
    const {pathname} = useRouter();

    return (
        <LocalizationProvider dateAdapter={AdapterDateFns} locale={deLocale}>
            <SWRConfig value={{
                refreshInterval: 3000,
                fetcher: axiosFetcher
            }}>
                {
                    ['/auth/sign-in', '/auth/sign-out'].includes(pathname) ? (
                        <AuthLayout>
                            <Component {...pageProps} />
                        </AuthLayout>
                    ) : (
                        <MainLayout>
                            <Component {...pageProps} />
                        </MainLayout>
                    )
                }
            </SWRConfig>
        </LocalizationProvider>
    );
}

export default MuiApp;
