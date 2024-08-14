'use client'
import styles from './page.module.css'
import { Provider } from 'react-redux'
import Video from 'next-video'

import getStarted from '/videos/get-started.mp4'

import store from './store'

export default function Home() {
    return (
        <Provider store={store}>
            <main className={styles.main}>
                <h1 className={styles.preview}>
                    — Готовить — это же так просто! Главное следовать рецепту.
                </h1>
                <div className={styles['video']}>
                    <Video className="max-w-4xl" src={getStarted} />
                </div>
            </main>
        </Provider>
    )
}
