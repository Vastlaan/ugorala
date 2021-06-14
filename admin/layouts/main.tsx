import Navigation from '../components/navigation'

export default function MainLayout({children}) {
    return (
        <>
            <Navigation />
            {children}   
        </>
    )
}
