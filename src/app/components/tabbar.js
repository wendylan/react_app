import React, { Component } from 'react';
import { TabBar, Icon } from 'antd-mobile';

class TabBarExample extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedTab: 'redTab',
        };
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
                        title="Life"
                        key="Life"
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
                        icon={<i className="fa fa-home"></i>} 
                        selectedIcon={<Icon type="check-circle-o" />} 
                        selected={this.state.selectedTab === 'blueTab'}
                        badge={1}
                        onPress={() => {
                            this.setState({
                                selectedTab: 'blueTab',
                            });
                        }}
                        data-seed="logId"
                    >
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
                    </TabBar.Item>
                    <TabBar.Item
                        // icon={{ uri: 'https://zos.alipayobjects.com/rmsportal/asJMfBrNqpMMlVpeInPQ.svg' }}
                        // selectedIcon={{ uri: 'https://zos.alipayobjects.com/rmsportal/gjpzzcrPMkhfEqgbYvmN.svg' }}
                        icon={<Icon type="check-circle" />} 
                        selectedIcon={<Icon type="check-circle-o" />} 
                        title="My"
                        key="my"
                        selected={this.state.selectedTab === 'yellowTab'}
                        onPress={() => {
                            this.setState({
                                selectedTab: 'yellowTab',
                            });
                        }}
                    >
                    </TabBar.Item>
                </TabBar>
            </div>
        );
    }
}
export default TabBarExample;