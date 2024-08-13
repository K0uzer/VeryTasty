import type { Metadata } from 'next'
import { ReactNode } from 'react'

export const metadata: Metadata = {
    title: 'Очень вкусно',
    description: 'Сайт кулинарных рецептов',
}

const CartLayout = ({ children }: { children: ReactNode }) => {
    return <div>{children}</div>
}

export default CartLayout
