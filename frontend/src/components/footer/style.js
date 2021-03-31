import styled from 'styled-components';

export const FooterContainer = styled.footer`
width: 100%;
position: bottom;
bottom: 0;
background-color: white;
`;

export const UpperFooter = styled.footer`
height: 45px;
justify-content: space-between;
align-items: center;
display: flex;
`;

export const LeftUpperFooter = styled.div`
display: flex;
`;

export const LeftUpperFooterContent = styled.p`
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

export const RightUpperFooter = styled.div`
display: flex;
margin-right: 20px;
`;

export const Logo = styled.img`
padding: 10px;
height: 50px;
width: 50px;
color: #4a4a4a;
cursor: pointer;
`;

export const LowerFooter = styled.footer`
height: 25px;
width: 100%;
border-top: 1px lightgrey solid;
background-color: white;
`;

export const Copyright = styled.p`
color: #4a4a4a;
padding: 5px 20px;
font-size: 10px;
`;