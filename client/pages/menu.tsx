import Layout from '../layouts/main'
import Menu from '../components/menu_page'

export default function MenuPage() {
    return (
        <Layout>      
            <Menu />
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