import React from 'react'




const SinglePost = () => {
    
    return (
        <div className="single-post"
                    key={post.id}>
                    <h3>{post.title}</h3>
                    <p><b>Author: </b>{post.author.username}</p>
                    <p>{post.content}</p>
                    {post.tags.map(tag => {
                        return (
                        <div className="post-tags" key={tag.id}><p>{tag.name}</p></div>)})}
        </div>    
    
    )
}







export default SinglePost