import styled from 'styled-components'

export const Card = styled.div`
border: 1px black solid;
width: 15%;
height:80%;
display:flex;
flex-direction: column;
justify-items: center;
background-color:red;
img{
    width: 100%;
    height: 50%;
    }
p{
    height: 10%;
    width: 100%
    }
button{
    height:45px;
    display:flex;
    align-items:center;
}
`