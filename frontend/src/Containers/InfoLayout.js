import React from 'react';

import { Layout, Menu, Typography } from 'antd';
import { UserOutlined, BulbOutlined, EnterOutlined } from '@ant-design/icons';

const { Sider, Content, Header } = Layout;
const { Text, Link } = Typography;

const InfoLayout = (props) => {

    const menuList = [{
        "content" : "邵家澤",
        "icon" : <UserOutlined />
    }, {
        "content" : "童子瑜",
        "icon" : <UserOutlined />
    }, {
        "content" : "陳嘉宏",
        "icon" : <UserOutlined />
    }, {
        "content" : "Login",
        "icon" : <EnterOutlined />
    }]

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
                        defaultSelectedKeys={['邵家澤']}
                        style={{
                            position: 'absolute',
                            top: '50%',
                            transform: 'translate(0, -50%)'
                        }}
                    >
                        {menuList.map(item => {
                            return <Menu.Item key={item.content} icon={item.icon} onClick={() => props.navigate(`/${item.content}`)} >
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
                        <h1>Hello, world!</h1>
                    </Content>
                </Layout>
            </Layout>
        </Layout>
    )
}

export default InfoLayout;