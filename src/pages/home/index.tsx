import styles from './home.module.css'

import { PiTriangleFill } from "react-icons/pi";
import { PiRanking } from "react-icons/pi";
import { PiUserPlus } from "react-icons/pi";
import { PiClockCounterClockwise } from "react-icons/pi";
import { PiNewspaper } from "react-icons/pi";

function Home() {
    return (
        <div className={styles.homeContainer}>
            <section className={styles.title}>
                <h2>TRIOMINOS</h2>
                <h3>SCORE</h3>
            </section>

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

                    <h1>INICIAR<br/>PARTIDA</h1>
                </div>
            </button>

            <section className={styles.menu}>
                <button className={styles.menuButton}>
                    <PiRanking className={styles.menuIcon} />
                    RANKING
                </button>
                <button className={styles.menuButton}>
                    <PiUserPlus className={styles.menuIcon} />
                    CADASTRO
                </button>
                <button className={styles.menuButton}>
                    <PiClockCounterClockwise className={styles.menuIcon} />
                    HISTÓRICO
                </button>
                <button className={styles.menuButton}>
                    <PiNewspaper className={styles.menuIcon} />
                    REGRAS
                </button>
            </section>
        </div>
    )
}

export default Home