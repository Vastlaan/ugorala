import {Context} from '../../store'
import { useContext } from 'react'
import styled from 'styled-components'
import { SectionNarrow, Heading2, Heading3, FlexCol, TextStrong } from '../../styles'

export default function MenuComponent() {

    const {state} = useContext(Context)
    const {menus} = state

    return (
        <SectionNarrow>
            <HeadingContainer>
                <Heading2 color='#222'>Menukaart</Heading2>
            </HeadingContainer>
            <Grid>
                {
                    menus.map(section=>{
                        return(
                            <FlexCol key={section.id} align='flex-start'>
                                    <Heading3 margin='1.4rem 0 2.7rem 0'>{section.heading}</Heading3>
                                    {section.menu_item.map(item=>{
                                        return(
                                            <Figure key={item.id}>
                                                <TextStrong>{item.name}</TextStrong>
                                                <TextStrong>&euro;{item.price}</TextStrong>
                                            </Figure>
                                        )
                                    })}
                                    <Figure>
                                        <TextStrong>Salade met gegrilde kipfilet</TextStrong>
                                        <TextStrong>&euro;7,00</TextStrong>
                                    </Figure>
                            </FlexCol>
                        )
                    })
                }
            </Grid>
        </SectionNarrow>
    )
}

const Grid = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 2.7rem;
`
const HeadingContainer = styled.div`
    max-width: 25rem;
    margin: 2.7rem 0;
    padding: 1.4rem;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 3px solid ${p=>p.theme.primary};
    position: relative;

    &::before{
        content: "";
        position: absolute;
        bottom: .9rem;
        left: .9rem;
        width: 110%;
        height: 110%;
        border: 3px solid ${p=>p.theme.secondary};
    }
`

const Figure = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    margin: .9rem 0;
`
