import styles from './footer.module.css'

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <p> © Julian Schumacher 2023 </p>
            <p> All rights reserved </p>
            <p> This Website is still in the initial Development Phase. </p>
            <p> Meaning not even the first Version is ready to be released, which results in some features not working correctly at the moment </p>
        </footer>
    )
}