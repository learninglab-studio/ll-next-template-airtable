import ReactMarkdown from 'react-markdown';
import styles from './Markdown.module.css';

export default function Markdown({ md }) {
  return (
    <div>
      <ReactMarkdown className={styles.markdown}>{md}</ReactMarkdown>
    </div>
  );
}