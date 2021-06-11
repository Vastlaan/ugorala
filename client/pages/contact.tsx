import ContactComponent from "../components/contact_page"
import Layout from '../layouts/main'

export default function ContactPage() {
    return (
        <Layout>
            <ContactComponent/>
        </Layout>
    )
}
// because I use getInitialProps in _app.tsx parent page component, 
// this function here (getServerSideProps) must be present
// on every page to avoid _app.tsx getInitialProps function to run on client when using Link (from next/link) or Router
// which will cause error because the url is docker container name (not resolvable on client side)
export async function getServerSideProps(){
    return {
      props:{
        
      }
    }
  }