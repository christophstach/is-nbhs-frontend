import { NextPage } from "next";
import AuthLayout from "../../components/AuthLayout";
import Head from 'next/head';
import { useCookies } from 'react-cookie';
import Box from '@mui/material/Box';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import Image from 'next/image';
import * as React from 'react';
import Typography from '@mui/material/Typography';

const SignOut: NextPage = () => {
    const [cookies, setCookie, removeCookie] = useCookies();
    const router = useRouter();

    removeCookie('user-token', {path: '/'});

    useEffect(() => {
        setTimeout(() => {
            router.reload();
        }, 2000);
    })

    return (
        <AuthLayout>
            <Head>
                <title>NBHS: Abmelden</title>
            </Head>


            <Box
                sx={{
                    marginTop: 8,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}
            >
                <Box mb={5}>
                    <Image src="/nbhs_nachbarschaftheim_logo.svg" alt="NBHS Logo" width={286} height={90} />
                </Box>

                <Typography component="h1" variant="h5">
                    Sie wurden ausgeloggt!
                </Typography>


            </Box>
        </AuthLayout>
    )
}

export default SignOut
