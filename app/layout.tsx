import React from 'react'

import Frame from './components/Frame'

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
                <Frame>{children}</Frame>
            </body>
        </html>
    )
}
