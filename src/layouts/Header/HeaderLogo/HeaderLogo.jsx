import { Link } from 'react-router-dom';
import Logo from '/headerImg/logo.svg';
import styles from './HeaderLogo.module.css';

const HeaderLogo = () => {
    return (
        <Link to='/'>
            <img className={styles.logoImg} src={Logo} alt="Logo Image" />
        </Link>
    )
}

export default HeaderLogo;