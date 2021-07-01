import { useContext } from 'react'
import { Context } from '../../store'
import Header from "../header"
import Intersection from "../utils/intersection"
import Story from '../utils/story'
import Timeline from "./timeline"
import Info from '../contact_page/info'

export default function AboutComponent() {

    const {state: { stories }} = useContext(Context)

    return (
        <>
            <Header title='Over Ons' body='Verander je droom in realiteit' image='/img/header-about.jpg' />
            <Story 
                heading={stories[4].heading}
                imgUrl={stories[4].imgUrl}
                paragraphs={stories[4].paragraphs.map(para=>para.text)} 
            />
            <Intersection heading='Kortom over ons' text='Gorál staat niet stil en blijft zich inzetten voor de promotie van Poolse tradities in het mooie land van de tulpen.' />
            <Timeline />
            <Story 
                heading={stories[5].heading}
                imgUrl={stories[5].imgUrl}
                paragraphs={stories[5].paragraphs.map(para=>para.text)} 
            />
            <Intersection heading='Contact u Górala' />
            <Info />
        </>
    )
}
