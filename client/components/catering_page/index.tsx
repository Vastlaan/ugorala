import { useContext } from 'react'
import { Context } from '../../store'
import Header from '../header'
import Intersection from '../utils/intersection'
import Menu from '../menu'
import Gallery from '../gallery'

export default function CateringComponent() {

    const {state: { menus, galleries }} = useContext(Context)

    const landingGallery = galleries.find(gal=>gal.name==='landing')

    let imagesUrls = ['/img/catering.jpg', '/img/vodka.jpg', '/img/liquor.jpg', '/img/restaurant.jpg', '/img/roast.jpg', '/img/liquor.jpg', '/img/vodka.jpg', '/img/roast.jpg']

    if(landingGallery){
        imagesUrls = landingGallery.images.map(image=>image.url)
    }

    return (
        <>
            <Header title='Catering' body='Wij verzorgen heerlijke maaltijden voor gelegenheden door heel Nederland' image='/img/catering.jpg' />            
            <Intersection 
                heading={`Speciale evenementen`} 
                text={`U Górala is een bedrijf met een team bestaande uit liefhebbers voor tradities en goed eten. U kunt ons boeken voor de catering op bedrijfsfeesten, trouwerijen, verjaardagen en overige gelegenheden. Uiteraard denken wij hierbij ook aan de kinderen en toveren we hun verjaardag om in een echt feestmaal!`}
            />
            <Menu heading='Speciale Menu' menus={menus} />
            <Intersection 
                heading={`Gallerij`} 
                text={`Fotos van sommige van onze gerechten`}
            />
            <Gallery imagesUrls={imagesUrls} />
        </>
    )
}
