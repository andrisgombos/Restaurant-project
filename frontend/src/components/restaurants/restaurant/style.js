import styled from 'styled-components';

export const RestaurantGridContainer = styled.div`
display: grid;
grid-template-columns: 270px 270px 270px 270px;
grid-template-rows: auto;
column-gap: 20px;
row-gap: 30px;
margin-top: 1.5rem;
`;

export const RestaurantCard = styled.div`
height: 410px;
border-top: 5px solid #e47d32;
background-color: white;
display: flex;
flex-direction: column;
justify-content: space-between;
`;

export const RestaurantName = styled.p`
padding: 10px 13px;
`;

export const RestaurantAddress = styled.p`
padding-left: 13px;
font-size: 14px;
`;

export const RestaurantImage = styled.img`
width: 270px;
height: 270px;
object-fit: cover;
`;