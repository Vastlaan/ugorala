import styled from 'styled-components'
import { respond, SectionNarrow } from "../../../styles"
import Card from './card'
import {GiMeat, GiSausage, GiSlicedSausage} from 'react-icons/gi'

export default function CardsComponent() {
    return (
        <SectionNarrow margin='4.7rem auto'>
            <Grid>
                {data.map((item, i)=> <Card key={i} heading={item.heading} icon={item.icon} price={item.price} text={item.text} items={item.items} />
                )}
            </Grid>
        </SectionNarrow>
    )
}

const Grid = styled.div`

    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2.7rem;

    ${()=>respond('m',`
        display: grid;
        grid-template-columns: repeat(3,30rem);
        grid-gap: 2.7rem;
        align-items: stretch;
        justify-content: center;

    `)}
`

const data = [
    {
        heading: 'Worsten',
        icon: <GiSausage />,
        price: "12",
        text: 'Oude traditionele recepten en de hoogste kwaliteit',
        items: [
            'Houselijk', 'Grillworst', 'Wit rauw worst', "Wit gekookt worst", "Krakauworst"
        ]
    },
    {
        heading: 'Worsten Speciaal',
        icon: <GiSlicedSausage />,
        price: "12",
        text: 'Oude traditionele recepten en de hoogste kwaliteit',
        items: [
            'Góralska', 'Knoflookwoest', 'Juniperworst', "Silesianworst", "Peperworst", "Żywiecka"
        ]
    },
    {
        heading: 'Vleeswaren',
        icon: <GiMeat />,
        price: "12",
        text: 'Oude traditionele recepten en de hoogste kwaliteit',
        items: [
            'Gerookte ham', 'Gerookte ossenhaas', 'Gerookt spek', "Gerookte karbonade", "Gerookte hamlap", "Spek Roulade"
        ]
    }
]


