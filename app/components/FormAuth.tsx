'use client'
import React from 'react'
import { LockOutlined, UserOutlined } from '@ant-design/icons'
import { Button, Checkbox, Form, Input, Flex } from 'antd'
import Link from 'next/link'

const FormAuth: React.FC = () => {
    const onFinish = (values: any) => {
        console.log('Received values of form: ', values)
    }

    return (
        <Form
            name="login"
            initialValues={{ remember: true }}
            style={{ maxWidth: 360 }}
            onFinish={onFinish}
        >
            <Form.Item
                name="username"
                rules={[
                    { required: true, message: 'Please input your Username!' },
                ]}
            >
                <Input prefix={<UserOutlined />} placeholder="Username" />
            </Form.Item>
            <Form.Item
                name="password"
                rules={[
                    { required: true, message: 'Please input your Password!' },
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
                        <Checkbox>Remember me</Checkbox>
                    </Form.Item>
                    <a href="/">Я забыл пароль</a>
                </Flex>
            </Form.Item>

            <Form.Item>
                <Button block type="primary" htmlType="submit">
                    Войти
                </Button>
                или <Link href="/">Зарегистрируйся сейчас!</Link>
            </Form.Item>
        </Form>
    )
}

export default FormAuth
