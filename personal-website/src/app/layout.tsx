import type {Metadata} from 'next'
import {Inter} from 'next/font/google'
import './globals.scss'
import React from "react";
import Header from "@/app/header";
import styles from "./page.module.scss"

const inter = Inter({subsets: ['latin']})

export const metadata: Metadata = {
    title: 'Julian Schumacher',
    description: 'My personal development Website',
    publisher: 'Julian Schumacher',
    applicationName: 'Next',
    generator: 'Next.js',
    keywords: [
        'Personal Website',
        'Julian Schumacher',
        'App Development',
        'App Developer',
        'Web Development',
        'Web Developer',
        'Full-Stack Development',
        'Full-Stack Developer',
        'Developer',
    ],
    authors: {name: 'Julian Schumacher', url: 'https://julianschumacher.dev'},
    creator: 'Julian Schumacher',
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
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1,
        },
    },
    metadataBase: new URL('https://julianschumacher.dev'),
    twitter: {
        card: 'summary_large_image',
        title: 'Julian Schumacher',
        description: 'My personal Website',
        creator: '@julessh05',
        images: [],
    },
    openGraph: {
        title: 'Julian Schumacher',
        description: 'My personal Website',
        url: 'https://julianschumacher.dev',
        siteName: 'Julian Schumacher',
        images: [],
        locale: 'en_US',
        type: 'website',
        countryName: 'germany',
        emails: ['support@julianschumacher.dev']
    },
    category: 'development',
    referrer: 'no-referrer',
    verification: {
        google: '', // TODO: Add Google Verification
    }
}

export default function RootLayout(
    {
        children,
    }: { children: React.ReactNode }
) {
    return (
        <html lang="en">
        <body className={[inter.className, styles.withBackground].join(" ")}>
        <div className="relative">
            <Header></Header>
            <div className={styles.content}>
                {children}
            </div>
        </div>
        </body>
        </html>
    )
}