import LinkDiv from './components/linkDiv/linkDiv'
import styles from './page.module.css'

export default function Home() {
  return (
    <main>
      <div className={styles.hero}>
        <center>
          <div className={styles.center}>
            <p id={styles['heroName']}> Julian Schumacher </p>
          </div>
          {/* The Hero Links, representing my Developer Accounts in the Stores */}
          <div className={styles.heroLinks}>
            <LinkDiv
              destination='https://www.apple.com/app-store/'
              name='App Store'
            />
            <LinkDiv
              destination='https://play.google.com/store/games'
              name='Play Store'
            />
          </div>
        </center>
      </div>
    </main>
  )
}
