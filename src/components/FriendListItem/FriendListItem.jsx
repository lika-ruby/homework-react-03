import PropTypes from "prop-types";
import styles from "./FriendListItem.module.css";

export const FriendsListItem = ({ isOnline, avatar, name }) => {
  return (
    <li className={styles.item}>
      <span
        className={styles.status}
        style={{ backgroundColor: colorOnline(isOnline) }}
      ></span>
      <img
        className={styles.avatar}
        src={avatar}
        alt="User avatar"
        width="48"
      />
      <p className={styles.name}>{name}</p>
    </li>
  );
};

const colorOnline = (isOnline) => {
  if (isOnline) {
    return "green";
  } else {
    return "red";
  }
};

FriendsListItem.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string,
  isOnline: PropTypes.bool,
};
