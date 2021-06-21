import Layout from '../layouts/main'
import Header from '../components/header'
import Menu from '../components/menu'
import Intersection from '../components/utils/intersection'

export default function MenuPage() {
    return (
        <Layout>
            <Header 
                title='Gerechten uit het hart op je bord ' 
                body='Wij volgen deze principes in onze keuken. Met als resultaat: gezonde kwaliteit gerechten die de authentieke smaak van Polen waarborgen.' 
                image='/img/header-menu.jpg' 
            />
            <Menu />
            {/* <Intersection heading='Menukaart' /> */}
        </Layout>
    )
}
// because I use getInitialProps in _app.tsx parent page component, 
// this function here (getServerSideProps) must be present
// on every page to avoid _app.tsx getInitialProps function to run on client 
// which will cause error because the url is docker container name (not resolvable on client side)
export async function getServerSideProps(){
    return {
      props:{
  
      }
    }
  }