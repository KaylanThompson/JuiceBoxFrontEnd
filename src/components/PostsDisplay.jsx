import React from "react"
import SinglePost from "./SinglePost"



const PostsDisplay = ({postList}) => {

    return (
        <div id="post-display">
            {postList.map(post => {
                return (
                    <SinglePost postList={postList} key={post.id} post={post}/>
                )})}
        </div>


    )
}

export default PostsDisplay
