import React from 'react';
import classesPost from './Post.module.css'


const Post = (props) => {
    return (
        <div className='posts'>
            <div className={classesPost.item}>
                <img src='https://yt3.ggpht.com/a/AGF-l78dOzoJYFwUaxE3I0iyiR9jo7zFrLq3O0j6JQ=s900-c-k-c0xffffffff-no-rj-mo' />
                <span>{props.message}</span>
                <div>
                    <span>like</span>
                </div>
            </div>
        </div>
    )
}

export default Post;