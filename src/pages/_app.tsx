import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import { useRouter } from 'next/router'
import Footer from '../components/footer/Footer'

export default function App({ Component, pageProps }: AppProps) {
	const router = useRouter()
	return (
		<>
			<Head>
				<title>Driverevel</title>
				<meta name="description" content="Generated by create next app" />
				<meta http-equiv="Content-Security-Policy" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Component {...pageProps} />
			{router.pathname !== '/login' && <Footer />}
		</>
	)
}
