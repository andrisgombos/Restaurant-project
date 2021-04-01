import React, { useState } from "react";
import Header from '../header';
import Footer from '../footer';
import {
    InputField, CreateRestaurantButton, CreateRestaurantHeader, NewRestaurantContainer, InputFieldsContainer,
    InvisibleText, GreyText,
} from './style'


const CreateNewRestaurant = () => {

    // add all of these to initial state?
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

    // const token = localStorage.getItem('token');

    const newRestaurantHandler = (event) =>  {
        event.preventDefault();
        const url = "https://luna-taurus.propulsion-learn.ch/backend/api/restaurants/";

        let formData = new FormData();
        formData.append('name', 'name')
        formData.append('country', 'country')
        formData.append('street', 'street')
        formData.append('category', 'category')
        formData.append('city', 'city')
        formData.append('zip', 'zip')
        formData.append('website', 'website')
        formData.append('phone', 'phone')
        formData.append('opening_hours', 'opening_hours')
        formData.append('image', 'image')
        formData.append('price_level', 'price_level')
        formData.append('email', 'email')

        const restaurantDetails = {
            name: name,
            country: country,
            street: street,
            category: category,
            city: city,
            zip: zip,
            website: website,
            phone: phone,
            opening_hours: opening_hours,
            image: image,
            price_level: price_level,
            email: email,
        }

        const config = {
            method: "POST",
            body: JSON.stringify(formData),
            headers: new Headers ({
                // "Authorization": `Bearer ${token}`,
                "Authorization": `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjE3Mzg4NDA4LCJqdGkiOiIyMDI0M2RlNDk2MjE0N2I5YjFjNjU2MTdhNDg5MDNiMiIsInVzZXJfaWQiOjF9.s2BCrO0ezAl3j77MH8BNTvXwdxgDfgtVLOmY4n8wX-4`,
                "Content-Type": "application/json"
                // "Content-Type": "FormData"
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
                                <InputField name='category' type='dropdown' placeholder='Select a value...' value= {undefined} onChange={(e)=>setCategory(e.target.value)}/>
                                <InvisibleText>.</InvisibleText>
                                <GreyText>City *</GreyText>
                                <InputField name='city' type='text' value= {undefined} onChange={(e)=>setCity(e.target.value)}/>
                                <InvisibleText>.</InvisibleText>
                                <GreyText>Phone *</GreyText>
                                <InputField name='phone' type='text' value= {undefined} onChange={(e)=>setPhone(e.target.value)}/>
                                <InvisibleText>.</InvisibleText>
                                <GreyText>Price level</GreyText>
                                <InputField name='price' type='text' placeholder='Select a value...' value= {undefined} onChange={(e)=>setPrice_level(e.target.value)}/>
                            </div>
                            <div>
                                <InvisibleText>.</InvisibleText>
                                <GreyText>Country *</GreyText>
                                <InputField name='country' type='text' placeholder='Select a value...' value= {undefined} onChange={(e)=>setCountry(e.target.value)}/>
                                <InvisibleText>.</InvisibleText>
                                <GreyText>Zip</GreyText>
                                <InputField name='zip' type='text' value= {undefined} onChange={(e)=>setZip(e.target.value)}/>
                                <InvisibleText>.</InvisibleText>
                                <GreyText>Email</GreyText>
                                <InputField name='email' type='text' value= {undefined} onChange={(e)=>setEmail(e.target.value)}/>
                                <InvisibleText>.</InvisibleText>
                                <GreyText>Image</GreyText>
                                <InputField name='image' type='file' value= {undefined} onChange={(e)=>setImage(e.target.files[0])}/>
                                {/*<FileUploader />*/}
                            </div>
                        </InputFieldsContainer>
                        <CreateRestaurantButton type='submit' onClick={newRestaurantHandler}>Create Restaurant</CreateRestaurantButton>
                    </NewRestaurantContainer>
                <Footer/>
    </>
}

export default CreateNewRestaurant;






// import styled from 'styled-components';
//
//
//
//
// const Button = styled.button;
//
// const FileUploader = props => {
//   const hiddenFileInput = React.useRef(null);
//
//   const handleClick = event => {
//     hiddenFileInput.current.click();
//   };  // Call a function (passed as a prop from the parent component)
//   // to handle the user-selected file
//
//
//
//   const handleChange = event => {
//     const fileUploaded = event.target.files[0];
//     props.handleFile(fileUploaded);
//   };
//
//     return (
//         <>
//         <Button onClick={handleClick}>
//             Upload a file
//         </Button>
//         <input
//             type="file"
//             ref={hiddenFileInput}
//             onChange={handleChange}
//             style={{display: 'none'}}
//         />
//         </>
//     );
// };
