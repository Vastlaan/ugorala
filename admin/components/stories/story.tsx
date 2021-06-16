import {useState} from 'react'
import styled from 'styled-components'
import Image from 'next/image'
import {TextStrong, FlexCol} from "../../styles"

export default function StoryComponent({i, story, newStories, setNewStories}) {

    const [fileImage, setFileImage] = useState<any>()
    
    async function handleChange(files: FileList){
        setFileImage(URL.createObjectURL(files[0]))

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
                return setNewStories(newState)
            }
        }catch(e){
            console.error(e)
        }
    }

    return (
        <Story>
            <label htmlFor="heading"><TextStrong>Heading:</TextStrong></label>
            <input type="text" name='heading' value={story.heading} onChange={(e)=>{
                const newState = [...newStories]
                newState[i].heading = e.target.value
                return setNewStories(newState)
            }} />

            <label htmlFor="imgUrl"><TextStrong>Image:</TextStrong></label>
            <ImageContainer>
                <img src={fileImage?fileImage:story.imgUrl} alt='story' />
            </ImageContainer>
            <input type="file" style={{visibility:"hidden"}} name={`imgUrl-${i}`} id={`imgUrl-${i}`} onChange={e=> handleChange(e.target.files)} />
            <CustomLabel htmlFor={`imgUrl-${i}`} >Upload new image</CustomLabel>
            <TextStrong>Paragraphs:</TextStrong>
            {story.paragraphs.map((para,index) => {
                return(
                    <textarea key={index} name={`para-${i}`} value={para.text} onChange={e=>{
                        const newState = [...newStories]
                        newState[i].paragraphs[index].text = e.target.value
                        return setNewStories(newState)
                    }}>
                    </textarea>
                )
            })}
        </Story>
    )
}

const Story = styled.div`
    margin: 1.4rem 0;
    padding: 1.4rem;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    background-color: ${p=>p.theme.grey2};

    input, textarea{
        margin: 1.4rem;
        padding: .3rem .9rem;
        align-self: stretch;
    }
`
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
const CustomLabel = styled.label`
    margin: 1.4rem 0;
    padding: .9rem 1.4rem;
    background-color: ${p=>p.theme.primary};
    color: ${p=>p.theme.grey1};
    cursor: pointer;
`