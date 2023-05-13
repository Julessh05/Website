import LinkDivRow from './components/linkDiv/linkDivRow/linkDivRow'
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
          <LinkDivRow
            names={['App Store', 'Github', 'Play Store']}
            destinations={['https://apps.apple.com/de/developer/julian-schumacher/id1681063160', 'https://github.com/Julessh05', 'https://play.google.com/store']}
          />
        </center>
      </div >
    </main >
  )
}
