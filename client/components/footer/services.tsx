import Link from 'next/link';
import {FlexCol, Heading3, ButtonStrong} from '../../styles'

export default function ServicesComponent() {
    return (
        <FlexCol align='flex-start'>
            <Heading3 color='#fefefe' margin='0 0 2.7rem 0'>{data.heading}</Heading3>
            {data.list.map(item=>{
                return(
                    <Link href={item.link} key={item.link}>
                        <ButtonStrong margin='.6rem 0' color='#fdf8ec'>{item.name}</ButtonStrong>
                    </Link>
                )
            })}
        </FlexCol>
    )
}
const data = {
    heading: 'Diensten',
    list: [
        {link: '/restaurant', name: 'Restaurant'},
        {link: '/catering', name: 'Catering'},
        {link: '/destillerderij', name: 'Destillerderij'},
        {link: '/vleeswaren', name: 'Vleeswaren'}
    ]
    
}