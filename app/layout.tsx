import React from 'react'

import './global.css'
import Frame from './UI/Frame'

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
