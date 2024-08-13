import React from 'react'
import { Provider } from 'react-redux'

import store from './store'
import Header from './components/Header'
import Footer from './components/Footer'

import './global.css'

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
        <Provider store={store}>
            <html lang="ru">
                <body>
                    <Header />
                    {children}
                    <Footer />
                </body>
            </html>
        </Provider>
    )
}
