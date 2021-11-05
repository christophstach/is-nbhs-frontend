import { NextPage } from "next";
import AuthLayout from "../../components/AuthLayout";
import Head from 'next/head';
import { useCookies } from 'react-cookie';
import Box from '@mui/material/Box';

const SignOut: NextPage = () => {
    const [cookies, setCookie, removeCookie] = useCookies();

    removeCookie('user-token', {path: '/'});

    setTimeout(() => {
        document.location.reload();
    }, 2000);

    return (
        <AuthLayout>
            <Head>
                <title>NBHS: Sign Out</title>
            </Head>

            <Box
                sx={{
                    marginTop: 8,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}
            >
               Sie wurden ausgeloggt!
            </Box>
        </AuthLayout>
    )
}

export default SignOut
