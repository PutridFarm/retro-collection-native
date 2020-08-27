import Drawer from 'react-native-drawer';
import React, {Component} from 'react';
import {Text,View} from 'react-native';
import SideBarContent from './SideBarContent';

class SideBar extends Component{

    constructor(){
        super();
        this.state=[{open: false}];
        this.handleToggle = this.handleToggle.bind(this);
    }

    handleToggle = () => {
      this.setState({open: !this.state.open});
    }

    render()
    {
        const drawerStyles = {
            drawer: { shadowColor: '#FFFFFF', shadowOpacity: 1.0, shadowRadius: 3},
            main: {paddingLeft: 3},
        }

        return (
            <Drawer
                type="overlay"
                open={this.state.open}
                content={<SideBarContent/>}
                openDrawerOffset={100}
                styles={drawerStyles}
                tweenHandler={Drawer.tweenPresets.parallax}
            >
                <View><Text onPress={this.handleToggle}>Drawer</Text></View>
            </Drawer>
        );
    }
}

export default SideBar;
