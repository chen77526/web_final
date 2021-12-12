import { Layout, Menu } from 'antd';
import React from 'react';
import { UserOutlined, QuestionCircleOutlined } from '@ant-design/icons';
import './css/Login.css'
import LoginBoard from './LoginBoard';

const { Header, Sider, Content } = Layout;

const Login = () => {

    return (
        <Layout style={{height: '100vh'}}>
            <Sider>
                {/* <div className="logo" /> */}
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
                        justifyContent: 'center'
                    }}
                >
                    <LoginBoard />
                </Content>
            </Layout>
        </Layout>
    )

}

export default Login;