import React from 'react';

import { Layout, Form, Menu, Input, Button, Checkbox, Typography } from 'antd'
import { UserOutlined, QuestionCircleOutlined, BulbOutlined } from '@ant-design/icons';

const { Sider, Content, Header } = Layout;
const { Text, Link } = Typography;

const LoginLayout = (props) => {
    const onFinish = (values) => {
        console.log('Success:', values);
    };
    
    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    const menuList = [{
        "content" : "Login",
        "icon" : <UserOutlined />
    }, {
        "content" : "About us",
        "icon" : <QuestionCircleOutlined />
    }]
    
    return(
        <Layout style={{height: '100vh'}}>
            <Header style={{ position: 'fixed', zIndex: 1, width: '100%', padding: 0}}>
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
                            return <Menu.Item key={item.content} icon={item.icon} onClick={() => props.navigate(`/${item.content}`)}>
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
                            labelCol={{ span: 8 }}
                            wrapperCol={{ span: 16 }}
                            initialValues={{ remember: false }}
                            onFinish={onFinish}
                            onFinishFailed={onFinishFailed}
                            autoComplete="off"
                        >
                            <Form.Item
                                label="Username"
                                name="username"
                                rules={[{
                                    required: true,
                                    message: 'Please enter your username!',
                                }]}
                            >
                                <Input />
                            </Form.Item>
                            <Form.Item
                                label="Password"
                                name="password"
                                rules={[{
                                    required: true,
                                    message: 'Please enter your password!',
                                }]}
                            >
                                <Input.Password />
                            </Form.Item>
                            <Form.Item
                                name="remember"
                                valuePropName="checked"
                                wrapperCol={{
                                    offset: 8,
                                    span: 16
                                }}
                            >
                                <Checkbox>Remember me</Checkbox>
                            </Form.Item>
                            <Form.Item
                                wrapperCol={{
                                    offset: 8,
                                    span: 16,
                                }}
                            >
                                <Button type="primary" htmlType="submit">
                                    Submit
                                </Button>
                            </Form.Item>
                        </Form>
                    </Content>
                </Layout>
            </Layout>
        </Layout>
    )
}

export default LoginLayout;