import styled from 'styled-components'



export const Card = styled.div`
width: 15%;
height:auto;
display:flex;
flex-direction: column;
justify-items: center;
img{
    width: 100%;
    height: 150px;
    }
div{
    height: 55px;
    width: 100%;
    display:flex;
    justify-content:center;
    align-items:center;    
}

button{
    height:45px;
    display:flex;
    align-items:center;
    img{
        height: 25px;
        width:25px;
        margin-left:10px;
        margin-right:10px;
    }
    p{
        margin-left: 5px;
        height:auto;
        width:auto;
    }

}
`