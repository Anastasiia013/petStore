import Section from '../../ui/Section/Section';

import Instagram from '/footerImg/ic-instagram.svg';
import Whatsapp from '/footerImg/ic-whatsapp.svg';
import Map from '/footerImg/map.png'

import styles from './Footer.module.css'

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <Section>
                <h2>Contacts</h2>
                <div className={styles.footerBox}>
                    <div className={styles.footerBoxBlock}>
                        <div className={`${styles.footerBoxBlockElement} ${styles.long}`}>
                            <h5 className={styles.h5}>Phone</h5>
                            <p className={styles.p}>+49 30 915-88492</p>
                        </div>
                        <div className={styles.footerBoxBlockElement}>
                            <h5 className={styles.h5}>Socials</h5>
                            <div className={styles.imgBox}>
                                <a href="https://www.instagram.com/" target="_blank">
                                    <img src={Instagram} alt="Instagram" />
                                </a>
                                <a href="https://web.whatsapp.com/" target="_blank">
                                    <img src={Whatsapp} alt="WhatsApp" />
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className={styles.footerBoxBlock}>
                        <div className={`${styles.footerBoxBlockElement} ${styles.long}`}>
                            <h5 className={styles.h5}>Adress</h5>
                            <p className={styles.p}>Wallstraẞe 9-13, 10179 Berlin, Deutschland</p>
                        </div>
                        <div className={styles.footerBoxBlockElement}>
                            <h5 className={styles.h5}>Working Hours</h5>
                            <p className={styles.p}>24 hours a day</p>
                        </div>
                    </div>
                    <a href="https://maps.app.goo.gl/YPMzGPSNnqYvS6wb6" target='_blank'>
                        <img className={styles.map} src={Map} alt="Map Image" />
                    </a>
                </div>
            </Section>
        </footer>
    )
}

export default Footer;