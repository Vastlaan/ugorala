import {useState, useContext} from 'react'
import styled from 'styled-components'
import { Context } from '../../globals/stateProvider'
import {ContainerNarrow, ContentContainer, Heading3, FlexRow, Line, ButtonPrimary} from '../../styles'

export default function FoodMenuComponent({menu, type}) {

  const {user: {jwt}} = useContext(Context)

  const [updatedMenu, setUpdatedMenu] = useState<any[]>(menu)

  async function updateMenu(){
    const res = await fetch('/api/update_menu',{
      method: "POST",
      headers:{
        "Content-Type": 'application/json',
        Authorization: `Bearer ${jwt}`
      }, 
      body: JSON.stringify({
        menu: updatedMenu,
        type
      })
    })
    const data = await res.json()

    if(data.status==='error'){
      //set error
      return
    }

    // set successful modal and refreshs

  }

  function updateHeading(value, index){
    console.log(value)
    let newMenu = [...updatedMenu]
    newMenu[index].heading = value
    setUpdatedMenu(newMenu)
  }
  function updateName(value, index, itemIndex){
    const newMenu = [...updatedMenu]
    newMenu[index].menu_item[itemIndex].name = value
    setUpdatedMenu(newMenu)
  }
  function updatePrice(value, index, itemIndex){
    const newMenu = [...updatedMenu]
    newMenu[index].menu_item[itemIndex].price = value
    setUpdatedMenu(newMenu)
  }
  function updateDescription(value, index, itemIndex){
    const newMenu = [...updatedMenu]
    newMenu[index].menu_item[itemIndex].description = value
    setUpdatedMenu(newMenu)
  }

  return (
    <ContainerNarrow  margin='4.7rem 0'>
      <Heading3 margin="2.7rem 0" width="fit-content">Main Menu</Heading3>
      {updatedMenu.map((section, i)=>{
        return(
          <ContentContainer key={section.id} margin="1.4rem 0">
            <input type="text" value={section.heading} onChange={(e)=>updateHeading(e.target.value, i)}  />
            {section.menu_item.map((item, itemIndex)=>{
              return(
                <GridItem key={item.id}>
                  <input type="text" value={item.name} onChange={(e)=>updateName(e.target.value, i, itemIndex)}/>
                  <input type="text" value={item.price} onChange={(e)=>updatePrice(e.target.value, i, itemIndex)}/>
                  <input type="text" value={item.description} onChange={(e)=>updateDescription(e.target.value, i, itemIndex)} />
                </GridItem>
              )
            })}
            <Line width='100%'/>
          </ContentContainer>
        )
      })}
      <ButtonPrimary onClick={updateMenu}>
        Update Menu
      </ButtonPrimary>
    </ContainerNarrow>
  )
}

const GridItem = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 10rem;
  grid-column-gap: 1.4rem;
  background-color: ${p=>p.theme.grey2};
  border-bottom: 1px solid rgba(0,0,0,.3); 
  margin: 1.4rem 0;
  padding: 1.4rem;
`

