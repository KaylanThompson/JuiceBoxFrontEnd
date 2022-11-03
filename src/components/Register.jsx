import React from "react"
import { useNavigate } from "react-router-dom"

const Register = ({ setUserToken }) => {
    const navigate = useNavigate()

    async function registerNewUser(event) {
        event.preventDefault()
        try {
            const newUser = {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    username: event.target[0].value,
                    password: event.target[1].value,
                    name: event.target[2].value,
                    location: event.target[3].value,
                }),
            }
            const response = await fetch(
                "https://salty-lake-34285.herokuapp.com/api/users/register",
                newUser
            )
            const result = await response.json()
            const token = result.token
            setUserToken(token)
            localStorage.removeItem("token")
            localStorage.setItem("token", token)
            navigate("/")
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div className="RegistrationForm" onSubmit={registerNewUser}>
            <form className="reg-form">
                <h2>To Sign Up For a New Account, Please Complete the Form Below.</h2>
                <label htmlFor="username">
                    Username:
                    <br />
                    <input type="text" name="username" />
                </label>
                <label htmlFor="password">
                    Password:
                    <br />
                    <input type="password" name="password" />
                </label>
                <label htmlFor="name">
                    Name:
                    <br/>
                    <input name="name" />
                </label>
                <label htmlFor="location">
                    Location:
                    <br/>
                    <input name="location" />
                </label>
                <input id="reg-button" type="submit" value="Submit" />
            </form>
        </div>
    )
}

export default Register
