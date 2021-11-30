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
import InfoIcon from '@mui/icons-material/Info';
import TopNavPortal from '../../../components/elements/TopNavPortal';
import Button from '@mui/material/Button';
import { useAreasManage } from '../../../hooks/clients/use-areas-manage';

export interface AreasManageResponse {
    data: {
        id: number,
        name: string,
        areatype: string,
        comment: string
    }[],
    meta: {}
}

const AreasManageIndex: NextPage = () => {
    const response = useAreasManage();
    const areas = response.data?.data;

    return (
        <>
            <Head>
                <title>NBHS: Bereichsverwaltung</title>
            </Head>

            <TopNavPortal>
                <Button variant="contained">Neuen Bereich anlegen</Button>
            </TopNavPortal>

            <TableContainer component={Paper}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Id</TableCell>
                            <TableCell>Bereichsname</TableCell>
                            <TableCell>Bereichstyp</TableCell>
                            <TableCell>Beschreibung</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {areas ? (
                            areas.map((area) => (
                                <TableRow key={area.id}>
                                    <TableCell>{area.id}</TableCell>
                                    <TableCell>{area.name}</TableCell>
                                    <TableCell>{area.areatype}</TableCell>
                                    <TableCell>{area.comment}</TableCell>

                                    <TableCell sx={{whiteSpace: 'nowrap'}}>
                                        <IconButton component="a" href={`/areas/areas-manage/${area.id}`}>
                                            <EditIcon color="warning"/></IconButton>
                                        <IconButton component="a" href={`/areas/areas-manage/${area.id}/delete`}>
                                            <DeleteIcon color="error"/></IconButton>
                                        <IconButton component="a" href={`/areas/areas-manage/${area.id}/review`}>
                                            <InfoIcon color="info"/></IconButton>
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

export default AreasManageIndex
