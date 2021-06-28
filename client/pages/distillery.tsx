import Layout from '../layouts/main'
import Distillery from '../components/distillery_page'

export default function DistilleryPage() {
    return (
        <Layout>
            <Distillery />
        </Layout>
    )
}

export async function getServerSideProps(){
    return {
      props:{
        
      }
    }
  }