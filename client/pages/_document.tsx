import Document, { Html, Head, Main, NextScript, DocumentContext } from "next/document";
import { ServerStyleSheet } from "styled-components";

class MyDocument extends Document {

    render() {
        return (
            <Html lang="nl">
                <Head>
                    <meta charSet="utf-8" />
                    <meta name="theme-color" content="#1e1e24" />
                    <link rel="icon" href="/favicon.svg" />

                    <link rel="preconnect" href="https://fonts.gstatic.com" />
                    <link
                        href="https://fonts.googleapis.com/css2?family=EB+Garamond:ital,wght@0,400;0,500;0,600;0,700;0,800;1,400;1,500;1,600;1,700;1,800&family=Oswald:wght@200;300;400;500;600;700&display=swap"
                        rel="stylesheet"
                    />
                    {/* <script
                        async
                        src="https://www.googletagmanager.com/gtag/js?id=UA-132849357-5"
                    />
                    <script
                        dangerouslySetInnerHTML={{
                            __html: `                              
                                window.dataLayer = window.dataLayer || [];
                                function gtag(){dataLayer.push(arguments);}
                                gtag('js', new Date());
                                gtag('config', 'UA-132849357-5', {
                                    page_path: window.location.pathname,
                                });
                            `,
                        }}
                    /> */}
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}

export default MyDocument;

export const getServerSideProps = async (ctx : DocumentContext) => {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
        ctx.renderPage = () =>
            originalRenderPage({
                enhanceApp: (App) => (props) =>
                    sheet.collectStyles(<App {...props} />),
            });

        const initialProps = await Document.getInitialProps(ctx);
        return {
            ...initialProps,
            styles: (
                <>
                    {initialProps.styles}
                    {sheet.getStyleElement()}
                </>
            ),
        };
    } finally {
        sheet.seal();
    }
}