import styled from "styled-components"
import Category from './category'
import { respond, SectionNarrow, ButtonFull } from "../../../styles"

export default function OfferComponent() {
    return (
        <SectionNarrow margin='4.7rem auto'>
            <Grid>
                {
                    data.map((category, i)=>{
                        return(
                            <Category 
                                key={`${category.label}-${i}`}
                                label={category.label}
                                btn={category.btn}
                                area={category.area}
                                url={category.url}
                            />
                        )
                    })
                }
            </Grid>
        </SectionNarrow>
    )
}

const Grid = styled.div`
    
    display: grid;
    grid-template-columns: 1fr;
    grid-gap: 2.7rem;
    grid-template-areas: 
            "res"
            "vod"
            "cat"
            "sau";
    align-items: center;
    width: 100%;

    ${()=>respond('s',`
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-template-rows: reapeat(2, 1fr);
        grid-template-areas: 
            "res cat cat"
            "vod vod sau";
        
        align-items: start;
    `)}
`

const data = [
    {
        label: 'Restaurant',
        btn: 'Menukaart',
        area: 'res',
        url: '/img/restaurant.jpg'
    },
    {
        label: 'Distilleerderij',
        btn: 'Distilleerderij',
        area: 'vod',
        url: '/img/vodka.jpg'
    },
    {
        label: 'Catering',
        btn: 'Catering',
        area: 'cat',
        url: '/img/catering.jpg'
    },
    {
        label: 'Vleeswaren',
        btn: 'Vleeswaren',
        area: 'sau',
        url: '/img/sausages.jpg'
    },

]


