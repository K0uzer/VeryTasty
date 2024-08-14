import React from 'react'

import Header from '@components/Header'
import Footer from '@components/Footer'

import './globals.css'

export const metadata = {
    title: 'Очень вкусно',
    description: 'Сайт кулинарных рецептов',
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="ru">
            <body>
                <Header />
                {children}
                <Footer />
            </body>
        </html>
    )
}
