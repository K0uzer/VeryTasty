'use client'
import React from 'react'
import { LockOutlined, UserOutlined } from '@ant-design/icons'
import { Button, Checkbox, Form, Input, Flex } from 'antd'
import { signIn, useSession } from 'next-auth/react'
import Link from 'next/link'

import { PATH } from '@app/constants'

const FormAuth: React.FC = () => {
    const { data: session, status } = useSession()

    if (status === 'authenticated') {
        return <div>Добро пожаловать, {session.user.name}!</div>
    }
    const onFinish = (event) => {
        event.preventDefault()
        signIn('credentials', {
            username: event.target.username.value,
            password: event.target.password.value,
        })
    }

    return (
        <Form
            name="login"
            initialValues={{ remember: true }}
            style={{ maxWidth: 360 }}
            onSubmitCapture={(event) => onFinish(event)}
        >
            <Form.Item
                name="username"
                rules={[
                    {
                        required: true,
                        message: 'Пожауйста, введите свой логин!',
                    },
                ]}
            >
                <Input prefix={<UserOutlined />} placeholder="Username" />
            </Form.Item>
            <Form.Item
                name="password"
                rules={[
                    {
                        required: true,
                        message: 'Пожауйста, введите свой пароль!',
                    },
                ]}
            >
                <Input
                    prefix={<LockOutlined />}
                    type="password"
                    placeholder="Password"
                />
            </Form.Item>
            <Form.Item>
                <Flex justify="space-between" align="center">
                    <Form.Item name="remember" valuePropName="checked" noStyle>
                        <Checkbox>Запомнить меня</Checkbox>
                    </Form.Item>
                    <a href="/">Я забыл пароль</a>
                </Flex>
            </Form.Item>

            <Form.Item>
                <Button block type="primary" htmlType="submit">
                    Войти
                </Button>
                или{' '}
                <Link href={PATH.REGISTRATION}>Зарегистрируйся сейчас!</Link>
            </Form.Item>
        </Form>
    )
}

export default FormAuth
