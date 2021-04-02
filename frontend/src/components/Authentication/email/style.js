import styled from 'styled-components'
import { OrangeButton } from '../../../globalStyle/globalStyle';

export const EmailCont = styled.div`
    background-color: #F2F2F2;
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100%;
    width: 100%;
    font-weight: bold;
    position:relative;
`;
export const Message = styled.div`
    font-weight: 400;
    text-align: center;
    color: #4C4C4C;
    width: 25em;

`;

export const Button = styled(OrangeButton)`
    margin-top:30%;

`;