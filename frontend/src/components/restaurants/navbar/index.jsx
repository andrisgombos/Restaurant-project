import React from 'react';
import {SearchBarContainer, InputField, Categories, CategoriesContainer, CategoriesUnderline} from './style';
import { useHistory } from 'react-router-dom';

const Navbar = () => {

    const history = useHistory();

    const goToRestaurants = () => {
        history.push('/restaurants');
    }

    const goToUsers = () => {
        history.push('/users');
    }

    const goToReviews = () => {
        history.push('/reviews');
    }

    return (
        <>
            <SearchBarContainer>
                <InputField placeholder="Search"></InputField>
            </SearchBarContainer>
            <CategoriesContainer>
                <CategoriesUnderline>
                    <Categories onClick={goToRestaurants}>Restaurants</Categories>
                    <Categories onClick={goToReviews}>Reviews</Categories>
                    <Categories onClick={goToUsers}>Users</Categories>
                </CategoriesUnderline>
            </CategoriesContainer>
        </>
    )
}

export default Navbar;

