import GlobalStyles from "../globals/globalStyles";
import ThemeProvider from "../globals/themeProvider";
import StateProvider from '../globals/stateProvider'

function App({Component, pageProps}) {

    return (
        <>
            <StateProvider>
                <ThemeProvider>
                    <GlobalStyles />
                    <Component {...pageProps} />
                </ThemeProvider>
            </StateProvider>
        </>
    );
}

export default App