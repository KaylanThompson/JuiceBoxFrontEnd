import React from 'react'




const SinglePost = () => {
    
    return (
        <div className="single-post">
                <h3>{post.title}</h3>
                <p><b>Author: </b>{post.author.username}</p>
                <p>{post.tags}</p>
        </div>
    
    )
}







export default SinglePost