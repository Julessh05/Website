import LinkDivRow from './components/linkDiv/linkDivRow/linkDivRow'
import styles from './page.module.css'

export default function Home() {
  return (
    <main>
      <div className={styles.hero}>
        <center>
          <div className={styles.center}>
            <p id={styles['heroName']}> Julian Schumacher </p>
            <p> Hello there </p>
          </div>
          {/* The Hero Links, representing my Developer Accounts in the Stores */}
          <LinkDivRow
            names={['App Store', 'Github', 'Play Store']}
            destinations={['https://www.apple.com/app-store/', 'https://github.com/Julessh05', 'https://play.google.com/store']}
          />
        </center>
      </div >
    </main >
  )
}
