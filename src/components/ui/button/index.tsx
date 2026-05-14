import styles from './button.module.css';

interface ButtonProps {
    label: string,
    onClick?: () => void
}

function Button({label, onClick}: ButtonProps) {
    return(
        <button className={styles.button} onClick={onClick}>{label}</button>
    )
}

export default Button