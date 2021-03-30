import styled from 'styled-components'

export const TitleImage = styled.div`
    height:155px;
    width:100%;
    display:flex;
    background: rgba(0, 0, 0, 0.5);
    img{
        height:100%;
        width:100%;
    }
`;

export  const Mainsection = styled.div`
    height:auto;
    width:80%;
    margin-left: auto;
    margin-right: auto;
    background-color:transparent;
    display:flex;
`;

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