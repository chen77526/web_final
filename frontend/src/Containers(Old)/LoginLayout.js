import React from 'react';

import { Layout, Form, Menu, Input, Button, Checkbox, Typography } from 'antd'
import { UserOutlined, QuestionCircleOutlined, BulbOutlined, LockOutlined, EnterOutlined } from '@ant-design/icons';

const { Sider, Content, Header } = Layout;
const { Text } = Typography;

const LoginLayout = (props) => {
    const onFinish = (values) => {
        console.log('Received values of form: ', values);
    };

    const menuList = [{
        "content" : "Login",
        "icon" : <UserOutlined />
    }, {
        "content" : "About us",
        "icon" : <QuestionCircleOutlined />
    }, {
        "content" : "Home page",
        "icon" : <EnterOutlined />
    }]
    
    return(
        <Layout style={{height: '100vh'}}>
            <Header style={{ position: 'fixed', zIndex: 1, width: '100%', padding: 0, cursor: 'pointer'}} onClick={() => props.navigate("/")}>
                <div className="logo" />
                <Menu theme="light" mode="horizontal">
                    <BulbOutlined style={{
                        display: 'flex',
                        fontSize: '24px',
                        color: 'inherited',
                        alignItems: 'center',
                        paddingLeft: '15px'
                    }} />
                    <Text strong style={{ fontSize: '24px', paddingLeft: '15px' }}>NTU JOBS</Text>
                </Menu>
            </Header>
            <Layout>
                <Sider
                    breakpoint="lg"
                    collapsedWidth="0"
                    onBreakpoint={broken => {
                        console.log(broken);
                    }}
                    onCollapse={(collapsed, type) => {
                        console.log(collapsed, type);
                    }}
                >
                    <div className="logo" />
                    <Menu
                        theme="dark"
                        mode="inline"
                        defaultSelectedKeys={['Login']}
                        style={{
                            position: 'absolute',
                            top: '50%',
                            transform: 'translate(0, -50%)'
                        }}
                    >
                        {menuList.map(item => {
                            return <Menu.Item key={item.content} icon={item.icon} onClick={() => props.navigate(`/${item.content === 'Home page' ? '' : item.content}`)}>
                                {item.content}
                            </Menu.Item>
                        })}
                    </Menu>
                </Sider>
                <Layout className="site-layout">
                    <Content
                        className="site-layout-background"
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            backgroundColor: '#f0f0f0'
                        }}
                    >
                        <Form
                            name="login"
                            className="login-form"
                            initialValues={{ remember: false }}
                            onFinish={onFinish}
                            style={{minWidth: '300px', paddingTop: '5%'}}
                        >
                            <Form.Item
                                name="username"
                                rules={[{ required: true, message: 'Please enter your Username(E-mail)!' }]}
                            >
                                <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
                            </Form.Item>
                            <Form.Item
                                name="password"
                                rules={[{ required: true, message: 'Please enter your Password!' }]}
                            >
                                <Input
                                    prefix={<LockOutlined className="site-form-item-icon" />}
                                    type="password"
                                    placeholder="Password"
                                />
                            </Form.Item>
                            <Form.Item>
                                <Form.Item name="remember" valuePropName="checked" noStyle>
                                    <Checkbox>Remember me</Checkbox>
                                </Form.Item>

                                <a className="login-form-forgot" href="" style={{float: 'right'}}>
                                    Forgot password
                                </a>
                            </Form.Item>

                            <Form.Item>
                                <Button type="primary" htmlType="submit" className="login-form-button" style={{width: '100%'}}>
                                    Log in
                                </Button>
                                Or <a href="">register now!</a>
                            </Form.Item>
                        </Form>
                    </Content>
                </Layout>
            </Layout>
        </Layout>
    )
}

export default LoginLayout;