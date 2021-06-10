import React from 'react';
import 'antd/dist/antd.css';
import {Layout, Menu, Breadcrumb, Row, Col} from 'antd';
import tempImag from '../../assets/images/defense1.png'
import attackImg from '../../assets/images/attack.png'
import detectImg from '../../assets/images/detect.png'
import privacyImg from '../../assets/images/privacy.png'
import {Link} from 'react-router-dom';
import './home.css'


const {Header, Content, Footer} = Layout;

class Home extends React.Component {


    render() {
        return (

            <Layout className='head_Top'>
                <Header className='font_Style'>
                        <p  >人工智能安全平台</p>
                </Header>

                <Content style={{padding: '0 50px'}}>
                    <Breadcrumb style={{margin: '16px 0'}}>
                        <Breadcrumb.Item>Home</Breadcrumb.Item>
                        <Breadcrumb.Item>List</Breadcrumb.Item>
                        <Breadcrumb.Item>App</Breadcrumb.Item>
                    </Breadcrumb>

                    <div style={{marginTop: 100, marginLeft: 20, marginRight: 50}}>
                        <Row gutter={100} justify="center">
                            <Col>
                                <div className='base-style'>
                                    <Link to="/attack/" style={{color: 'black'}}>
                                        <img src={attackImg}/>
                                    </Link>

                                </div>
                                <p style={{fontFamily: "宋体", textAlign: "center"}}>对抗攻击</p>
                            </Col>
                            <Col>
                                <div className='base-style'>
                                    <Link to="/detect/" style={{color: 'black'}}>
                                        <img src={detectImg}/>
                                    </Link>
                                </div>
                                <p style={{fontFamily: "宋体", textAlign: "center"}}>对抗检测</p>
                            </Col>

                            <Col>
                                <div className='base-style'>
                                    <Link to="/defense/" style={{color: 'black'}}>
                                        <img src={tempImag}/>
                                    </Link>
                                </div>
                                <p style={{fontFamily: "宋体", textAlign: "center"}}>对抗防御</p>
                            </Col>
                            <Col>
                                <div className='base-style'>
                                    <Link to="/dataPrivacy/" style={{color: 'black'}}>
                                        <img src={privacyImg}/>
                                    </Link>
                                </div>
                                <p style={{fontFamily: "宋体", textAlign: "center"}}>数据隐私</p>
                            </Col>
                        </Row>

                    </div>


                </Content>

                <Footer  style={{textAlign: 'center'}}>人工智能安全平台 ©2021 Created by 广州大学人工智能与区块链学院</Footer>
            </Layout>

        );
    }
}


export default Home;
