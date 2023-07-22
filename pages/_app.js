import Head from "next/head";
import Layout from "@/components/Layout";
import "@/styles/globals.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function App({ Component, pageProps }) {
	const getLayout = Component.getLayout || ((page) => <Layout>{page}</Layout>);
	console.log(getLayout);
	return getLayout(
		<>
			<Head>
				<title>School Finder app</title>
				<meta name='description' content='Door to the future' />
				<meta name='viewport' content='width=device-width, initial-scale=1' />
				<link rel='icon' href='/favicon.ico' />
				<noscript
					type='module'
					src='https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js'></noscript>
			</Head>
			<Component {...pageProps} />
		</>
	);
}
