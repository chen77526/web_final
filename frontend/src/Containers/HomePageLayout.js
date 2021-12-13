import React from 'react';
import styled from "styled-components";

import { Layout, Button, Typography } from 'antd'
import { UserOutlined, UserAddOutlined, BulbOutlined} from '@ant-design/icons';

const { Content } = Layout;
const { Title } = Typography;

const ButtonContainer = styled.div`
    .ant-btn {
        width: 100px;
        margin: 20px;
    }
`;

const HomePageLayout = (props) => {
    return(
        <Layout>
            <Content style={{
                display: 'flex',
                height: '100vh',
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'column'
            }}>
                <div className='logo' style={{display: 'flex', flexDirection: 'row'}}>
                    <BulbOutlined style={{margin:'12px 5px 12px', fontSize: '30px', color: "#00adb5"}} theme="outlined" />
                    <Title style={{color: "#00adb5"}}>NTU JOBS</Title>
                </div>
                <ButtonContainer>
                    <Button type="secondary" icon={<UserOutlined />} onClick={() => props.navigate("/Login")}>
                        Login
                    </Button>
                </ButtonContainer>
                <ButtonContainer>
                    <Button type="secondary" icon={<UserAddOutlined />} onClick={() => props.navigate("/SignUp")}>
                        Sign up
                    </Button>
                </ButtonContainer>
            </Content>
        </Layout>
        
    )
}

export default HomePageLayout;