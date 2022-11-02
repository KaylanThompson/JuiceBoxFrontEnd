import React from "react"
import {SinglePost} from './'

const PostsDisplay = ({setPostList, postList}) => {
    return (
        <div>
            {postList.map((elem) => {
                return (
                    <SinglePost
                        key={elem._id}
                        setPostList={setPostList}
                    />
                )
            })}
        </div>
    )
}

export default PostsDisplay
