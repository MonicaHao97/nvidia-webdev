import React, {useEffect} from 'react'
import PostItem from "./PostItem";
import {useSelector, useDispatch} from "react-redux";
import {fetchAllPosts} from "../../services/PostsService";

const PostList = () => {
    const {posts} = useSelector(state => state.postReducer)
    //console.log(posts);
    const dispatch = useDispatch();
    useEffect(() => fetchAllPosts(dispatch), [])
    return(
        <ul className="list-group">
            {
                posts.map(post => <PostItem key={post._id} post={post}/>)
            }
        </ul>
    );
}
export default PostList;