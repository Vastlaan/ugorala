import Header from './header'
import Intersection from '../utils/intersection'
import Offer from './offer'

export default function LandingPage(){
  return (
    <>
      <Header />
      <Intersection 
        heading='Restaurant u Górala' 
        text="Ons verhaal begint op in 2014. Het moment dat we besluiten om een klein beetje van Polen naar Nederland te brengen. Het restaurant met de zeer Poolse naam: U Górala, waar u kunt genieten van onze typisch Poolse gerechten, gemaakt met geselecteerde seizoensproducten en typische poolse ingrediënten."
      />
      <Offer />
    </>
  )
}
