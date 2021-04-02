import React, { useState } from "react";
import Header from '../header';
import Footer from '../footer';
import {
    InputField, CreateRestaurantButton, CreateRestaurantHeader, NewRestaurantContainer, InputFieldsContainer,
    InvisibleText, GreyText, SelectField,
} from './style'
import { Link } from 'react-router-dom';


const CreateNewRestaurant = () => {

    const [name, setName] = useState("");
    const [country, setCountry] = useState("");
    const [street, setStreet] = useState("");
    const [category, setCategory] = useState("");
    const [city, setCity] = useState("");
    const [zip, setZip] = useState("");
    const [website, setWebsite] = useState("");
    const [phone, setPhone] = useState("");
    const [opening_hours, setOpening_hours] = useState("");
    const [image, setImage] = useState(null);
    const [price_level, setPrice_level] = useState("");
    const [email, setEmail] = useState("");

    const token = localStorage.getItem('token');

    const newRestaurantHandler = (event) =>  {
        event.preventDefault();
        const url = "https://luna-taurus.propulsion-learn.ch/backend/api/restaurants/";

        let formData = new FormData();
        formData.append('name', name)
        formData.append('country', country)
        formData.append('street', street)
        formData.append('category', category)
        formData.append('city', city)
        formData.append('zip', zip)
        formData.append('website', website)
        formData.append('phone', phone)
        formData.append('opening_hours', opening_hours)
        formData.append('image', image)
        formData.append('price_level', price_level)
        formData.append('email', email)


        const config = {
            method: "POST",
            body: formData,

            headers: new Headers ({
                "Authorization": `Bearer ${token}`,
            })
        }
        fetch(url, config)
        .then(res => res.json())
        .then(data => console.log(data))
    }


    return <>
        <Header/>
            <NewRestaurantContainer>
                <CreateRestaurantHeader>Create New Restaurant</CreateRestaurantHeader>
                <InputFieldsContainer>
                    <div>
                        <text>Basic</text>
                        <GreyText>Name *</GreyText>
                        <InputField name='name' type='text' value= {undefined} onChange={(e)=>setName(e.target.value)}/>
                        <text>Address</text>
                        <GreyText>Street *</GreyText>
                        <InputField name='street' type='text' value= {undefined} onChange={(e)=>setStreet(e.target.value)}/>
                        <text>Contact</text>
                        <GreyText>Website</GreyText>
                        <InputField name='website' type='text' value= {undefined} onChange={(e)=>setWebsite(e.target.value)}/>
                        <text>Details</text>
                        <GreyText>Opening hours *</GreyText>
                        <InputField name='opening hours' type='text' value= {undefined} onChange={(e)=>setOpening_hours(e.target.value)}/>
                    </div>
                    <div>
                        <InvisibleText>.</InvisibleText>
                        <GreyText>Category *</GreyText>
                        <SelectField name='category' onChange={(e)=>setCategory(e.target.value)}>
                            <option value="Select a category...">Select a category...</option>
                            <option value="BBQ">BBQ</option>
                            <option value="Chinese">Chinese</option>
                            <option value="Fast Food">Fast Food</option>
                            <option value="Swiss">Swiss</option>
                            <option value="Vegetarian">Vegetarian</option>
                            <option value="Vegan">Vegan</option>
                          </SelectField>
                        <InvisibleText>.</InvisibleText>
                        <GreyText>City *</GreyText>
                        <InputField name='city' type='text' value= {undefined} onChange={(e)=>setCity(e.target.value)}/>
                        <InvisibleText>.</InvisibleText>
                        <GreyText>Phone *</GreyText>
                        <InputField name='phone' type='text' value= {undefined} onChange={(e)=>setPhone(e.target.value)}/>
                        <InvisibleText>.</InvisibleText>
                        <GreyText>Price level</GreyText>
                         <SelectField name='price_level' type='text' value= {undefined} onChange={(e)=>setPrice_level(e.target.value)}>
                             <option value="Select a price level...">Select a price level...</option>
                             <option value="1">1</option>
                             <option value="2">2</option>
                             <option value="3">3</option>
                          </SelectField>
                    </div>
                    <div>
                        <InvisibleText>.</InvisibleText>
                        <GreyText>Country *</GreyText>
                        <SelectField name='country' placeholder='Select a Country...' type='text' value= {undefined} onChange={(e)=>setCountry(e.target.value)}>
                            <option value="Select a country...">Select a country...</option>
                            <option value="Austria">Austria</option>
                            <option value="Germany">Germany</option>
                            <option value="Switzerland">Switzerland</option>
                          </SelectField>
                        <InvisibleText>.</InvisibleText>
                        <GreyText>Zip</GreyText>
                        <InputField name='zip' type='text' value= {undefined} onChange={(e)=>setZip(e.target.value)}/>
                        <InvisibleText>.</InvisibleText>
                        <GreyText>Email</GreyText>
                        <InputField name='email' type='text' value= {undefined} onChange={(e)=>setEmail(e.target.value)}/>
                        <InvisibleText>.</InvisibleText>
                        <GreyText>Image</GreyText>
                        <InputField name='image' type='file' value= {undefined} onChange={(e)=>setImage(e.target.files[0])}/>
                    </div>
                </InputFieldsContainer>
                <CreateRestaurantButton type='submit' onClick={newRestaurantHandler}><Link to="/restaurants">Create Restaurant</Link></CreateRestaurantButton>
            </NewRestaurantContainer>
        <Footer/>
    </>
}

export default CreateNewRestaurant;
