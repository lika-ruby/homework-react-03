import PropTypes from "prop-types";
import styles from "./StatistiscItem.module.css";

export const StatisticsItem = ({ label, percentage }) => {
  return (
    <li style={{ backgroundColor: randomColor() }} className={styles.item}>
      <span className={styles.label}>{label}</span>
      <span className={styles.percentage}>{percentage}%</span>
    </li>
  );
};

const randomColor = () => {
  const r = Math.floor(Math.random() * (255 - 1 + 1)) + 1;
  const g = Math.floor(Math.random() * (255 - 1 + 1)) + 1;
  const b = Math.floor(Math.random() * (255 - 1 + 1)) + 1;

  return `rgb(${r}, ${g},${b})`;
};

StatisticsItem.propTypes = {
  label: PropTypes.string,
  percentage: PropTypes.number,
};
