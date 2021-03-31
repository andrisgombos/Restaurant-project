import React from 'react';
import Header from '../header';
import Footer from '../footer';
import {PlainText, VerificationCont, RegButton, InputHolder, InputField, RegisterMsg} from './style'


const CreateNewRestaurant = () => {
    return <>
                <Header/>
                    <VerificationCont>
                        <RegisterMsg>Create New Restaurant</RegisterMsg>
                        <InputHolder>
                            <div>
                                <text>Basic</text>
                                <PlainText>Name</PlainText>
                                <InputField name='Name' type='text'/>
                                <text>Address</text>
                                <PlainText>Street</PlainText>
                                <InputField name='Street' type='text'/>
                                <text>Contact</text>
                                <PlainText>Website</PlainText>
                                <InputField name='Website' type='text'/>
                                <text>Details</text>
                                <PlainText>Opening hours</PlainText>
                                <InputField name='Opening hours' type='text'/>
                            </div>
                            <div>
                                <text>.</text>
                                <PlainText>Category</PlainText>
                                <InputField name='Category' type='text' placeholder='Select a value...'/>
                                <text>.</text>
                                <PlainText>City</PlainText>
                                <InputField name='City' type='text'/>
                                <text>.</text>
                                <PlainText>Phone</PlainText>
                                <InputField name='Phone' type='text'/>
                                <text>.</text>
                                <PlainText>Price level</PlainText>
                                <InputField name='Price level' type='text' placeholder='Select a value...'/>
                            </div>
                            <div>
                                <text>.</text>
                                <PlainText>Country</PlainText>
                                <InputField name='Country' type='text' placeholder='Select a value...'/>
                                <text>.</text>
                                <PlainText>Zip</PlainText>
                                <InputField name='Zip' type='text'/>
                                <text>.</text>
                                <PlainText>Email</PlainText>
                                <InputField name='Email' type='text'/>
                                <text>.</text>
                                <PlainText>Image</PlainText>
                                <InputField name='Image' type='text'/>
                            </div>
                        </InputHolder>
                        <RegButton type='submit'>Create Restaurant</RegButton>
                    </VerificationCont>
                <Footer/>
    </>
}

export default CreateNewRestaurant;