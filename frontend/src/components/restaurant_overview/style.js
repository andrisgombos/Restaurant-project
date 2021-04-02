import styled from 'styled-components';
import img from "../../assets/pictures/rest1.jpg"
import StarRating from "../starrating/index"
import { Main } from "../../components/userPage/userCenter/reviewsByUser/style"
import { OrangeButton } from "../../globalStyle/globalStyle"


export const UpperContainer = styled.div`
    display: flex;
    flex-direction: column;
    background-image: url(${img});
    /* background-repeat: no-repeat; */
    width: 100vw;
    height: 40vh;
    background-size: 100vh;

`
export const RestInUpperCont = styled.div`
    width: 100vw;
    height: 50%;
    background-color:rgba(0, 0, 0, 0.5);
    color: #FFFFFF;
        div {
            margin-top: 1em;
            margin-left: 2em;
        }

        h1 {
            font-size: 1.0rem;
            font-weight: bold;
            margin-left: 2em;
        }
        h2 {
            font-size: 0.9rem;
            font-weight: 200;
            margin-left: 2.5em;
        }
`
export const Left = styled.div`
    display: flex;
    flex-direction: column;
    width: 65%;
    padding: 0px;
    margin: 0px;
    padding-left: 0px;
    border: 1.5px solid #e5e5e5;

`
export const LeftInnerWrapper = styled.div`
    display: flex;
    flex-direction: row;
    border: 1.5px solid #e5e5e5;
    padding-left: 0px;
    width: 100%;



        img {
            width: 100px;
            height: 100px;
        }

`
export const RestStarRating = styled(StarRating)`
    width: 80px;
    height: 80px;
    `

export const Right = styled.div`
    display: flex;
    flex-direction: column;
`

export const RightWrapper = styled.div`
    display: flex;
    flex-direction: row;


`
export const MainWrapper = styled(Main)`
    display: flex;
    flex-direction: row;
    align-content: space-around;
`
export const RestButton = styled(OrangeButton)`
    width: 8rem;
    height: 2rem;
    font-size: 0.8em;
    text-transform: uppercase;
`