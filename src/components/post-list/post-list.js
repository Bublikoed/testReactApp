import React from "react";
import PostListItem from "../post-list-item"
import './post-list.css'
const PostList = ({posts}) => {


    return(
        <ul>
            {posts.map(item => (
                <li key={item.id}>
                    <PostListItem data={item}/>
                </li>
            ))} 
        </ul>
 
    )


}

export default PostList