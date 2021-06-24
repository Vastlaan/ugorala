import {useContext} from 'react'
import {Context} from '../../store'
import Header from '../header'
import Menu from '../menu'
import Gallery from '../gallery'
import Intersection from '../utils/intersection'

export default function MenuComponent() {

    const {state: { menus, galleries }} = useContext(Context)

    const landingGallery = galleries.find(gal=>gal.name==='landing')

    let imagesUrls = ['/img/catering.jpg', '/img/vodka.jpg', '/img/liquor.jpg', '/img/restaurant.jpg', '/img/roast.jpg', '/img/liquor.jpg', '/img/vodka.jpg', '/img/roast.jpg']

    if(landingGallery){
        imagesUrls = landingGallery.images.map(image=>image.url)
    }

    return (
        <>
            <Header 
                title='Gerechten uit het hart op je bord ' 
                body='Wij volgen deze principes in onze keuken. Met als resultaat: gezonde kwaliteit gerechten die de authentieke smaak van Polen waarborgen.' 
                image='/img/header-menu.jpg' 
            />
            <Menu menus={menus} heading='Menukaart'/>
            <Intersection 
                heading={`Gallerij`} 
                text={`Fotos van sommige van onze gerechten`}
            />
            <Gallery imagesUrls={imagesUrls} />
        </>
    )
}
