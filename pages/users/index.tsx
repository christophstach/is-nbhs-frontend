import { NextPage } from 'next';
import MainLayout from '../../components/MainLayout';
import Head from 'next/head';
import * as React from 'react';


const UsersIndex: NextPage = () => {
    return (
        <MainLayout>
            <Head>
                <title>NBHS: Benuterverwaltung</title>
            </Head>

            Benuterverwaltung
        </MainLayout>
    )
}

export default UsersIndex
