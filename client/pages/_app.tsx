import GlobalStyles from "../globals/globalStyles";
import ThemeProvider from "../globals/themeProvider";
import StateProvider from '../globals/stateProvider'

function App(props) {

    const { Component, pageProps, opening_hours, stories, abouts } = props

    return (
        <>
            <StateProvider opening_hours={opening_hours} stories={stories} abouts={abouts}>
                <ThemeProvider>
                    <GlobalStyles />
                    <Component {...pageProps} />
                </ThemeProvider>
            </StateProvider>
        </>
    );
}
App.getInitialProps = async (ctx)=>{

    try{
      const data = await fetch(`${process.env.STRAPI_URL}/opening-hours?_sort=order:asc`)
      const opening_hours = await data.json()
      const storiesJson = await fetch(`${process.env.STRAPI_URL}/stories?_sort=createdAt:asc`)
      const stories = await storiesJson.json()
      const aboutsJson = await fetch(`${process.env.STRAPI_URL}/abouts?_sort=order:asc`)
      const abouts = await aboutsJson.json()
    
      return {
          opening_hours,
          stories,
          abouts
      }
    }catch(e){
      console.error(e)
  
      return {
          opening_hours: [],
          stories: [],
          abouts: []
        }
    }
}

export default App