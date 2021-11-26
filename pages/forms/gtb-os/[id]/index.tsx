import { NextPage } from 'next';
import Head from 'next/head';
import * as React from 'react';
import { useRouter } from 'next/router';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableContainer from '@mui/material/TableContainer';
import { Card, LinearProgress, TableCell } from '@mui/material';
import Button from '@mui/material/Button';
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form';
import TableRow from '@mui/material/TableRow';
import TimeSpan from '../../../../components/elements/form/TimeSpan';
import Divider from '../../../../components/elements/form/Divider';
import WeekAcquisitionList from '../../../../components/elements/form/WeekAcquisitionList';
import Comment from '../../../../components/elements/form/Comment';
import Number from '../../../../components/elements/form/Number';
import { useGtbOsFormStructure } from '../../../../hooks/clients/use-gtb-os-form-structure';
import TopNavPortal from '../../../../components/elements/TopNavPortal';


const GtbOsSingleIndex: NextPage = () => {
    const router = useRouter();
    const id = parseInt(router.query.id as string, 10);
    const methods = useForm();
    const response = useGtbOsFormStructure(id);
    const formStructure = response.data?.data;

    function handleSaveClick() {
        methods.handleSubmit(formSubmitHandler)();
    }

    const formSubmitHandler: SubmitHandler<any> = (data) => {
        console.log('form data', data);
    };


    return (
        <>
            <Head>
                <title>NBHS: Formulare - GTB OS - {id}</title>
            </Head>

            <FormProvider {...methods}>
                <form onSubmit={methods.handleSubmit(formSubmitHandler)}>
                    <Card>
                        <TopNavPortal>
                            <Button type="submit" color="success" variant="contained"
                                    onClick={handleSaveClick}>Speichern</Button>
                        </TopNavPortal>

                        <TableContainer>
                            <Table size="small">
                                <TableBody>
                                    {!response.isLoading ? formStructure?.elements.map((element, index) => {
                                        switch (element.type) {
                                            case 'timeSpan':
                                                return (
                                                    <TimeSpan key={index} {...element}/>
                                                );
                                            case 'divider':
                                                return (
                                                    <Divider key={index} {...element}/>
                                                );
                                            case 'number':
                                                return (
                                                    <Number key={index} {...element}/>
                                                );
                                            case 'comment':
                                                return (
                                                    <Comment key={index} {...element}/>
                                                );
                                            case 'weekAcquisitionList':
                                                return (
                                                    <WeekAcquisitionList key={index} {...element}/>
                                                );
                                        }
                                    }) : (
                                        <TableRow>
                                            <TableCell colSpan={9}>
                                                <LinearProgress/>
                                            </TableCell>
                                        </TableRow>
                                    )}
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </Card>
                </form>
            </FormProvider>
        </>
    )
}

export default GtbOsSingleIndex;
