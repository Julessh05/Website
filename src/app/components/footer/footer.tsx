import Link from 'next/link'
import styles from './footer.module.css'

export default function Footer() {
    return (
        <div>
            <div className={styles.divider}>
                <hr />
            </div>
            <footer className={styles.footer}>
                <div className={styles.copyright}>
                    <p> © Julian Schumacher 2023 </p>
                    <p> All rights reserved </p>
                </div>
                <div className={styles.maintenance}>
                    <p> This Website is still in the initial Development Phase. </p>
                    <p> Which means Features could not work as expected, or some sites may look inconvenient on some devices. </p>
                </div>
                <Link href={'/maintenance'}> More Information </Link>
            </footer>
        </div>
    )
}