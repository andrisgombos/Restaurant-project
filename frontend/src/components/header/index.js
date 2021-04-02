import React from 'react';
import { Route, Switch, Link,useHistory } from 'react-router-dom'

import styled from 'styled-components';
import lunaLogo from '../../assets/icon/logo.svg'
import { OrangeButton } from '../../globalStyle/globalStyle';


const HeaderContainer = styled.div`
display: flex;
width: 100%;
justify-content: space-between;
position:sticky;
top:0;
background-color:#f8f8f8;
opacity:1;
z-index: 5;  
`;

const Logo = styled.img`
width: 150px;
padding: 20px;
`;

const RightContainer = styled.div`
display: flex;
align-items: center;
margin-right: 20px;

`;

const HeaderLink = styled.p`
font-family: Arial, Helvetica, sans-serif;
color: #4a4a4a;
margin:0 15px 0 15px ;
padding: 20px 0px 20px 0px;
cursor: pointer;


:hover {
    border-bottom: 2px solid #e47d32;
    font-weight: bold;
    color: black;
    padding:0;
    
}
`;

export const ButtonSignUp  = styled(OrangeButton)`
background-color: #e47d32;
width:100px;
height: 40px;
border-bottom-right-radius:0;
border-top-right-radius:0;
margin-right:1px;
margin-left:10px;
font-size:16px;
border:none;
:focus{
    outline:transparent;
}
:hover{
    font-weight:bolder;
}
`;

export const ButtonSignIn  = styled(OrangeButton)`
background-color: #e47d32;
width:100px;
height: 40px;
border-bottom-left-radius:0;
border-top-left-radius:0;
margin-left:1px;

border: none;
font-size:16px;
:focus{
    outline:transparent;
}
:hover{
    font-weight:bolder;
}
`;



const Header = () => {

    const history = useHistory()

    const goToProfile = () => {
        history.push('/user-self')
    }

    const goToHome = () => {
        history.push('/')
    }

    const goTologIn = () => {
        history.push('/sign-in')
    }
    const goTosignUp = () => {
        history.push('/registration')
    }

    const goToSearch = () => {
        history.push('/restaurants')
    }



    return (
        <>
        <HeaderContainer>
            <Logo src={lunaLogo}></Logo>
            <RightContainer>
                <HeaderLink onClick={ goToHome }>Home</HeaderLink>
                <HeaderLink onClick={ goToSearch }>Search</HeaderLink>
                <HeaderLink onClick={goToProfile} >Profile</HeaderLink>
                <ButtonSignUp onClick={goTosignUp}>SIGNUP</ButtonSignUp>
                <ButtonSignIn onClick={goTologIn}>LOGIN</ButtonSignIn>

            </RightContainer>
        </HeaderContainer>
        </>
    );
}

export default Header;