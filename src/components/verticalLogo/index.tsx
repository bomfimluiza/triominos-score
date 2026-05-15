import styles from './verticalLogo.module.css'

const labels = {
    title: 'TRIOMINOS',
    subtitle: 'SCORE'
}

function VerticalLogo() {
    return (
        <section className={styles.title}>
            <h2>{labels.title}</h2>
            <h3>{labels.subtitle}</h3>
        </section>
    )
}

export default VerticalLogo