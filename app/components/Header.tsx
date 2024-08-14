'use client'
import Image from 'next/image'
import {
    UserOutlined,
    VideoCameraOutlined,
    CalculatorOutlined,
    UnorderedListOutlined,
} from '@ant-design/icons'

import { DOMAIN, PATH } from '@app/constants'
import logo from '@public/logo.svg'
import Button from '@app/UI/Button'

import styles from './Header.module.css'

const BUTTONS = [
    {
        key: '1',
        icon: <UserOutlined />,
        title: 'Профиль',
        path: PATH.PROFILE,
    },
    {
        key: '2',
        icon: <VideoCameraOutlined />,
        title: 'Рецепты',
        path: PATH.RECIPTS,
    },
    {
        key: '3',
        icon: <CalculatorOutlined />,
        title: 'Каллории',
        path: PATH.CALORIE,
    },
    {
        key: '4',
        icon: <UnorderedListOutlined />,
        title: 'Готовые рационы',
        path: PATH.RATIONS,
    },
]

const changePath = (path: string) => (location.href = `${DOMAIN}${path}`)

const Header = () => {
    return (
        <section className={styles.header}>
            <Image
                className={styles.logo}
                onClick={() => changePath(PATH.MAIN)}
                src={logo}
                alt="Очень вкусно"
                width={50}
                height={50}
                loading="lazy"
            />
            <nav className={styles.nav}>
                <ul className={styles.list}>
                    {BUTTONS.map((element) => (
                        <li className={styles.listItem} key={element.key}>
                            <Button
                                onClick={() => changePath(element.path)}
                                styles={styles.button}
                            >
                                {element.icon}
                                {element.title}
                            </Button>
                        </li>
                    ))}
                </ul>
            </nav>
        </section>
    )
}

export default Header
