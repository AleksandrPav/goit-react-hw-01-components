import React from "react";
import PropTypes from "prop-types";
import css from "./Profile.module.css";



const Profile = ({username, usertag, userlocation, useravatar,userStats}) => {
    return (
        <div className={css.profile}>
            <div className={css.description}>
                <img
                    src={useravatar}
                    alt="User avatar"
                    className="avatar"
                />
                <p className="name">{username}</p>
                <p className="tag">@{usertag}</p>
                <p className="location">{userlocation}</p>
            </div>

            <ul className={css.stats}>
                <li>
                    <span className={css.label}>Followers</span>
                    <span className={css.quantity}>{userStats.followers}</span>
                </li>
                <li>
                    <span className={css.label}>Views</span>
                    <span className={css.quantity}>{userStats.views}</span>
                </li>
                <li>
                    <span className={css.label}>Likes</span>
                    <span className={css.quantity}>{userStats.likes}</span>
                </li>
            </ul>
        </div>
    )
    
};


Profile.propType = {
    username: PropTypes.string,
    usertag: PropTypes.string,
    userlocation: PropTypes.string,
    useravatar: PropTypes.string,
    userStats: PropTypes.number

}


export default Profile;
