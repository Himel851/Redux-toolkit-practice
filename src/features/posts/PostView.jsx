import React, {useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {fetchPosts} from './postSlice'


const PostView = () => {
    const {isLoading, posts, error} = useSelector((state) => state.posts);
    const dispatch = useDispatch();

    useEffect(() => {
      dispatch(fetchPosts());
    }, [])
    

  return (
    <div>
        {isLoading && <h3>Loading....</h3> }
        {error && <h3>{error}</h3> }
        {posts && posts.map((data)=> {
            const {title, body} = data;
            return (
                <div>
                    <h5>{title}</h5>
                    <p>{body}</p>
                </div>
            )
        })}
    </div>
  )
}

export default PostView