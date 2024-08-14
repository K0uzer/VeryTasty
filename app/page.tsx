import styles from './page.module.css'
import Video from 'next-video'

import getStarted from '/videos/get-started.mp4'

export default function Home() {
    return (
        <main className={styles.main}>
            <h1 className={styles.preview}>
                — Готовить — это же так просто! Главное следовать рецепту.
            </h1>
            <div className={styles.video}>
                <Video className="max-w-4xl" src={getStarted} />
            </div>
        </main>
    )
}
