import { createGlobalStyle } from 'styled-components'
import styled from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        font-family: Arial, Helvetica, sans-serif;
        box-sizing: border-box;
        /* background: #F0F0F0; */
    }
`;

export const Mainsection = styled.div`
    height:100%;
    width:80%;
    margin-left: auto;
    margin-right: auto;
    background-color:transparent;
`;