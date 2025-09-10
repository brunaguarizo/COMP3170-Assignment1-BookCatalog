import styles from "./book.module.css";

function Book({ book }) {
    return (
        <div className={styles.book}>
            <div className={styles.book__imageContainer}>
                <img
                    src={book.image}
                    alt={book.title}
                    className={styles.book__image}
                />
            </div>
            <div className={styles.book__content}>
                <h3 className={styles.book__title}>{book.title}</h3>
                <p className={styles.book__authors}>{book.authors}</p>
                <a
                    href={book.detailsUrl}
                    target='_blank'
                    rel='noopener noreferrer'
                    className={styles.book__link}>
                    View Details
                </a>
            </div>
        </div>
    );
}

export default Book;
