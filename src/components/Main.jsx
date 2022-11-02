import React, {useState, useEffect} from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Navbar, PostsDisplay } from "./"
import { getPostList } from '../api'

const Main = () => {
const [userToken, setUserToken] = useState(null)
const [postList, setPostList] = useState([])

useEffect(() => {
    const localToken = localStorage.getItem("token")
    setUserToken(localToken)
}, [])


useEffect(() => {
    async function callGetPostList() {
        const fetchedList = await getPostList()
        setPostList(fetchedList)
    }
    callGetPostList()
}, [])

    return (
        <BrowserRouter>
            <div id="main">
                <Navbar userToken={userToken}
                setUserToken={setUserToken}/>
                <Routes>
                <Route
                        exact path="/"
                        element={
                            <PostsDisplay
                                postList={postList}
                            />
                        }
                    />
                  
                </Routes>
            </div>
        </BrowserRouter>
    )
}

export default Main
