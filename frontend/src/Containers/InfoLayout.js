import React from 'react';

import { Layout, Menu, Typography, Card } from 'antd';
import { UserOutlined, BulbOutlined, EnterOutlined } from '@ant-design/icons';

const { Sider, Content, Header } = Layout;
const { Text } = Typography;
const { Meta } = Card;

const InfoLayout = (props) => {

    const menuList = [{
        "content" : "About us",
        "icon" : <UserOutlined />
    }, {
        "content" : "Login",
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
                        defaultSelectedKeys={['About us']}
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
                        <div className='personal card' style={{
                            display: 'flex',
                            flexDirection: 'row'
                        }}>
                            <Card
                                hoverable
                                style={{ 
                                    width: 240,
                                    margin: '20px',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center'
                                }}
                                cover={<img alt="邵家澤" src="https://scontent-tpe1-1.xx.fbcdn.net/v/t1.6435-9/53679360_1419594178177102_2902566699960107008_n.jpg?_nc_cat=109&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=LhkmtmU9NeEAX9vOTzJ&tn=8L80nO_EwQWF0zlL&_nc_ht=scontent-tpe1-1.xx&oh=00_AT_0sSt7G_yzKEc5q_pLDVUsEZSbeQu8zIxa_MItlkI6lQ&oe=61E56966" />}
                            >
                                <Meta
                                    title={<span style={{ display: 'flex', justifyContent: 'center'}}>邵家澤</span>}
                                    description={[
                                        <a href="https://www.facebook.com/jimmy.shao.714" style={{ display: 'flex', justifyContent: 'center'}}>facebook</a>
                                    ]} 
                                />
                            </Card>
                            <Card
                                hoverable
                                style={{
                                    width: 240,
                                    margin: '20px',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center'
                                }}
                                cover={<img alt="童子瑜" src="https://scontent-tpe1-1.xx.fbcdn.net/v/t1.6435-9/122226979_3593990817360122_2288808592070039658_n.jpg?_nc_cat=110&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=Tt2YALIMmSAAX8SlItC&_nc_ht=scontent-tpe1-1.xx&oh=00_AT--8xwUU6oTyJRHaEm08MM3t5aPc7_hfjnMPidjd9NAUQ&oe=61E49FC9" />}
                            >
                                <Meta
                                    title={<span style={{ display: 'flex', justifyContent: 'center'}}>童子瑜</span>}
                                    description={[
                                        <a href="https://www.facebook.com/profile.php?id=100002477180073"  style={{ display: 'flex', justifyContent: 'center'}}>facebook</a>
                                    ]}
                                />
                            </Card>
                            <Card
                                hoverable
                                style={{
                                    width: 240,
                                    margin: '20px',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center'
                                }}
                                cover={<img alt="陳嘉宏" src="https://scontent-tpe1-1.xx.fbcdn.net/v/t1.6435-9/55783766_2027940973995396_3578963481451298816_n.jpg?_nc_cat=107&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=cx_X-9XEvTcAX9ScRoK&tn=8L80nO_EwQWF0zlL&_nc_ht=scontent-tpe1-1.xx&oh=00_AT-Kk9tSchdthtElIJAwbz8thBaxYZuFDRz9sFz2qUyHZg&oe=61E27A41" />}
                            >
                                <Meta
                                    title={<span style={{ display: 'flex', justifyContent: 'center'}}>陳嘉宏</span>}
                                    description={[
                                    <a href="https://www.facebook.com/profile.php?id=100003385385435" style={{ display: 'flex', justifyContent: 'center'}}>facebook</a>
                                    ]}
                                />
                            </Card>
                        </div>
                    </Content>
                </Layout>
            </Layout>
        </Layout>
    )
}

export default InfoLayout;