import React from 'react';
import Header from '../header';
import Footer from '../footer';
import {
    InputField, CreateRestaurantButton, CreateRestaurantHeader, NewRestaurantContainer, InputFieldsContainer,
    InvisibleText, GreyText, UploadImageButton,
} from './style'


const CreateNewRestaurant = () => {
    return <>
                <Header/>
                    <NewRestaurantContainer>
                        <CreateRestaurantHeader>Create New Restaurant</CreateRestaurantHeader>
                        <InputFieldsContainer>
                            <div>
                                <text>Basic</text>
                                <GreyText>Name *</GreyText>
                                <InputField name='Name' type='text'/>
                                <text>Address</text>
                                <GreyText>Street *</GreyText>
                                <InputField name='Street' type='text'/>
                                <text>Contact</text>
                                <GreyText>Website</GreyText>
                                <InputField name='Website' type='text'/>
                                <text>Details</text>
                                <GreyText>Opening hours *</GreyText>
                                <InputField name='Opening hours' type='text'/>
                            </div>
                            <div>
                                <InvisibleText>.</InvisibleText>
                                <GreyText>Category *</GreyText>
                                <InputField name='Category' type='dropdown' placeholder='Select a value...'/>
                                <InvisibleText>.</InvisibleText>
                                <GreyText>City *</GreyText>
                                <InputField name='City' type='text'/>
                                <InvisibleText>.</InvisibleText>
                                <GreyText>Phone *</GreyText>
                                <InputField name='Phone' type='text'/>
                                <InvisibleText>.</InvisibleText>
                                <GreyText>Price level</GreyText>
                                <InputField name='Price level' type='text' placeholder='Select a value...'/>
                            </div>
                            <div>
                                <InvisibleText>.</InvisibleText>
                                <GreyText>Country *</GreyText>
                                <InputField name='Country' type='text' placeholder='Select a value...'/>
                                <InvisibleText>.</InvisibleText>
                                <GreyText>Zip</GreyText>
                                <InputField name='Zip' type='text'/>
                                <InvisibleText>.</InvisibleText>
                                <GreyText>Email</GreyText>
                                <InputField name='Email' type='text'/>
                                <InvisibleText>.</InvisibleText>
                                <GreyText>Image</GreyText>
                                <InputField name='Image' type='file'/>
                            </div>
                        </InputFieldsContainer>
                        <CreateRestaurantButton type='submit'>Create Restaurant</CreateRestaurantButton>
                    </NewRestaurantContainer>
                <Footer/>
    </>
}

export default CreateNewRestaurant;