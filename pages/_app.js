import Head from "next/head";
import Layout from "@/components/Layout";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
	return (
		<>
			<Head>
				<title>School Finder app</title>
				<meta name='description' content='Door to the future' />
				<meta name='viewport' content='width=device-width, initial-scale=1' />
				<link rel='icon' href='/favicon.ico' />
				<script
					type='module'
					src='https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js'></script>
			</Head>
			<Layout>
				<Component {...pageProps} />
			</Layout>
		</>
	);
}
