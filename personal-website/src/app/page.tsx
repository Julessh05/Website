"use client";

import styles from "./page.module.scss";
import Image from "next/image";
import Link from "next/link";
import { isMobile } from "react-device-detect";

export default function Home() {
  if (isMobile) {
    return HomeMobile();
  } else {
    return HomeDesktop();
  }
}

function HomeMobile() {
  return (
    <main>
      <div className={styles.background}>
        <Image
          src="/me.jpg"
          alt="A Portrait of myself"
          width={150}
          height={150}
          style={{
            borderRadius: "25px",
          }}
        />
        <h1>Julian Schumacher</h1>
        <h2>Software Engineer</h2>
        <h3>Socials</h3>
        <p>Let&rsquo;s connect</p>
        <div className={styles.linkDiv}>
          <ul>
            <li>
              <Link href="https://github.com/Julessh05" target="_blank">
                Github
              </Link>
            </li>
            <li>
              <Link
                href="https://www.linkedin.com/in/julian-schumacher-b6005021a/"
                target="_blank"
              >
                LinkedIn
              </Link>
            </li>
            <li>
              <Link href="https://x.com/Julessh05" target="_blank">
                X
              </Link>
            </li>
            <li>
              <Link href="https://instagram.com/Julessh05" target="_blank">
                Instagram
              </Link>
            </li>
            <li>
              <Link href="" target="_blank">
                Patreon
              </Link>
            </li>
          </ul>
        </div>
        <div style={{ paddingTop: "20px" }}>
          <h3>Other Links</h3>
          <p>Projects and Connections</p>
          <div className={styles.linkDiv}>
            <ul>
              <li>
                <Link href="https://v3s.tech" target="_blank">
                  Virtual Safety & Security Systems
                </Link>
              </li>
              <li>
                <Link
                  href="https://apps.apple.com/de/developer/julian-schumacher/id1681063160"
                  target="_blank"
                >
                  App Store
                </Link>
              </li>
              <li>
                <Link
                  href="https://play.google.com/store/apps/developer?id=Julian+Schumacher"
                  target="_blank"
                >
                  Play Store
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
}

function HomeDesktop() {
  return (
    <main>
      <div className={styles.background}>
        <div className={styles.column}>
          <Image
            src="/me.jpg"
            alt="A Portrait of myself"
            width={150}
            height={150}
            style={{
              borderRadius: "25px",
            }}
          />
          <h1>Julian Schumacher</h1>
          <h2>Software Engineer</h2>
        </div>
        <div className={styles.column}>
          <h3>Socials</h3>
          <p>Let&rsquo;s connect</p>
          <div className={styles.linkDiv}>
            <ul>
              <li>
                <Link href="https://github.com/Julessh05" target="_blank">
                  Github
                </Link>
              </li>
              <li>
                <Link
                  href="https://www.linkedin.com/in/julian-schumacher-b6005021a/"
                  target="_blank"
                >
                  LinkedIn
                </Link>
              </li>
              <li>
                <Link href="https://x.com/Julessh05" target="_blank">
                  X
                </Link>
              </li>
              <li>
                <Link href="https://instagram.com/Julessh05" target="_blank">
                  Instagram
                </Link>
              </li>
              <li>
                <Link href="" target="_blank">
                  Patreon
                </Link>
              </li>
            </ul>
          </div>
          <div style={{ paddingTop: "20px" }}>
            <h3>Other Links</h3>
            <p>Projects and Connections</p>
            <div className={styles.linkDiv}>
              <ul>
                <li>
                  <Link href="https://v3s.tech" target="_blank">
                    Virtual Safety & Security Systems
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://apps.apple.com/de/developer/julian-schumacher/id1681063160"
                    target="_blank"
                  >
                    App Store
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://play.google.com/store/apps/developer?id=Julian+Schumacher"
                    target="_blank"
                  >
                    Play Store
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
