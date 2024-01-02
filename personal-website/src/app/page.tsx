import styles from "./page.module.scss";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <div className={styles.background}>
        <div className={styles.portrait}>
          <Image
            src="/me.jpg"
            alt="A Portrait of myself"
            width={150}
            height={150}
          />
        </div>
        <div className={styles.column}>
          <h1>Julian Schumacher</h1>
          <h2>Software Engineer</h2>
          <p></p>
          <div>
            <h3>Socials</h3>
            <p>Lets connect</p>
            <ul>
              <li>
                <a href="https://github.com/Julessh05">Github</a>
              </li>
              <li>
                <a href="">LinkedIn</a>
              </li>
              <li>
                <a href="">X</a>
              </li>
              <li>
                <a href="">Patreon</a>
              </li>
            </ul>
          </div>
        </div>
        <div className={styles.column}></div>
      </div>
    </main>
  );
}
