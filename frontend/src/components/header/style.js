import styled from 'styled-components';
import OrangeButton from '../../globalStyle/globalStyle'

export const HeaderContainer = styled.div`
display: flex;
width: 100%;
justify-content: space-between;
position:sticky;
top:0;
background-color:#f8f8f8;
opacity:1;
z-index: 5;  
`;

export const Logo = styled.img`
width: 150px;
padding: 20px;
`;

export const RightContainer = styled.div`
display: flex;
align-items: center;
margin-right: 20px;
`;

export const HeaderButton = styled.button`
font-family: Arial, Helvetica, sans-serif;
color: #4a4a4a;
margin: 0 20px;
padding: 23px 0;
cursor: pointer;


:hover {
    border-bottom: 2px solid #e47d32;
    font-weight: bold;
    color: black;
}
`;

export const ButtonSignUp = styled(OrangeButton)`
background-color: #e47d32;
height: 20px;
//margin-left: 10px;
border:none;
`;
