import Header from './header'
import Intersection from '../utils/intersection'
import Offer from './offer'
import Story from '../utils/story'
import VideoBackground from '../utils/background_video'
import Gallery from '../gallery'

export default function LandingPage(){
  return (
    <>

      <Header headings={['Heerlijk bijkomen op een unieke top locatie','Zeer gewaardeerd voor de kwaliteit en sfeer']} />

      <Intersection 
        heading='Restaurant u Górala' 
        text="Ons verhaal begint op in 2014. Het moment dat we besluiten om een klein beetje van Polen naar Nederland te brengen. Het restaurant met de zeer Poolse naam: U Górala, waar u kunt genieten van onze typisch Poolse gerechten, gemaakt met geselecteerde seizoensproducten en typische poolse ingrediënten."
      />

      <Offer />

      <Story 
        heading='Onze distillaten' 
        imgUrl='/img/liquor.jpg' 
        paragraphs={[
          'Wij schromen zeker niet om zo over onszelf te praten. Wij produceren en verkopen geheel legaal ambachtelijk bier, zelfgemaakte wijnen, ciders en zelfs gin. Maar Moonshine en een breed scala aan likeuren zijn echter onze trots.',
          'Heeft u zich ooit afgevraagd waar u Moonshine in Nederland kunt kopen? Het antwoord is heel simpel - uGórala!',
          'Onze traditionele recepten garanderen u kwaliteit van de hoogste plank.'
        ]} />
        
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

        <Story 
        heading='Vleeswaren' 
        imgUrl='/img/sausages.jpg' 
        paragraphs={[
          'Wij schromen zeker niet om zo over onszelf te praten. Wij produceren en verkopen geheel legaal ambachtelijk bier, zelfgemaakte wijnen, ciders en zelfs gin. Maar Moonshine en een breed scala aan likeuren zijn echter onze trots.',
          'Heeft u zich ooit afgevraagd waar u Moonshine in Nederland kunt kopen? Het antwoord is heel simpel - uGórala!',
          'Onze traditionele recepten garanderen u kwaliteit van de hoogste plank.'
        ]} />

    </>
  )
}
