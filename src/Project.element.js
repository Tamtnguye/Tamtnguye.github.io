import styled from 'styled-components';

export const InfoSec = styled.div`
color: #fff;
padding: 160px 0;
background: ${({lightBg}) => (lightBg ? '#fff' : '#000')};
`;
//background should be 2C2331 but doesn't work as well. ask instructor if darker/lighter shades are allowed 101522
export const InfoRow = styled.div`
display: flex;
margin: 0 -15px -15px -15px;
flex-wrap: nowrap;
align-items: center;
flex-direction: ${({imgStart}) => (imgStart ? 'column' : 'column')};
`;

export const InfoColumn = styled.div`
margin-bottom: 15px;
padding-right: 15px;
padding-left: 15px;
flex: 1;



@media screen and (max-width: 768px) {
    max-width: 100%;
    flex-basis: 100%;
    display: flex;
    justify-content: center;

}
`;

export const TextWrapper = styled.div`
max-width: 540px;
padding-top: 0;
padding-bottom: 60px;

@media screen and (max-width: 768px) {
    padding-bottom: 65px;
}
`;

export const TopLine = styled.div`
color: ${({lightTopLine}) => (lightTopLine ? '#1694cf' : '#509ea7')};
font-size: 18px;
line-height: 16px;
letter-spacing: 1.4px;
margin-bottom: 16px;
`;

export const Heading = styled.h1`
margin-bottom: 24px;
font-size:48px;
line-height: 1.1;
font-family: 'Open Sans', sans-serif;
color: ${({lightText}) => (lightText ? '#f7f8fa' : '#1c2237')};

`;
//#101522
export const Subtitle = styled.p`
max-width: 440px;
margin-bottom: 35px;
font-size: 18px;
line-height: 24px;
font-family: 'Montserrat', sans-serif;
color: ${({lightSubText}) => (lightSubText ? '#a9b3c1' : '#1c2237')};
`;

export const ImgWrapper = styled.div`
max-width: 1000px;
display: flex;
justify-content: ${({start}) => (start ? 'flex-start' : 'flex-end')};

`;

export const Img = styled.img`
padding-right: 0;
border: 0;
max-width: 100%;
vertical-align: middle;
display: inline-block;
max-height: 500px;
`;

export const Hovbutton = styled.button`
width: 250px;
height: 50px;
border: none;
color: white;
background-color: #e98c10;
border-radius: 6px;
box-shadow: inset 0 0 0 0 #1694CF;
transition: ease-out 0.3s;
font-size: 1.5rem;
outline: none;


&:hover {
    box-shadow: inset 300px 0 0 0 #1694CF;
    cursor: pointer;
    color: black;
}
`;