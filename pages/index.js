import Head from 'next/head'
import Links from '../Components/Links/Links'

export default function Home() {

  return (
    <>
      <Head>
        <title>Nice Pencil</title>
      </Head>
      <main>
        <h1 className='title'>Bienvenue sur Nice Pencil</h1>
        <Links />
        <small className='small_logo_text'>by <img src='./img/small_logo.png' /></small>
      </main>
    </>


  )
}
