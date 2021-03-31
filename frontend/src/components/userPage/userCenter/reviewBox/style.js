import styled from 'styled-components';
import StarRating from '../../../starrating';

export const Main = styled.div`
height:200px;
width:100%;
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
