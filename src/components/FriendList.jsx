import PropTypes from "prop-types";
import { FriendsListItem } from "./FriendListItem";

export const FriendList = ({ stats = [] }) => {
  return (
    <ul className="friend-list">
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
