import { configureStore } from '@reduxjs/toolkit'

// Создайте редьюсер для вашего приложения
const rootReducer = (state = {}, action) => {
    switch (action.type) {
        case 'increment':
            return { count: state.count + 1 }
        default:
            return state
    }
}

// Создайте хранилище Redux
const store = configureStore({
    reducer: rootReducer,
})

export default store
