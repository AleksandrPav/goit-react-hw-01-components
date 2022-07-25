import FriendCard from "./Friends";
import css from "./Friends.module.css";
import PropTypes from "prop-types";


function FriendsList({ friends }) {
  return (
    <ul className={css.friends_list}>
      {friends.map(friend => (
        <li className={css.item} key={friend.id}>
          <FriendCard
            name={friend.name}
            status={friend.isOnline}
            avatar={friend.avatar}
          />
        </li>
      ))}
    </ul>
  );
}


FriendsList.propTypes = {
    friends: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
    }))
}

export default FriendsList;


