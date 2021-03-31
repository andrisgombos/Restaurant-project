import React from 'react';
import styled from 'styled-components';
import lunaLogo from '../../assets/icon/logo.svg'

const HeaderContainer = styled.div`
display: flex;
width: 100%;
justify-content: space-between;
position:sticky;
top:0;
background-color:#f8f8f8;
opacity:0.9;
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

const NavLink = styled.p`
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

const ButtonPlaceholder = styled.button`
background-color: #e47d32;
height: 20px;
//margin-left: 10px;
border:none;
`;


const Header = () => {

    return (
        <>
        <HeaderContainer>
            <Logo src={lunaLogo}></Logo>
            <RightContainer>
                <NavLink>Home</NavLink>
                <NavLink>Search</NavLink>
                <NavLink>Profile</NavLink>
                <ButtonPlaceholder>SignUp</ButtonPlaceholder>
            </RightContainer>
        </HeaderContainer>
        </>
    );
}

export default Header;