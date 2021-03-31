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
    body::-webkit-scrollbar {
    width: 1em;
    }
 
    body::-webkit-scrollbar-track {
    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    }
 
    body::-webkit-scrollbar-thumb {
    background-color: darkgrey;
    outline: 1px solid slategrey;
    }



`;

export const Mainsection = styled.div`
    height:100%;
    width:80%;
    margin-left: auto;
    margin-right: auto;
    background-color:transparent;
`;

export const Background = styled.div`
    display:flex;
    justify-content:center;
    background-color:#f8f8f8;
    height:100vh;
    width:100%;
`;

export const InputWithLabel = styled.input`
    width:300px;
    height:40px;
    margin-top:5px;

`;
export const InputBox = styled.div`
    width:100%;
    display:flex;
    flex-direction:column;
    margin:10px;


`;

export const TextFieldWithLabel = styled.textarea`
    width:500px;
    margin-bottom:10px;
    margin-top:5px;
`;