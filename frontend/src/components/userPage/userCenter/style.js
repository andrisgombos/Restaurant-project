import styled from 'styled-components'

export const Container = styled.div`
    height:auto;
    width:55%;
    background-color:white;
    overflow-y:scroll;
    overflow-x:hidden;
    ::-webkit-scrollbar{
        width:0.5em;
    }
    ::-webkit-scrollbar-track {
  box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
}
::-webkit-scrollbar-thumb {
    background-color: darkgrey;
    outline: 1px solid slategrey;
    }
    
`;

