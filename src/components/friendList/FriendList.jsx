import PropTypes from "prop-types";
import FriendListItem from "./FriendListItem";
import styles from "./FriendList.module.scss";
import TaskTitle from "../TaskTitle/TaskTitle";

const FriendList = ({ friends }) => (
  <div>
    <TaskTitle title="3 - My Friends" />
    <ul className={styles.friendList}>
      {friends.map((friend) => (
        <FriendListItem key={friend.id} friend={friend} />
      ))}
    </ul>
  </div>
);
FriendList.defaultProps = {
  friends: [],
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    })
  ),
};

export default FriendList;
