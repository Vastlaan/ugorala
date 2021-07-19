import Layout from '../layouts/main'
import {useContext, useEffect} from 'react'
import {Context} from '../globals/stateProvider'
import { withIronSession } from "next-iron-session";
import OpeningHours from '../components/opening_hours'
import Stories from '../components/stories'
import Abouts from '../components/abouts'
import Galleries from '../components/galleries'
import FoodMenu from '../components/food_menu'

export default function Page({opening_hours, stories, abouts, user, galleries, mainMenu, cateringMenu}) {

    console.log(cateringMenu)

    const {setUser, sectionToRender} = useContext(Context)

    useEffect(()=>{
        setUser(user)
    },[])

    function renderSection(section){
        switch(section){
            case 'opening_hours':
                return <OpeningHours opening_hours={opening_hours} />
            case 'stories':
                return <Stories stories={stories} />
            case 'abouts':
                return <Abouts abouts={abouts} />
            case 'galleries':
                return <Galleries galleries={galleries} />
            case 'mainMenu':
                return <FoodMenu key='1' menu={mainMenu} type='menus'/>
            case 'cateringMenu':
                return <FoodMenu key='2' menu={cateringMenu} type='cateringmenus'/>
            default:
                return <Stories stories={stories} />
        }
    }

    return (
        <Layout>    
            {renderSection(sectionToRender)}
        </Layout>
    )
}

export const getServerSideProps = withIronSession( async ({req}) => {

    const user = req.session.get('user')
    
    if(!user || !user.jwt){
        return {
            redirect: {
                destination: '/auth/login',
                permanent: false
            }
        }
    }
    
    try{
        const data = await fetch(`${process.env.STRAPI_URL}/opening-hours?_sort=order:asc`)
        const opening_hours = await data.json()
        const storiesJson = await fetch(`${process.env.STRAPI_URL}/stories?_sort=createdAt:asc`)
        const stories = await storiesJson.json()
        const aboutsJson = await fetch(`${process.env.STRAPI_URL}/abouts?_sort=order:asc`)
        const abouts = await aboutsJson.json()
        const galleriesJson = await fetch(`${process.env.STRAPI_URL}/galleries?_sort=createdAt:asc`)
        const galleries = await galleriesJson.json()
        const mainMenuJson = await fetch(`${process.env.STRAPI_URL}/menus?_sort=order:asc`)
        const mainMenu = await mainMenuJson.json()
        const cateringMenuJson = await fetch(`${process.env.STRAPI_URL}/cateringmenus?_sort=order:asc`)
        const cateringMenu = await cateringMenuJson.json()
      
        return {
            props:{
                user: {jwt: user.jwt, isLogged: true, username: user.username},
                opening_hours,
                stories,
                abouts,
                galleries,
                mainMenu,
                cateringMenu,
            }
        }
      }catch(e){
        console.error(e)
    
        return {
            props:{
                user: {jwt: user.jwt, isLogged: true, username: user.username},
                opening_hours: [],
                stories: [],
                abouts: [],
                galleries: [],
                mainMenu: [],
                cateringMenu: []
            }
        }
      }
}, {
    cookieName: 'ugorala_session',
    password: process.env.SESSION_SECRET,
    cookieOptions: {
        secure: process.env.NODE_ENV==='production'
    }
})
