'use client'
import React from 'react'
import { LockOutlined, UserOutlined } from '@ant-design/icons'
import { Button, Checkbox, Form, Input, Flex } from 'antd'
import { signIn, useSession } from 'next-auth/react'
import Link from 'next/link'

import { PATH, RULES_AUTH } from '@app/constants'

const FormAuth: React.FC = () => {
    const { data: session, status } = useSession()

    if (status === 'authenticated') {
        return <div>Добро пожаловать, {session.user.name}!</div>
    }
    const onFinish = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        signIn('credentials', {
            username: event.target.username.value,
            password: event.target.password.value,
        })
    }

    const FORM_ITEMS = {
        LOGIN: 'login',
        USERNAME: 'username',
        PASSWORD: 'password',
        REMEMBER: 'remember',
    }

    return (
        <Form
            name={FORM_ITEMS.LOGIN}
            initialValues={{ remember: true }}
            style={{ maxWidth: 360 }}
            onSubmitCapture={(event) => onFinish(event)}
        >
            <Form.Item name={FORM_ITEMS.USERNAME} rules={RULES_AUTH}>
                <Input
                    prefix={<UserOutlined />}
                    placeholder={FORM_ITEMS.USERNAME}
                />
            </Form.Item>
            <Form.Item name={FORM_ITEMS.PASSWORD} rules={RULES_AUTH}>
                <Input
                    prefix={<LockOutlined />}
                    type={FORM_ITEMS.PASSWORD}
                    placeholder={FORM_ITEMS.PASSWORD}
                />
            </Form.Item>
            <Form.Item>
                <Flex justify="space-between" align="center">
                    <Form.Item
                        name={FORM_ITEMS.REMEMBER}
                        valuePropName="checked"
                        noStyle
                    >
                        <Checkbox>Запомнить меня</Checkbox>
                    </Form.Item>
                    <Link href={PATH.MAIN}>Я забыл пароль</Link>
                </Flex>
            </Form.Item>

            <Form.Item>
                <Button block type="primary" htmlType="submit">
                    Войти
                </Button>
                <Link href={PATH.REGISTRATION}>Зарегистрируйся сейчас!</Link>
            </Form.Item>
        </Form>
    )
}

export default FormAuth
