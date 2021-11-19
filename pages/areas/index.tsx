import { NextPage } from 'next';
import MainLayout from '../../components/MainLayout';
import Head from 'next/head';
import * as React from 'react';


const AreasIndex: NextPage = () => {
    return (
        <MainLayout>
            <Head>
                <title>NBHS: Bereichsverwaltung</title>
            </Head>

            Bereichsverwaltung
        </MainLayout>
    )
}

export default AreasIndex
