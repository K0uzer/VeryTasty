import React from 'react'

import './global.css'
import Frame from './ui/Frame'

export const metadata = {
    title: 'Very tasty',
    description: 'Cooking Recipes Website',
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
