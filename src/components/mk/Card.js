import styles from "./Card.module.css"

function Card({ title, description, image }) {
    return (
        <div className={styles.container}>
            <h2 className={styles.title}>{title}</h2>
            <img className={styles.image} src={image} alt={title} />
            <p className={styles.description}>{description}</p>
        </div>
    );
}

  export default Card