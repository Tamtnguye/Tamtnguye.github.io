import React from 'react'
import {Link} from 'react-router-dom';

import {Button, Container} from "../../GlobalStyles";
import { InfoSec,
    InfoRow,
    InfoColumn,
    TextWrapper,
    TopLine,
    Heading,
    Subtitle,
    ImgWrapper,
    Img,
    Hovbutton

} from './Project.element';


const PTemplate = ({
    primary,
    lightBg, 
    imgStart, 
    lightTopLine, 
    lightText,  
    buttonLabel,
    lightSubText, 
    description, 
    headline, 
    topLine,
    img,
    alt,
    start,
    location}) => {
    return (
        <>
            <InfoSec lightBg={lightBg}>
                <Container>
                    <InfoRow imgStart={imgStart}>
                        <InfoColumn>
                            <TextWrapper>
                                <TopLine lightTopLine={lightTopLine}>
                                    {topLine}
                                </TopLine>
                                <Heading lightText={lightText}>{headline}</Heading>
                                <Subtitle lightSubText={lightSubText}>{description}</Subtitle>
                                <Link to={location}>
                                    
                                    <Hovbutton primary={primary}>{buttonLabel}</Hovbutton> 
                                </Link>
                            </TextWrapper>
                        </InfoColumn>
                        <InfoColumn>
                            <ImgWrapper start={start}>
                                <Img src={img} alt={alt} />
                            </ImgWrapper>
                        </InfoColumn>
                    </InfoRow>
                </Container>
            </InfoSec>
        </>
    )
}

export default PTemplate