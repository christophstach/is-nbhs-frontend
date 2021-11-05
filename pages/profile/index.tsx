import { NextPage } from 'next';
import MainLayout from '../../components/MainLayout';
import Head from 'next/head';
import * as React from 'react';


const ProfileIndex: NextPage = () => {
    return (
        <MainLayout>
            <Head>
                <title>NBHS: Profil</title>
            </Head>
            Profil
        </MainLayout>
    )
}

export default ProfileIndex
