import { NextPage } from 'next';
import Head from 'next/head';
import * as React from 'react';
import MainLayout from '../../../../components/MainLayout';
import { useRouter } from 'next/router'

const GtbOsSingleIndex: NextPage = () => {
    const router = useRouter();
    const { id } = router.query;

    console.log(router.query);

    return (
        <MainLayout>
            <Head>
                <title>NBHS: Formulare - GTB OS - {id}</title>
            </Head>
        </MainLayout>
    )
}

export default GtbOsSingleIndex;
