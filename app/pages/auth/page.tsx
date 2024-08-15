'use client'
import FormAuth from '@app/components/FormAuth'
import React from 'react'

import styles from './page.module.css'
import { SessionProvider } from 'next-auth/react'

const page = () => {
    return (
        <SessionProvider>
            <main className={styles.main}>
                <h1 className={styles.previewAuth}>Авторизация</h1>
                <FormAuth />
            </main>
        </SessionProvider>
    )
}

export default page
