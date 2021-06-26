import Layout from '../layouts/main'
import Reservation from '../components/reservations_page'

export default function ReservationPage() {
    return (
        <Layout>
            <Reservation />
        </Layout>
    )
}

export async function getServerSideProps(){
    return {
        props:{

        }
    }
}
