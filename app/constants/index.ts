const DOMAIN = 'http://localhost:3000/'

const PATH = {
    MAIN: '/',
    AUTH: '/pages/auth',
    REGISTRATION: '/pages/registration',
    PROFILE: '/pages/profile',
    RECIPTS: '/pages/recipts',
    CALORIE: '/pages/calorie',
    RATIONS: '/pages/rations',
}

const RULES_AUTH = [
    {
        required: true,
        message: 'Пожауйста, введите свой данные!',
    },
]

export { DOMAIN, PATH, RULES_AUTH }
