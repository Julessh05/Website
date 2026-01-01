import Link from "next/link";
import Image from "next/image";
import styles from "./page.module.scss";

export const metadata = {
    title: 'Julian Schumacher - Contact',
    description: 'Get in touch with Julian Schumacher',
    keywords: [
        "Developer Contact",
        "Programming Contact",
        "Contact",
        "Personal Contact",
        "Julian Schumacher Contact",
        "Contact",
        "Get in Touch",
        "Contact Developer",
        "Developer Socials"
    ],
    formatDetection: {
        email: true,
        address: true,
        telephone: true,
    },
    robots: {
        index: true,
        follow: true,
        nocache: true,
        googleBot: {
            index: true,
            follow: true,
            noimageindex: true,
            "max-video-preview": -1,
            "max-image-preview": "large",
            "max-snippet": -1,
        },
    },
}

export default function Contact() {
    return (
        <main>
            {/* General */}
            <h1>Contact</h1>
            <p>
                In case of any questions, requests or other converns, please don&rsquo;t hesitate to reach out.
                You can pick you&rsquo;r prefered method of contact below.
                Most of the time, a simple email will get you the fastest response.
                Please include as many details as possible regarding your request for me to help you best.
            </p>

            {/* Email contact */}
            <h2>Preferred</h2>
            <p>Email: <Link href="mailto:contact@julianschumacher.dev?subject=Contact request">contact@julianschumacher.dev</Link></p>

            {/* Other Contacts */}
            <h2>Others</h2>

            {/* Work contact */}
            <h3>Work</h3>
            <p className={styles.socialLink}>
                <Image
                    src="/socials/github_icon.svg"
                    alt="GitHub Icon"
                    width={25}
                    height={12.5}
                />
                GitHub:
                <Link href="https://github.com/juliandevelops" target="_blank">@juliandevelops</Link>
            </p>

            {/* Social Links */}
            <h3>Socials</h3>
            <p className={styles.socialLink}>
                <Image
                    src="/socials/instagram_icon.svg"
                    alt="Instagram Icon"
                    width={20}
                    height={20}
                />
                Instagram:
                <Link href="https://www.instagram.com/juliandevelops/" target="_blank">@juliandevelops</Link>
            </p>
            <p className={styles.socialLink}>
                <Image
                    src="/socials/x_icon.svg"
                    alt="X Icon"
                    width={20}
                    height={20}
                />
                (formerly Twitter):
                <Link href="https://twitter.com/julian_develops" target="_blank">@julian_develops</Link>
            </p>
            <p className={styles.socialLink}>
                <Image
                    src="/socials/linkedin_icon.png"
                    alt="LinkedIn Icon"
                    height={20}
                    width={20}
                />
                LinkedIn:
                <Link href="https://www.linkedin.com/in/julian-schumacher-b6005021a/" target="_blank">Julian Schumacher</Link>
            </p>
            <p className={styles.socialLink}>
                <Image
                    src="/socials/patreon_icon.svg"
                    alt="Patreon Icon"
                    height={20}
                    width={20}
                />
                Patreon: <Link href="https://www.patreon.com/juliandevelops" target="_blank">@juliandevelops</Link></p>

            {/* Support section */}
            <h3>Support</h3>
            <p>For support requests please refer to the <Link href="/support">dedicated support page.</Link></p>

            {/* Other projects */}
            <h3>Other projects</h3>
            <p className={styles.socialLink}>
                <Image
                    src="/projects/v3s_icon.png"
                    alt="V3S Icon"
                    height={20}
                    width={20}
                    style={{ borderRadius: "7.5px" }}
                />
                Virtual Safety & Security Systems
                <Link href="https://v3s.tech" target="_blank">v3s.tech</Link>
            </p>
            <p>App Store: <Link href="https://apps.apple.com/de/developer/julian-schumacher/id1681063160" target="_blank">Julian Schumacher</Link></p>
            <p>Play Store: <Link href="https://play.google.com/store/apps/developer?id=Julian+Schumacher" target="_blank">Julian Schumacher</Link></p>
        </main >
    );
}
