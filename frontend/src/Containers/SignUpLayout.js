import React from 'react';

import { Layout, Form, Menu, Input, Select, Button, Checkbox, Typography } from 'antd'
import { UserOutlined, BulbOutlined, EnterOutlined } from '@ant-design/icons';

const { Sider, Content, Header } = Layout;
const { Text } = Typography;
const { Option } = Select;

const formItemLayout = {
    labelCol: {
        xs: {
            span: 20,
        },
        sm: {
            span: 12,
        },
    },
    wrapperCol: {
        xs: {
            span: 24,
        },
        sm: {
            span: 16,
        },
    },
};
  
const tailFormItemLayout = {
    wrapperCol: {
        xs: {
            span: 24,
            offset: 0,
        },
        sm: {
            span: 16,
            offset: 8,
        },
    },
};

const SignUpLayout = (props) => {
    const [form] = Form.useForm();

    const onFinish = (values) => {
        console.log('Received values of form: ', values);
    };

    const menuList = [{
        "content" : "Sign up",
        "icon" : <UserOutlined />
    }, {
        "content" : "Home page",
        "icon" : <EnterOutlined />
    }]

    return (
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
                        defaultSelectedKeys={['Sign up']}
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
                            backgroundColor: '#f0f0f0',
                            paddingTop: "10%"
                        }}
                    >
                        <Form
                            {...formItemLayout}
                            name="signup"
                            form={form}
                            className="signup-form"
                            onFinish={onFinish}
                            style={{minWidth: '400px'}}
                            scrollToFirstError
                        >
                            <Form.Item
                                name="email"
                                label="E-mail"
                                rules={[{
                                    type: 'email',
                                    message: 'The input is not valid E-mail!',
                                }, {
                                    required: true,
                                    message: 'Please input your E-mail!',
                                }]}
                            >
                                <Input />
                            </Form.Item>
                            
                            <Form.Item
                                name="password"
                                label="Password"
                                rules={[{
                                    required: true,
                                    message: 'Please input your password!',
                                }]}
                                hasFeedback
                            >
                                <Input.Password />
                            </Form.Item>

                            <Form.Item
                                name="confirm"
                                label="Confirm Password"
                                dependencies={['password']}
                                hasFeedback
                                rules={[{
                                    required: true,
                                    message: 'Please confirm your password!',
                                },
                                ({ getFieldValue }) => ({
                                    validator(_, value) {
                                    if (!value || getFieldValue('password') === value) {
                                        return Promise.resolve();
                                    }

                                    return Promise.reject(new Error('The two passwords that you entered do not match!'));
                                    },
                                })]}
                            >
                                <Input.Password />
                            </Form.Item>

                            <Form.Item
                                name="nickname"
                                label="Nickname"
                                tooltip="What do you want others to call you?"
                                rules={[{
                                    required: true,
                                    message: 'Please input your nickname!',
                                    whitespace: true,
                                }]}
                            >
                                <Input />
                            </Form.Item>

                            <Form.Item
                                name="gender"
                                label="Gender"
                                rules={[{
                                    required: true,
                                    message: 'Please select gender!',
                                }]}
                            >
                                <Select placeholder="select your gender">
                                    <Option value="male">Male</Option>
                                    <Option value="female">Female</Option>
                                    <Option value="others">Others</Option>
                                </Select>
                            </Form.Item>

                            <Form.Item
                                name="agreement"
                                valuePropName="checked"
                                rules={[{
                                    validator: (_, value) =>
                                    value ? Promise.resolve() : Promise.reject(new Error('Should accept agreement')),
                                }]}
                                {...tailFormItemLayout}
                            >
                                <Checkbox>
                                    I have read the <a href="">agreement</a>
                                </Checkbox>
                            </Form.Item>

                            <Form.Item {...tailFormItemLayout}>
                                <Button type="primary" htmlType="submit">Register</Button>
                            </Form.Item>
                        </Form>
                    </Content>
                </Layout>
            </Layout>
        </Layout>
    )
}

export default SignUpLayout;