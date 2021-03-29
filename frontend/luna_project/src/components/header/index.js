import React from 'react';
import styled from 'styled-components';
import lunaLogo from '../../assets/icon/logo.svg'

const HeaderContainer = styled.div`
width: 100vw;
background-color: red;
`;

const Logo = styled.img`
width: 100px;
`;


const Header = () => {

    return (
        <HeaderContainer>
            <Logo src={lunaLogo}></Logo>
        </HeaderContainer>
    );
}

export default Header