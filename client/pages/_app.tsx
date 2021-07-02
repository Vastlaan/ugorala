import GlobalStyles from "../globals/globalStyles";
import ThemeProvider from "../globals/themeProvider";
import StateProvider from '../globals/stateProvider'

function App(props) {

    const { Component, pageProps, opening_hours, stories, abouts, menus, cateringmenus, galleries } = props

    return (
        <>
            <StateProvider opening_hours={opening_hours} stories={stories} abouts={abouts} menus={menus} galleries={galleries} cateringmenus={cateringmenus}>
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
      const menusJson = await fetch(`${process.env.STRAPI_URL}/menus?_sort=order:asc`)
      const menus = await menusJson.json()
      const cateringmenusJson = await fetch(`${process.env.STRAPI_URL}/cateringmenus?_sort=order:asc`)
      const cateringmenus = await cateringmenusJson.json()
      const galleriesJson = await fetch(`${process.env.STRAPI_URL}/galleries?_sort=createdAt:asc`)
      const galleries = await galleriesJson.json()
    
      return {
          opening_hours,
          stories,
          abouts,
          menus,
          cateringmenus,
          galleries
      }
    }catch(e){
      console.error(e)
  
      return {
          opening_hours: [],
          stories: [],
          abouts: [],
          menus: [],
          galleries: []
        }
    }
}

export default App