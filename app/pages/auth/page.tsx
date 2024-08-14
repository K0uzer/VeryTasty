import FormAuth from '@app/components/FormAuth'
import React from 'react'

import styles from './page.module.css'

const page = () => {
    return (
        <main className={styles.main}>
            <h1>Авторизация</h1>
            <FormAuth />
        </main>
    )
}

export default page
