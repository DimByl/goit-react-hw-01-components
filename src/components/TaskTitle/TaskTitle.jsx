import PropTypes from "prop-types";
import styles from "./TaskTitle.module.scss";

const TaskTitle = ({ title }) => <h2 className={styles.title}>Task {title}</h2>;

TaskTitle.propTypes = {
  title: PropTypes.string.isRequired,
};

export default TaskTitle;
