import React from 'react';
import styled from 'styled-components';
import facebook from '../../assets/icon/facebook.svg'
import twitter from '../../assets/icon/twitter.svg'
import googleplus from '../../assets/icon/googleplus.svg'
import instagram from '../../assets/icon/instagram.svg'

const FooterContainer = styled.footer`
width: 100%;
position: bottom;
bottom: 0;
background-color: white;
`;

const UpperFooter = styled.footer`
height: 45px;
justify-content: space-between;
align-items: center;
display: flex;
`;

const LeftUpperFooter = styled.div`
display: flex;
`;

const LeftUpperFooterContent = styled.p`
font-size: 13px;
color: #4a4a4a;
margin: 0 22px;
padding: 15px 0;
cursor: pointer;

:hover {
    border-bottom: 2px solid #e47d32;
    font-weight: bold;
    color: black;
}
`;

const RightUpperFooter = styled.div`
display: flex;
margin-right: 20px;
`;

const Logo = styled.img`
padding: 10px;
height: 50px;
width: 50px;
color: #4a4a4a;
cursor: pointer;
`;

const LowerFooter = styled.footer`
height: 25px;
width: 100%;
border-top: 1px lightgrey solid;
background-color: white;
`;

const Copyright = styled.p`
color: #4a4a4a;
padding: 5px 20px;
font-size: 10px;
`;

const Footer = () => {

    return (
        <FooterContainer>
            <UpperFooter>
                <LeftUpperFooter>
                    <LeftUpperFooterContent>About Us</LeftUpperFooterContent>
                    <LeftUpperFooterContent>Press</LeftUpperFooterContent>
                    <LeftUpperFooterContent>Blog</LeftUpperFooterContent>
                    <LeftUpperFooterContent>iOS</LeftUpperFooterContent>
                    <LeftUpperFooterContent>Android</LeftUpperFooterContent>
                </LeftUpperFooter>
                <RightUpperFooter>
                    <Logo src={facebook}></Logo>
                    <Logo src={twitter}></Logo>
                    <Logo src={googleplus}></Logo>
                    <Logo src={instagram}></Logo>
                </RightUpperFooter>

            </UpperFooter>
            <LowerFooter>
                <Copyright>© Copyright Luna 2018</Copyright>
            </LowerFooter>
        </FooterContainer>
    );
}

export default Footer;