import styled from 'styled-components';
import img from "../../assets/pictures/rest1.jpg"


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
            font-size: 1.5rem;
            margin-bottom: 0.7em;
            font-weight: bold;
            margin-left: 2em;
        }
        h2 {
            font-size: 1.2rem;
            font-weight: 200;
            margin-left: 2.5em;
        }
    `