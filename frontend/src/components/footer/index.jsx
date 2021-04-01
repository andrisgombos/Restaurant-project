import React from 'react';
import facebook from '../../assets/icon/facebook.svg'
import twitter from '../../assets/icon/twitter.svg'
import googleplus from '../../assets/icon/googleplus.svg'
import instagram from '../../assets/icon/instagram.svg'
import {FooterContainer,
        UpperFooter,
        LeftUpperFooter,
        LeftUpperFooterContent,
        RightUpperFooter,
        Logo,
        LowerFooter,
        Copyright} from './style'


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