import { ReactNode } from 'react'

const Button = ({
    styles,
    onClick,
    children,
}: {
    styles: string
    onClick: any
    children: ReactNode
}) => {
    return (
        <button onClick={onClick} className={styles}>
            {children}
        </button>
    )
}

export default Button
