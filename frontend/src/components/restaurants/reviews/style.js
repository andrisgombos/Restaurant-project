import styled from 'styled-components';
import {ButtonSignIn, ButtonSignUp} from '../../header/index'

export const LikeButton = styled(ButtonSignUp)`
background-color: grey;
width: 120px;
height: 30px;
color: white;
`;

export const CommentButton = styled(ButtonSignIn)`
background-color: grey;
width: 120px;
height: 30px;
color: white;
`;

export const BackgroundColor = styled.main`
background-color: #f8f8f8;
`;

export const ReviewCard = styled.div`
height: 410px;
border-top: 5px solid #e47d32;
background-color: white;
display: flex;
flex-direction: column;
justify-content: space-between;
`;

export const UserInfoContainer = styled.div`
display: flex;
height: 80px;
border-bottom: 1px lightgrey solid;
`;

export const UserInfoTextContainer = styled.div`
display: flex;
flex-direction: column;
justify-content: space-evenly;
`;

export const UserImage = styled.img`
width: 30%;
object-fit: cover;
`;

export const UserInfo = styled.p`
color: #e47d32;
padding-left: 15px;
font-weight: 700;
`;

export const UserReviewsAmount = styled.p`
color: #4C4C4C;
padding-left: 15px;
font-weight: 700;
`;

export const RestaurantInfo = styled.p`
color: #e47d32;
padding-left: 15px;
font-weight: 700;
font-size: 16px;
padding: 15px;
`;

export const TopContainer = styled.div`

`;

export const ButtonContainer = styled.div`
display: flex;
width: 100%;
justify-content: center;
`;


export const LatestCommentsContainer = styled.div`
`;

export const LatestComments = styled.p`
font-weight: 300;
font-size: 18px;
padding: 10px;
`;

export const CommentName = styled.p`
font-weight: 700;
color: #e47d32;
font-size: 15px;
padding: 0 10px;
`;

export const Comment = styled.p`
font-weight: 300;
font-size: 14px;
padding: 10px;
`;

/* export const BottomPartWrapper = styled.div`
display: flex;
flex-direction: column;
align-items: space-between;
`; */