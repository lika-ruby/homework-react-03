import PropTypes from "prop-types";
import { FriendsListItem } from "../FriendListItem/FriendListItem";
import styles from "./FriendList.module.css";

export const FriendList = ({ stats = [] }) => {
  return (
    <ul className={styles.friend__list}>
      {stats.map((statfor) => (
        <FriendsListItem
          key={statfor.id}
          avatar={statfor.avatar}
          isOnline={statfor.isOnline}
          name={statfor.name}
        />
      ))}
    </ul>
  );
};

FriendList.propTypes = {
  stats: PropTypes.array,
};
