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
height: 100vh;
`;

export const UserCard = styled.div`
height: 260px;
border-top: 5px solid #e47d32;
background-color: white;
/* display: flex;
flex-direction: column;
justify-content: space-between; */
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


export const TopContainer = styled.div`

`;

export const CommentContainer = styled.div``;

export const Comment = styled.p`
font-weight: 700;
font-size: 14px;
padding: 15px 10px;
`;
