import React from 'react';
import styled from 'styled-components';
import facebook from '../../assets/icon/facebook.svg'
import twitter from '../../assets/icon/twitter.svg'
import googleplus from '../../assets/icon/googleplus.svg'
import instagram from '../../assets/icon/instagram.svg'

const FooterContainer = styled.footer`
width: 100%;
position: fixed;
bottom: 0;
`;

const UpperFooter = styled.footer`
height: 60px;
justify-content: space-between;
align-items: center;
display: flex;
`;

const LeftUpperFooter = styled.div`
display: flex;
`;

const LeftUpperFooterContent = styled.p`
font-size: 16px;
color: #4a4a4a;
padding: 25px;
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
`;

const LowerFooter = styled.footer`
height: 30px;
width: 100%;
border-top: 1px lightgrey solid;
`;

const Copyright = styled.p`
color: #4a4a4a;
padding: 5px 25px;
font-size: 12px;
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