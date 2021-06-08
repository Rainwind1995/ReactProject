import React from 'react';
import 'antd/dist/antd.css';
import { Layout, Menu, Breadcrumb } from 'antd';
import {Link} from "react-router-dom";
const { Header, Content, Footer } = Layout;


function Defense() {
    return (
        <Layout className="layout" style={{height:700}}>
            <Header>
                <div className="logo" />
                <Menu theme="dark" mode="horizontal" >
                    人工智能安全平台
                </Menu>
            </Header>

            <Content style={{ padding: '0 50px' }}>
                <Breadcrumb style={{ margin: '16px 0' }}>
                    <Breadcrumb.Item>
                        <Link to="/home/" style={{color:'black'}}>
                            Home
                        </Link>

                    </Breadcrumb.Item>
                    <Breadcrumb.Item>List</Breadcrumb.Item>
                    <Breadcrumb.Item>App</Breadcrumb.Item>
                </Breadcrumb>

                <div className="site-layout-content">对抗防御界面</div>
            </Content>
            <Footer style={{ textAlign: 'center' }}>人工智能安全平台 ©2021 Created by 广州大学人工智能与区块链学院</Footer>
        </Layout>

    );
}

export default Defense;
