import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify'

import { useSession } from 'next-auth/client'
import classes from './Layout.module.scss'
import routes from '../../../Config/routes';

//comp 
import Header from '../Header/Header'


const Layout = (props) => {

    const router = useRouter();
    const [session, loading] = useSession()
    const [flag, setFlag] = useState(false);

    function Loading() {
        const router = useRouter();

        const [loading, setLoading] = useState(false);


        useEffect(() => {
            const handleStart = (url) => (url !== router.asPath) && setLoading(true);
            const handleComplete = (url) => (url === router.asPath) && setLoading(false);

            router.events.on('routeChangeStart', handleStart)
            router.events.on('routeChangeComplete', handleComplete)
            router.events.on('routeChangeError', handleComplete)

            return () => {
                router.events.off('routeChangeStart', handleStart)
                router.events.off('routeChangeComplete', handleComplete)
                router.events.off('routeChangeError', handleComplete)
            }
        })

        return loading && (
            <div className={classes.loaderbg}>
                <div className={classes.loader}></div>
            </div>
        );
    }


    return (
        <div style={{ display: 'flex', height: '100vh', flexDirection: 'column' }}>
            {router.pathname != routes.home && router.pathname != '/404' &&
                <Header />
            }

            <ToastContainer position='top-right' style={{ textAlign: 'center' }} />

            <Loading />

            <div style={{ flexGrow: 1 }}>
                <div className={router.pathname != routes.home && 'container'}>{props.children}</div>
            </div>

        </div>
    )
}



export default Layout
