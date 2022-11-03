import React from 'react'

const SinglePost = ({post}) => {
    
    return (
        <div>

        <div className="single-post" key={post.id}>

        <h3>{post.title}</h3>
        <p><b>Author: </b>{post.author.username}</p>
        <p>{post.content}</p>
        {post.tags.map(tag => {
            return (
                <span className="tag-line" key={tag.id}> {tag.name} </span>)})}
        </div> 
 
            </div>

    )
}







export default SinglePost