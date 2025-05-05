import { Link } from 'react-router-dom';
import styles from './QuickLink.module.css';

const QuickLink = ({ to, title, text }) => {
    return (
        <div className={styles.headerWrapper}>
            <Link to={to}><h2 className="h2">{title}</h2></Link>
            <div className={styles.line}></div>
            <Link to={to} className={styles.backBtn}>{text}</Link>
        </div>
    )
}

export default QuickLink;