import PropTypes from "prop-types";

export const FriendsListItem = ({ isOnline, avatar, name }) => {
  return (
    <li className="item">
      <span className={isOnline ? "status online" : "status offline"}></span>
      <img className="avatar" src={avatar} alt="User avatar" width="48" />
      <p className="name">{name}</p>
    </li>
  );
};

FriendsListItem.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string,
  isOnline: PropTypes.bool,
};
