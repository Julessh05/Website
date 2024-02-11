"use client";

import styles from "./page.module.scss";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <div className={styles.background}>
        <div className={styles.column}>
          <div className={styles.portrait}>
            <Image
              src="/me.jpg"
              alt="A Portrait of myself"
              width={150}
              height={150}
              style={{
                borderRadius: "25px",
              }}
            />
          </div>
          <h1>Julian Schumacher</h1>
          <h2>Software Engineer</h2>
        </div>
        <div className={styles.column}>
          <h3>Socials</h3>
          <p>Let&rsquo;s connect</p>
          <ul>
            <li>
              <a href="https://github.com/Julessh05">Github</a>
            </li>
            <li>
              <a href="">LinkedIn</a>
            </li>
            <li>
              <a href="https://x.com/Julessh05">X</a>
            </li>
            <li>
              <a href="https://instagram.com/Julessh05">Instagram</a>
            </li>
            <li>
              <a href="">Patreon</a>
            </li>
          </ul>
          <h3>Other Links</h3>
          <p>Projects and Connections</p>
          <ul>
            <li>
              <a href="https://v3s.tech">Virtual Safety & Security Systems</a>
            </li>
            <li>
              <a href="">App Store</a>
            </li>
            <li>
              <a href="">Play Store</a>
            </li>
          </ul>
        </div>
      </div>
    </main>
  );
}
