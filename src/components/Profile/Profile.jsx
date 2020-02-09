import React from 'react';
import classesProfile from './Profile.module.css'
import MyPosts from './MyPosts/MyPosts'


const Profile = () => {
    return (
        <div>
            <div>
                <img src='https://avatars.mds.yandex.net/get-pdb/2286742/3062bfb2-b36a-4796-9574-c871b1961846/s1200' />
            </div>
            <div className={classesProfile.item}>
                ava + descr
            </div>
            <MyPosts />
        </div>
    )
}

export default Profile;