import styles from './page.module.css'
import Video from 'next-video'
import getStarted from '/videos/get-started.mp4'

export default function Home() {
    return (
        <main className={styles.main}>
            <h1 style={{ marginRight: 20 }}>
                — Готовить — это же так просто! Главное следовать рецепту.
            </h1>
            <div className="video-background">
                <Video className="max-w-4xl" src={getStarted} />
            </div>
        </main>
    )
}
