import Image from  'next/image';
import {SectionNarrow, FlexCol, Line, Heading2, Text} from '../../../styles'

interface IntersectionProps{
    heading: string;
    text: string;
    color?: string;

}

export default function IntersectionComponent({heading, text, color}: IntersectionProps) {
    return (
        <SectionNarrow>
            <FlexCol margin='2.7rem auto'>
                <Image src='/img/logo_small.svg' alt='logo' width='150' height='100'/>
                <Heading2 margin='-2.7rem auto 2.7rem auto'>{heading}</Heading2>
                <Text width='75rem'>{text}</Text>
            </FlexCol>
        </SectionNarrow>
    )
}
