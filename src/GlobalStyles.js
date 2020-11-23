import styled, {createGlobalStyle} from "styled-components";

const GlobalStyle = createGlobalStyle`
* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: 'Source Sans Pro', 'Open Sans';
}`;

export const Container = styled.div`
z-index: 1;
width: 100%;
max-width: 2000px;
margin-right: auto;
margin-left: auto;
padding-right: 50px;
padding-left: 50px;

@media screen and (max-width: 991px) {
    padding-right: 0;
    padding-left: 0;
    margin-right: 0;
    margin-left: 0;
}`;


export const Button = styled.button`
border-radius: 4px;
//primary means if i have this set then it is what the color i want it to be
background: ${({primary}) => (primary ? '#e98c10' : "#1694cf")};
white-space: nowrap;
padding: ${({big}) => (big ? '12px 64px' : '10px 20px')};
color: #fff;
font-size: ${({fontBig}) => (fontBig ? '20px' : '16px')};
outline: none;
border: none;
cursor: pointer;

&:hover {
    transition: all 0.3s ease-out;
    background: #fff;
    background: ${({primary}) => (primary ? '#e98c10' : '#1694cf')};

}

@media screen and (max-width: 960px) {
    width: 100%;
}

`;


export default GlobalStyle
