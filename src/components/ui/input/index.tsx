import styles from './input.module.css';

interface InputProps {
    label: string,
    type?: string,
    placeholder?: string,
    value?: string,
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
}

function Input({label, type = 'text', placeholder, value, onChange}: InputProps) {
    return (
        <div className={styles.inputContainer}>
            <span>{label}</span>
            <input type={type} placeholder={placeholder} value={value} onChange={onChange} className={styles.input} />
        </div>
    )
}

export default Input