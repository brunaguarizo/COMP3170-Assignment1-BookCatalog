import styles from "./button.module.css";

function Button({ children, onClick, variant = "primary", size = "large" }) {
    return (
        <button
            className={`${styles.button} ${styles[`button--${variant}`]} ${
                styles[`button--${size}`]
            }`}
            onClick={onClick}>
            {children}
        </button>
    );
}

export default Button;
