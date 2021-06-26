import Header from '../header'
import Reservation from './reservation'

export default function ReservationsComponent() {
    return (
        <>
            <Header title='Reserveer uw tafel' body='U kunt uw tafel voor U Górala eenvoudig reserveren via het online reserveringssysteem.' image='/img/header-menu.jpg' />   
            <Reservation />
        </>
    )
}
