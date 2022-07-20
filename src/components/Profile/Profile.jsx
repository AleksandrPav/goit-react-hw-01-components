import React from "react";
import "./Profile.css";



const Profile = ({username, usertag, userlocation, useravatar,userStats}) => {
    return (
        <div className="profile">
            <div className="description">
                <img
                    src={useravatar}
                    alt="User avatar"
                    className="avatar"
                />
                <p className="name">{username}</p>
                <p className="tag">@{usertag}</p>
                <p className="location">{userlocation}</p>
            </div>

            <ul className="stats">
                <li>
                    <span className="label">Followers</span>
                    <span className="quantity">{userStats.followers}</span>
                </li>
                <li>
                    <span className="label">Views</span>
                    <span className="quantity">{userStats.views}</span>
                </li>
                <li>
                    <span className="label">Likes</span>
                    <span className="quantity">{userStats.likes}</span>
                </li>
            </ul>
        </div>
    )
    
};

export default Profile;
