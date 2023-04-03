import LinkDiv from './components/linkDiv/linkDiv'
import styles from './page.module.css'

export default function Home() {
  return (
    <main>
      <div className={[styles.center, styles.hero].join(" ")}>
        <div>
          <p> Julian Schumacher </p>
        </div>
        {/* The Hero Links, representing my Developer Accounts in the Stores */}
        <div className={styles.heroLinks}>
          <a href="https://www.apple.com/app-store/"> App Store </a>
          <a href="https://play.google.com/store/games"> Play Store </a>
        </div>
      </div>
    </main>
  )
}
