import Layout from '../layouts/main'
import Catering from '../components/catering_page'

export default function CateringPage() {
    return (
        <Layout>
            <Catering />
        </Layout>
    )
}
export async function getServerSideProps(){
    return {
      props:{
        
      }
    }
  }