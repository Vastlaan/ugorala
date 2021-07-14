import {useState, useContext} from 'react'
import {Context} from '../../globals/stateProvider'
import styled from 'styled-components'
import {ContentContainer, Heading3, FlexRow, InputContainer, ButtonPrimary} from '../../styles'

export default function GalleryComponent({gallery}) {

  const {user: {jwt}} = useContext(Context)

  const [oldImagesToDelete, setOldImagesToDelete] = useState<string[]>([])
  const [newGallery, setNewGallery] = useState(gallery || {})

  async function updateGallery(){
    const response = await fetch('/api/updateGallery',{
      method: "POST",
      headers: {
        "Content-Type": 'application/json',
        "Authorization": `Bearer ${jwt}`
      }, 
      body: JSON.stringify({newGallery})
    })

    const data = await response.json()

    if(data.status==='error'){
      // set some errors
      return
    }
    // delete old files
    const responseDelete = await fetch('/api/delete_old_images',{
      method: "POST",
      headers: {
          "Content-Type": "application/json"
      },
      body: JSON.stringify({oldImages: oldImagesToDelete})
    })

    const dataDelete = await responseDelete.json()

    if(dataDelete.error){
        // setup some error
        return 
    }
    // display confiramtion modal and refresh page
    
  }

  async function handleChange(files: FileList, index:number, imgUrl: string){

    if(files.length===0){
      // set error 
        return 
    }

    const oldImage = imgUrl.split('ugorala-assets')[1]
    const oldImageKey = `ugorala-assets${oldImage}`

    const dataToSend = new FormData()
    dataToSend.append('file', files[0])

    try{
        const response = await fetch('/api/upload_file_to_s3',{
            method: "POST",
            body: dataToSend
        })
        const data = await response.json()

        if(data.status==='error'){
            console.log('error')
            // set some errors
            return
        }
        else {
            // create new state for this gallery
            const newState = newGallery
            newState.images[index].url = data.fileName

            // here update old files to delete array
            setOldImagesToDelete(prevState=>[...prevState, oldImageKey])
            
            // set new state for galleries
            return setNewGallery(newState)
            
        }
      }catch(e){
          console.error(e)
      }
  }

  return (
    <ContentContainer>
      <Heading3 align='left' margin='1.4rem 0'>{newGallery.name}</Heading3>

      <ImagesContainer>
        {newGallery.images.map((image,i)=>{
          return(

          <SingleImage key={`image-${image.id}`}>
            <ImageContainer >
              <img src={image.url} alt="food or drink" />
            </ImageContainer>
            <CustomInputContainer>
              <input type="file" name={`imgUrl-${image.id}`} id={`imgUrl-${image.id}`} onChange={e=> handleChange(e.target.files, i, image.url)} />
              <label htmlFor={`imgUrl-${image.id}`} >Change image</label>
            </CustomInputContainer>
          </SingleImage>
          )
        })}
      </ImagesContainer>
      <ButtonPrimary margin='1.4rem 0' onClick={()=>updateGallery()}>Update this gallery</ButtonPrimary>
    </ContentContainer>
  )
}

const SingleImage = styled.div`
  border-bottom: 1px solid ${p=>p.theme.grey3};
  width: 100%;
  margin: 1.4rem 0;
  max-width: 18rem;
`
const ImageContainer = styled.div`
  margin: 1.4rem 0;
  position: relative;
  width: 15rem;
  height: 15rem;

  img{
      width:100%;
      height:100%;
      object-fit: cover;
  }
`
const CustomInputContainer = styled(InputContainer)`
  label{
    min-width: 15rem;
    background-color: ${p=>p.theme.grey4};
  }
`
const ImagesContainer = styled.div`
  display: flex;
  flex-wrap: no-wrap;
  align-items: center;
  overflow-x: scroll;
  width: 100%;

`