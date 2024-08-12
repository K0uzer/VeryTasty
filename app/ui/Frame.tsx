'use client'
import React, { useState } from 'react'
import {
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    UploadOutlined,
    UserOutlined,
    VideoCameraOutlined,
} from '@ant-design/icons'
import { Button, Layout, Menu, theme } from 'antd'

const { Header, Sider, Content } = Layout

const Frame = (children: React.JSX.Element) => {
    const [collapsed, setCollapsed] = useState(false)
    const {
        token: { colorBgContainer, borderRadiusLG },
    } = theme.useToken()

    return (
        <Layout>
            <Sider trigger={null} collapsible collapsed={collapsed}>
                <div className="demo-logo-vertical" />
                <Menu
                    theme="dark"
                    mode="inline"
                    defaultSelectedKeys={['1']}
                    items={[
                        {
                            key: '1',
                            icon: <UserOutlined />,
                            label: 'Профиль',
                        },
                        {
                            key: '2',
                            icon: <VideoCameraOutlined />,
                            label: 'Рецепты',
                        },
                        {
                            key: '3',
                            icon: <UploadOutlined />,
                            label: 'Каллории',
                        },
                        {
                            key: '4',
                            icon: <UploadOutlined />,
                            label: 'Готовые рационы',
                        },
                    ]}
                />
            </Sider>
            <Layout>
                <Header style={{ padding: 0, background: colorBgContainer }}>
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
