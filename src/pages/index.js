import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Link from 'next/link'
import LLDate from '@/components/info/LLDate'
import Heavy from '@/components/fonts/Heavy'

const inter = Inter({ subsets: ['latin'], weights: ["400", "900"] })

export default function Home() {
  return (
    <>
      <Head>
        <title>LL Next</title>
        <meta name="description" content="LL Next Template" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
          <Heavy>LL Next</Heavy>
          <LLDate />
      </main>
      <div className={inter.className}>
        <div style={{fontWeight: "400", width: "80%", margin:"auto"}}>
          <h2>links</h2>
          <ul>
            <li><Link href="/ssr/sample">server-side rendering example</Link></li>
            <li><Link href="/ssg/record-list">static generation example</Link></li>
            <li><Link href="https://www.youtube.com/watch?v=M11SvDtPBhA">another link</Link></li>
          </ul>
        </div>
      </div>
    </>
  )
}
