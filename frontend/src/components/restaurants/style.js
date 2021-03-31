import styled from 'styled-components';

export const BackgroundColor = styled.main`
background-color: #f8f8f8;
`;

export const SearchBarContainer = styled.div`
width: 85vw;
`;

export const InputField = styled.input`
border: none;
padding: 20px;
width: 85vw;
background-color: white;
border: 1px solid #e9e9e9;
font-weight: bold;
font-size: 16px;
color: #f8f8f8;
`;

export const CategoriesContainer = styled.div`
display: flex;
justify-content: center;
`;

export const CategorieUnderline = styled.div`
border-bottom: 1px solid #e9e9e9;
display: flex;
`;


export const Categories = styled.p`
font-size: 1.2rem;
text-transform: uppercase;
text-align: center;
padding: 15px;
color: #4c4c4c;
cursor: pointer;
font-weight: 600;

:hover {
    border-bottom: 2px solid #e47d32;
}
`;