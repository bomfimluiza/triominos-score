import styles from './link.module.css';

interface LinkProps {
    label: string,
    href: string
}

function Link({label, href}: LinkProps) {
    return(
        <a href={href} className={styles.link}>
            {label}
        </a>
    )
}

export default Link