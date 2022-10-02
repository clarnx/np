import Head from 'next/head';
import Link from 'next/link';
import React from 'react';
import routes from '../config/routes'

const Error404 = () => {
    return (
        <>
            <Head>
                <title>Page introuvable</title>
            </Head>

            <main className='error404'>
                <div className='error'>
                    <h1>Page recherchée introuvable</h1>
                    <p>
                        La page recherchée est introuvable. Verifiez si l'URL saisie existe ou si elle est correcte.
                    </p>
                    <div className='errornav'>
                        <Link href={routes.home}>
                            Acceuil
                        </Link>
                        <a href='mailto:eurekaservice.sc@gamil.com'>Contact</a>
                    </div>
                    <h2>Rechercher une page existante</h2>
                    <div style={{ gap: '20px' }} className='errornav'>
                        <Link href={routes.idGenerator}>
                            Generateur d'ID
                        </Link>
                        <Link href={routes.passwordGenerator}>
                            Generateur de mot de passe
                        </Link>
                        <Link href={routes.datesConverter}>
                            Convertisseur de dates
                        </Link>
                        <Link href={routes.textGenerator}>
                            Generateur de texte
                        </Link>
                        <Link href={routes.charConverter}>
                            Convertisseur de caractères
                        </Link>
                        <Link href={routes.unitsConverter}>
                            Convertisseur d'unités
                        </Link>
                        <Link href={routes.binaryConverter}>
                            Convertisseur binaire
                        </Link>
                        <Link href={routes.colorCodesConverter}>
                            Convertisseur de codes couleur
                        </Link>
                    </div>
                </div>
            </main>
        </>
    );
};

export default Error404;