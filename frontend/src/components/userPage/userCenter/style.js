import styled from 'styled-components'

export const Container = styled.div`
    display:flex;
    flex-direction:column;
    height:100%;
    width:55%;
    background-color:#f8f8f8;
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

