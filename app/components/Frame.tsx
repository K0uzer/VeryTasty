'use client'
import React from 'react'
import { Layout, theme } from 'antd'
import Image from 'next/image'
import logo from '@public/logo.svg'

const { Header, Content, Footer } = Layout

import {
    UserOutlined,
    VideoCameraOutlined,
    CalculatorOutlined,
    UnorderedListOutlined,
} from '@ant-design/icons'

import { DOMAIN, PATH } from '@app/constants'

import styles from '@components/Frame.module.css'
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
        title: 'Рационы',
        path: PATH.RATIONS,
    },
]

const Frame = ({ children }) => {
    const {
        token: { colorBgContainer, borderRadiusLG },
    } = theme.useToken()

    return (
        <Layout>
            <Header style={{ display: 'flex', alignItems: 'center' }}>
                <Link className={styles.logoLink} href={PATH.MAIN}>
                    <Image
                        className={styles.logo}
                        src={logo}
                        alt="Очень вкусно"
                        width={50}
                        height={50}
                        loading="lazy"
                    />
                </Link>
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
            </Header>
            <Content className={styles.content}>
                <div
                    style={{
                        background: colorBgContainer,
                        minHeight: 280,
                        padding: 24,
                        borderRadius: borderRadiusLG,
                    }}
                >
                    {children}
                </div>
            </Content>
            <Footer style={{ textAlign: 'center' }}>
                Created by K0uzer ©{new Date().getFullYear()}.{' '}
                <a href="https://github.com/K0uzer/VeryTasty">
                    Go to the repository
                </a>
            </Footer>
        </Layout>
    )
}

export default Frame
