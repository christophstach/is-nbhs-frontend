import { NextPage } from 'next';
import Head from 'next/head';
import * as React from 'react';
import { useRouter } from 'next/router';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableContainer from '@mui/material/TableContainer';
import { Comment, SubForm, WeekAcquisitionMultiple } from '../../../../components/FormControls';
import { Card, CardActions } from '@mui/material';
import Button from '@mui/material/Button';
import { SubmitHandler, useForm, FormProvider } from 'react-hook-form';

const tableStructure = {
    elements: [
        {
            type: 'subForm',
            name: 'Beratungen (SuS, LuL, Eltern)'
        },
        {
            type: 'weekAcquisitionMultiple',
            name: 'consulting',
            items: [
                {name: 'Kurzberatung', nameEditable: false, values: [0, 0, 0, 0, 0, 0, 0]},
                {name: 'Beratungen > 15 min', nameEditable: false, values: [0, 0, 0, 0, 0, 0, 0]},
                {name: 'zu beratende Personen', nameEditable: false, values: [0, 0, 0, 0, 0, 0, 0]}
            ],
            extendable: false
        },
        {
            type: 'subForm',
            name: 'Beratungsthemen',
        },
        {
            type: 'weekAcquisitionMultiple',
            name: 'consultingTopics',
            items: [
                {name: 'psychosoziale Beratung', nameEditable: false, values: [0, 0, 0, 0, 0, 0, 0]},
                {name: 'Konflikt', nameEditable: false, values: [0, 0, 0, 0, 0, 0, 0]}
            ],
            extendable: true
        },
        {
            type: 'subForm',
            name: 'Gruppen und Kurse (sozialpädagogische Gruppenangebote, Klassenangebote, Einzelfallhilfe u.ä.)'
        },
        {
            type: 'subForm',
            name: 'Besuchende bei sonstigen Aktivitäten (z.B. Pausenangebote, offene Angebote)'
        },
        {
            type: 'subForm',
            name: 'Ehrenamtliche Mitarbeitende'
        },
        {
            type: 'subForm',
            name: 'Kontaktaufnahme mit externen Hifsangeboten, Jugendamt, Beratungsstellen etc.'
        },

        {
            type: 'subForm',
            name: 'Gremien, Vernetzung und Kooperation (innerhalb und außerhalb der Schule)'
        },

        {
            type: 'subForm',
            name: 'Anzahl der Schülerinnen und Schüler an der Schule'
        },
        {
            type: 'subForm',
            name: 'Bemerkungen'
        },
        {
            type: 'comment',
            name: 'comment',
            label: 'Bemerkung'
        }
    ]
}

const GtbOsSingleIndex: NextPage = () => {
    const router = useRouter();
    const {id} = router.query;
    const methods = useForm();

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
                        <CardActions>
                            <Button type="submit" color="success" variant="contained">Speichern</Button>
                        </CardActions>

                        <TableContainer>
                            <Table size="small">
                                <TableBody>
                                    {tableStructure.elements.map((element, indexElement) => {
                                        switch (element.type) {
                                            case 'subForm':
                                                return (
                                                    <SubForm key={indexElement} name={element.name as string}/>
                                                );
                                            case 'comment':
                                                return (
                                                    <Comment key={indexElement}
                                                             name={element.name as string}
                                                             label={element.label as string}/>
                                                )
                                            case 'weekAcquisitionMultiple':
                                                return (
                                                    <WeekAcquisitionMultiple key={indexElement}
                                                                             name={element.name as string}
                                                                             extendable={element.extendable as boolean}
                                                                             items={element.items as any}/>
                                                )
                                        }
                                    })}
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
