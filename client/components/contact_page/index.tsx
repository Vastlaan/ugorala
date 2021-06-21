import {useContext} from 'react'
import {Context} from '../../store'
import Header from '../header'
import Intersection from '../utils/intersection'
import Form  from './contact_form'
import Info from './info'
import Map from './map'

export default function ContactPageComponent() {

    const {state: {stories }} = useContext(Context)
    
    return (
        <>
            <Header title='Wij helpen u graag'  body='Stuur ons een bericht en laat ons weten wat we voor u kunnen doen.' image='/img/contact-header-2.jpg' />
            <Intersection heading='Contact u Górala' />
            <Info />
            <Form />
            <Intersection heading='Bezoek ons restaurant' />
            <Map />
        </>
    )
}
