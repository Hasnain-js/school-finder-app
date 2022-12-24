import Head from 'next/head'
import Image from 'next/image'
import { Navbar } from '../components/Navbar'
import styles from '../styles/Home.module.css'
import styles from '../styles/navbar.css'

const name = "Hasnain banmo saeed"

export default function Home() {
  return (
    <>
      <Head>
        <title>School Finder App</title>
        <meta name="description" content="You can find your dream school" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
       
      </Head>
      <main className={styles.main}>
       <h1>Welcome to school finder Application</h1>
       <p> { name }</p>
       <Navbar name={name} email="ihasanin4@gmail.com"></Navbar>
      </main>
    </>
  )
}
