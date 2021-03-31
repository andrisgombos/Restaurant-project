import styled from 'styled-components';
import StarRating from '../../../starrating';

export const Main = styled.div`
height:auto;
display:flex;
flex-direction:column;
border-bottom: 2px lightgray solid ;
h1{
    margin:40px 20px 40px 20px;
    font-style:normal;
    font-weight:700;
}

span{
    width:100%;
    display: flex;
    flex-direction:row;
    justify-content:space-between;
    p{
        margin-right:20px;
        margin-left:20px;
        padding-left:10px;
    }
}
div{
    margin:20px;
    padding-left:10px;
}
`;

export const StarRatingInBox = styled(StarRating)`

    
`;