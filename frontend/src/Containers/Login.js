import { Layout, Menu, Typography } from 'antd';
import React from 'react';
import { UserOutlined, QuestionCircleOutlined, BulbOutlined } from '@ant-design/icons';
import './css/Login.css'
import LoginBoard from './LoginBoard';

const { Sider, Header, Content } = Layout;
const { Text, Link } = Typography;

const Login = () => {
    return (
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
                        defaultSelectedKeys={['1']}
                        style={{
                            position: 'absolute',
                            top: '50%',
                            transform: 'translate(0, -50%)'
                        }}
                    >
                        <Menu.Item key="1" icon={<UserOutlined />}>
                            Login
                        </Menu.Item>
                        <Menu.Item key="2" icon={<QuestionCircleOutlined />}>
                            About us
                        </Menu.Item>
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
                        <LoginBoard />
                    </Content>
                </Layout>
            </Layout>
        </Layout>
    )

}

export default Login;