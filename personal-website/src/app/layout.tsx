import type {Metadata} from 'next'
import {Inter} from 'next/font/google'
import './globals.css'
import React from "react";

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
    twitter: {
        card: 'summary_large_image',
        title: 'Julian Schumacher',
        description: 'My personal Website',
        //site: '',
        //siteId: '1467726470533754880',
        creator: '@julessh05',
        //creatorId: '1467726470533754880',
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
    },
}

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
        <body className={inter.className}>{children}</body>
        </html>
    )
}