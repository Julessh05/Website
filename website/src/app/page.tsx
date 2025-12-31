import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.scss";

export default function Home() {
  return (
    <main>
      <div>
        <div className={styles.introduction}>
          <Image
            src="/me.jpg"
            alt="A Portrait of myself"
            width={150}
            height={150}
          />
          <div>
            <h1>Julian Schumacher</h1>
            <h2>Cyber Security Student</h2>
          </div>
        </div>
      </div>
    </main>
  );
}
