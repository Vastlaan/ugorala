import { useContext } from 'react'
import { Context } from '../../store'
import Header from '../header'
import Intersection from '../utils/intersection'
import Story from '../utils/story'
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
            <Header title='Distilleerderij' body='Wij produceren en verkopen geheel legaal ambachtelijk bier, zelfgemaakte wijnen, ciders en zelfs gin. Maar Moonshine en een breed scala aan likeuren zijn echter onze trots.' image='/img/liquor.jpg' />            
            <Intersection 
                heading={`Uitzonderlijk poolse likeuren`} 
                text={`Wij schromen zeker niet om zo over onszelf te praten. Wij produceren en verkopen geheel legaal ambachtelijk bier, zelfgemaakte wijnen, ciders en zelfs gin. Maar Moonshine en een breed scala aan likeuren zijn echter onze trots.
                Heeft u zich ooit afgevraagd waar u Moonshine in Nederland kunt kopen? Het antwoord is heel simpel - uGórala!
                Onze traditionele recepten garanderen u kwaliteit van de hoogste plank.
                `}
            />
            <Story 
                heading={stories[2].heading}
                imgUrl={stories[2].imgUrl}
                paragraphs={stories[2].paragraphs.map(para=>para.text)} 
            />
            <Intersection 
                heading={`Krachtige likeuren`} 
                text={`Volgens traditionele poolse receptuur`}
            />
            <Gallery imagesUrls={imagesUrls} />
            <Story 
                heading={stories[3].heading}
                imgUrl={stories[3].imgUrl}
                paragraphs={stories[3].paragraphs.map(para=>para.text)} 
            />
        </>
    )
}
