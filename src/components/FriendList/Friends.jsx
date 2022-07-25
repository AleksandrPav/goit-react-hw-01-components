import React from "react";
import PropTypes from "prop-types";
import css from "./Friends.module.css";




const Friends = ({ avatar, name, status }) => {

    return (
        <>
            {status ? (<span className={css.status}></span>) : (<span className={css.status_online}></span>)}
        
            <img className={css.avatar} src={avatar} alt="User avatar" width={48} />
            <p className={css.name}>{name}</p>
        
        </>
        
    )

}
export default Friends;
 

Friends.propTypes = {
    avatar: PropTypes.string,
    name: PropTypes.string,
    status: PropTypes.bool
}



