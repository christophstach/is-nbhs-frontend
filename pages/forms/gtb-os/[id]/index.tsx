import { NextPage } from 'next';
import Head from 'next/head';
import * as React from 'react';
import { useRouter } from 'next/router'
import Paper from '@mui/material/Paper';
import { TextField } from '@mui/material';
import Box from '@mui/material/Box';

const GtbOsSingleIndex: NextPage = () => {
    const router = useRouter();
    const {id} = router.query;

    console.log(router.query);

    return (
        <>
            <Head>
                <title>NBHS: Formulare - GTB OS - {id}</title>
            </Head>

            <Paper sx={{padding: '1rem'}}>
                <Box sx={{display: 'flex', gap: '1rem'}}>

                    <TextField label="Mo" variant="filled" size="small"/>
                    <TextField label="Di" variant="filled" size="small"/>
                    <TextField label="Mi" variant="filled" size="small"/>
                    <TextField label="Do" variant="filled" size="small"/>
                    <TextField label="Fr" variant="filled" size="small"/>
                    <TextField label="Sa" variant="filled" size="small"/>
                    <TextField label="So" variant="filled" size="small"/>
                    <TextField label="Gesamt" variant="filled" size="small"/>
                </Box>
            </Paper>
        </>
    )
}

export default GtbOsSingleIndex;
