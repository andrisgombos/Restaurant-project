import React, {useState} from 'react'

// this is just a test





export default function EditProfile() {


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
            <SetPicture> 
                {/* something with a modal to upload the new picture */}
            </SetPicture>
            
            <Main>
               <form>
                   <section>
                        <Personal>
                            <InputContainer><MotionInput 
                                style={{margin:"10px"}}
                                    value= {undefined }
                                    type="text"
                                    placeholder="First Name"
                                    onChange={(e)=>setFirst_name(e.target.value)}               
                                    />          
                            </InputContainer>
                            <InputContainer><MotionInput 
                                style={{margin:"10px"}}
                                    value= {undefined }
                                    type="text"
                                    placeholder="Email"
                                    onChange={(e)=>setEmail(e.target.value)}               
                                    />          
                            </InputContainer>
                            
                            <InputContainer><MotionInput 
                                style={{margin:"10px"}}
                                    value= {undefined }
                                    type="text"
                                    placeholder="About"
                                    onChange={(e)=>setdescription(e.target.value)}               
                                    />          
                            </InputContainer>
                        </Personal>
                        <Personal>
                    <InputContainer><MotionInput 
                        style={{margin:"10px"}}
                            value= {undefined }
                            type="text"
                            placeholder="Last Name"
                            onChange={(e)=>setLast_name(e.target.value)}               
                            />          
                    </InputContainer>
                    <InputContainer><MotionInput 
                        style={{margin:"10px"}}
                            value= {undefined }
                            type="text"
                            placeholder="Username"
                            onChange={(e)=>setUsername(e.target.value)}               
                            />          
                    </InputContainer>
                    <InputContainer><MotionInput 
                                style={{margin:"10px"}}
                                    value= {undefined }
                                    type="text"
                                    placeholder="Location"
                                    onChange={(e)=>setLocation(e.target.value)}               
                                    />          
                            </InputContainer>
                   </Personal>
                   </section>
                   <Intrests>
                   <h3>things I like</h3>
                   <InputContainer><MotionInput 
                    style={{margin:"10px"}}
                        value= {undefined }
                        type="text"
                        placeholder="Food, Sports, Music, etc."
                        onChange={(e)=>setThings_user_loves(e.target.value)}               
                        />          
                   </InputContainer>

                   </Intrests>
                   </form>
            </Main>
            
        </>
    )
}

