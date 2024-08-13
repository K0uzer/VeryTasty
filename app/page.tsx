import styles from './page.module.css'
import Video from 'next-video'
import getStarted from '/videos/get-started.mp4'

export default function Home() {
    return (
        <main className={styles.main}>
            <div className="video-background">
                <Video className="max-w-4xl" src={getStarted} />
                <video autoPlay loop muted>
                    <source
                        src="http://localhost:3000/_next/static/media/public/video/thread/threadsTomato.mp4"
                        type="video/mp4"
                    />
                </video>
            </div>
        </main>
    )
}
