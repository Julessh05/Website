import Link from "next/link";

export default function Contact() {
    return (
        <main>
            <h1>Contact</h1>
            <p>In case of questions or requests, feel free to reach out:</p>
            <h2>Preferred</h2>
            <p>Email: <Link href="mailto:contact@julianschumacher.dev?subject=Contact request">contact@julianschumacher.dev</Link></p>
            <h2>Others</h2>
            <h3>Work</h3>
            <p>GitHub: <Link href="https://github.com/juliandevelops" target="_blank">@juliandevelops</Link></p>
            <h3>Socials</h3>
            <p>Instagram: <Link href="https://www.instagram.com/juliandevelops/" target="_blank">@juliandevelops</Link></p>
            <p>X (formerly Twitter): <Link href="https://twitter.com/julian_develops" target="_blank">@julian_develops</Link></p>
            <p>LinkedIn: <Link href="https://www.linkedin.com/in/julian-schumacher-b6005021a/" target="_blank">Julian Schumacher</Link></p>
            <p>Patreon: <Link href="https://www.patreon.com/juliandevelops" target="_blank">@juliandevelops</Link></p>
            <h3>Support</h3>
            <p>For support requests please refer to the <Link href="/support">dedicated support page.</Link></p>
            <h3>Other projects</h3>
            <p>Virtual Safety & Security Systems <Link href="https://v3s.tech" target="_blank">v3s.tech</Link></p>
            <p>App Store: <Link href="https://apps.apple.com/de/developer/julian-schumacher/id1681063160" target="_blank">Julian Schumacher</Link></p>
            <p>Play Store: <Link href="https://play.google.com/store/apps/developer?id=Julian+Schumacher" target="_blank">Julian Schumacher</Link></p>
        </main >
    );
}
