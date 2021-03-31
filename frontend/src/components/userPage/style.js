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
    height:100%;
    width:80%;
    margin-left: auto;
    margin-right: auto;
    background-color: transparent;
    display: flex;
`;

export const Card = styled.div`
position: sticky;
margin-top: -100px;
width: 18%;
height:auto;
display:flex;
flex-direction: column;
justify-items: center;
img{
    width: 100%;
    height: 220px;
    }
div{
    height:55px;
    display:flex;
    justify-content:center;
    align-items:center;
    border-bottom:black 2px solid
}

button{
    height:45px;
    border-left:none;
    border-right:none;
    border-top:none;
    border-bottom:black 2px solid;
    display:flex;
    align-items:center;
    background-color:white;    
    cursor: pointer;
    :hover{
        border-left: 2px solid #e47d32;
        font-weight: bold;
        color: black;
    }
    :focus{
        background-color: transparent;
        border-left:orange 5px solid;
        outline:none;    
    }
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