import NextAuth from 'next-auth'
import Providers from 'next-auth/providers'

export default NextAuth({
    providers: [
        Providers.Credentials({
            name: 'credentials',
            credentials: {
                username: { label: 'Имя пользователя', type: 'text' },
                password: { label: 'Пароль', type: 'password' },
            },
            authorize: async () => {
                return {
                    id: 1,
                    name: 'admin',
                    email: 'admin',
                }
            },
        }),
    ],
    debug: true,
})
