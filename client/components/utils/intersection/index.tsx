import Image from  'next/image';
import {SectionNarrow, FlexCol, Line, Heading2, Text} from '../../../styles'

interface IntersectionProps{
    heading?: string;
    text?: string;
}

export default function IntersectionComponent({heading, text}: IntersectionProps) {
    return (
        <SectionNarrow>
            <FlexCol margin='1.4rem auto'>
                <Image src='/img/logo_small.svg' alt='logo' width='150' height='100'/>
                {heading && <Heading2 margin='-2.7rem auto 1.4rem auto'>{heading}</Heading2>}
                {text && <Text width='75rem'>{text}</Text>}
            </FlexCol>
        </SectionNarrow>
    )
}
