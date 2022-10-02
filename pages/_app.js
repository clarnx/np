import '../styles/default.scss'
import { Provider } from 'next-auth/client'

//comp
import Layout from '../Components/UI/Layout/Layout'
import Head from 'next/head'

function MyApp({ Component, pageProps }) {

  return (
    <>
      <Head>
        <title>Nice Pencil</title>
        <link rel="icon" href="./img/nice_pencil_logo.png" />
      </Head>
      <Provider session={pageProps.session}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </Provider>
    </>


  )
}

export default MyApp
