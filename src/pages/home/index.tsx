import styles from './home.module.css'

import VerticalLogo from '../../components/verticalLogo';

import { PiTriangleFill } from 'react-icons/pi';
import { PiRanking } from 'react-icons/pi';
import { PiUserPlus } from 'react-icons/pi';
import { PiClockCounterClockwise } from 'react-icons/pi';
import { PiNewspaper } from 'react-icons/pi';

const labels = {
    newGame: <h1>INICIAR<br/>PARTIDA</h1>,
    ranking: 'RANKING',
    register: 'CADASTRO',
    history: 'HISTÓRICO',
    rules: 'REGRAS'
}

function Home() {
    return (
        <div className={styles.homeContainer}>
            <VerticalLogo />

            <button className={styles.newGameButton}>
                <PiTriangleFill className={styles.newGameBackground} />

                <div className={styles.newGameButtonForeground}>
                    <div className={styles.threeTrianglesIcon}>
                        <PiTriangleFill className={styles.threeTrianglesIconUnit} />
                        <div className={styles.threeTrianglesIconBottomRow}>
                            <PiTriangleFill className={styles.threeTrianglesIconUnit} />
                            <PiTriangleFill className={styles.threeTrianglesIconUnit} />
                        </div>
                    </div>

                    {labels.newGame}
                </div>
            </button>

            <section className={styles.menu}>
                <button className={styles.menuButton}>
                    <PiRanking className={styles.menuIcon} />
                    {labels.ranking}
                </button>
                <button className={styles.menuButton}>
                    <PiUserPlus className={styles.menuIcon} />
                    {labels.register}
                </button>
                <button className={styles.menuButton}>
                    <PiClockCounterClockwise className={styles.menuIcon} />
                    {labels.history}
                </button>
                <button className={styles.menuButton}>
                    <PiNewspaper className={styles.menuIcon} />
                    {labels.rules}
                </button>
            </section>
        </div>
    )
}

export default Home