import { useContext } from 'react'
import { Context } from '../../store'
import Header from '../header'
import Intersection from '../utils/intersection'
import Gallery from '../gallery'
import Cards from './cards'

export default function DistilleryComponent() {

    const {state: { stories, galleries, abouts}} = useContext(Context)

    const gallery = galleries.find(gal=>gal.name==='sausages')

    let imagesUrls = ['/img/catering.jpg', '/img/vodka.jpg', '/img/liquor.jpg', '/img/restaurant.jpg', '/img/roast.jpg', '/img/liquor.jpg', '/img/vodka.jpg', '/img/roast.jpg']

    if(gallery){
        imagesUrls = gallery.images.map(image=>image.url)
    }

    return (
        <>
            <Header title='Vleeswaren' body='Poolse worsten, gerookte hammen, pate’s en nog veel meer producten worden door ons huisbereid.' image='/img/header-sausages.jpg' />            
            {abouts.length > 3 && <Intersection 
                heading={abouts[3].heading} 
                text={abouts[3].text}
            />}
            <Cards />
            
            <Intersection 
                heading={`Verse vleeswaren uit Polen`} 
                text={`Volgens traditionele poolse receptuur`}
            />
            <Gallery imagesUrls={imagesUrls} />
        </>
    )
}