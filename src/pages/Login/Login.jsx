import { Button, Form, Input } from 'antd';
import React from 'react';
import './Login.css'
import LoginContext from '../../context/Login/LoginContext';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const { setUser, setIsLogged } = useContext(LoginContext);
    const navigate = useNavigate();

    const onFinish = (values) => {
        setUser(values.username);
        setIsLogged(true);
        navigate('/');
    };
    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };
    return (
        <Form
            name="basic"
            labelCol={{
                span: 3,
            }}
            wrapperCol={{
                span: 16,
            }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
        >
            <Form.Item
                label="Nombre de usuario"
                name="username"
                rules={[
                    {
                        required: true,
                        message: 'Por favor, ingrese su nombre de usuario!',
                    },
                ]}
            >
                <Input />
            </Form.Item>

            <Form.Item
                label="Contraseña"
                name="password"
                rules={[
                    {
                        required: true,
                        message: 'Porfavor, ingrese su contraseña!',
                    },
                ]}
            >
                <Input.Password />
            </Form.Item>

            <Form.Item
                wrapperCol={{
                    offset: 9,
                    span: 16,
                }}
            >
                <Button type="primary" htmlType="submit">
                    Ingresar
                </Button>
            </Form.Item>
        </Form>
    );
};
export default Login;