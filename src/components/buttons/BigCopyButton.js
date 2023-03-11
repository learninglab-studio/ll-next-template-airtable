import styles from './BigCopyButton.module.css'
import CopyToClipboard from 'react-copy-to-clipboard'

export default function BigCopyButton({text}){
    return (
        <CopyToClipboard text={text}>
                <button className={styles.bigButton}>copy</button>
        </CopyToClipboard>
        
    )
}