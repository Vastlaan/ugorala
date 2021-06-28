import { useContext } from 'react'
import { Context } from '../../store'
import Header from '../header'
import Intersection from '../utils/intersection'
import Gallery from '../gallery'

export default function DistilleryComponent() {

    const {state: { stories, galleries }} = useContext(Context)

    const landingGallery = galleries.find(gal=>gal.name==='landing')

    let imagesUrls = ['/img/catering.jpg', '/img/vodka.jpg', '/img/liquor.jpg', '/img/restaurant.jpg', '/img/roast.jpg', '/img/liquor.jpg', '/img/vodka.jpg', '/img/roast.jpg']

    if(landingGallery){
        imagesUrls = landingGallery.images.map(image=>image.url)
    }

    return (
        <>
            <Header title='Vleeswaren' body='Poolse worsten, gerookte hammen, pate’s en nog veel meer producten worden door ons huisbereid.' image='/img/header-sausages.jpg' />            
            <Intersection 
                heading={`Vers gerookte producten uit Polen`} 
                text={`Ons vlees wordt geselecteerd op kwaliteit en vervolgens door ons zelf gerookt. De kwaliteit van ons vlees wordt niet alleen erkend door de lokale bewoners, maar ook door vele winkel eigenaars met poolse producten. Wij onderscheiden ons van de rest door onze oude traditionele recepten en verzekeren u van de hoogste kwaliteit.`}
            />
            
            <Intersection 
                heading={`Verse vleeswaren uit Polen`} 
                text={`Volgens traditionele poolse receptuur`}
            />
            <Gallery imagesUrls={imagesUrls} />
        </>
    )
}