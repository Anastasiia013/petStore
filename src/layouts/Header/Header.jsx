import HeaderLogo from './HeaderLogo/HeaderLogo';
import HeaderMenu from './HeaderMenu/HeaderMenu';
import ShowZeroBadge from './HeaderCart/SimpleBadge/SimpleBadge'

import styles from './Header.module.css';

const Header = () => {
    return (
        <header className={styles.header}>
            <HeaderLogo />
            <HeaderMenu />
            <ShowZeroBadge />
        </header>
    )
}

export default Header;