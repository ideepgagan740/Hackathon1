import React, { useState } from "react"
import { NavLink, useNavigate } from "react-router-dom"
// import SelectComponent from "./SelectComponent"

const SignUp = () => {
    const navigate = useNavigate();

    const [user, setUser] = useState({
        name: "",
        email: "",
        aadhar: "",
        img:"",
        signature:"",
        pensioner: "",
        password: "",
        cpassword: ""
    })
    let name, value;
    const handleInputs = (e) => {
        // e.target.default()
        console.log(e)
        name = e.target.name;
        value = e.target.value;
        // console.log("Name: " + name, "Value: " + value)
        setUser({ ...user, [name]: value })
        // console.log(user)
    }
    const PostData = async (e) => {
        e.preventDefault()
        // const {name,email,aadhar,work,password,cpassword}=user;
        console.log(user)
        const { name, email, aadhar, pensioner,img, signature, password, cpassword } = user;
        const res = await fetch('/register', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                // name,email,aadhar,work,password,cpassword
                name, email, aadhar, pensioner, img, signature, password, cpassword
            })
        });
        const data = await res.json();

        if (res.status === 422 || !data) {
            window.alert("Invalid Registration");
            console.log("Invalid Registration");
        }
        else {
            window.alert("Registration Successful");
            console.log("Registration Successful");

            navigate("/signIn")
        }
    }
    return (
        <>
            <section className="signup">
                <div className="container mt-5 justify-content-center">
                    <div className="signup-content">
                        <div className="signup-form">
                            <h2 className="form-title">Sign up</h2>
                            <form method="POST" className="register-form" id="register-form">
                                <div className="form-group">
                                    <label htmlFor="name">
                                        <i className="zmdi zmdi-account material-icons-name"></i>
                                    </label>
                                    <input type="text" name="name" id="name" autoComplete="off" value={user.name}
                                        onChange={handleInputs} placeholder="Your Name"></input>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="email">
                                        <i className="zmdi zmdi-email material-icons-name"></i>
                                    </label>
                                    <input type="email" name="email" id="email" autoComplete="off" value={user.email}
                                        onChange={handleInputs} placeholder="Your email"></input>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="aadhar">
                                        <i className="zmdi zmdi zmdi-card material-icons-name"></i>
                                    </label>
                                    <input type="number" name="aadhar" id="aadhar" autoComplete="off" value={user.aadhar}
                                        onChange={handleInputs} placeholder="Your aadhar"></input>
                                </div>
                                <div className="dropdown mb-3 ml-2">
                                    <select className="btn btn-transparent dropdown-toggle"
                                        onChange={handleInputs}
                                        name="pensioner" id="pensioner" value={user.pensioner} placeholder="Type of Pensioners">
                                        <option>Select Type of Pension</option>
                                        <option>Family Pension</option>
                                        <option>Self Pension</option>
                                        {/* <option>Option 3</option> */}
                                    </select>
                                </div>
                                <div className="form-group">
                                    <input className="form-control" type="file" name="img" id="img" value={user.img}  
                                    onChange={handleInputs}/>
                                        {/* <button onClick="clearimg()" className="btn btn-primary mt-3">Click me</button> */}
                                </div>
                                <div className="form-group">
                                    <input className="form-control" type="file" name="signature" id="signature" value={user.signature} 
                                    onChange={handleInputs}/>
                                        {/* <button onClick="clearimg()" className="btn btn-primary mt-3">Click me</button> */}
                                </div>
                                {/* <div className="form-group">
                                    <label htmlFor="password">
                                        <i className="zmdi zmdi-lock material-icons-name"></i>
                                    </label>
                                    <input type="password" name="password" id="password" autoComplete="off" value={user.password}
                                        onChange={handleInputs} placeholder="Password"></input>
                                </div> */}
                                <div className="form-group">
                                    <label htmlFor="password">
                                        <i className="zmdi zmdi-lock material-icons-name"></i>
                                    </label>
                                    <input type="password" name="password" id="password" autoComplete="off" value={user.password}
                                        onChange={handleInputs} placeholder="Password"></input>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="cpassword">
                                        <i className="zmdi zmdi-lock material-icons-name"></i>
                                    </label>
                                    <input type="cpassword" name="cpassword" id="cpassword" autoComplete="off" value={user.cpassword}
                                        onChange={handleInputs} placeholder="Confirm your Password"></input>
                                </div>
                                <div className="form-group form-button">
                                    <input type="submit" name="signup" id="signup" className="form-submit" value="Register"
                                        onClick={PostData}></input>
                                </div>
                            </form>
                            <div className="signup-img">
                                <figure>
                                    {/* <img src="" alt="Registeration Pic"></img> */}
                                </figure>
                                <NavLink to="/SignIn" className="signin-img-link"> I am already Registered</NavLink>

                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default SignUp