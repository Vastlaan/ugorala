import GlobalStyles from "../globals/globalStyles";
import ThemeProvider from "../globals/themeProvider";

function App(props) {

    const { Component, pageProps, opening_hours, stories, abouts } = props

    return (
        <>
                <ThemeProvider>
                    <GlobalStyles />
                    <Component {...pageProps} />
                </ThemeProvider>
        </>
    );
}

export default App