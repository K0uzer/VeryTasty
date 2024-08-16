'use client'
import React from 'react'
import { Button, Form, Input, InputNumber } from 'antd'

const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
}

/* eslint-disable no-template-curly-in-string */
const validateMessages = {
    required: '${label} обязателен!',
    types: {
        email: '${label} не валидна!',
    },
}
/* eslint-enable no-template-curly-in-string */

const onFinish = (values: any) => {
    console.log(values)
}

const FormRegistration: React.FC = () => (
    <Form
        {...layout}
        name="nest-messages"
        onFinish={onFinish}
        style={{ maxWidth: 600 }}
        validateMessages={validateMessages}
    >
        <Form.Item
            name={['user', 'name']}
            label="Имя"
            rules={[{ required: true, len: 6 }]}
        >
            <Input />
        </Form.Item>
        <Form.Item
            name={['user', 'email']}
            label="Почта"
            rules={[{ type: 'email' }]}
        >
            <Input />
        </Form.Item>
        <Form.Item
            name={['user', 'password']}
            label="Пароль"
            rules={[{ type: 'string', required: true, len: 12 }]}
        >
            <Input />
        </Form.Item>
        <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
            <Button type="primary" htmlType="submit">
                Зарегистрироваться
            </Button>
        </Form.Item>
    </Form>
)

export default FormRegistration
