import { SessionProvider } from 'next-auth/react'

export default function App({
    Component,
    pageProps: { session, ...pageProps },
}) {
    return (
        <SessionProvider
            session={session}
            basePath="/pages/auth"
            refetchInterval={5 * 60}
            refetchOnWindowFocus={true}
        >
            <Component {...pageProps} />
        </SessionProvider>
    )
}
