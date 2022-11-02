import React from "react"
import SinglePost from "./SinglePost"



const PostsDisplay = ({postList}) => {




    return (
        <div>
            {postList.map((post) => {
                return (
                    <SinglePost postList={postList} key={post.id} />
                )})}
        </div>
        // <div> {postList ? 
        //     postList.map((post) => {
        //         return (
        //             <div className="single-post"
        //             key={post.id}>
        //             <h3>{post.title}</h3>
        //             <p><b>Author: </b>{post.author.username}</p>
        //             <p>{post.content}</p>
        //             {post.tags.map(tag => {
        //                 return (
        //                 <div key={tag.id}><p>{tag.name}</p></div>)})}
        //     </div>     
        //         )
        //     })


    )
}

export default PostsDisplay
