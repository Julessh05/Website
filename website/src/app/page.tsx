import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.scss";

export default function Home() {
  return (
    <main>
      <div>
        <div className={styles.introduction} style={{ borderRadius: "25px" }}>
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
        <div>
          <h2>About me</h2>
          <p>
            Hi, great you&rsquo;re here. I&rsquo;m Julian Schumacher, a passionate Cyber Security student at DHBW Stuttgart.
            I love exploring the world of technology and implementing my knowledge through various projects.
            I&rsquo;m especially interestend in cyber security topics and am eager to improve my skills in this field.
          </p>
          <h2>What I do</h2>
          <p>
            My passion is developing mobile and desktop applications with a focus on privacy and security.
          </p>
          <p>You can get a taste of my work on my <Link href="/work">work page</Link>.</p>
          <h2>What defines me and my work</h2>
          <p>
            At the focus of my work are privacy, security, and user experience.
            I strive to create applications which are easy to get into while providing strong security and privacy features.
            I believe, that user data are private and sensitive data and should be treated accordingly.
            This also means that I don&rsquo;t collect personal data unless absolutely necessary for the functionality of my applications and services.
            If so, I will always inform you and other users about it transparently and in detail.
            Tracking of any kind is also not implemented, and if any future applications will implement it, it will be strickly for improving the application and usability and will be optional.
          </p>
          <small>Find out more about security on the <Link href="/legal/privacy">dedicated page</Link>.</small>
        </div>
      </div>
    </main >
  );
}
