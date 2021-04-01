import styled from 'styled-components'

export const Main = styled.div`
    display:flex;
    flex-direction:column;
    height:auto;
`;

export const BottomPart = styled.div`
    display:flex;
    flex-direction: row;
    justify-content:space-between;
    div{ 
        width:200px;
        display:flex;
        flex-direction:column;
        justify-content:space-around;
        margin:2%;
        
    }

`;
export const ResetButton = styled.button`
    
            background:none;
            border:none;
            color:red;
            margin:8px;
            font-size:16px;
            cursor: pointer;
            width:150px;
            
            :hover{
                font-weight:bold;
            }
`;