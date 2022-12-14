import React, { useEffect } from "react"
import { NavLink, useNavigate } from "react-router-dom"
// import {logIn} from "../api"

const Navbar = ({ userToken, setUserToken }) => {
    const navigate = useNavigate()

    async function logIn(event) {
        event.preventDefault();

        try {
            const userToLogin = {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                        username: event.target[0].value,
                        password: event.target[1].value
                }),
            };
            const response = await fetch(
              "https://salty-lake-34285.herokuapp.com/api/users/login",
                userToLogin
            );
            const result = await response.json();
            const token = result.token;
            setUserToken(token);
            localStorage.removeItem("token");
            localStorage.setItem("token", token);
        } catch (error) {
            console.log("there is an error", error);
        }
    }
  
    return (
        <div id="navbar">
            <h2>Juice Box</h2>
            {userToken ? (
                <div>
                    <h3>You Are Logged In!</h3>
                    <NavLink className="nav-link" to="/post">
                        <button>Make New Post</button>
                    </NavLink>

                    <button
                        onClick={() => {
                            setUserToken(null)
                            localStorage.removeItem("token")
                            navigate("/")
                        }}
                    >
                        Log Out
                    </button>
                </div>
            ) : (
                <>
                    <form id="login-form" onSubmit={logIn}>
                        <label htmlFor="username-input">
                            Username:
                            <input type="text" name="username-input" />
                        </label>
                        <label htmlFor="password-input">
                            Password:
                            <input type="password" name="password-input" />
                        </label>
                        <input type="submit" value="Log In" />
                    </form>

                    <NavLink className="nav-link" to="/register">
                        <button>Sign Up</button>
                    </NavLink>
                </>
            )}
            <NavLink className="nav-link" to="/">
                <button>Home</button>
            </NavLink>
        </div>
    )
}

export default Navbar
