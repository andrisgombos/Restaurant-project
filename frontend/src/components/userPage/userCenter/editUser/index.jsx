import React, {useState} from 'react'
import { InputBox, InputWithLabel, TextFieldWithLabel, OrangeButton } from '../../../../globalStyle/globalStyle'
import { BottomPart, Main, ResetButton } from './style'
import {connect} from 'react-redux';
// this is just a test





function EditProfile() {


    const [username, setUsername] = useState("")
    const [first_name, setFirst_name] = useState("")
    const [last_name,setLast_name] = useState("")
    const [email, setEmail] = useState("")
    const [location,setLocation]=useState("");
    const [phone,setPhone]=useState("");
    const [things_user_loves, setThings_user_loves]=useState([ ]);
    const [description, setdescription]=useState("")
    

    const token = localStorage.getItem('token');




    const editProfileHandler = (e) => {
        e.preventDefault();
        const newDetails = {
            username: username,
            first_name: first_name,
            last_name: last_name,
            email : email,
            location: location,
            phone: phone,
            things_user_loves: things_user_loves,
            description: description
        }
        const editUrl = undefined;
        const config = {
            method: "PATCH",
            body: JSON.stringify(newDetails),
            headers: new Headers({
                "Authorization": `Bearer ${token}`,
                "Content-Type": "application/json"
            })
        }
        fetch(editUrl,config)
            .then(res=> res.json())
            .then(data=>{
                console.log(data);
            });
        };
        
        
        

        return (
            <>
            {/* <SetPicture> */}
                {/* something with a modal to upload the new picture */}
            {/* </SetPicture>  */}
            <Main>
                <h2>EDIT USERPROFILE</h2>
               <form>
                   <section>
                            <InputBox>
                            <label htmlFor="username">Username</label>
                            <InputWithLabel
                                    required    
                                    id="username"
                                    value= {undefined }
                                    type="text"
                                    placeholder="Username"
                                    onChange={(e)=>setUsername(e.target.value)}/>
                            </InputBox>
                            <InputBox> 
                            <label htmlFor="firstname">First Name</label>
                            <InputWithLabel                                
                                    id="firstname"
                                    value= {undefined }
                                    type="text"
                                    placeholder="First Name"
                                    onChange={(e)=>setFirst_name(e.target.value)}/>
                            </InputBox>
                            <InputBox>
                            <label htmlFor="lastname">Last Name</label>
                            <InputWithLabel 
                                  
                                        id="lastname"
                                        value= {undefined }
                                        type="text"
                                        placeholder="Last Name"
                                        onChange={(e)=>setLast_name(e.target.value)}/>
                            </InputBox>
                            <InputBox>
                            <label htmlFor="email">E-Mail</label>
                            <InputWithLabel                                
                                    id="email"
                                    value= {undefined }
                                    type="text"
                                    placeholder="Email"
                                    onChange={(e)=>setEmail(e.target.value)}/>
                            </InputBox>
                            <InputBox>
                            <label htmlFor="location">Location</label>
                            <InputWithLabel                                
                                    id="location"
                                    value= {undefined }
                                    type="text"
                                    placeholder="Location"
                                    onChange={(e)=>setLocation(e.target.value)}/>
                            </InputBox>
                            <InputBox>  
                            <label htmlFor="phone">Phone</label>       
                            <InputWithLabel                                
                                    id="phone"
                                    value= {undefined }
                                    type="text"
                                    placeholder="Phone"
                                    onChange={(e)=>setPhone(e.target.value)}/>      
                            </InputBox>
                            <InputBox>
                            <label htmlFor="Til">Things I love</label>
                            <TextFieldWithLabel
                                    rows="4" cols="50"
                                    id="Til"
                                    value= {undefined }
                                    type="text"
                                    placeholder="Peace, Love and Puppies"
                                    onChange={(e)=>setThings_user_loves(e.target.value)}/>
                            </InputBox>
                            <InputBox>
                            <label htmlFor="about">Description</label>
                            <TextFieldWithLabel
                                    rows="4" cols="50"                                
                                    id="about"
                                    value= {undefined }
                                    type="textfield"
                                    placeholder="I am ... "
                                    onChange={(e)=>setdescription(e.target.value)}/>
                            </InputBox>
                            </section>
                        </form>
                    </Main>
                    <BottomPart>
                    
                    <OrangeButton type="submit" onClick={editProfileHandler}>SAVE</OrangeButton>
                    <div>
                        <ResetButton>Delete account</ResetButton>
                        <ResetButton>Reset Password</ResetButton>
                    </div>
                    </BottomPart>
                                    
            
        </>
    )
}

const mapStateToProps =(state) => {
    return ({
        email:state.email
    })
}

export default connect(mapStateToProps)(EditProfile)

