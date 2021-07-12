import { useState } from 'react'
import styled from 'styled-components'
import {FlexCol, TextStrong} from '../../../styles'

export default function ImageComponent({newStories, setNewStories, i, imgUrl, setOldImages}) {

    const [fileImage, setFileImage] = useState<any>()
    
    async function handleChange(files: FileList){

        if(files.length>0){
            setFileImage(URL.createObjectURL(files[0]))
        }

        const oldImage = imgUrl.split('ugorala-assets')[1]
        const oldImageKey = `ugorala-assets${oldImage}`

        console.log("Old image: ", oldImage)

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
                const newState = [...newStories]
                newState[i].imgUrl = data.fileName
                console.log('i',i, ' newState: ', newState)

                setOldImages(prevState=>[...prevState, oldImageKey])
                return setNewStories(newState)
            }
        }catch(e){
            console.error(e)
        }
    }

    return (
        <FlexCol align='flex-start' justify='flex-start'>
            <label htmlFor="imgUrl"><TextStrong>Image:</TextStrong></label>
            <ImageContainer>
                <img src={fileImage?fileImage:imgUrl} alt='story' />
            </ImageContainer>
            <InputContainer>
                <input type="file" style={{visibility:"hidden"}} name={`imgUrl-${i}`} id={`imgUrl-${i}`} onChange={e=> handleChange(e.target.files)} />
                <label htmlFor={`imgUrl-${i}`} >Upload new image</label>
            </InputContainer>
        </FlexCol>
    )
}

const ImageContainer = styled.div`
    margin: 1.4rem 0;
    position: relative;
    width: 25rem;
    height: 25rem;

    img{
        width:100%;
        height:100%;
        object-fit: cover;
    }
`

const InputContainer = styled.div`
    position: relative;
    margin: 1.4rem 0;

    input{
        visibility: hidden;
        opacity: 0;
    }
    label{
        position: absolute;
        top: 0;
        left:0;
        min-width: 25rem;
        margin: 1.4rem 0;
        padding: .9rem 1.4rem;
        background-color: ${p=>p.theme.primary};
        color: ${p=>p.theme.grey1};
        cursor: pointer;
        text-align: center;
        font-size: 1.6rem;
    }
`