import styled from 'styled-components';

export const BackgroundColor = styled.main`
background-color: #f8f8f8;
`;

export const ReviewCard = styled.div`
height: 410px;
border-top: 5px solid #e47d32;
background-color: white;
display: flex;
flex-direction: column;
//justify-content: space-between;
`;

export const UserInfoContainer = styled.div`
display: flex;
height: 80px;
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