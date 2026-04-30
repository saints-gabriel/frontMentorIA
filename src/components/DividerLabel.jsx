import styles from '../styles/Globals.css';

const DividerLabel = ({ label }) => (
  <div className={styles.container}>
    <span className={styles.line} />
    <span className={styles.text}>{label}</span>
    <span className={styles.line} />
  </div>
);

export default DividerLabel;
