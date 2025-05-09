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
                    <div style={{ position: 'relative', paddingTop: '25.65%', height: 0, overflow: 'hidden', borderRadius: '12px' }}>
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2428.722512797303!2d13.3585591!3d52.5022624!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47a84fb0e85329a1%3A0xa141f1e83418ee88!2sIT%20Career%20Hub!5e0!3m2!1sde!2sat!4v1746782642780!5m2!1sde!2sat"
                            style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', border: 0 }}
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        />
                    </div>
                </div>
            </Section>
        </footer>
    )
}

export default Footer;