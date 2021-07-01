import Layout from "../layouts/main"
import About from "../components/about_page"

export default function AboutPage() {
    return (
        <Layout>
            <About />
        </Layout>
    )
}

export async function getServerSideProps(){
    return{
        props:{}
    }
}
