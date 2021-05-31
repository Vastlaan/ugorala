import Layout from '../layouts/main'
import Landing from '../components/landing'

export default function LandingPage(){

  console.log(process.env.TEST)
  
  return <Layout>
    <Landing/>
  </Layout> 
}