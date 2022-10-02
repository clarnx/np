import Link from 'next/link';
import React, { useState } from 'react';
import classes from './Header.module.scss'
import routes from '../../../config/routes'
import { useRouter } from 'next/router';
import { Cross as Hamburger } from 'hamburger-react'

const Header = () => {

    const router = useRouter()
    const [show, setShow] = useState(false)

    const moveHeaderClickedHandler = () => {
        const header = document.getElementById('header')

        header.classList.remove()
        header.classList.toggle(classes.showHeader)

        // if (show) {
        //     header.style.marginLeft = '-250px'
        //     setShow(false)
        // }
        // else {
        //     header.style.marginLeft = '0px'
        //     setShow(true)
        // }
    }

    return (
        <>
            <header className={classes.Header} id='header'>
                <nav>
                    <ul>
                        <li className={router.pathname == routes.home && classes.active}>
                            <Link href={routes.home}>
                                <a>
                                    Tout voir
                                </a>
                            </Link>
                        </li>
                        <li className={router.pathname == routes.idGenerator && classes.active}>
                            <Link href={routes.idGenerator}>
                                Generateur d'ID
                            </Link>
                        </li>
                        <li className={router.pathname == routes.passwordGenerator && classes.active}>
                            <Link href={routes.passwordGenerator}>
                                Generateur de mot de passe
                            </Link>
                        </li>
                        <li className={router.pathname == routes.datesConverter && classes.active}>
                            <Link href={routes.datesConverter}>
                                Convertisseur de dates
                            </Link>
                        </li>
                        <li className={router.pathname == routes.textGenerator && classes.active}>
                            <Link href={routes.textGenerator}>
                                Generateur de texte
                            </Link>
                        </li>
                        <li className={router.pathname == routes.charConverter && classes.active}>
                            <Link href={routes.charConverter}>
                                Convertisseur de caractères
                            </Link>
                        </li>
                        <li className={router.pathname == routes.unitsConverter && classes.active}>
                            <Link href={routes.unitsConverter}>
                                Convertisseur d'unités
                            </Link>
                        </li>
                        <li className={router.pathname == routes.binaryConverter && classes.active}>
                            <Link href={routes.binaryConverter}>
                                Convertisseur binaire
                            </Link>
                        </li>
                        <li className={router.pathname == routes.colorCodesConverter && classes.active}>
                            <Link href={routes.colorCodesConverter}>
                                Convertisseur de codes couleur
                            </Link>
                        </li>
                    </ul>
                </nav>
                <div className={classes.plus}>
                    <small>by <img src='./img/small_logo.png' /></small>
                </div>
            </header>
            <div onClick={moveHeaderClickedHandler} className={classes.hamburger}>
                <Hamburger />
            </div>
        </>
    );
};

export default Header;