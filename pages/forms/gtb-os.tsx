import { NextPage } from 'next';
import MainLayout from '../../components/MainLayout';
import Head from 'next/head';
import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import useSWR from 'swr'
import { format } from 'date-fns'
import { IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import CheckIcon from '@mui/icons-material/Check';
import InfoIcon from '@mui/icons-material/Info';


export interface GtbOsFormsResponse {
    data: {
        id: number,
        name: string,
        acquisitionTimeSpan: {
            from: Date,
            to: Date
        },
        submitter: string,
        reviewer: string,
        releasedForReview: boolean
    }[],
    meta: {}
}


const GtbOs: NextPage = () => {
    const response = useSWR<GtbOsFormsResponse>('/data/gtb-os-forms.json');
    const forms = response.data?.data;

    return (
        <MainLayout>
            <Head>
                <title>NBHS: Formulare - GTB OS</title>
            </Head>

            <TableContainer component={Paper}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Id</TableCell>
                            <TableCell>Name / Project</TableCell>
                            <TableCell>Zeitraum</TableCell>
                            <TableCell>Eingereicht durch</TableCell>
                            <TableCell>Prüfer</TableCell>
                            <TableCell width={1}>&nbsp;</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {forms ? (
                            forms.map((form) => (
                                <TableRow key={form.id}>
                                    <TableCell>{form.id}</TableCell>
                                    <TableCell>{form.name}</TableCell>
                                    <TableCell>
                                        {format(new Date(form.acquisitionTimeSpan.from), 'dd.MM.yyyy')}
                                        &nbsp;-&nbsp;
                                        {format(new Date(form.acquisitionTimeSpan.to), 'dd.MM.yyyy')}
                                    </TableCell>
                                    <TableCell>{form.submitter}</TableCell>
                                    <TableCell>
                                        {form.releasedForReview ? (
                                            form.reviewer ? (
                                                <strong>Überprüft durch {form.reviewer}</strong>
                                            ) : (
                                                <>Warte auf Überprüfung...</>
                                            )
                                        ) : (
                                            <em>Noch nicht zur Überprüfung freigeben</em>
                                        )}
                                    </TableCell>
                                    <TableCell sx={{whiteSpace: 'nowrap'}} >
                                        <IconButton>
                                            <EditIcon color="warning" />
                                        </IconButton>
                                        <IconButton>
                                            <DeleteIcon color="error" />
                                        </IconButton>
                                        <IconButton>
                                            <InfoIcon color="info" />
                                        </IconButton>
                                        <IconButton>
                                            <CheckIcon color="success" />
                                        </IconButton>
                                    </TableCell>
                                </TableRow>
                            ))
                        ) : (
                            <TableRow>
                                <TableCell colSpan={4}>Loading...</TableCell>
                            </TableRow>
                        )}
                    </TableBody>
                </Table>
            </TableContainer>
        </MainLayout>
    )
}

export default GtbOs
