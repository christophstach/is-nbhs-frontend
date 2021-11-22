import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';


import { NextPage } from "next";
import Head from 'next/head';
import { useCookies } from 'react-cookie';
import Image from 'next/image';


const SignIn: NextPage = () => {
    const [cookies, setCookie, removeCookie] = useCookies();

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        // eslint-disable-next-line no-console
        console.log({
            email: data.get('email'),
            password: data.get('password'),
        });

        setCookie('user-token', 'testValue', {path: '/'});
        document.location.reload();
    };

    return (
        <>
            <Head>
                <title>NBHS: Anmelden</title>
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
                    <Image src="/nbhs_nachbarschaftheim_logo.svg" alt="NBHS Logo" width={286} height={90}/>
                </Box>

                <Typography component="h1" variant="h5">
                    Login
                </Typography>
                <Box component="form" onSubmit={handleSubmit} noValidate sx={{mt: 1}}>
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        id="email"
                        label="Email Address"
                        name="email"
                        autoComplete="email"
                        autoFocus
                    />
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        name="password"
                        label="Password"
                        type="password"
                        id="password"
                        autoComplete="current-password"
                    />

                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{mt: 3, mb: 2}}
                    >
                        Sign In
                    </Button>

                </Box>
            </Box>
        </>
    )
}

export default SignIn
