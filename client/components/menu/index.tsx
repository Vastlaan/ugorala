import { withTheme } from 'styled-components'
import {Context} from '../../store'
import { useContext } from 'react'
import styled from 'styled-components'
import { respond, SectionNarrow, HeadingContainer, Heading2, Heading3, FlexCol, TextStrong, TextSmall } from '../../styles'
import { FlexibleComponentProps } from '../../types'

interface MenuProps{
    menus: any,
    theme: any,
    heading: string;
}

function MenuComponent({theme, menus, heading}: MenuProps) {

    return (
        <SectionNarrow margin='1.4rem auto 4.7rem auto'>
            <HeadingContainer>
                <Heading2 color={theme.black}>{heading}</Heading2>
            </HeadingContainer>
            <Grid>
                {
                    menus.map((section, i)=>{
                        
                        return(
                            <Menu key={section.id} color={i===1 || i ===3 ? theme.black:''} area={section.area}>
                                    <Heading3 color={i===1 || i ===3 ? theme.grey1:''} margin='1.4rem 0 2.7rem 0'>{section.heading}</Heading3>
                                    {section.menu_item.map(item=>{
                                        return(
                                            <Figure key={item.id}>
                                                <FlexCol align='flex-start'>
                                                    <TextStrong align='left' color={i===1 || i ===3 ? theme.grey1:''}>{item.name}</TextStrong>
                                                    {item.description && <TextSmall color={i===1 || i ===3 ? theme.secondary:''} width='30rem' align='left'>{item.description}</TextSmall>}
                                                </FlexCol>
                                                <TextStrong color={i===1 || i ===3 ? theme.grey1:''}>&euro;{item.price}</TextStrong>
                                            </Figure>
                                        )
                                    })}
                            </Menu>
                        )
                    })
                }
            </Grid>
        </SectionNarrow>
    )
}
export default withTheme(MenuComponent)
const Grid = styled.div`

    display: flex;
    flex-direction: column;

    ${()=>respond('m',`
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-template-areas: 
            "voor hoofd"
            "dessert hoofd"
            "drank hoofd"
            "drank special";
        grid-gap: 4.7rem;
    `)}
`

const Menu = styled.div<FlexibleComponentProps>`
    padding: 1.4rem;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    background-color: ${p=>p.color?p.color:'transparent'};
    grid-area: ${p=>p.area};
`

const Figure = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    margin: .9rem 0;
`
