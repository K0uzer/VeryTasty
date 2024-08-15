import React from 'react'

import FormRegistration from '@app/components/FormRegistration'

import styles from './page.module.css'

const page = () => {
    return (
        <main className={styles.main}>
            <h1 className={styles.previewRegistration}>Регистрация</h1>
            <FormRegistration />
        </main>
    )
}

export default page
