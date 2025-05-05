import { useEffect } from 'react';

import ClearBtnWhite from '/images/clearBtnWhite.png';

import styles from './SuccessModal.module.css';

const SuccessModal = ({ isOpen, onClose }) => {
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
        return () => {
            document.body.style.overflow = '';
        };
    }, [isOpen]);

    if (!isOpen) return null;

    return (
        <div className={styles.modalOverlay} onClick={onClose}>
            <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
                <button className={styles.closeButton} onClick={onClose}>
                    <img src={ClearBtnWhite} alt="" />
                </button>
                <h2 style={{ color: "white" }}>Congratulations!</h2>
                <p>Your order has been successfully placed on the website. A manager will contact you shortly to confirm your order.</p>
            </div>
        </div>
    );
};

export default SuccessModal;