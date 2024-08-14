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
import Link from 'next/link'

const BUTTONS = [
    {
        key: '1',
        icon: <UserOutlined className={styles['link-icon']} />,
        title: 'Профиль',
        path: PATH.PROFILE,
    },
    {
        key: '2',
        icon: <VideoCameraOutlined className={styles['link-icon']} />,
        title: 'Рецепты',
        path: PATH.RECIPTS,
    },
    {
        key: '3',
        icon: <CalculatorOutlined className={styles['link-icon']} />,
        title: 'Каллории',
        path: PATH.CALORIE,
    },
    {
        key: '4',
        icon: <UnorderedListOutlined className={styles['link-icon']} />,
        title: 'Готовые рационы',
        path: PATH.RATIONS,
    },
]

const Header = () => {
    return (
        <section className={styles.header}>
            <Image
                className={styles.logo}
                onClick={() => (location.href = `/`)}
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
                            <Link href={`${DOMAIN}${element.path}`}>
                                <div className={styles.link}>
                                    {element.icon}
                                    {element.title}
                                </div>
                            </Link>
                        </li>
                    ))}
                </ul>
            </nav>
        </section>
    )
}

export default Header
