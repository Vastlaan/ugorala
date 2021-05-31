import GlobalStyles from "../globals/globalStyles";
import ThemeProvider from "../globals/themeProvider";

export default function App({ Component, pageProps }) {
    return (
        <>
            <ThemeProvider>
                <GlobalStyles />
                <Component {...pageProps} />
            </ThemeProvider>
        </>
    );
}