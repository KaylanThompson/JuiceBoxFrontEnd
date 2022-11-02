import React from "react"



const PostsDisplay = ({postList}) => {
    console.log(postList)


    return (
        <div> {postList ? 
            postList.map((post) => {
                return (
                    <div className="single-post"
                    key={post.id}>
                    <h3>{post.title}</h3>
                    <p><b>Author: </b>{post.author.username}</p>
                    <p>{post.tags}</p>
            </div>     
                )
            })
        : console.log("nothing is being returned")}
        </div>
    )
}

export default PostsDisplay
