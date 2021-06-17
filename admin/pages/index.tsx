import Layout from '../layouts/main'
import {useContext, useEffect} from 'react'
import {Context} from '../globals/stateProvider'
import { withIronSession } from "next-iron-session";
import OpeningHours from '../components/opening_hours'
import Stories from '../components/stories'

export default function Page({opening_hours, stories, abouts, user}) {

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
      
        return {
            props:{
                user: {jwt: user.jwt, isLogged: true, username: user.username},
                opening_hours,
                stories,
                abouts
            }
        }
      }catch(e){
        console.error(e)
    
        return {
            props:{
                user: {jwt: user.jwt, isLogged: true, username: user.username},
                opening_hours: [],
                stories: [],
                abouts: []
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
