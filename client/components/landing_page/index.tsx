import {useContext} from 'react'
import {Context} from '../../store'
import Header from './header'
import Intersection from '../utils/intersection'
import Offer from './offer'
import Story from '../utils/story'
import VideoBackground from '../utils/background_video'
import Gallery from '../gallery'

export default function LandingPage(){

  const {state:{stories, abouts}} = useContext(Context)

  return (
    <>

      <Header headings={['Heerlijk bijkomen op een unieke top locatie','Zeer gewaardeerd voor de kwaliteit en sfeer']} />

      {
        abouts.length > 0 && <Intersection 
        heading={abouts[0].heading}
        text={abouts[0].text}
      />
      }
      

      <Offer />

      {
        stories.length > 0 && <Story 
          heading={stories[0].heading}
          imgUrl={stories[0].imgUrl}
          paragraphs={stories[0].paragraphs.map(para=>para.text)} />
      }
        
        <VideoBackground 
          heading='Feesten en partijen' 
          para='We bieden een gezellige en goed bereikbare ruimte op een mooie locatie aan, voor maximaal 60 personen.' 
          videoUrl='https://michalantczakblogresources.s3.eu-central-1.amazonaws.com/headerCompressed.mp4'
          btnName='Catering'
          btnLink='/'
        />

        <Intersection 
          heading='Aanbevolen gerechten' 
        />

        <Gallery imagesUrls={ ['/img/catering.jpg', '/img/vodka.jpg', '/img/liquor.jpg', '/img/restaurant.jpg', '/img/roast.jpg', '/img/liquor.jpg', '/img/vodka.jpg', '/img/roast.jpg'] } />

        {
        stories.length > 1 && <Story 
          heading={stories[1].heading}
          imgUrl={stories[1].imgUrl}
          paragraphs={stories[1].paragraphs.map(para=>para.text)} />
      }

    </>
  )
}
