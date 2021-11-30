import { NextPage } from 'next';
import Head from 'next/head';
import * as React from 'react';
import { useEffect } from 'react';
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
import { useGetGtbOsForm } from '../../../../hooks/clients/use-get-gtb-os-form';
import TopNavPortal from '../../../../components/elements/TopNavPortal';
import { GtbOsFormValues } from '../../../../types/get-gtb-os-form-response';


const GtbOsSingleIndex: NextPage = () => {
    const router = useRouter();
    const id = parseInt(router.query.id as string, 10);
    const response = useGetGtbOsForm(id);
    const data = response.data?.data;
    const values = data?.values;
    const methods = useForm<GtbOsFormValues>();

    useEffect(() => {
        if (values) {
            methods.reset(values);
        }
    }, [methods, values]);

    function handleSaveClick() {
        methods.handleSubmit(formSubmitHandler)();
    }

    const formSubmitHandler: SubmitHandler<any> = (data) => {
        console.log(data);
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
                            <Button type="submit"
                                    color="success"
                                    variant="contained"
                                    onClick={handleSaveClick}>Speichern</Button>
                        </TopNavPortal>

                        <TableContainer>
                            <Table size="small">
                                <TableBody>
                                    {!response.isLoading ? data?.structure.map((element, index) => {
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
    );
}

export default GtbOsSingleIndex;
