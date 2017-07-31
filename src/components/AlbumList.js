/**
 * Created by nabil on 7/28/2017.
 */
// import libraries for making a component
import React, {Component} from 'react';
import {
    View,
    Text
} from 'react-native';

// make a component
class AlbumList extends Component{
    componentWillMount(){
        console.log('componentWillmount in album');
    }
    render(){
        return (
            <View>
                <Text >Album List!</Text>
            </View>

        );
    }
}
// make the component available to other parts of the app
export default AlbumList;