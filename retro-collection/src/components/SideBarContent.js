import React, {Component} from 'react';
import {Text,View} from 'react-native';


class SideBarContent extends Component{
    render()
    {
        return(
            <View>
                <Text>Order History</Text>
                <Text>Account</Text>
                <Text>Basket</Text>
                <Text>About us</Text>
            </View>
        );
    }
}

export default SideBarContent;
