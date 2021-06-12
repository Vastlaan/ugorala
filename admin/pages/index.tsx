import OpeningHours from '../components/opening_hours/index'

export default function Page({opening_hours, stories, abouts}) {

    
    return (
        <>    
            <OpeningHours opening_hours={opening_hours} />
        </>
    )
}

export async function getServerSideProps(ctx){
    
    console.log(process.env.STRAPI_URL)
    
    try{
        const data = await fetch(`${process.env.STRAPI_URL}/opening-hours?_sort=order:asc`)
        const opening_hours = await data.json()
        const storiesJson = await fetch(`${process.env.STRAPI_URL}/stories?_sort=createdAt:asc`)
        const stories = await storiesJson.json()
        const aboutsJson = await fetch(`${process.env.STRAPI_URL}/abouts?_sort=order:asc`)
        const abouts = await aboutsJson.json()
      
        return {
            props:{
                opening_hours,
                stories,
                abouts
            }
        }
      }catch(e){
        console.error(e)
    
        return {
            props:{
                opening_hours: [],
                stories: [],
                abouts: []
            }
          }
      }
}
