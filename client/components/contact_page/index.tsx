import {useContext} from 'react'
import {Context} from '../../store'
import Header from '../header'
import Form from './contact_form'

export default function ContactPageComponent() {

    const {state: {landing_page: { stories }}} = useContext(Context)
    
    return (
        <>
            <Header title='Wij helpen u graag'  body='Stuur ons een bericht en laat ons weten wat we voor u kunnen doen.' image='/img/contact-header-2.jpg' />
            <Form />
        </>
    )
}
