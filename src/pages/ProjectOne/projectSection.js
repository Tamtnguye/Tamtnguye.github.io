import React from 'react'
import {Link} from 'react-router-dom';
import photo1 from "../../assets/chillupdate.png"
import {Button, Container} from "../../GlobalStyles";
import { InfoSec,
    InfoRow,
    InfoColumn,
    TextWrapper,
    TopLine,
    Heading,
    Subtitle,
    ImgWrapper,
    Img

} from '../../Project.element';


export const ProjectSec = ({
    primary,
    lightBg, 
    imgStart, 
    lightTopLine, 
    lightText,  
    buttonLabel,
    lightSubText, 
    description,
    description2,
    description3 ,
    headline, 
    topLine,
    img,
    alt,
    start,
    id}) => {
    return (
        <>
            <InfoSec lightBg={lightBg} id={id}>
                <Container>
                    <InfoRow imgStart={imgStart}>
                        <InfoColumn>
                            <TextWrapper>
                                <TopLine lightTopLine={lightTopLine}>
                                    {topLine}
                                </TopLine>
                                <Heading lightText={lightText}>{headline}</Heading>
                                <Subtitle lightSubText={lightSubText}>{description}</Subtitle>
                                <Subtitle lightSubText={lightSubText}>{description2}</Subtitle>
                                <Subtitle lightSubText={lightSubText}>{description3}</Subtitle>
                            </TextWrapper>
                        </InfoColumn>
                        <InfoColumn>
                            <ImgWrapper start={start}>
                                <Img src={photo1} alt={alt} />
                            </ImgWrapper>
                        </InfoColumn>
                    </InfoRow>
                </Container>
            </InfoSec>
        </>
    )
}

export default ProjectSec