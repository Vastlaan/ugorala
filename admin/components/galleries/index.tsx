import {useState} from 'react'
import Gallery from './gallery'
import {SectionNarrow, ButtonFull} from '../../styles'

export default function GalleriesComponent({galleries}) {

  console.log(galleries)
  return (
    <SectionNarrow margin='1.4rem 0'>
      {galleries.map((gallery, i)=>{
        return(
          <Gallery  
            key={gallery.id} 
            gallery={gallery}
          />
        )
      })}
    </SectionNarrow>
  )
}
