import '../styles/globals.css';
import type {AppProps} from 'next/app';
import {useTheme} from "react-daisyui";

function MyApp({Component, pageProps}: AppProps) {
    const { theme, setTheme } = useTheme('emerald')

    return <Component {...pageProps} />
}

export default MyApp;
