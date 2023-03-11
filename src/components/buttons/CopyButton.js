import styles from './CopyButton.module.css'
import CopyToClipboard from 'react-copy-to-clipboard'

export default function CopyButton({text}){
    return (
        <CopyToClipboard text={text}>
                <button className={styles.button}>copy</button>
        </CopyToClipboard>
        
    )
}