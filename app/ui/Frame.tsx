'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import {
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    CalculatorOutlined,
    UserOutlined,
    ShopOutlined,
    ReadOutlined,
    ProfileOutlined,
} from '@ant-design/icons'
import { Button, Layout, Menu, theme } from 'antd'

import logo from '@public/logo.svg'

const { Header, Sider, Content } = Layout

const Frame = ({ children }: { children: React.ReactNode }) => {
    const [collapsed, setCollapsed] = useState(false)
    const {
        token: { colorBgContainer, borderRadiusLG },
    } = theme.useToken()

    return (
        <Layout>
            <Sider trigger={null} collapsible collapsed={collapsed}>
                <div
                    style={{
                        display: 'flex',
                        justifyContent: 'center',
                        padding: '15px',
                    }}
                    className="logoContainer"
                >
                    <Image
                        src={logo}
                        alt="Очень вкусно"
                        width={50}
                        height={50}
                        loading="lazy"
                    />
                </div>
                <Menu
                    theme="dark"
                    mode="inline"
                    defaultSelectedKeys={['1']}
                    items={[
                        {
                            key: '1',
                            icon: <ShopOutlined />,
                            label: 'Главная',
                        },
                        {
                            key: '2',
                            icon: <UserOutlined />,
                            label: 'Профиль',
                        },
                        {
                            key: '3',
                            icon: <ReadOutlined />,
                            label: 'Рецепты',
                        },
                        {
                            key: '4',
                            icon: <CalculatorOutlined />,
                            label: 'Счетчик калорийности',
                        },
                        {
                            key: '5',
                            icon: <ProfileOutlined />,
                            label: 'Готовые рационы',
                        },
                    ]}
                />
            </Sider>
            <Layout>
                <Header
                    style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        padding: 0,
                        background: colorBgContainer,
                    }}
                >
                    <Button
                        type="text"
                        icon={
                            collapsed ? (
                                <MenuUnfoldOutlined />
                            ) : (
                                <MenuFoldOutlined />
                            )
                        }
                        onClick={() => setCollapsed(!collapsed)}
                        style={{
                            fontSize: '16px',
                            width: 64,
                            height: 64,
                        }}
                    />
                    <h1 style={{ marginRight: 20 }}>
                        — Готовить — это же так просто! Главное следовать
                        рецепту.
                    </h1>
                </Header>
                <Content
                    style={{
                        margin: '24px 16px',
                        padding: 24,
                        minHeight: 280,
                        background: colorBgContainer,
                        borderRadius: borderRadiusLG,
                    }}
                >
                    {children}
                </Content>
            </Layout>
        </Layout>
    )
}

export default Frame
