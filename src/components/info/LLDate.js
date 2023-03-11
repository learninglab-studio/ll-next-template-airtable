import React, { useState, useEffect } from 'react';
import styles from './LLDate.module.css';

const LLDate = () => {
  const [dateString, setDateString] = useState('');
  const [timeString, setTimeString] = useState('');

  useEffect(() => {
    const updateDateTime = () => {
      const now = new Date();

      const year = now.getFullYear();
      const month = String(now.getMonth() + 1).padStart(2, '0');
      const day = String(now.getDate()).padStart(2, '0');

      const hours = String(now.getHours()).padStart(2, '0');
      const minutes = String(now.getMinutes()).padStart(2, '0');
      const seconds = String(now.getSeconds()).padStart(2, '0');
      const milliseconds = String(now.getMilliseconds()).padStart(3, '0');

      setDateString(`${year}${month}${day}`);
      setTimeString(`${hours}:${minutes}:${seconds}.${milliseconds}`);
    };

    const intervalId = setInterval(updateDateTime, 1);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.date}>{dateString}</div>
      <div className={styles.time}>{timeString}</div>
    </div>
  );
};

export default LLDate;
