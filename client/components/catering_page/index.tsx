import { useContext } from 'react'
import { Context } from '../../store'
import Header from '../header'
import Intersection from '../utils/intersection'
import Menu from '../menu'
import Gallery from '../gallery'
import Info from '../contact_page/info'

export default function CateringComponent() {

    const {state: { cateringmenus, galleries, abouts }} = useContext(Context)

    const landingGallery = galleries.find(gal=>gal.name==='menu')

    let imagesUrls = ['/img/catering.jpg', '/img/vodka.jpg', '/img/liquor.jpg', '/img/restaurant.jpg', '/img/roast.jpg', '/img/liquor.jpg', '/img/vodka.jpg', '/img/roast.jpg']

    if(landingGallery){
        imagesUrls = landingGallery.images.map(image=>image.url)
    }

    return (
        <>
            <Header title='Catering' body='Wij verzorgen heerlijke maaltijden voor gelegenheden door heel Nederland' image='/img/catering.jpg' />            
            {abouts.length > 1 && <Intersection 
                heading={abouts[1].heading} 
                text={abouts[1].text}
            />}
            <Menu heading='Speciale Menu' menus={cateringmenus} />
            <Intersection 
                heading={`Gallerij`} 
                text={`Fotos van sommige van onze gerechten`}
            />
            <Gallery imagesUrls={imagesUrls} />
            <Intersection heading='Contact u Górala' />
            <Info />
        </>
    )
}
