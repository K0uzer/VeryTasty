import React from 'react'

import styles from './Footer.module.css'

const Footer = () => {
    return (
        <section className={styles.footer}>
            <span className={styles.footerContent}>
                Разработанно K0uzer. Исходный код:
                <strong>
                    <a
                        className={styles.link}
                        href="https://github.com/K0uzer/VeryTasty"
                    >
                        Перейти
                    </a>
                </strong>
            </span>
        </section>
    )
}

export default Footer
