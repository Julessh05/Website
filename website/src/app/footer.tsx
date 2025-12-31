import Link from "next/link"

export default function Footer() {
    return (
        <footer>
            <p>© 2026 Julian Schumacher. All rights reserved.</p>
            <p style={{ color: "#B0892E" }}>Info: Website still in construction</p>
            <div>
                <Link href="mailto:support@julianschumacher.dev?subject=Support Request [via Website]&body=[Support request triggered by website footer]">Support request</Link>
                <Link href="/legal/privacy">Privacy Policy</Link>
            </div>
        </footer>
    )
}
