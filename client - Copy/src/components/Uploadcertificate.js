import React, { useEffect, useState } from "react"
// import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom"
const Uploadcertificate = () => {
    const navigate = useNavigate();
    // const {userData,setUserData}=useState();
    const calluploadPage = async () => {
        try {
            const res = await fetch("/uploadcertificate", {
                method: "GET",
                header: {
                    Accept: "Application/json",
                    "Content-Type": "Application/json"
                },
                // to send credentials to backe
                credentials: "include"

            })
            const data = await res.json();
            // setUserData(data)
            // console.log(userData)
            console.log(data)
            

            if (!res.status === 200) {
                const error = new Error(res.error)
                throw error
            }
            else {
                // navigate("/about")
            }

        } catch (error) {
            console.log(error)
            navigate("/signIn")
        }
    }
    useEffect(() => {
        calluploadPage();
    }, [])
    const [user, setUser] = useState({
        certificate: "",
        date: new Date()
    })
    const PostData = async (e) => {
        e.preventDefault()
        // const {name,email,aadhar,work,password,cpassword}=user;
        console.log(user)
        const { certificate, date } = user;
        const res = await fetch('/uploadcertificate', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                // name,email,aadhar,work,password,cpassword
                certificate, date
            })
        });
        const data = await res.json();

        if (res.status === 422 || !data) {
            window.alert("Failed to Upload");
            console.log("Failed to Upload");
        }
        else {
            window.alert("Upload Successfully");
            console.log("Upload Successful");

            navigate("/")
        }
    }
    const handleInputs = async (e) => {
        // e.target.default()
        console.log(e)
        setUser({ ...user, [e.target.name]: e.target.value })
        // console.log(user)
        try {
            const res= await fetch("/uploadcertificate",{
            method:"GET",
            header:{
                Accept:"Application/json",
                "Content-Type":"Application/json"
            },
            // to send credentials to backend
            credentials:"include"

        })
        const data=await res.json();
        // setUserData(data)
        // console.log(userData)
        console.log(data)

        if(!res.status===200){
            const error=new Error(res.error)
            throw error
        }
        else{
		return (user)
            // navigate("/about")
        }

        } catch (error) {
            console.log(error)
            navigate("/UploadCertificate")
        }   

        // const name = e.target.name;
        // const value = e.target.value;
        // console.log("Name: " + name, "Value: " + value)
        // setUser({ ...user, [name]: value })
        // console.log(user)
    }
    return (
        <>
            <section className="signup">
                <div className="container mt-5 justify-content-center">
                    <div className="signup-content">
                        <div className="signup-form">
                            <h2 className="form-title">Upload Certificate</h2>
                            <form method="POST" className="register-form" id="register-form">
                                <div className="form-group">
                                    <input className="form-control" type="file" name="certificate" id="certificate"
                                        value={user.certificate}
                                        onChange={handleInputs} />
                                    {/* <button onClick="clearimg()" className="btn btn-primary mt-3">Click me</button> */}
                                </div>

                                <div className="form-group form-button">
                                    <input type="submit" name="signup" id="signup" className="form-submit" value="Submit"
                                        onClick={PostData}></input>
                                </div>
                                {/* <div className="form-group">
                                    <input className="form-control" type="file" name="img" id="img" value={user.img}
                                        onChange={handleInputs} />
                                    <button onClick="clearimg()" className="btn btn-primary mt-3">Click me</button>
                                </div>

                                <div className="form-group form-button">
                                    <input type="submit" name="signup" id="signup" className="form-submit" value="Register"
                                        onClick={PostData}></input>
                                </div> */}
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
export default Uploadcertificate