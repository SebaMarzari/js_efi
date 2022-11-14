import { Button, Form, Input, InputNumber } from 'antd';
import React from 'react';
import { useTranslation } from 'react-i18next';

const Contact = () => {
    const { t } = useTranslation();
    const layout = {
        labelCol: {
            span: 4,
        },
        wrapperCol: {
            span: 16,
        },
    };
    const validateMessages = {
        required: '${label} ' + t("required"),
        types: {
            email: '${label} ' + t("invalidEmail"),
            number: '${label} ' + t("invalidNumber"),
        },
        number: {
            range: '${label} ' + t("between"),
        },
    };
    const onFinish = (values) => {
        console.log(values);
    };
    return (
        <Form {...layout} name="nest-messages" onFinish={onFinish} validateMessages={validateMessages}>
            <Form.Item
                name={['user', 'name']}
                label="Nombre"
                rules={[
                    {
                        required: true,
                    },
                ]}
            >
                <Input />
            </Form.Item>
            <Form.Item
                name={['user', 'email']}
                label="Email"
                rules={[
                    {
                        type: 'email',
                    },
                ]}
            >
                <Input />
            </Form.Item>
            <Form.Item
                name={['user', 'age']}
                label="Edad"
                rules={[
                    {
                        type: 'number',
                        min: 0,
                        max: 99,
                    },
                ]}
            >
                <InputNumber />
            </Form.Item>
            <Form.Item
                name={['user', 'website']}
                label="Sitio Web">
                <Input />
            </Form.Item>
            <Form.Item name={['user', 'introduction']}
                label="Introducción">
                <Input.TextArea />
            </Form.Item>
            <Form.Item
                wrapperCol={{
                    ...layout.wrapperCol,
                    offset: 8,
                }}
            >
                <Button type="primary" htmlType="submit">
                    Enviar
                </Button>
            </Form.Item>
        </Form>
    );
};
export default Contact;