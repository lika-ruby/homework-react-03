import PropTypes from "prop-types";
import { StatisticsItem } from "../StatistiscItem/StatistiscItem";
import styles from "./Statistics.module.css";

export const Statistics = ({ title, stats }) => {
  return (
    <section className={styles.statistics}>
      {title && <h2 className={styles.title}>{title}</h2>}
      <ul className={styles.list}>
        {stats.map((stat) => (
          <StatisticsItem
            key={stat.id}
            label={stat.label}
            percentage={stat.percentage}
          />
        ))}
      </ul>
    </section>
  );
};

Statistics.propTypes = {
  username: PropTypes.string,
  stats: PropTypes.array,
};
