import React from 'react';
import classesMyPosts from './MyPosts.module.css'
import Post from './Post/Post'


const MyPosts = () => {
    return (

        <div className={classesMyPosts.item}>
            My posts
                <div>
                <textarea></textarea>
                <button>Add post</button>
                </div>
                <Post message='Hello how are you?'/>
                <Post message='It is my First post'/>
        </div>
    )
}

export default MyPosts;