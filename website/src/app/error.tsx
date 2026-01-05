"use client";

import Link from "next/link";
import PageSection from "@/components/PageSection";
import styles from "./error.module.scss";

export default function Error({
    error,
    reset,
}: {
    error: Error;
    reset: () => void;
}) {
    return (
        <main>
            <PageSection>
                <h1>Something went wrong</h1>
                <p>Please try again. If the problem persists, reach out to me directly.</p>
                <p className={styles.errorMessage}>{error.message}</p>
                <div className={styles.actions}>
                    <button className={styles.primaryButton} onClick={reset}>
                        Try again
                    </button>
                    <Link className={styles.textLink} href="/contact">
                        Contact
                    </Link>
                </div>
            </PageSection>
        </main>
    );
}
