import Header from '../header'
import Reservation from './reservation'
import Info from '../contact_page/info'
import Intersection from '../utils/intersection'

export default function ReservationsComponent() {
    return (
        <>
            <Header title='Reserveer uw tafel' body='U kunt uw tafel voor U Górala eenvoudig reserveren via het online reserveringssysteem.' image='/img/header-menu.jpg' />   
            <Reservation />
            <Intersection heading='Contact u Górala' />
            <Info />
        </>
    )
}
