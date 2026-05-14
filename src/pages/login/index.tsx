import { useNavigate } from 'react-router'
import styles from './login.module.css'

import VerticalLogo from '../../components/verticalLogo'
import Input from '../../components/ui/input'
import Button from '../../components/ui/button'
import Link from '../../components/ui/link'

const labels = {
    title: 'LOGIN',
    username: 'Usuário',
    password: 'Senha',
    signIn: 'ENTRAR',
    signUp: 'Não tem uma conta? Cadastre-se'
}

function Login() {
    const navigate = useNavigate()

    return (
        <div className={styles.loginContainer}>
            <VerticalLogo />

            <div className={styles.formContainer}>
                <div className={styles.titleContainer}>
                    <hr/>
                    <h3>{labels.title}</h3>
                    <hr/>
                </div>

                <div className={styles.form}>
                    <Input label={labels.username} />
                    <Input label={labels.password} type='password' />

                    <section className={styles.formButton}>
                        <Button label={labels.signIn} onClick={() => {
                            navigate('/')
                        }} />
                    </section>
                </div>
            </div>

            <section>
                <Link label={labels.signUp} href='#' />
            </section>
        </div>
    )
}

export default Login