import Layout from '../layouts/main'
import Landing from '../components/landing_page'

export default function LandingPage(){

  console.log("TEST ENV: ", process.env.TEST)
  
  return <Layout>
    <Landing/>
  </Layout> 
}