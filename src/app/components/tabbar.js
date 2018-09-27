import React, { Component } from 'react';
import { TabBar, Icon } from 'antd-mobile';

class TabBarExample extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedTab: 'redTab',
        };
    }
    renderContent(pageText){
        return(
            <h2>Clicked “{pageText}” tab， show “{pageText}” information</h2>
        );
    }
    render() {
        return (
            <div style={{ position: 'fixed', height: '100%', width: '100%', bottom: 0 }}>
                <TabBar
                    unselectedTintColor="#949494"
                    tintColor="#33A3F4"
                    barTintColor="white"
                >
                    <TabBar.Item
                        title="首页"
                        key="home"
                        // icon={<div style={{
                        //     width: '22px',
                        //     height: '22px',
                        //     background: 'url(https://zos.alipayobjects.com/rmsportal/sifuoDUQdAFKAVcFGROC.svg) center center /  21px 21px no-repeat'
                        // }}  
                        // />
                        // }
                        // selectedIcon={<div style={{
                        //     width: '22px',
                        //     height: '22px',
                        //     background: 'url(https://zos.alipayobjects.com/rmsportal/iSrlOTqrKddqbOmlvUfq.svg) center center /  21px 21px no-repeat'
                        // }}
                        // />
                        // }
                        icon={<i className="fa fa-home fa-lg"></i>} 
                        selectedIcon={<i className="fa fa-home fa-lg"></i>} 
                        selected={this.state.selectedTab === 'blueTab'}
                        badge={1}
                        onPress={() => {
                            this.setState({
                                selectedTab: 'blueTab',
                            });
                        }}
                        data-seed="logId"
                    >
                    {this.renderContent('首页')}
                    </TabBar.Item>
                    <TabBar.Item
                        // icon={
                        //     <div style={{
                        //         width: '22px',
                        //         height: '22px',
                        //         background: 'url(https://gw.alipayobjects.com/zos/rmsportal/BTSsmHkPsQSPTktcXyTV.svg) center center /  21px 21px no-repeat'
                        //     }}
                        //     />
                        // }
                        // selectedIcon={
                        //     <div style={{
                        //         width: '22px',
                        //         height: '22px',
                        //         background: 'url(https://gw.alipayobjects.com/zos/rmsportal/ekLecvKBnRazVLXbWOnE.svg) center center /  21px 21px no-repeat'
                        //     }}
                        //     />
                        // }
                        icon={<Icon type="check-circle" />} 
                        selectedIcon={<Icon type="check-circle-o" />} 
                        title="Koubei"
                        key="Koubei"
                        badge={'new'}
                        selected={this.state.selectedTab === 'redTab'}
                        onPress={() => {
                            this.setState({
                                selectedTab: 'redTab',
                            });
                        }}
                        data-seed="logId1"
                    >
                    {this.renderContent('Koubei')}
                    </TabBar.Item>
                    <TabBar.Item
                        // icon={
                        //     <div style={{
                        //         width: '22px',
                        //         height: '22px',
                        //         background: 'url(https://zos.alipayobjects.com/rmsportal/psUFoAMjkCcjqtUCNPxB.svg) center center /  21px 21px no-repeat'
                        //     }}
                        //     />
                        // }
                        // selectedIcon={
                        //     <div style={{
                        //         width: '22px',
                        //         height: '22px',
                        //         background: 'url(https://zos.alipayobjects.com/rmsportal/IIRLrXXrFAhXVdhMWgUI.svg) center center /  21px 21px no-repeat'
                        //     }}
                        //     />
                        // }

                        icon={<Icon type="check-circle" />} 
                        selectedIcon={<Icon type="check-circle-o" />} 
                        title="Friend"
                        key="Friend"
                        dot
                        selected={this.state.selectedTab === 'greenTab'}
                        onPress={() => {
                            this.setState({
                                selectedTab: 'greenTab',
                            });
                        }}
                    >
                    {this.renderContent('Friend')}
                    </TabBar.Item>
                    <TabBar.Item
                        // icon={{ uri: 'https://zos.alipayobjects.com/rmsportal/asJMfBrNqpMMlVpeInPQ.svg' }}
                        // selectedIcon={{ uri: 'https://zos.alipayobjects.com/rmsportal/gjpzzcrPMkhfEqgbYvmN.svg' }}
                        icon={<i className="fa fa-user fa-lg"></i>} 
                        selectedIcon={<i className="fa fa-user fa-lg"></i>} 
                        title="我的"
                        key="my"
                        selected={this.state.selectedTab === 'yellowTab'}
                        onPress={() => {
                            this.setState({
                                selectedTab: 'yellowTab',
                            });
                        }}
                    >
                    {this.renderContent('我的')}
                    </TabBar.Item>
                </TabBar>
            </div>
        );
    }
}
export default TabBarExample;