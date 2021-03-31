import styled from 'styled-components'

export const Main = styled.div`
    display:flex;
    flex-direction:column;
    height:100%;
`;

export const BottomPart = styled.div`
    display:flex;
    flex-direction: row;
    justify-content:space-between;
    div{ 
        display:flex;
        flex-direction:column;
        justify-content:space-around;
        margin-right:2%;
        color:red;
    }

`;