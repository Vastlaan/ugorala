import Layout from '../layouts/main'
import Meats from '../components/meats_page'

export default function MeatsPage() {
    return (
        <Layout>
            <Meats />
        </Layout>
    )
}

export async function getServerSideProps(){
    return {
      props:{
        
      }
    }
  }