import type {NextPage} from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
    return (
        <div className={styles.container}>
            <Head>
                <title>Android Developers Italia</title>
                <meta name="description" content="Community Portfolio"/>
                <link rel="icon" href="/favicon.ico"/>
            </Head>

            <main className={styles.main}>
                <h1 className={styles.title}>
                    Benvenuti all&apos;
                    <span style={{color: 'green'}}>A</span>
                    <span style={{color: 'white'}}>D</span>
                    <span style={{color: 'red'}}>I</span>
                    <br/>
                    Community Portfolio
                </h1>

                <p className={styles.description}>
                    Per aggiungere il tuo profilo qui sotto, visita il repo <a href={"https://github.com/hamen/adi-community-portfolio.git"}>qui</a> e
                    apri una PR 💪.
                </p>

                <div className={styles.grid}>
                    <a href="https://www.linkedin.com/in/ivanmorgillo/" className={styles.card}>
                        <img src={"https://avatars.githubusercontent.com/hamen"} width={200} height={200} className={styles.avatar}/>
                        <h2>Ivan Morgillo 🍕🤌</h2>
                        <p>Consulente e trainer. Ho scritto un paio di libri, ho creato un po&apos; di app e parlo di Jetpack Compose il mercoledì
                            sera su <a href={"https://cwti.link/twitch"}>Twitch</a>.</p>
                    </a>
                    <a href="https://www.linkedin.com/in/matteo-principe/" className={styles.card}>
                        <img src={"https://avatars.githubusercontent.com/readbeard"} width={200} height={200} className={styles.avatar}/>
                        <h2>Matteo Principe 🚀🚀</h2>
                        <p>Android Software Engineer <a href={"https://www.revolut.com/on-demand-pay/"}>@Revolut</a>. Amo il mondo start-up, la mia
                            barba e viaggiare zaino in spalla.
                            <br/>❤️ Mobile engineering su larga scala</p>
                    </a>
                    <a href="https://www.linkedin.com/in/marcocattaneo1/" className={styles.card}>
                        <img src={"https://avatars.githubusercontent.com/u/764222"} width={200} height={200} className={styles.avatar}/>
                        <h2>Marco Cattaneo 👾👾</h2>
                        <p>Android Software Engineer <a href={"https://www.moneyfarm.com/"}>@Moneyfarm</a>. Drogato di apprendimento:
                            se &egrave; qualcosa che non conosco devo saperne di pi&ugrave;!!<br/>Nel tempo libero amo cucinare 🍝 e fare lunghe
                            passeggiate.</p>
                    </a>
                    <a href="https://www.linkedin.com/in/CULO/" className={styles.card}>
                        <img src={"https://picsum.photos/200"} width={200} height={200} className={styles.avatar} alt={"Avatar"}/>
                        <h2>NOME</h2>
                        <p>DESCRIZIONE</p>
                    </a>
                </div>
            </main>

            <footer className={styles.footer}>
                <a
                    href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Powered by{' '}
                    <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16}/>
          </span>
                </a>
            </footer>
        </div>
    )
}

export default Home
