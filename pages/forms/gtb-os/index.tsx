import { NextPage } from 'next';
import Head from 'next/head';
import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { format } from 'date-fns'
import { IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import CheckIcon from '@mui/icons-material/Check';
import InfoIcon from '@mui/icons-material/Info';
import TopNavPortal from '../../../components/elements/TopNavPortal';
import Button from '@mui/material/Button';
import { useGetGtbOsForms } from '../../../hooks/clients/use-get-gtb-os-forms';



export interface GetGtbOsFormsResponse {
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


const GtbOsIndex: NextPage = () => {
    const response = useGetGtbOsForms();
    const forms = response.data?.data;

    return (
        <>
            <Head>
                <title>NBHS: Formulare - GTB OS</title>
            </Head>

            <TopNavPortal>
                <Button variant="contained">Neues GTB OS Formular anlegen</Button>
            </TopNavPortal>

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
                                    <TableCell sx={{whiteSpace: 'nowrap'}}>
                                        <IconButton component="a" href={`/forms/gtb-os/${form.id}`}>
                                            <EditIcon color="warning"/>
                                        </IconButton>
                                        <IconButton component="a" href={`/forms/gtb-os/${form.id}/delete`}>
                                            <DeleteIcon color="error"/>
                                        </IconButton>
                                        <IconButton component="a" href={`/forms/gtb-os/${form.id}/review`}>
                                            <InfoIcon color="info"/>
                                        </IconButton>
                                        <IconButton component="a" href={`/forms/gtb-os/${form.id}/approve`}>
                                            <CheckIcon color="success"/>
                                        </IconButton>
                                    </TableCell>
                                </TableRow>
                            ))
                        ) : (
                            <TableRow>
                                <TableCell colSpan={6} sx={{textAlign: 'center'}}>Loading...</TableCell>
                            </TableRow>
                        )}
                    </TableBody>
                </Table>
            </TableContainer>
        </>
    )
}

export default GtbOsIndex
