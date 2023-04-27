import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'



const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
        <Head>
            <title key="title">Strona główna</title>
            <meta name="description" content="Strona główna bez prawie żadnej zawartości" key="description" />
            <meta name="keywords" content="strona, główna, brak zawartości" key="keywords" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="icon" href="/favicon.ico" />
        </Head>
        <main>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl nec ultricies lacinia, nisl
            </p>
        </main>
    </>
  )
}
